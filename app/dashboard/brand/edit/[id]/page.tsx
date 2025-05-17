"use client";

import { PageLayout } from "@/components/dashboard/PageLayout";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { databaseService } from "@/lib/supabaseService";
import { uploadImage } from "@/lib/cloudinary";
import Image from "next/image";
import type { Brand } from "@/lib/types/database.types";

export default function EditBrand({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [formData, setFormData] = useState<Partial<Brand>>({
        name: "",
        description: "",
        image_url: "",
    });

    useEffect(() => {
        const loadBrand = async () => {
            try {
                const brand = await databaseService.brands.getById(id);
                if (brand) {
                    setFormData(brand);
                    setImagePreview(brand.image_url);
                }
            } catch (error: unknown) {
                // console.error("Error loading brand:", error);
                // toast.error(error.message || "Failed to load brand");
                if (error instanceof Error) {
                    console.error("Error loading brand:", error);
                    toast.error(error.message || "Failed to load brand");
                } else {
                    toast.error("Failed to load brand");
                }
            } finally {
                setLoading(false);
            }
        };

        loadBrand();
    }, [id]);

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
        setImageFile(file);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            let imageUrl = formData.image_url || "";
            if (imageFile) {
                imageUrl = await uploadImage(imageFile);
            }

            if (!imageUrl) {
                toast.error("Please upload a brand image");
                setSubmitting(false);
                return;
            }

            if (!formData.name) {
                toast.error("Please enter a brand name");
                setSubmitting(false);
                return;
            }

            await databaseService.brands.update(id, {
                name: formData.name,
                description: formData.description || "",
                image_url: imageUrl,
            });

            toast.success("Brand updated successfully");
            router.push("/dashboard/brand");
        } catch (error: unknown) {
            // console.error("Error updating brand:", error);
            // toast.error(error.message || "Failed to update brand");
            if (error instanceof Error) {
                console.error("Error updating brand:", error);
                toast.error(error.message || "Failed to update brand");
            } else {
                console.error("Unknown error:", error);
                toast.error("Failed to update brand");
            }
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return (
            <PageLayout title="Edit Brand">
                <div className="flex items-center justify-center h-64">
                    <div className="text-gray-500">Loading brand...</div>
                </div>
            </PageLayout>
        );
    }

    return (
        <PageLayout title="Edit Brand">
            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
                <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
                    {/* Image Upload */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Brand Image
                        </label>
                        <div className="flex items-center space-x-6">
                            <div className="relative w-32 h-32 bg-gray-100 rounded-lg overflow-hidden">
                                {imagePreview ? (
                                    <Image
                                        src={imagePreview}
                                        alt="Brand image preview"
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-gray-400">
                                        No image
                                    </div>
                                )}
                            </div>
                            <div>
                                <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                                    <span>Upload new image</span>
                                    <input
                                        type="file"
                                        className="sr-only"
                                        onChange={handleImageChange}
                                        accept="image/*"
                                        disabled={submitting}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Brand Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Brand Name
                        </label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            value={formData.description}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    description: e.target.value,
                                })
                            }
                            rows={4}
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                        />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end space-x-4 pt-4">
                        <button
                            type="button"
                            onClick={() => router.push("/dashboard/brand")}
                            className="px-4 py-2 text-gray-600 bg-white border rounded-lg"
                            disabled={submitting}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 text-white bg-blue-600 rounded-lg"
                            disabled={submitting}
                        >
                            {submitting ? "Saving..." : "Save Changes"}
                        </button>
                    </div>
                </div>
            </form>
        </PageLayout>
    );
}

// "use client";

// import { PageLayout } from "@/components/dashboard/PageLayout";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { toast } from "react-hot-toast";
// import { databaseService } from "@/lib/supabaseService";
// import { uploadImage } from "@/lib/cloudinary";
// import Image from "next/image";
// import type { Brand } from "@/lib/types/database.types";

// export default function EditBrand({ params }: { params: { id: string } }) {
//   const router = useRouter();
//   const [loading, setLoading] = useState(true);
//   const [submitting, setSubmitting] = useState(false);
//   const [imageFile, setImageFile] = useState<File | null>(null);
//   const [imagePreview, setImagePreview] = useState<string | null>(null);
//   const [formData, setFormData] = useState<Partial<Brand>>({
//     name: "",
//     description: "",
//     image_url: "",
//   });

//   useEffect(() => {
//     const loadBrand = async () => {
//       try {
//           const brand = await databaseService.brands.getById(params.id);
//           if (brand) {
//               setFormData(brand);
//               setImagePreview(brand.image_url);
//           }
//       } catch (error: unknown) {
//           // console.error("Error loading brand:", error);
//           // toast.error(error.message || "Failed to load brand");
//           if (error instanceof Error) {
//               console.error("Error loading brand:", error);
//               toast.error(error.message || "Failed to load brand");
//           } else {
//               toast.error("Failed to load brand");
//           }
//       } finally {
//           setLoading(false);
//       }
//     };

//     loadBrand();
//   }, [params.id]);

//   const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     // Create preview
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImagePreview(reader.result as string);
//     };
//     reader.readAsDataURL(file);
//     setImageFile(file);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitting(true);

//     try {
//       let imageUrl = formData.image_url || "";
//       if (imageFile) {
//         imageUrl = await uploadImage(imageFile);
//       }

//       if (!imageUrl) {
//         toast.error("Please upload a brand image");
//         setSubmitting(false);
//         return;
//       }

//       if (!formData.name) {
//         toast.error("Please enter a brand name");
//         setSubmitting(false);
//         return;
//       }

//       await databaseService.brands.update(params.id, {
//         name: formData.name,
//         description: formData.description || "",
//         image_url: imageUrl,
//       });

//       toast.success("Brand updated successfully");
//       router.push("/dashboard/brand");
//     } catch (error: unknown) {
//       // console.error("Error updating brand:", error);
//       // toast.error(error.message || "Failed to update brand");
//       if (error instanceof Error) {
//         console.error("Error updating brand:", error);
//         toast.error(error.message || "Failed to update brand");
//       } else {
//         console.error("Unknown error:", error);
//         toast.error("Failed to update brand");
//       }
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   if (loading) {
//     return (
//       <PageLayout title="Edit Brand">
//         <div className="flex items-center justify-center h-64">
//           <div className="text-gray-500">Loading brand...</div>
//         </div>
//       </PageLayout>
//     );
//   }

//   return (
//     <PageLayout title="Edit Brand">
//       <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
//         <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
//           {/* Image Upload */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Brand Image
//             </label>
//             <div className="flex items-center space-x-6">
//               <div className="relative w-32 h-32 bg-gray-100 rounded-lg overflow-hidden">
//                 {imagePreview ? (
//                   <Image
//                     src={imagePreview}
//                     alt="Brand image preview"
//                     fill
//                     className="object-cover"
//                   />
//                 ) : (
//                   <div className="flex items-center justify-center h-full text-gray-400">
//                     No image
//                   </div>
//                 )}
//               </div>
//               <div>
//                 <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
//                   <span>Upload new image</span>
//                   <input
//                     type="file"
//                     className="sr-only"
//                     onChange={handleImageChange}
//                     accept="image/*"
//                     disabled={submitting}
//                   />
//                 </label>
//               </div>
//             </div>
//           </div>

//           {/* Brand Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Brand Name
//             </label>
//             <input
//               type="text"
//               value={formData.name}
//               onChange={(e) =>
//                 setFormData({ ...formData, name: e.target.value })
//               }
//               className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
//               required
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Description
//             </label>
//             <textarea
//               value={formData.description}
//               onChange={(e) =>
//                 setFormData({ ...formData, description: e.target.value })
//               }
//               rows={4}
//               className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
//             />
//           </div>

//           {/* Action Buttons */}
//           <div className="flex justify-end space-x-4 pt-4">
//             <button
//               type="button"
//               onClick={() => router.push("/dashboard/brand")}
//               className="px-4 py-2 text-gray-600 bg-white border rounded-lg"
//               disabled={submitting}
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 text-white bg-blue-600 rounded-lg"
//               disabled={submitting}
//             >
//               {submitting ? "Saving..." : "Save Changes"}
//             </button>
//           </div>
//         </div>
//       </form>
//     </PageLayout>
//   );
// }
