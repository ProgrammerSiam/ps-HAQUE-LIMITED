"use client";
import { PageLayout } from "@/components/dashboard/PageLayout";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { databaseService } from "@/lib/supabaseService";
import { TvCommercial } from "@/lib/types/database.types";

export default function Commercials() {
  const [commercials, setCommercials] = useState<TvCommercial[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchCommercials = async () => {
      setLoading(true);
      try {
        const data = await databaseService.tv_commercials.getAll();
        setCommercials(data || []);
      } catch (error) {
        setCommercials([]);
      } finally {
        setLoading(false);
      }
    };
    fetchCommercials();
  }, []);

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
      {loading ? (
        <div className="text-center py-10 text-gray-500">
          Loading commercials...
        </div>
      ) : commercials.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          No commercials found.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commercials.map((commercial) => {
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
              </div>
            );
          })}
        </div>
      )}
    </PageLayout>
  );
}
