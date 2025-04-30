"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { uploadImage } from "@/lib/cloudinary";
import { databaseService } from "@/lib/supabaseService";

export default function AddProduct() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [stockStatus, setStockStatus] = useState("in-stock");
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        brand_name: "",
        stock_quantity: 0,
        original_price: 0,
        selling_price: 0,
        description: "",
        image_url: "",
    });

    const categories = ["Biscuits", "Wafers", "Chocolate", "Candy"];

    const handleInputChange = (
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

    const handleImageChange = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Create preview
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result as string);
        };
        reader.readAsDataURL(file);

        try {
            setLoading(true);
            const imageUrl = await uploadImage(file);
            setFormData((prev) => ({ ...prev, image_url: imageUrl }));
            toast.success("Image uploaded successfully");
        } catch (error: unknown) {
            //   console.error("Error uploading image:", error);
            //   toast.error(error.message || "Failed to upload image");
            if (error instanceof Error) {
                console.error("Error uploading image:", error);
                toast.error(error.message || "Failed to upload image");
            } else {
                toast.error("Failed to upload image");
            }
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.image_url) {
            toast.error("Please upload an image first");
            return;
        }

        try {
            setLoading(true);
            await databaseService.products.create({
                ...formData,
                stock_status: stockStatus as "in-stock" | "out-of-stock",
            });
            toast.success("Product created successfully");
            router.push("/dashboard/products");
            router.refresh();
        } catch (error: unknown) {
            // console.error("Error creating product:", error);
            // toast.error(error.message || "Failed to create product");
            if (error instanceof Error) {
               console.error("Error creating product:", error);
               toast.error(error.message || "Failed to create product");
            } else {
                toast.error("Failed to create product");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6"
        >
            <h1 className="text-2xl font-bold mb-6">Add New Product</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Product Image
                        </label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                            <div className="space-y-1 text-center">
                                {imagePreview ? (
                                    <Image
                                        src={imagePreview}
                                        alt="Preview"
                                        width={128}
                                        height={128}
                                        className="mx-auto h-32 w-32 object-cover rounded-lg"
                                    />
                                ) : (
                                    <div className="mx-auto h-32 w-32 text-gray-400">
                                        <svg
                                            className="mx-auto h-12 w-12"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 48 48"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                )}
                                <div className="flex text-sm text-gray-600">
                                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                                        <span>
                                            {loading
                                                ? "Uploading..."
                                                : "Upload a file"}
                                        </span>
                                        <input
                                            type="file"
                                            className="sr-only"
                                            onChange={handleImageChange}
                                            accept="image/*"
                                            disabled={loading}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                className="mt-1 p-3 block w-full rounded-md border border-gray-300/50 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Product title"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Category
                            </label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                                className="mt-1 p-3 block w-full rounded-md border border-gray-300/50 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required
                            >
                                <option value="">Select a category</option>
                                {categories.map((category) => (
                                    <option
                                        key={category}
                                        value={category.toLowerCase()}
                                    >
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Brand Name
                            </label>
                            <input
                                type="text"
                                name="brand_name"
                                value={formData.brand_name}
                                onChange={handleInputChange}
                                className="mt-1 p-3 block w-full rounded-md border border-gray-300/50 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Brand name"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Stock Status
                            </label>
                            <select
                                value={stockStatus}
                                onChange={(e) => setStockStatus(e.target.value)}
                                className="mt-1 p-3 block w-full rounded-md border border-gray-300/50 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required
                            >
                                <option value="in-stock">In Stock</option>
                                <option value="out-of-stock">
                                    Out of Stock
                                </option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Stock Quantity
                            </label>
                            <input
                                type="number"
                                name="stock_quantity"
                                value={formData.stock_quantity}
                                onChange={handleInputChange}
                                min="0"
                                className="mt-1 p-3 block w-full rounded-md border border-gray-300/50 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Enter stock quantity"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Original Price
                            </label>
                            <input
                                type="number"
                                name="original_price"
                                value={formData.original_price}
                                onChange={handleInputChange}
                                className="mt-1 p-3 block w-full rounded-md border border-gray-300/50 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                placeholder="0.00"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Selling Price
                            </label>
                            <input
                                type="number"
                                name="selling_price"
                                value={formData.selling_price}
                                onChange={handleInputChange}
                                className="mt-1 p-3 block w-full rounded-md border border-gray-300/50 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                placeholder="0.00"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            rows={4}
                            className="mt-1 p-3 block w-full rounded-md border border-gray-300/50 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Product description"
                            required
                        />
                    </div>
                </div>

                <div className="flex justify-end space-x-3">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="px-4 py-2 border border-gray-300/50 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                        disabled={loading}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? "Saving..." : "Save Product"}
                    </button>
                </div>
            </form>
        </motion.div>
    );
}
