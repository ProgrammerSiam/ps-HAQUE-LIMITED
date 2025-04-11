"use client";
import { PageLayout } from "@/components/dashboard/PageLayout";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Brand {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export default function BrandList() {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    // Load brands from localStorage
    const loadBrands = () => {
      try {
        const savedBrands = localStorage.getItem("brands");
        if (savedBrands) {
          setBrands(JSON.parse(savedBrands));
        }
      } catch (error) {
        console.error("Error loading brands:", error);
      }
    };

    loadBrands();

    // Add event listener for storage changes
    window.addEventListener("storage", loadBrands);
    return () => window.removeEventListener("storage", loadBrands);
  }, []);

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this brand?")) {
      try {
        const updatedBrands = brands.filter((brand) => brand.id !== id);
        localStorage.setItem("brands", JSON.stringify(updatedBrands));
        setBrands(updatedBrands);
      } catch (error) {
        console.error("Error deleting brand:", error);
        alert("Failed to delete brand. Please try again.");
      }
    }
  };

  return (
    <PageLayout
      title="All Brands"
      actions={
        <Link href="/dashboard/brand/add">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Add Brand
          </motion.button>
        </Link>
      }
    >
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="p-4 border rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={brand.imageUrl}
                      alt={brand.name || "Brand image"}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">
                      {brand.name || "Unnamed Brand"}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {brand.description || "No description"}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-2 pt-2">
                  <Link href={`/dashboard/brand/edit/${brand.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-3 py-1 text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
                    >
                      Edit
                    </motion.button>
                  </Link>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleDelete(brand.id)}
                    className="px-3 py-1 text-red-600 border border-red-600 rounded hover:bg-red-50"
                  >
                    Delete
                  </motion.button>
                </div>
              </div>
            </div>
          ))}

          {brands.length === 0 && (
            <div className="col-span-full text-center py-8 text-gray-500">
              No brands added yet. Click "Add Brand" to get started.
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
