"use client";
import { PageLayout } from "@/components/dashboard/PageLayout";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BrandList() {
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
          {/* Sample brand card */}
          <div className="p-4 border rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg"></div>
              <div>
                <h3 className="font-medium">Brand Name</h3>
                <p className="text-sm text-gray-500">brand@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
