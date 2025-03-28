"use client";
import { PageLayout } from "@/components/dashboard/PageLayout";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Plants() {
  return (
    <PageLayout
      title="Our Plants"
      actions={
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          onClick={() => {
            /* Add plant handler */
          }}
        >
          Add Plant
        </motion.button>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Plant cards will go here */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="aspect-video relative mb-4">
            <Image
              src="/placeholder.jpg"
              alt="Plant"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <h3 className="font-medium text-lg">Plant Name</h3>
          <p className="text-gray-600 text-sm">Plant description...</p>
        </div>
      </div>
    </PageLayout>
  );
}
