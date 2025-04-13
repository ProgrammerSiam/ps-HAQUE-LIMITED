"use client";
import { PageLayout } from "@/components/dashboard/PageLayout";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { databaseService } from "@/lib/supabaseService";
import { useRealtimeSubscription } from "@/hooks/useRealtimeSubscription";
import type { Brand } from "@/lib/types/database.types";
import { toast } from "react-hot-toast";

export default function BrandList() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);

  // Load initial data
  useEffect(() => {
    const loadBrands = async () => {
      try {
        const data = await databaseService.brands.getAll();
        setBrands(data);
      } catch (error: any) {
        console.error("Error loading brands:", error);
        toast.error(error.message || "Failed to load brands");
      } finally {
        setLoading(false);
      }
    };

    loadBrands();
  }, []);

  // Set up real-time subscriptions
  useRealtimeSubscription<Brand>({
    table: "brands",
    onInsert: (newBrand) => {
      setBrands((prev) => [newBrand, ...prev]);
      toast.success("New brand added");
    },
    onUpdate: (updatedBrand) => {
      setBrands((prev) =>
        prev.map((brand) =>
          brand.id === updatedBrand.id ? updatedBrand : brand
        )
      );
      toast.success("Brand updated");
    },
    onDelete: (deletedBrand) => {
      setBrands((prev) => prev.filter((brand) => brand.id !== deletedBrand.id));
      toast.success("Brand deleted");
    },
  });

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this brand?")) {
      try {
        await databaseService.brands.delete(id);
        toast.success("Brand deleted successfully");
      } catch (error: any) {
        console.error("Error deleting brand:", error);
        toast.error(error.message || "Failed to delete brand");
      }
    }
  };

  if (loading) {
    return (
      <PageLayout title="All Brands">
        <div className="flex items-center justify-center h-64">
          <div className="text-gray-500">Loading brands...</div>
        </div>
      </PageLayout>
    );
  }

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
                    {brand.logo_url && (
                      <Image
                        src={brand.logo_url}
                        alt={brand.name}
                        fill
                        className="object-cover"
                      />
                    )}
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
