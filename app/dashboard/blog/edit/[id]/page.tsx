"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { PageLayout } from "@/components/dashboard/PageLayout";
import { BlogForm } from "@/components/blog/blog-form";
import { Blog, blogService } from "@/lib/services/blogService";

// Updated interface to handle async params
interface PageProps {
  params: Promise<{ id: string }>;
}

export default function EditBlogPage({ params }: PageProps) {
  const router = useRouter();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [id, setId] = useState<string | null>(null);

  // Resolve params Promise first
  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    };

    resolveParams();
  }, [params]);

  // Load blog data once we have the id
  useEffect(() => {
    if (!id) return; // Don't load until we have the id

    async function loadBlog() {
      try {
        // At this point, we know id is not null due to the guard clause above
        const response = await blogService.getBlogById(id!);
        console.log(response);
        if (response) {
          setBlog(response);
        }
      } catch (error) {
        toast.error("Blog not found");
        console.error("Error loading blog:", error);
        router.push("/dashboard/blog");
        // Don't throw error here as it's already handled
      } finally {
        setIsLoading(false);
      }
    }

    loadBlog();
  }, [id, router]);

  // Show loading while resolving params or loading blog
  if (isLoading || !id) {
    return (
      <PageLayout title="Edit Blog">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </div>
      </PageLayout>
    );
  }

  if (!blog) {
    return (
      <PageLayout title="Edit Blog">
        <div className="text-center py-12">
          <p className="text-red-500">Blog not found</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Edit Blog">
      <BlogForm blog={blog} />
    </PageLayout>
  );
}
