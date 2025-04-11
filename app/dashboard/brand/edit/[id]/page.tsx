"use client";

import { PageLayout } from "@/components/dashboard/PageLayout";
import { uploadImage } from "@/lib/cloudinary";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function EditBrand({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imageUrl: "",
  });

  useEffect(() => {
    // Load brand data
    try {
      const brands = JSON.parse(localStorage.getItem("brands") || "[]");
      const brand = brands.find((b: any) => b.id === params.id);
      if (brand) {
        setFormData(brand);
        setImagePreview(brand.imageUrl);
      } else {
        alert("Brand not found");
        router.push("/dashboard/brand");
      }
    } catch (error) {
      console.error("Error loading brand:", error);
      router.push("/dashboard/brand");
    }
  }, [params.id, router]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
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
      setFormData((prev) => ({ ...prev, imageUrl }));
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.imageUrl) {
      alert("Please upload an image first");
      return;
    }

    try {
      setLoading(true);

      // Update brand data in localStorage
      const brands = JSON.parse(localStorage.getItem("brands") || "[]");
      const updatedBrands = brands.map((brand: any) =>
        brand.id === params.id ? { ...formData, id: params.id } : brand
      );
      localStorage.setItem("brands", JSON.stringify(updatedBrands));

      router.push("/dashboard/brand");
    } catch (error) {
      console.error("Error updating brand:", error);
      alert("Failed to update brand. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout title="Edit Brand">
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4 bg-white p-6 rounded-xl shadow-sm">
            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Brand Image
              </label>
              <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-blue-500">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="cursor-pointer w-full text-center"
                >
                  {imagePreview ? (
                    <div className="relative w-32 h-32 mx-auto">
                      <Image
                        src={imagePreview}
                        alt="Preview"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="text-gray-500">Click to upload image</div>
                      <div className="text-sm text-gray-400">
                        PNG, JPG up to 5MB
                      </div>
                    </div>
                  )}
                </label>
              </div>
            </div>

            {/* Brand Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Brand Name (Optional)
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter brand name"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description (Optional)
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                rows={4}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter brand description"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => router.push("/dashboard/brand")}
              className="px-4 py-2 text-gray-700 bg-white border rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`px-4 py-2 text-white bg-blue-600 rounded-lg ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
              }`}
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </PageLayout>
  );
}
