import { blogService } from "@/lib/services/blogService";
import BlogPageClient from "./components/BlogClientPage";

export default async function BlogPage() {
  const blogs = await blogService.getAllBlogs();

  const categoriesFromBlogs = blogs.map((blog) => blog.category);
  const uniqueCategories = [
    "Latest",
    ...Array.from(new Set(categoriesFromBlogs)),
  ];

  return (
    <div className="bg-gray-50 min-h-screen mt-40">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Haque's Blog
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Insights, news, and stories from the heart of Haque.
          </p>
        </div>

        <BlogPageClient blogs={blogs} categories={uniqueCategories} />
      </div>
    </div>
  );
}
