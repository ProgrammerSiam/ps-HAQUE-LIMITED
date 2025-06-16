"use client";
import { use, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PageLayout } from "@/components/dashboard/PageLayout";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { databaseService, type Plant } from "@/lib/supabaseService";

export default function EditPlant({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const [plant, setPlant] = useState<Plant | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    image_url: "",
  });

  useEffect(() => {
    const loadPlant = async () => {
      try {
        const data = await databaseService.plants.getById(id);
        setPlant(data);
        setFormData({
          name: data.name,
          description: data.description,
          category: data.category,
          image_url: data.image_url,
        });
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error loading plant:", error);
          toast.error(error.message || "Failed to load plant");
          router.push("/dashboard/plants");
        } else {
          toast.error("Failed to load plant");
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadPlant();
  }, [id, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsSaving(true);
      await databaseService.plants.update(id, formData);
      toast.success("Plant updated successfully");
      router.push("/dashboard/plants");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error updating plant:", error);
        toast.error(error.message || "Failed to update plant");
      } else {
        toast.error("Failed to update plant");
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
      <PageLayout title="Edit Plant">
        <div className="flex items-center justify-center h-64">
          <div className="text-gray-500">Loading plant details...</div>
        </div>
      </PageLayout>
    );
  }

  if (!plant) {
    return (
      <PageLayout title="Edit Plant">
        <div className="text-center py-12">
          <p className="text-red-500">Plant not found</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Edit Plant">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <div className="aspect-video relative rounded-lg overflow-hidden mb-6">
          <Image
            src={formData.image_url}
            alt={formData.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
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
            htmlFor="image_url"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Image URL
          </label>
          <input
            type="text"
            id="image_url"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
            disabled={isSaving}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </PageLayout>
  );
}
