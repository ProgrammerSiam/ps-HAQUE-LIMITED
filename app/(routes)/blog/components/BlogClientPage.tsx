"use client";

import { useState } from "react";
import BlogCard from "@/components/BlogCards";
import { Blog } from "@/lib/services/blogService";
import { format } from "date-fns";

interface BlogPageClientProps {
    blogs: Blog[];
    categories: string[];
}

export default function BlogPageClient({
    blogs,
    categories,
}: BlogPageClientProps) {
    const [activeCategory, setActiveCategory] = useState("Latest");
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    const filteredBlogs =
        activeCategory === "Latest"
            ? blogs
            : blogs.filter(
                  (blog) =>
                      blog.category.toLowerCase() ===
                      activeCategory.toLowerCase()
              );

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredBlogs.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);

    const paginate = (pageNumber: number) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxPagesToShow = 5;
        const halfPagesToShow = Math.floor(maxPagesToShow / 2);
        let startPage = Math.max(1, currentPage - halfPagesToShow);
        let endPage = Math.min(totalPages, currentPage + halfPagesToShow);

        if (currentPage - halfPagesToShow <= 0) {
            endPage = Math.min(totalPages, maxPagesToShow);
        }

        if (currentPage + halfPagesToShow >= totalPages) {
            startPage = Math.max(1, totalPages - maxPagesToShow + 1);
        }

        if (startPage > 1) {
            pageNumbers.push(
                <button
                    key={1}
                    onClick={() => paginate(1)}
                    className={`px-4 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-200`}
                >
                    1
                </button>
            );
            if (startPage > 2) {
                pageNumbers.push(
                    <span
                        key="start-ellipsis"
                        className="px-4 py-2 text-gray-700"
                    >
                        ...
                    </span>
                );
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => paginate(i)}
                    className={`px-4 py-2 rounded-md ${
                        currentPage === i
                            ? "bg-red-600 text-white"
                            : "bg-white text-gray-700 hover:bg-gray-200"
                    }`}
                >
                    {i}
                </button>
            );
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pageNumbers.push(
                    <span
                        key="end-ellipsis"
                        className="px-4 py-2 text-gray-700"
                    >
                        ...
                    </span>
                );
            }
            pageNumbers.push(
                <button
                    key={totalPages}
                    onClick={() => paginate(totalPages)}
                    className={`px-4 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-200`}
                >
                    {totalPages}
                </button>
            );
        }

        return pageNumbers;
    };

    return (
        <div>
            {/* Category buttons */}
            <div className="flex justify-center flex-wrap gap-5 mb-7">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => {
                            setActiveCategory(category);
                            setCurrentPage(1); // Reset to first page on category change
                        }}
                        className={`h-[42px] px-5 _center rounded-[15px] border border-black text-sm font-medium transition-colors capitalize ${
                            activeCategory === category
                                ? "bg-[#DE2332] text-white"
                                : "bg-white text-black hover:bg-gray-200"
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[26px]">
                {currentPosts.map((blog) => (
                    <BlogCard
                        key={blog.id}
                        title={blog.title}
                        date={format(new Date(blog.created_at), "PPP")}
                        image={blog.cover_image || "/images/placeholder.png"}
                        excerpt={blog.short_description || ""}
                        link={`/blog/${blog.slug}`}
                        readTime="5 min read" // This could be dynamic in the future
                    />
                ))}
            </div>

            <div className="flex justify-center mt-12">
                <nav className="flex items-center space-x-2">
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-2 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-200 disabled:opacity-50"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                    {renderPageNumbers()}
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-2 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-200 disabled:opacity-50"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </nav>
            </div>
        </div>
    );
}

//! previous code
// "use client";

// import { useState } from "react";
// import BlogCard from "@/components/BlogCards";
// import { Blog } from "@/lib/services/blogService";
// import { format } from "date-fns";

// interface BlogPageClientProps {
//   blogs: Blog[];
//   categories: string[];
// }

// export default function BlogPageClient({
//   blogs,
//   categories,
// }: BlogPageClientProps) {
//   const [activeCategory, setActiveCategory] = useState("Latest");
//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 6;

//   const filteredBlogs =
//     activeCategory === "Latest"
//       ? blogs
//       : blogs.filter(
//           (blog) => blog.category.toLowerCase() === activeCategory.toLowerCase()
//         );

//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = filteredBlogs.slice(indexOfFirstPost, indexOfLastPost);
//   const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);

//   const paginate = (pageNumber: number) => {
//     if (pageNumber > 0 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     }
//   };

//   const renderPageNumbers = () => {
//     const pageNumbers = [];
//     const maxPagesToShow = 5;
//     const halfPagesToShow = Math.floor(maxPagesToShow / 2);
//     let startPage = Math.max(1, currentPage - halfPagesToShow);
//     let endPage = Math.min(totalPages, currentPage + halfPagesToShow);

//     if (currentPage - halfPagesToShow <= 0) {
//       endPage = Math.min(totalPages, maxPagesToShow);
//     }

//     if (currentPage + halfPagesToShow >= totalPages) {
//       startPage = Math.max(1, totalPages - maxPagesToShow + 1);
//     }

//     if (startPage > 1) {
//       pageNumbers.push(
//         <button
//           key={1}
//           onClick={() => paginate(1)}
//           className={`px-4 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-200`}
//         >
//           1
//         </button>
//       );
//       if (startPage > 2) {
//         pageNumbers.push(
//           <span key="start-ellipsis" className="px-4 py-2 text-gray-700">
//             ...
//           </span>
//         );
//       }
//     }

//     for (let i = startPage; i <= endPage; i++) {
//       pageNumbers.push(
//         <button
//           key={i}
//           onClick={() => paginate(i)}
//           className={`px-4 py-2 rounded-md ${
//             currentPage === i
//               ? "bg-red-600 text-white"
//               : "bg-white text-gray-700 hover:bg-gray-200"
//           }`}
//         >
//           {i}
//         </button>
//       );
//     }

//     if (endPage < totalPages) {
//       if (endPage < totalPages - 1) {
//         pageNumbers.push(
//           <span key="end-ellipsis" className="px-4 py-2 text-gray-700">
//             ...
//           </span>
//         );
//       }
//       pageNumbers.push(
//         <button
//           key={totalPages}
//           onClick={() => paginate(totalPages)}
//           className={`px-4 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-200`}
//         >
//           {totalPages}
//         </button>
//       );
//     }

//     return pageNumbers;
//   };

//   return (
//     <div>
//       <div className="flex justify-center flex-wrap gap-2 mb-12">
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => {
//               setActiveCategory(category);
//               setCurrentPage(1); // Reset to first page on category change
//             }}
//             className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//               activeCategory === category
//                 ? "bg-red-600 text-white"
//                 : "bg-white text-gray-700 hover:bg-gray-200"
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {currentPosts.map((blog) => (
//           <BlogCard
//             key={blog.id}
//             title={blog.title}
//             date={format(new Date(blog.created_at), "PPP")}
//             image={blog.cover_image || "/images/placeholder.png"}
//             excerpt={blog.short_description || ""}
//             link={`/blog/${blog.slug}`}
//             readTime="5 min read" // This could be dynamic in the future
//           />
//         ))}
//       </div>

//       <div className="flex justify-center mt-12">
//         <nav className="flex items-center space-x-2">
//           <button
//             onClick={() => paginate(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="px-2 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-200 disabled:opacity-50"
//           >
//             <svg
//               className="w-5 h-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </button>
//           {renderPageNumbers()}
//           <button
//             onClick={() => paginate(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className="px-2 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-200 disabled:opacity-50"
//           >
//             <svg
//               className="w-5 h-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>
//         </nav>
//       </div>
//     </div>
//   );
// }
