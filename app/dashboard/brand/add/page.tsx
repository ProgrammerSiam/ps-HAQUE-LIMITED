// "use client";
// import { PageLayout } from "@/components/dashboard/PageLayout";
// import { useRouter } from "next/navigation";
// import { BrandForm } from "@/components/dashboard/BrandForm";

// export default function AddBrand() {
//   const router = useRouter();
//   return (
//     <PageLayout title="Add Brand">
//       <BrandForm
//         mode="add"
//         onSubmitSuccess={() => router.push("/dashboard/brand")}
//       />
//     </PageLayout>
//   );
// }

"use client";

import { PageLayout } from "@/components/dashboard/PageLayout";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { databaseService } from "@/lib/supabaseService";
import { uploadImage } from "@/lib/cloudinary";
import Image from "next/image";
import type { Brand } from "@/lib/types/database.types";

export default function AddBrand() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Brand>>({
    name: "",
    description: "",
    image_url: "",
  });

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
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
    setLoading(true);

    try {
      let imageUrl = formData.image_url || "";
      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
      }

      if (!imageUrl) {
        toast.error("Please upload a brand image");
        setLoading(false);
        return;
      }

      if (!formData.name) {
        toast.error("Please enter a brand name");
        setLoading(false);
        return;
      }

      await databaseService.brands.create({
        name: formData.name,
        description: formData.description || "",
        image_url: imageUrl,
      });

      toast.success("Brand created successfully");
      router.push("/dashboard/brand");
    } catch (error: unknown) {
      // console.error("Error creating brand:", error);
      // toast.error(error.message || "Failed to create brand");
      if (error instanceof Error) {
        console.error("Error creating brand:", error);
        toast.error(error.message);
      } else {
        console.error("Unknown error:", error);
        toast.error("Failed to create brand");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout title="Add Brand">
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
                  <span>Upload image</span>
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

          {/* Brand Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Brand Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
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
                setFormData({ ...formData, description: e.target.value })
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
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-600 rounded-lg"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Brand"}
            </button>
          </div>
        </div>
      </form>
    </PageLayout>
  );
}
