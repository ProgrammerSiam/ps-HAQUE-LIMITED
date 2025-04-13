"use client";
import { PageLayout } from "@/components/dashboard/PageLayout";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { databaseService } from "@/lib/supabaseService";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { format } from "date-fns";

interface News {
  id: string;
  title: string;
  content: string;
  image_url?: string;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export default function News() {
  const router = useRouter();
  const [news, setNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      setError(null);
      const data = await databaseService.news.getAll();
      setNews(data);
    } catch (error: any) {
      console.error("Error loading news:", error);
      const errorMessage = error.message || "Failed to load news";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this news item?")) return;

    try {
      await databaseService.news.delete(id);
      toast.success("News deleted successfully");
      loadNews();
    } catch (error: any) {
      console.error("Error deleting news:", error);
      toast.error(error.message || "Failed to delete news");
    }
  };

  if (error) {
    return (
      <PageLayout title="Company News">
        <div className="text-center py-12">
          <p className="text-red-500">{error}</p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            onClick={loadNews}
          >
            Retry
          </motion.button>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title="Company News"
      actions={
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          onClick={() => router.push("/dashboard/news/add")}
        >
          Add News
        </motion.button>
      }
    >
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <div className="text-gray-500">Loading news...</div>
        </div>
      ) : news.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No news items found</p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            onClick={() => router.push("/dashboard/news/add")}
          >
            Create First News
          </motion.button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="aspect-video relative">
                <Image
                  src={item.image_url || "/placeholder.jpg"}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-medium text-lg line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2 line-clamp-3">
                  {item.content}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {format(new Date(item.published_at), "MMM d, yyyy")}
                  </span>
                  <div className="flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => router.push(`/dashboard/news/${item.id}`)}
                      className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded"
                    >
                      Edit
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleDelete(item.id)}
                      className="px-3 py-1 text-red-600 hover:bg-red-50 rounded"
                    >
                      Delete
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </PageLayout>
  );
}
