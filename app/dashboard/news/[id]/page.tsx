"use client";

import { use, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/dashboard/PageLayout";
import { useRouter } from "next/navigation";
import { uploadImage } from "@/lib/cloudinary";
import { databaseService } from "@/lib/supabaseService";
import { toast } from "react-hot-toast";
import Image from "next/image";

interface News {
    id: string;
    title: string;
    content: string;
    image_url?: string;
    publication_date: string;
    created_at: string;
    updated_at: string;
}

export default function EditNews({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = use(params);
    const router = useRouter();
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [formData, setFormData] = useState<
        Omit<News, "id" | "created_at" | "updated_at">
    >({
        title: "",
        content: "",
        image_url: "",
        publication_date: new Date().toISOString(),
    });

    useEffect(() => {
        const loadNews = async () => {
            try {
                const data = await databaseService.news.getById(id);
                if (data) {
                    setFormData({
                        title: data.title,
                        content: data.content,
                        image_url: data.image_url || "",
                        publication_date: data.publication_date,
                    });
                    setImagePreview(data.image_url || null);
                }
            } catch (error: unknown) {
                // console.error("Error loading news:", error);
                // toast.error(error.message || "Failed to load news");
                // router.push("/dashboard/news");
                if (error instanceof Error) {
                    console.error("Error loading news:", error);
                    toast.error(error.message || "Failed to load news");
                    router.push("/dashboard/news");
                } else {
                    toast.error("Failed to load news");
                }
            } finally {
                setIsLoading(false);
            }
        };

        loadNews();
    }, [id, router]);

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
            setIsSaving(true);
            const imageUrl = await uploadImage(file);
            setFormData((prev) => ({ ...prev, image_url: imageUrl }));
            toast.success("Image uploaded successfully");
        } catch (error: unknown) {
            // console.error("Error uploading image:", error);
            // toast.error(error.message || "Failed to upload image");
            if (error instanceof Error) {
                console.error("Error uploading image:", error);
                toast.error(error.message || "Failed to upload image");
            } else {
                toast.error("Failed to upload image");
            }
        } finally {
            setIsSaving(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.image_url) {
            toast.error("Please upload an image first");
            return;
        }

        try {
            setIsSaving(true);
            await databaseService.news.update(id, formData);
            toast.success("News updated successfully");
            router.push("/dashboard/news");
        } catch (error: unknown) {
            // console.error("Error updating news:", error);
            // toast.error(error.message || "Failed to update news");
            if (error instanceof Error) {
                console.error("Error updating news:", error);
                toast.error(error.message || "Failed to update news");
            } else {
                toast.error("Failed to update news");
            }
        } finally {
            setIsSaving(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    if (isLoading) {
        return (
            <PageLayout title="Edit News">
                <div className="flex items-center justify-center h-64">
                    <div className="text-gray-500">Loading news details...</div>
                </div>
            </PageLayout>
        );
    }

    return (
        <PageLayout title="Edit News">
            <div className="max-w-4xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Image Upload */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            News Image
                        </label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                            {imagePreview ? (
                                <div className="space-y-2 text-center">
                                    <div className="relative h-32 w-32 mx-auto">
                                        <Image
                                            src={imagePreview}
                                            alt="Preview"
                                            fill
                                            className="object-cover rounded-lg"
                                        />
                                    </div>
                                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                                        <span>Change image</span>
                                        <input
                                            type="file"
                                            className="sr-only"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            disabled={isSaving}
                                        />
                                    </label>
                                </div>
                            ) : (
                                <div className="space-y-2 text-center">
                                    <div className="mx-auto h-32 w-32 flex items-center justify-center">
                                        <svg
                                            className="h-12 w-12 text-gray-400"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 48 48"
                                        >
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div className="flex text-sm text-gray-600 justify-center">
                                        <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                                            <span>Upload image</span>
                                            <input
                                                type="file"
                                                className="sr-only"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                                disabled={isSaving}
                                            />
                                        </label>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* News Details */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                                className="mt-1 p-3 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Enter news title"
                                disabled={isSaving}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Publication Date
                            </label>
                            <input
                                type="date"
                                name="publication_date"
                                value={formData.publication_date}
                                onChange={handleChange}
                                required
                                className="mt-1 p-3 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                disabled={isSaving}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Content
                            </label>
                            <textarea
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                required
                                rows={6}
                                className="mt-1 p-3 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Enter news content"
                                disabled={isSaving}
                            />
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end space-x-4">
                        <motion.button
                            type="button"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => router.push("/dashboard/news")}
                            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                            disabled={isSaving}
                        >
                            Cancel
                        </motion.button>
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                            disabled={isSaving}
                        >
                            {isSaving ? "Saving..." : "Save Changes"}
                        </motion.button>
                    </div>
                </form>
            </div>
        </PageLayout>
    );
}
