"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MonitorPlay, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { TvCommercial } from "@/lib/types/database.types";

const getYouTubeVideoId = (url?: string) => {
  if (!url) return null;
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\\n?#]+)/
  );
  return match ? match[1] : null;
};

export default function TvCommercialSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [commercials, setCommercials] = useState<TvCommercial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommercials = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/commercials");
        const data = await response.json();
        setCommercials(data);
      } catch (error) {
        console.error("Failed to fetch commercials", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCommercials();
  }, []);

  // Filter videos based on active category
  const filteredCommercials =
    activeCategory === "all"
      ? commercials
      : commercials.filter(
          (commercial) => commercial.category === activeCategory
        );

  // Calculate pagination
  const totalPages = Math.ceil(filteredCommercials.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCommercials.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Handle page navigation
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const categories = [
    { id: "all", name: "All Videos" },
    { id: "tv_commercial", name: "TV Commercials" },
    { id: "recipe_video", name: "Recipe Videos" },
  ];

  // State for currently playing video
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  return (
    <section
      id="tvCommercial"
      className="py-36 bg-gradient-to-b from-white to-muted/30"
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-red-100">
            <MonitorPlay className="size-8" color="#c81010" />
          </div>
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Video Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our collection of TV commercials and delicious recipe
              videos
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setCurrentPage(1);
                }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-red-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="mx-auto max-w-6xl">
          {loading ? (
            <div className="text-center py-10 text-gray-500">Loading...</div>
          ) : currentItems.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              No videos found in this category.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentItems.map((commercial) => {
                const videoId = getYouTubeVideoId(commercial.video_url);
                const thumbnailUrl = videoId
                  ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                  : "/placeholder.svg?height=200&width=350";

                return (
                  <Card
                    key={commercial.id}
                    className="overflow-hidden border hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="p-0">
                      <div className="group relative aspect-video w-full overflow-hidden bg-muted">
                        {playingVideo === commercial.id ? (
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                            title={commercial.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          ></iframe>
                        ) : (
                          <>
                            <img
                              src={thumbnailUrl}
                              alt={commercial.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div
                              className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"
                              onClick={() => setPlayingVideo(commercial.id)}
                            >
                              <div className="bg-red-600 rounded-full p-3 shadow-lg">
                                <Play
                                  className="size-8 text-white"
                                  fill="white"
                                />
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-gray-900 line-clamp-1">
                          {commercial.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {commercial.category === "tv_commercial"
                            ? "TV Commercial"
                            : commercial.category === "recipe_video"
                              ? "Recipe Video"
                              : "Video"}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-10 gap-2">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`flex items-center gap-1 px-4 py-2 rounded-md ${
                  currentPage === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-gray-700 hover:bg-gray-100 border"
                }`}
              >
                <ChevronLeft className="size-4" />
                <span>Previous</span>
              </button>

              <div className="px-4 py-2 text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </div>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-1 px-4 py-2 rounded-md ${
                  currentPage === totalPages
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-gray-700 hover:bg-gray-100 border"
                }`}
              >
                <span>Next</span>
                <ChevronRight className="size-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
