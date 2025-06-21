"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { databaseService } from "@/lib/supabaseService";
import { TvCommercial } from "@/lib/types/database.types";
import { PageLayout } from "@/components/dashboard/PageLayout";
import { CommercialForm } from "@/components/dashboard/CommercialForm";
import toast from "react-hot-toast";

interface EditCommercialClientProps {
  id: string;
}

export default function EditCommercialClient({
  id,
}: EditCommercialClientProps) {
  const [commercial, setCommercial] = useState<TvCommercial | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchCommercial();
    // eslint-disable-next-line
  }, [id]);

  const fetchCommercial = async () => {
    try {
      const data = await databaseService.tv_commercials.getById(id);
      if (data) {
        setCommercial(data);
      } else {
        toast.error("Commercial not found");
        router.push("/dashboard/commercials");
      }
    } catch {
      toast.error("Failed to fetch commercial");
      router.push("/dashboard/commercials");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async (formData: {
    videoFile: string;
    youtubeUrl: string;
    title: string;
    description: string;
    category: string;
  }) => {
    setSaving(true);
    try {
      const updatedCommercial = {
        title: formData.title,
        description: formData.description,
        video_url: formData.videoFile
          ? formData.videoFile
          : formData.youtubeUrl,
        category: formData.category,
      };
      await databaseService.tv_commercials.update(id, updatedCommercial);
      toast.success("Commercial updated successfully");
      router.push("/dashboard/commercials");
    } catch (error: unknown) {
      toast.error((error as Error)?.message || "Failed to update commercial");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <PageLayout title="Edit Commercial">
        <div className="text-center py-10 text-gray-500">Loading...</div>
      </PageLayout>
    );
  }

  if (!commercial) {
    return null;
  }

  // Map commercial fields to form initial values
  const initialValues = {
    videoFile:
      commercial.video_url &&
      !(
        commercial.video_url.includes("youtube.com") ||
        commercial.video_url.includes("youtu.be")
      )
        ? commercial.video_url
        : "",
    youtubeUrl:
      commercial.video_url &&
      (commercial.video_url.includes("youtube.com") ||
        commercial.video_url.includes("youtu.be"))
        ? commercial.video_url
        : "",
    title: commercial.title || "",
    description: commercial.description || "",
    category: commercial.category || "tv_commercial",
  };

  return (
    <PageLayout title="Edit Commercial">
      <CommercialForm
        mode="edit"
        initialValues={initialValues}
        onSubmit={handleEdit}
        loading={saving}
        onCancel={() => router.push("/dashboard/commercials")}
      />
    </PageLayout>
  );
}
