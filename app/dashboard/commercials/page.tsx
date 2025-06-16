"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { databaseService } from "@/lib/supabaseService";
import { TvCommercial } from "@/lib/types/database.types";
import { PageLayout } from "@/components/dashboard/PageLayout";
import { motion } from "framer-motion";
import { Search, Edit, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import toast from "react-hot-toast";

export default function Commercials() {
  const [commercials, setCommercials] = useState<TvCommercial[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const router = useRouter();

  useEffect(() => {
    fetchCommercials();
  }, []);

  const fetchCommercials = async () => {
    setLoading(true);
    try {
      const data = await databaseService.tv_commercials.getAll();
      setCommercials(data || []);
    } catch {
      setCommercials([]);
      toast.error("Failed to fetch commercials");
    } finally {
      setLoading(false);
    }
  };

  const getYouTubeEmbed = (url?: string) => {
    if (!url) return null;
    const match = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/
    );
    if (match) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
    return null;
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this commercial?")) {
      try {
        await databaseService.tv_commercials.delete(id);
        toast.success("Commercial deleted successfully");
        fetchCommercials();
      } catch {
        toast.error("Failed to delete commercial");
      }
    }
  };

  const handleEdit = (id: string) => {
    router.push(`/dashboard/commercials/edit/${id}`);
  };

  // Filter commercials based on search query
  const filteredCommercials = commercials.filter(
    (commercial) =>
      commercial.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      commercial.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredCommercials.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCommercials.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <PageLayout
      title="TV Commercials"
      actions={
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          onClick={() => router.push("/dashboard/commercials/add")}
        >
          Add Commercial
        </motion.button>
      }
    >
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search commercials..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {loading ? (
        <div className="text-center py-10 text-gray-500">
          Loading commercials...
        </div>
      ) : filteredCommercials.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          {searchQuery
            ? "No commercials found matching your search."
            : "No commercials found."}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentItems.map((commercial) => {
              const isYouTube =
                commercial.video_url?.includes("youtube.com") ||
                commercial.video_url?.includes("youtu.be");
              const embedUrl = isYouTube
                ? getYouTubeEmbed(commercial.video_url)
                : undefined;
              return (
                <div
                  key={commercial.id}
                  className="bg-white rounded-lg shadow-sm p-4 flex flex-col"
                >
                  <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
                    {isYouTube && embedUrl ? (
                      <iframe
                        src={embedUrl}
                        className="w-full h-full rounded-lg"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : commercial.video_url ? (
                      <video
                        src={commercial.video_url}
                        className="w-full h-full rounded-lg"
                        controls
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        No video
                      </div>
                    )}
                  </div>
                  <h3 className="font-medium text-lg line-clamp-1">
                    {commercial.title || "Untitled Commercial"}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {commercial.description || "No description provided."}
                  </p>
                  <span className="text-xs text-gray-400 mt-2">
                    {new Date(commercial.created_at).toLocaleString()}
                  </span>

                  {/* Action Buttons */}
                  <div className="flex justify-end gap-2 mt-4 pt-2 border-t">
                    <button
                      onClick={() => handleEdit(commercial.id)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Edit"
                    >
                      <Edit className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(commercial.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-8 gap-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`flex items-center gap-1 px-4 py-2 rounded-lg ${
                  currentPage === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-gray-700 hover:bg-gray-50 border"
                }`}
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </button>

              <span className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={`flex items-center gap-1 px-4 py-2 rounded-lg ${
                  currentPage === totalPages
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-gray-700 hover:bg-gray-50 border"
                }`}
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </>
      )}
    </PageLayout>
  );
}
