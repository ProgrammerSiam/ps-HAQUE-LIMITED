"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MonitorPlay, ChevronLeft, ChevronRight, Play } from "lucide-react";

export default function TvCommercialSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const commercials = [
    {
      id: 1,
      title: "Misti Cookie | TV Commercial",
      thumbnail: "/placeholder.svg?height=200&width=350",
      videoId: "li1tR-8dwa0",
      category: "commercial",
    },
    {
      id: 2,
      title: "Mr. Cookie | TV Commercial 2017",
      thumbnail: "/placeholder.svg?height=200&width=350",
      videoId: "uo_xul7xJNM",
      category: "commercial",
    },
    {
      id: 3,
      title: "Haque Chocolate Digestive",
      thumbnail: "/placeholder.svg?height=200&width=350",
      videoId: "mTweb7iq2H4",
      category: "commercial",
    },
    {
      id: 4,
      title: "Haque Tarzan Chips",
      thumbnail: "/placeholder.svg?height=200&width=350",
      videoId: "-3G5FyxZ6Nw",
      category: "commercial",
    },
    {
      id: 5,
      title: "Haque Antiseptic Soap",
      thumbnail: "/placeholder.svg?height=200&width=350",
      videoId: "Jd7Oe5Xm1hs",
      category: "commercial",
    },
    {
      id: 6,
      title: "Mr Cookie Dessert Recipe",
      thumbnail: "/placeholder.svg?height=200&width=350",
      videoId: "z6so-jgpIf0",
      category: "recipe",
    },
    {
      id: 7,
      title: "Mr Cookie Dessert Recipe",
      thumbnail: "/placeholder.svg?height=200&width=350",
      videoId: "-zctDK-pH34",
      category: "recipe",
    },
    {
      id: 8,
      title: "Mr Cookie Dessert Recipe",
      thumbnail: "/placeholder.svg?height=200&width=350",
      videoId: "w6MTTr49Jy4",
      category: "recipe",
    },
    {
      id: 9,
      title: "Mr Cookie Dessert Recipe",
      thumbnail: "/placeholder.svg?height=200&width=350",
      videoId: "fGwP2-5QYrc",
      category: "recipe",
    },
    {
      id: 10,
      title: "Mr Cookie Dessert Recipe",
      thumbnail: "/placeholder.svg?height=200&width=350",
      videoId: "iEPAnL0wxpY",
      category: "recipe",
    },
    {
      id: 11,
      title: "Mr Cookie Dessert Recipe",
      thumbnail: "/placeholder.svg?height=200&width=350",
      videoId: "Li43t-OvUg8",
      category: "recipe",
    },
    {
      id: 12,
      title: "Mr Cookie Dessert Recipe",
      thumbnail: "/placeholder.svg?height=200&width=350",
      videoId: "HobHZb2fee8",
      category: "recipe",
    },
    {
      id: 13,
      title: "Mr Cookie Dessert Recipe",
      thumbnail: "/placeholder.svg?height=200&width=350",
      videoId: "8q5UprjM_bk",
      category: "recipe",
    },
    {
      id: 14,
      title: "Mr Cookie Dessert Recipe",
      thumbnail: "/placeholder.svg?height=200&width=350",
      videoId: "npgp7NWifQU",
      category: "recipe",
    },
  ];

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
    { id: "commercial", name: "TV Commercials" },
    { id: "recipe", name: "Recipe Videos" },
  ];

  // State for currently playing video
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentItems.map((commercial) => (
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
                        src={`https://www.youtube.com/embed/${commercial.videoId}?autoplay=1`}
                        title={commercial.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <>
                        <img
                          src={commercial.thumbnail}
                          alt={commercial.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div
                          className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => setPlayingVideo(commercial.id)}
                        >
                          <div className="bg-red-600 rounded-full p-3 shadow-lg">
                            <Play className="size-8 text-white" fill="white" />
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
                      {commercial.category === "commercial"
                        ? "TV Commercial"
                        : "Recipe Video"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

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
