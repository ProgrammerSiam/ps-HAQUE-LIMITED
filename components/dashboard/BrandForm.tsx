"use client";
import { useState, useRef, useEffect } from "react";
import { toast } from "react-hot-toast";
import { uploadImage } from "@/lib/cloudinary";
import Image from "next/image";
import type { Brand } from "@/lib/types/database.types";
import {
  FaPlus,
  FaTimes,
  FaSpinner,
  FaArrowLeft,
  FaRegImage,
} from "react-icons/fa";

interface BrandFormProps {
  mode: "add" | "edit";
  initialData?: Partial<Brand>;
  brandId?: string;
  loading?: boolean;
  onSubmitSuccess?: () => void;
}

export function BrandForm({
  mode,
  initialData = { name: "", description: "", image_url: "" },
  brandId,
  loading: loadingProp = false,
  onSubmitSuccess,
}: BrandFormProps) {
  const [loading, setLoading] = useState(loadingProp);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(
    initialData.image_url || null
  );
  const [imageName, setImageName] = useState<string | null>(null);
  const [imageSize, setImageSize] = useState<number | null>(null);
  const [descCount, setDescCount] = useState(
    initialData.description?.length || 0
  );
  const descMax = 300;
  const [formData, setFormData] = useState<Partial<Brand>>(initialData);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setFormData(initialData);
    setImagePreview(initialData.image_url || null);
    setDescCount(initialData.description?.length || 0);
  }, [initialData]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageName(file.name);
    setImageSize(file.size);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
    setImageFile(file);
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview(null);
    setImageName(null);
    setImageSize(null);
    setFormData({ ...formData, image_url: "" });
  };

  const handleAreaClick = () => {
    if (!loading && fileInputRef.current) fileInputRef.current.click();
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
      if (mode === "add") {
        const { databaseService } = await import("@/lib/supabaseService");
        await databaseService.brands.create({
          name: formData.name,
          description: formData.description || "",
          image_url: imageUrl,
        });
        toast.success("Brand created successfully");
      } else if (mode === "edit" && brandId) {
        const { databaseService } = await import("@/lib/supabaseService");
        await databaseService.brands.update(brandId, {
          name: formData.name,
          description: formData.description || "",
          image_url: imageUrl,
        });
        toast.success("Brand updated successfully");
      }
      if (onSubmitSuccess) onSubmitSuccess();
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Failed to submit brand");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto"
      autoComplete="off"
    >
      <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
        {/* Image Upload */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="brand-image"
          >
            Brand Image <span className="text-red-500">*</span>
          </label>
          <div
            className="relative w-full max-w-2xl h-40 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer transition hover:border-blue-400 bg-gray-50 mx-auto"
            tabIndex={0}
            role="button"
            aria-label="Upload brand image"
            onClick={handleAreaClick}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") && handleAreaClick()
            }
          >
            {loading && (
              <div className="absolute inset-0 bg-white bg-opacity-60 flex items-center justify-center z-10">
                <FaSpinner className="animate-spin text-blue-500 text-2xl" />
              </div>
            )}
            {imagePreview ? (
              <>
                <Image
                  src={imagePreview}
                  alt="Brand image preview"
                  fill
                  className="object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveImage();
                  }}
                  className="absolute top-2 right-2 bg-white bg-opacity-80 rounded-full p-1 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-400 z-20"
                  aria-label="Remove image"
                  tabIndex={0}
                  disabled={loading}
                >
                  <FaTimes className="text-red-500" />
                </button>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center w-full h-full">
                <FaRegImage className="text-4xl text-gray-400 mb-2" />
                <FaPlus className="absolute text-xs text-blue-500 top-8 left-1/2 -translate-x-1/2" />
                <span className="text-blue-600 text-sm font-medium underline cursor-pointer mt-2">
                  Upload a file
                </span>
                <span className="text-xs text-gray-400 mt-1">
                  Accepted: JPG, PNG, GIF. Max size: 2MB.
                </span>
              </div>
            )}
            <input
              id="brand-image"
              ref={fileInputRef}
              type="file"
              className="sr-only"
              onChange={handleImageChange}
              accept="image/*"
              disabled={loading}
              tabIndex={-1}
            />
          </div>
          {imageName && (
            <div className="text-xs text-gray-500 mt-2 text-center">
              {imageName} ({imageSize ? (imageSize / 1024).toFixed(1) : 0} KB)
            </div>
          )}
        </div>
        {/* Brand Name */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="brand-name"
          >
            Brand Name <span className="text-red-500">*</span>
          </label>
          <input
            id="brand-name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
            required
            maxLength={50}
            aria-required="true"
            aria-describedby="brand-name-help"
            disabled={loading}
          />
          <div id="brand-name-help" className="text-xs text-gray-400 mt-1">
            Enter the brand's name (max 50 characters).
          </div>
        </div>
        {/* Description */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="brand-desc"
          >
            Description
          </label>
          <textarea
            id="brand-desc"
            value={formData.description}
            onChange={(e) => {
              setFormData({ ...formData, description: e.target.value });
              setDescCount(e.target.value.length);
            }}
            rows={4}
            maxLength={descMax}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
            aria-describedby="brand-desc-help"
            disabled={loading}
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span id="brand-desc-help">
              Describe the brand (optional, max {descMax} characters).
            </span>
            <span>
              {descCount}/{descMax}
            </span>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 pt-4">
          <button
            type="button"
            className="px-4 py-2 text-gray-600 bg-white border rounded-lg flex items-center gap-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled={loading}
            onClick={onSubmitSuccess}
          >
            <FaArrowLeft /> Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-600 rounded-lg flex items-center gap-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-60"
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? <FaSpinner className="animate-spin" /> : <FaPlus />}{" "}
            {loading
              ? mode === "add"
                ? "Adding..."
                : "Saving..."
              : mode === "add"
                ? "Add Brand"
                : "Save Changes"}
          </button>
        </div>
      </div>
    </form>
  );
}
