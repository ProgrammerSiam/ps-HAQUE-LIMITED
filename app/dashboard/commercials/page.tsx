"use client";
import { PageLayout } from "@/components/dashboard/PageLayout";
import { motion } from "framer-motion";

export default function Commercials() {
  return (
    <PageLayout
      title="TV Commercials"
      actions={
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          onClick={() => {
            /* Add commercial handler */
          }}
        >
          Add Commercial
        </motion.button>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Video cards will go here */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="aspect-video bg-gray-100 rounded-lg mb-4">
            {/* Video player will go here */}
          </div>
          <h3 className="font-medium text-lg">Commercial Title</h3>
          <p className="text-gray-600 text-sm">Commercial description...</p>
        </div>
      </div>
    </PageLayout>
  );
}
