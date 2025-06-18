"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { uploadImage } from "@/lib/cloudinary";
import { databaseService } from "@/lib/supabaseService";

interface ProductFormProps {
  productId?: string;
}

const categories = ["Biscuits", "Wafers", "Chocolate", "Candy"];

export default function ProductForm({ productId }: ProductFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    brand_name: "",
    original_price: 0,
    selling_price: 0,
    description: "",
    image_url: "",
  });
  const [notFound, setNotFound] = useState(false);

  // Fetch product data if editing
  useEffect(() => {
    if (productId) {
      setLoading(true);
      databaseService.products
        .getById(productId)
        .then((product: any) => {
          if (!product) {
            setNotFound(true);
            return;
          }
          setFormData({
            title: product.title || "",
            category: product.category || "",
            brand_name: product.brand_name || "",
            original_price: product.original_price || 0,
            selling_price: product.selling_price || 0,
            description: product.description || "",
            image_url: product.image_url || "",
          });
          setImagePreview(product.image_url || null);
        })
        .catch(() => toast.error("Failed to load product data"))
        .finally(() => setLoading(false));
    }
  }, [productId]);

  const handleInputChange = (
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
      setFormData((prev) => ({ ...prev, image_url: imageUrl }));
      toast.success("Image uploaded successfully");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error uploading image:", error);
        toast.error(error.message || "Failed to upload image");
      } else {
        toast.error("Failed to upload image");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.image_url) {
      toast.error("Please upload an image first");
      return;
    }

    try {
      setLoading(true);
      if (productId) {
        // Update product
        await databaseService.products.update(productId, formData);
        toast.success("Product updated successfully");
      } else {
        // Create product
        await databaseService.products.create(formData);
        toast.success("Product created successfully");
      }
      router.push("/dashboard/products");
      router.refresh();
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error saving product:", error);
        toast.error(error.message || "Failed to save product");
      } else {
        toast.error("Failed to save product");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6 relative">
      {loading && (
        <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-10">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        </div>
      )}
      <h1 className="text-2xl font-bold mb-6">
        {productId ? "Edit Product" : "Add New Product"}
      </h1>
      {notFound ? (
        <div className="text-center text-gray-500 py-12">
          Product not found.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Product Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                <div className="space-y-1 text-center">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      width={128}
                      height={128}
                      className="mx-auto h-32 w-32 object-cover rounded-lg"
                    />
                  ) : (
                    <div className="mx-auto h-32 w-32 text-gray-400">
                      <svg
                        className="mx-auto h-12 w-12"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                      <span>{loading ? "Uploading..." : "Upload a file"}</span>
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
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="mt-1 p-3 block w-full rounded-md border border-gray-300/50 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Product title (e.g. Bourbon)"
                  required
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="mt-1 p-3 block w-full rounded-md border border-gray-300/50 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                  disabled={loading}
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category.toLowerCase()}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Brand Name
                </label>
                <input
                  type="text"
                  name="brand_name"
                  value={formData.brand_name}
                  onChange={handleInputChange}
                  className="mt-1 p-3 block w-full rounded-md border border-gray-300/50 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Brand name (e.g. Haque)"
                  required
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Original Price
                </label>
                <input
                  type="number"
                  name="original_price"
                  value={formData.original_price}
                  onChange={handleInputChange}
                  className="mt-1 p-3 block w-full rounded-md border border-gray-300/50 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="0.00"
                  required
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Selling Price
                </label>
                <input
                  type="number"
                  name="selling_price"
                  value={formData.selling_price}
                  onChange={handleInputChange}
                  className="mt-1 p-3 block w-full rounded-md border border-gray-300/50 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="0.00"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="mt-1 p-3 block w-full rounded-md border border-gray-300/50 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Product description (e.g. A delicious chocolate biscuit...)"
                required
                disabled={loading}
              />
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-4 py-2 border border-gray-300/50 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
              disabled={loading}
            >
              {loading && (
                <span className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
              )}
              {loading
                ? productId
                  ? "Updating..."
                  : "Saving..."
                : productId
                  ? "Update Product"
                  : "Save Product"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
