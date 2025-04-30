"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PageLayout } from "@/components/dashboard/PageLayout";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { databaseService, type Product } from "@/lib/supabaseService";
import { motion } from "framer-motion";

export default function EditProduct({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    brand_name: "",
    stock_status: "in-stock" as "in-stock" | "out-of-stock",
    stock_quantity: 0,
    original_price: 0,
    selling_price: 0,
    image_url: "",
  });

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await databaseService.products.getById(params.id);
        setProduct(data);
        setFormData({
          title: data.title,
          description: data.description,
          category: data.category,
          brand_name: data.brand_name,
          stock_status: data.stock_status,
          stock_quantity: data.stock_quantity,
          original_price: data.original_price,
          selling_price: data.selling_price,
          image_url: data.image_url,
        });
      } catch (error: unknown) {
        // console.error("Error loading product:", error);
        // toast.error(error.message || "Failed to load product");
        // router.push("/dashboard/plants");
        if (error instanceof Error) {
           console.error("Error loading product:", error);
           toast.error(error.message || "Failed to load product");
           router.push("/dashboard/plants");
        } else {
          toast.error("Failed to load product");
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadProduct();
  }, [params.id, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsSaving(true);
      await databaseService.products.update(params.id, formData);
      toast.success("Product updated successfully");
      router.push("/dashboard/plants");
    } catch (error: unknown) {
      // console.error("Error updating product:", error);
      // toast.error(error.message || "Failed to update product");
      if (error instanceof Error) {
        console.error("Error updating product:", error);
        toast.error(error.message || "Failed to update product");
      } else {
        toast.error("Failed to update product");
      }
    } finally {
      setIsSaving(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (isLoading) {
    return (
      <PageLayout title="Edit Product">
        <div className="flex items-center justify-center h-64">
          <div className="text-gray-500">Loading product details...</div>
        </div>
      </PageLayout>
    );
  }

  if (!product) {
    return (
      <PageLayout title="Edit Product">
        <div className="text-center py-12">
          <p className="text-red-500">Product not found</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Edit Product">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <div className="aspect-video relative rounded-lg overflow-hidden mb-6">
          <Image
            src={formData.image_url}
            alt={formData.title}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="brand_name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Brand Name
          </label>
          <input
            type="text"
            id="brand_name"
            name="brand_name"
            value={formData.brand_name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="stock_status"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Stock Status
          </label>
          <select
            id="stock_status"
            name="stock_status"
            value={formData.stock_status}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="in-stock">In Stock</option>
            <option value="out-of-stock">Out of Stock</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="stock_quantity"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Stock Quantity
          </label>
          <input
            type="number"
            id="stock_quantity"
            name="stock_quantity"
            value={formData.stock_quantity}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="original_price"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Original Price
          </label>
          <input
            type="number"
            id="original_price"
            name="original_price"
            value={formData.original_price}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="selling_price"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Selling Price
          </label>
          <input
            type="number"
            id="selling_price"
            name="selling_price"
            value={formData.selling_price}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="image_url"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Image URL
          </label>
          <input
            type="url"
            id="image_url"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-end space-x-4">
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push("/dashboard/plants")}
            className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            Cancel
          </motion.button>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSaving}
            className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {isSaving ? "Saving..." : "Save Changes"}
          </motion.button>
        </div>
      </form>
    </PageLayout>
  );
}
