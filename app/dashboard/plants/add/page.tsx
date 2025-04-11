"use client";
import { useState } from "react";
import { PageLayout } from "@/components/dashboard/PageLayout";
import axios from "axios";

export default function AddPlant() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) return;

    const formData = new FormData();
    formData.append("file", image);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);

    try {
      const response = await fetch("/api/plants", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        console.log("Plant added successfully:", result.plant);
        // Optionally, redirect or update UI
      } else {
        console.error("Error adding plant:", result.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
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
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-auto rounded-lg"
            />
          ) : (
            <>
              <p className="text-gray-500">Click to upload image</p>
              <p className="text-xs text-gray-400">PNG, JPG up to 5MB</p>
            </>
          )}
          <input
            type="file"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name (Optional)
          </label>
          <input
            type="text"
            placeholder="Enter plant name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description (Optional)
          </label>
          <textarea
            placeholder="Enter plant description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
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
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-600 rounded-md"
          >
            Add Plant
          </button>
        </div>
      </form>
    </PageLayout>
  );
}
