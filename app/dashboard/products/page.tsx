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

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await databaseService.products.getAll();
      setProducts(data);
    } catch (error: unknown) {
      // console.error("Error loading products:", error);
      // toast.error(error.message || "Failed to load products");
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

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await databaseService.products.delete(id);
        toast.success("Product deleted successfully");
      } catch (error: unknown) {
        // console.error("Error deleting product:", error);
        // toast.error(error.message || "Failed to delete product");
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
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
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        product.stock_status === "in-stock"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {product.stock_status === "in-stock"
                        ? "In Stock"
                        : "Out of Stock"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <p className="text-sm text-gray-600">
                      Stock: {product.stock_quantity}
                    </p>
                    <p className="text-sm text-gray-600">
                      Brand: {product.brand_name}
                    </p>
                  </div>
                </div>
                <div className="flex justify-end space-x-2 pt-2">
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
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
