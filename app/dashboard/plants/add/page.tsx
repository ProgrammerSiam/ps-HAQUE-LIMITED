"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PageLayout } from "@/components/dashboard/PageLayout";
import { toast } from "react-hot-toast";
import { uploadImage } from "@/lib/cloudinary";
import Image from "next/image";

export default function AddPlant() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
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
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.image_url) {
      toast.error("Please upload an image first");
      return;
    }

    if (!formData.name || !formData.category) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch("/api/plants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Plant added successfully");
        router.push("/dashboard/plants");
        router.refresh();
      } else {
        throw new Error(result.error || "Failed to add plant");
      }
    } catch (error: unknown) {
      // console.error("Error adding plant:", error);
      // toast.error(error.message || "Failed to add plant");
      if (error instanceof Error) {
        console.error("Error adding plant:", error);
        toast.error(error.message || "Failed to add plant");
      } else {
        toast.error("Failed to add plant");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageLayout title="Add Plant">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 rounded-lg shadow-md"
      >
        <div className="relative border-dashed border-2 border-gray-300 rounded-lg p-4 text-center">
          {imagePreview ? (
            <div className="relative aspect-video w-full">
              <Image
                src={imagePreview}
                alt="Preview"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ) : (
            <>
              <p className="text-gray-500">Click to upload image</p>
              <p className="text-xs text-gray-400">PNG, JPG up to 5MB</p>
            </>
          )}
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            disabled={isLoading}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter plant name"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
            disabled={isLoading}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            placeholder="Enter plant description"
            value={formData.description}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, description: e.target.value }))
            }
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows={4}
            disabled={isLoading}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.category}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, category: e.target.value }))
            }
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
            disabled={isLoading}
          >
            <option value="">Select a category</option>
            <option value="Cookie Plant">Cookie Plant</option>
            <option value="Haas Hecorona">Haas Hecorona</option>
            <option value="Chips Plant">Chips Plant</option>
            <option value="Wafer Plants">Wafer Plants</option>
            <option value="Packet Plant">Packet Plant</option>
          </select>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
            disabled={isLoading}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? "Adding..." : "Add Plant"}
          </button>
        </div>
      </form>
    </PageLayout>
  );
}
