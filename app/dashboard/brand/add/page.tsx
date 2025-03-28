"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/dashboard/PageLayout";
import Image from "next/image";

export default function AddBrand() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);

  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setImagePreview(reader.result as string);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  // const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     setVideoPreview(URL.createObjectURL(file));
  //   }
  // };

  // const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setThumbnailPreview(reader.result as string);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  return (
    <PageLayout title="Add New Brand">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6">
        <form className="space-y-6">
          {/* Form fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Brand Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter brand name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                rows={4}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter brand description"
              />
            </div>
          </div>

          {/* Image Preview */}
          {imagePreview && (
            <Image
              src={imagePreview || "/placeholder.jpg"}
              alt="Preview"
              width={128}
              height={128}
              className="mx-auto object-cover rounded-lg"
            />
          )}

          {/* Video Preview */}
          {videoPreview && (
            <video
              src={videoPreview}
              controls
              className="w-full h-32 object-cover"
            />
          )}

          {/* Thumbnail Preview */}
          {thumbnailPreview && (
            <Image
              src={thumbnailPreview}
              alt="Thumbnail Preview"
              width={128}
              height={128}
              className="mx-auto object-cover"
            />
          )}

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3 pt-4">
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </motion.button>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Add Brand
            </motion.button>
          </div>
        </form>
      </div>
    </PageLayout>
  );
}
