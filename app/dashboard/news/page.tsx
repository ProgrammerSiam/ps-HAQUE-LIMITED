"use client";
import { PageLayout } from "@/components/dashboard/PageLayout";
import { motion } from "framer-motion";

export default function News() {
  return (
    <PageLayout
      title="Company News"
      actions={
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          onClick={() => {
            /* Add news handler */
          }}
        >
          Add News
        </motion.button>
      }
    >
      <div className="space-y-6">
        {/* News items will go here */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-lg">News Title</h3>
              <p className="text-gray-600 mt-2">News content...</p>
            </div>
            <span className="text-sm text-gray-500">Date</span>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
