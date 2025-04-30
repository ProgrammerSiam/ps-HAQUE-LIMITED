"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { PageLayout } from "@/components/dashboard/PageLayout";
import { BlogForm } from "@/components/blog/blog-form";
import { Blog, blogService } from "@/lib/services/blogService";

export default function EditBlogPage({ params }: { params: { id: string } }) {
    const router = useRouter();
    const [blog, setBlog] = useState<Blog | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadBlog() {
            try {
                // const response = await fetch(`/api/blogs/${params.id}`);
                const response = await blogService.getBlogById(params.id);
                console.log(response);
                if (response) {
                    setBlog(response);
                }
            } catch (error) {
                toast.error("Blog not found");
                console.error("Error loading blog:", error);
                router.push("/dashboard/blog");
                throw new Error("Failed to fetch blog");
            } finally {
                setIsLoading(false);
            }
        }

        loadBlog();
    }, [params.id, router]);

    if (isLoading) {
        return (
            <PageLayout title="Edit Blog">
                <div className="flex items-center justify-center h-64">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
                </div>
            </PageLayout>
        );
    }

    if (!blog) {
        return null;
    }

    return (
        <PageLayout title="Edit Blog">
            <BlogForm blog={blog} />
        </PageLayout>
    );
}

//! ----- previous EditBlogPage code. -----
//! ----- Fetch request for getting blog is not properly working so fetch has been replaced with blogService -----

// "use client";

// import { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { toast } from "sonner";
// import { PageLayout } from "@/components/dashboard/PageLayout";
// import { BlogForm } from "@/components/blog/blog-form";
// import { Blog } from "@/lib/services/blogService";

// export default function EditBlogPage() {
//   const params = useParams();
//   const router = useRouter();
//   const [blog, setBlog] = useState<Blog | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     async function loadBlog() {
//       try {
//         const response = await fetch(`/api/blogs/${params.id}`);
//         if (!response.ok) {
//           if (response.status === 404) {
//             toast.error("Blog not found");
//             router.push("/dashboard/blog");
//             return;
//           }
//           throw new Error("Failed to fetch blog");
//         }
//         const data = await response.json();

//         setBlog(data);
//       } catch (error) {
//         console.error("Error loading blog:", error);
//         toast.error("Failed to load blog");
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     loadBlog();
//   }, [params.id, router]);

//   if (isLoading) {
//     return (
//       <PageLayout title="Edit Blog">
//         <div className="flex items-center justify-center h-64">
//           <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
//         </div>
//       </PageLayout>
//     );
//   }

//   if (!blog) {
//     return null;
//   }

//   return (
//     <PageLayout title="Edit Blog">
//       <BlogForm blog={blog} />
//     </PageLayout>
//   );
// }
