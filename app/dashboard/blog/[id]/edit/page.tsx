import { notFound } from "next/navigation";
import { BlogForm } from "@/components/blog/blog-form";

async function getBlog(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/blogs/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error("Failed to fetch blog");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

export default async function EditBlogPage({
  params,
}: {
  params: { id: string };
}) {
  const blog = await getBlog(params.id);

  if (!blog) {
    notFound();
  }

  // Log the blog data to verify what we're receiving
  console.log("Blog data:", blog);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Blog</h1>
      <BlogForm blog={blog} />
    </div>
  );
}
