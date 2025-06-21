"use client";
import { useRouter } from "next/navigation";
import { PageLayout } from "@/components/dashboard/PageLayout";
import { CommercialForm } from "@/components/dashboard/CommercialForm";
import { databaseService } from "@/lib/supabaseService";
import toast from "react-hot-toast";
import { useState } from "react";

export default function AddCommercial() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleAdd = async (formData: {
    videoFile: string;
    youtubeUrl: string;
    title: string;
    description: string;
    category: string;
  }) => {
    setLoading(true);
    try {
      const newCommercial = {
        title: formData.title,
        description: formData.description,
        video_url: formData.videoFile
          ? formData.videoFile
          : formData.youtubeUrl,
        category: formData.category,
      };
      await databaseService.tv_commercials.create(newCommercial);
      toast.success("Commercial created successfully");
      router.push("/dashboard/commercials");
    } catch (error: unknown) {
      toast.error((error as Error)?.message || "Failed to create commercial");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout title="Add New Commercial">
      <CommercialForm
        mode="add"
        initialValues={{
          videoFile: "",
          youtubeUrl: "",
          title: "",
          description: "",
          category: "tv_commercial",
        }}
        onSubmit={handleAdd}
        loading={loading}
        onCancel={() => router.back()}
      />
    </PageLayout>
  );
}
