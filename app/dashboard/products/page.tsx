"use client";
import { PageLayout } from "@/components/dashboard/PageLayout";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { databaseService } from "@/lib/supabaseService";
import { useRealtimeSubscription } from "@/hooks/useRealtimeSubscription";
import type { Product } from "@/lib/types/database.types";
import { toast } from "react-hot-toast";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize] = useState(6); // 6 products per page
  const [category, setCategory] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await databaseService.products.getAll();
      setProducts(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error loading products:", error);
        toast.error(error.message || "Failed to load products");
      } else {
        toast.error("Failed to load products");
      }
    } finally {
      setLoading(false);
    }
  };

  // Set up real-time subscriptions
  useRealtimeSubscription<Product>({
    table: "products",
    onInsert: (newProduct) => {
      setProducts((prev) => [newProduct, ...prev]);
      toast.success("New product added");
    },
    onUpdate: (updatedProduct) => {
      setProducts((prev) =>
        prev.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        )
      );
      toast.success("Product updated");
    },
    onDelete: (deletedProduct) => {
      setProducts((prev) =>
        prev.filter((product) => product.id !== deletedProduct.id)
      );
      toast.success("Product deleted");
    },
  });

  const categories = Array.from(new Set(products.map((p) => p.category)));

  const filteredProducts = products.filter(
    (product) =>
      (category === "" || product.category === category) &&
      (product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.brand_name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await databaseService.products.delete(id);
        toast.success("Product deleted successfully");
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error deleting product:", error);
          toast.error(error.message || "Failed to delete product");
        } else {
          toast.error("Failed to delete product");
        }
      }
    }
  };

  if (loading) {
    return (
      <PageLayout title="All Products">
        <div className="flex items-center justify-center h-64">
          <div className="text-gray-500">Loading products...</div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title="All Products"
      actions={
        <Link href="/dashboard/products/add">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Add Product
          </motion.button>
        </Link>
      }
    >
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="border border-gray-300 rounded px-3 py-2 w-full max-w-xs"
          />
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setPage(1);
            }}
            className="border border-gray-300 rounded px-3 py-2 w-full max-w-xs"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: pageSize }).map((_, i) => (
                <div
                  key={i}
                  className="p-4 border rounded-lg animate-pulse bg-gray-50"
                >
                  <div className="w-full h-48 bg-gray-200 rounded mb-4" />
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-1/3 mb-4" />
                  <div className="flex gap-2">
                    <div className="h-8 w-16 bg-gray-200 rounded" />
                    <div className="h-8 w-16 bg-gray-200 rounded" />
                  </div>
                </div>
              ))
            : paginatedProducts.map((product) => (
                <div
                  key={product.id}
                  className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="space-y-4">
                    <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src={product.image_url}
                        alt={product.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">{product.title}</h3>
                      <p className="text-sm text-gray-500 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            ${product.selling_price}
                          </p>
                          {product.original_price > product.selling_price && (
                            <p className="text-xs text-gray-500 line-through">
                              ${product.original_price}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <Link href={`/dashboard/products/edit/${product.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-3 py-1 text-sm text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
                      >
                        Edit
                      </motion.button>
                    </Link>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleDelete(product.id)}
                      className="px-3 py-1 text-sm text-red-600 border border-red-600 rounded hover:bg-red-50"
                    >
                      Delete
                    </motion.button>
                  </div>
                </div>
              ))}
        </div>
        {/* Pagination Controls */}
        {!loading && totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-1 rounded border bg-gray-100 disabled:opacity-50"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-3 py-1 rounded border ${
                  page === i + 1
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-3 py-1 rounded border bg-gray-100 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
