import { blogService } from "@/lib/services/blogService";
import { notFound } from "next/navigation";
import Image from "next/image";
import { format } from "date-fns";
import {
  Calendar,
  Clock,
  User,
  Tag,
  Facebook,
  Twitter,
  Linkedin,
  FileText,
} from "lucide-react";
import Link from "next/link";
import TocClient from "../components/TocClient";

type BlogDetailsPageProps = {
  params: {
    slug: string;
  };
};

export default async function BlogDetailsPage({
  params,
}: BlogDetailsPageProps) {
  const blog = await blogService.getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  // A simple function to generate a table of contents
  const generateToc = (content: string) => {
    const headings = content.match(/<h[2-4][^>]*>(.*?)<\/h[2-4]>/g) || [];
    return headings.map((heading) => {
      const level = parseInt(heading.charAt(2), 10);
      const text = heading.replace(/<[^>]+>/g, "");
      const slug = text.toLowerCase().replace(/\s+/g, "-");
      return { level, text, slug };
    });
  };

  const toc = generateToc(blog.content);

  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <div className="relative h-[400px] text-white">
        <Image
          src={blog.cover_image || "/images/placeholder.png"}
          alt={blog.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blog">Blogs</Link>
              </li>
              <li>Details</li>
            </ul>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mt-4 max-w-4xl">
            {blog.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Sidebar */}
            <aside className="lg:col-span-4 xl:col-span-3 space-y-8">
              {/* Author */}
              <div className="p-6 bg-gray-50 rounded-lg text-center">
                <Image
                  src={"/images/placeholder.png"} // Replace with author image if available
                  alt="Author"
                  width={80}
                  height={80}
                  className="rounded-full mx-auto"
                />
                <h3 className="mt-4 font-bold">Tahmeed Siraz</h3>
                <p className="text-sm text-gray-500">se7enfold</p>
              </div>

              {/* Meta */}
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3 text-gray-600">
                  <User className="w-5 h-5 text-red-600" />
                  <span className="font-medium">Category:</span>
                  <span className="text-gray-800 font-semibold">
                    {blog.category}
                  </span>
                </div>
                <div className="flex items-start gap-3 mt-4 text-gray-600">
                  <Tag className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <span className="font-medium">Tags:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {blog.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs bg-white border border-gray-200 rounded-full text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Table of Contents */}
              {/* {toc.length > 0 && <TocClient toc={toc} />} */}

              {/* Share */}
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-lg mb-4">Share</h3>
                <div className="flex items-center gap-4">
                  <a href="#" className="text-gray-500 hover:text-blue-600">
                    <Facebook />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-sky-500">
                    <Twitter />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-700">
                    <Linkedin />
                  </a>
                </div>
              </div>
            </aside>

            {/* Right Content */}
            <article className="lg:col-span-8 xl:col-span-9">
              <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-red-500" />
                  <span>{format(new Date(blog.created_at), "PPP")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-red-500" />
                  <span>7 min read</span>
                </div>
              </div>

              <div
                className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-red-600 hover:prose-a:text-red-700"
                dangerouslySetInnerHTML={{
                  __html: blog.content.replace(
                    /<h([2-4])(.*?)>(.*?)<\/h\1>/g,
                    (match, level, attrs, text) => {
                      const slug = text.toLowerCase().replace(/\s+/g, "-");
                      return `<h${level}${attrs} id="${slug}">${text}</h${level}>`;
                    }
                  ),
                }}
              />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
