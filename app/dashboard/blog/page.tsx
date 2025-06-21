"use client";
import { PageLayout } from "@/components/dashboard/PageLayout";
import { Blog, blogService } from "@/lib/services/blogService";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { toast } from "sonner";
import Image from "next/image";
import { MoreVertical, Pencil, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

function BlogCard({ blog, onDelete }: { blog: Blog; onDelete: () => void }) {
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await blogService.deleteBlog(blog.id);
        toast.success("Blog deleted successfully");
        onDelete();
      } catch (error) {
        console.error("Error deleting blog:", error);
        toast.error("Failed to delete blog");
      }
    }
  };

  return (
    <div className="relative group bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow">
      {blog.cover_image && (
        <div className="relative h-48 rounded-t-lg overflow-hidden">
          <Image
            src={blog.cover_image}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold line-clamp-2">{blog.title}</h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href={`/dashboard/blog/edit/${blog.id}`}>
                  <Pencil className="mr-2 h-4 w-4" />
                  Edit
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-destructive"
                onClick={handleDelete}
              >
                <Trash className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {blog.short_description && (
          <p className="mt-2 text-muted-foreground line-clamp-2">
            {blog.short_description}
          </p>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          {blog.category && (
            <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
              {blog.category}
            </span>
          )}
          {blog.tags?.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-secondary/10 text-secondary rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 text-xs text-muted-foreground">
          {new Date(blog.created_at).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}

export default function BlogListPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadBlogs = useCallback(async () => {
    try {
      const response = await fetch("/api/blogs");
      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error loading blogs:", error);
      toast.error("Failed to load blogs");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadBlogs();
  }, [loadBlogs]);

  const handleDelete = useCallback(() => {
    loadBlogs();
  }, [loadBlogs]);

  return (
    <PageLayout
      title="Blogs"
      actions={
        <Button
          asChild
          className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          <Link href="/dashboard/blog/add">Add Blog</Link>
        </Button>
      }
    >
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </div>
      ) : blogs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">No blog posts found</p>
          <Button asChild>
            <Link href="/dashboard/blog/add">Create your first blog post</Link>
          </Button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </PageLayout>
  );
}

//! ----- previous BlogListPage code. -----
//! ----- Fetch request for delete is not properly working so fetch has been replaced with blogService -----
// "use client";
// import { PageLayout } from "@/components/dashboard/PageLayout";
// import { Blog } from "@/lib/services/blogService";
// import { useEffect, useState, useCallback } from "react";
// import Link from "next/link";
// import { toast } from "sonner";
// import Image from "next/image";
// import { MoreVertical, Pencil, Trash } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Button } from "@/components/ui/button";

// function BlogCard({ blog, onDelete }: { blog: Blog; onDelete: () => void }) {
//   const handleDelete = async () => {
//     try {
//       const response = await fetch(`/api/blogs/${blog.id}`, {
//         method: "DELETE",
//       });

//       if (!response.ok) {
//         throw new Error("Failed to delete blog");
//       }

//       toast.success("Blog deleted successfully");
//       onDelete();
//     } catch (error) {
//       console.error("Error deleting blog:", error);
//       toast.error("Failed to delete blog");
//     }
//   };

//   return (
//     <div className="relative group bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow">
//       {blog.cover_image && (
//         <div className="relative h-48 rounded-t-lg overflow-hidden">
//           <Image
//             src={blog.cover_image}
//             alt={blog.title}
//             fill
//             className="object-cover"
//           />
//         </div>
//       )}
//       <div className="p-4">
//         <div className="flex items-start justify-between">
//           <h3 className="text-lg font-semibold line-clamp-2">{blog.title}</h3>
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" className="h-8 w-8 p-0">
//                 <MoreVertical className="h-4 w-4" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuItem asChild>
//                 <Link href={`/dashboard/blog/edit/${blog.id}`}>
//                   <Pencil className="mr-2 h-4 w-4" />
//                   Edit
//                 </Link>
//               </DropdownMenuItem>
//               <DropdownMenuItem
//                 className="text-destructive"
//                 onClick={handleDelete}
//               >
//                 <Trash className="mr-2 h-4 w-4" />
//                 Delete
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//         {blog.short_description && (
//           <p className="mt-2 text-muted-foreground line-clamp-2">
//             {blog.short_description}
//           </p>
//         )}
//         <div className="mt-4 flex flex-wrap gap-2">
//           {blog.category && (
//             <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
//               {blog.category}
//             </span>
//           )}
//           {blog.tags?.map((tag) => (
//             <span
//               key={tag}
//               className="px-2 py-1 text-xs bg-secondary/10 text-secondary rounded-full"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//         <div className="mt-4 text-xs text-muted-foreground">
//           {new Date(blog.created_at).toLocaleDateString()}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function BlogListPage() {
//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const loadBlogs = useCallback(async () => {
//     try {
//       const response = await fetch("/api/blogs");
//       if (!response.ok) {
//         throw new Error("Failed to fetch blogs");
//       }
//       const data = await response.json();
//       setBlogs(data);
//     } catch (error) {
//       console.error("Error loading blogs:", error);
//       toast.error("Failed to load blogs");
//     } finally {
//       setIsLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     loadBlogs();
//   }, [loadBlogs]);

//   const handleDelete = useCallback(() => {
//     loadBlogs();
//   }, [loadBlogs]);

//   return (
//     <PageLayout
//       title="Blogs"
//       actions={
//         <Button asChild>
//           <Link href="/dashboard/blog/add">Add Blog</Link>
//         </Button>
//       }
//     >
//       {isLoading ? (
//         <div className="flex items-center justify-center h-64">
//           <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
//         </div>
//       ) : blogs.length === 0 ? (
//         <div className="text-center py-12">
//           <p className="text-muted-foreground mb-4">No blog posts found</p>
//           <Button asChild>
//             <Link href="/dashboard/blog/add">Create your first blog post</Link>
//           </Button>
//         </div>
//       ) : (
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {blogs.map((blog) => (
//             <BlogCard key={blog.id} blog={blog} onDelete={handleDelete} />
//           ))}
//         </div>
//       )}
//     </PageLayout>
//   );
// }
