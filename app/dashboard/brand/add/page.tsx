"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { brandService } from "@/lib/supabaseService";
import { uploadImage } from "@/lib/cloudinary";
import Image from "next/image";

export default function AddBrand() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
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

    try {
      setIsLoading(true);
      const imageUrl = await uploadImage(file);
      setFormData((prev) => ({ ...prev, image_url: imageUrl }));
      toast.success("Image uploaded successfully");
    } catch (error: any) {
      console.error("Error uploading image:", error);
      toast.error(error.message || "Failed to upload image");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.image_url) {
      toast.error("Please upload an image first");
      return;
    }

    try {
      setIsLoading(true);
      await brandService.create(formData);
      toast.success("Brand created successfully");
      router.push("/dashboard/brand");
      router.refresh();
    } catch (error: any) {
      console.error("Error creating brand:", error);
      toast.error(error.message || "Failed to create brand");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-2">Brand Image</label>
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer relative"
          onClick={() =>
            document
              .querySelector<HTMLInputElement>('input[type="file"]')
              ?.click()
          }
        >
          {imagePreview ? (
            <div className="relative w-full h-48 mb-4">
              <Image
                src={imagePreview}
                alt="Preview"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          ) : (
            <>
              <div className="text-gray-600">Click to upload image</div>
              <div className="text-sm text-gray-500">PNG, JPG up to 5MB</div>
            </>
          )}
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            className="hidden"
          />
        </div>
      </div>

      <div>
        <label className="block mb-2">Brand Name (Optional)</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Enter brand name"
        />
      </div>

      <div>
        <label className="block mb-2">Description (Optional)</label>
        <textarea
          value={formData.description}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, description: e.target.value }))
          }
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Enter brand description"
          rows={4}
        />
      </div>

      <div className="flex justify-end gap-3 mt-4">
        <button
          type="button"
          onClick={() => router.push("/dashboard/brand")}
          className="px-4 py-2 text-gray-600 bg-white border rounded-lg"
          disabled={isLoading}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-600 rounded-lg"
          disabled={isLoading}
        >
          {isLoading ? "Adding..." : "Add Brand"}
        </button>
      </div>
    </form>
  );
}
