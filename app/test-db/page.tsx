// "use client";

// import { useEffect, useState } from "react";
// import { useRealtimeSubscription } from "@/hooks/useRealtimeSubscription";
// import {
//   brandService,
//   productService,
//   blogService,
//   newsService,
// } from "@/lib/supabaseService";
// import { Brand, Product, Blog, News } from "@/lib/supabase";
// import { toast } from "react-hot-toast";

// export default function TestDBPage() {
//   const [brands, setBrands] = useState<Brand[]>([]);
//   const [products, setProducts] = useState<Product[]>([]);
//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const [news, setNews] = useState<News[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isTestRunning, setIsTestRunning] = useState(false);

//   // Load initial data
//   useEffect(() => {
//     const loadData = async () => {
//       setIsLoading(true);
//       try {
//         const [brandsData, productsData, blogsData, newsData] =
//           await Promise.all([
//             brandService.getAll(),
//             productService.getAll(),
//             blogService.getAll(),
//             newsService.getAll(),
//           ]);
//         setBrands(brandsData);
//         setProducts(productsData);
//         setBlogs(blogsData);
//         setNews(newsData);
//         toast.success("Data loaded successfully");
//       } catch (error: any) {
//         console.error("Error loading data:", error);
//         toast.error(error.message || "Error loading data");
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     loadData();
//   }, []);

//   // Set up real-time subscriptions
//   useRealtimeSubscription<Brand>({
//     table: "brands",
//     onInsert: (newBrand) => {
//       setBrands((prev) => [newBrand, ...prev]);
//       toast.success("New brand added");
//     },
//     onUpdate: (updatedBrand) => {
//       setBrands((prev) =>
//         prev.map((brand) =>
//           brand.id === updatedBrand.id ? updatedBrand : brand
//         )
//       );
//       toast.success("Brand updated");
//     },
//     onDelete: (deletedBrand) => {
//       setBrands((prev) => prev.filter((brand) => brand.id !== deletedBrand.id));
//       toast.success("Brand deleted");
//     },
//   });

//   useRealtimeSubscription<Product>({
//     table: "products",
//     onInsert: (newProduct) => {
//       setProducts((prev) => [newProduct, ...prev]);
//       toast.success("New product added");
//     },
//     onUpdate: (updatedProduct) => {
//       setProducts((prev) =>
//         prev.map((product) =>
//           product.id === updatedProduct.id ? updatedProduct : product
//         )
//       );
//       toast.success("Product updated");
//     },
//     onDelete: (deletedProduct) => {
//       setProducts((prev) =>
//         prev.filter((product) => product.id !== deletedProduct.id)
//       );
//       toast.success("Product deleted");
//     },
//   });

//   useRealtimeSubscription<Blog>({
//     table: "blogs",
//     onInsert: (newBlog) => {
//       setBlogs((prev) => [newBlog, ...prev]);
//       toast.success("New blog added");
//     },
//     onUpdate: (updatedBlog) => {
//       setBlogs((prev) =>
//         prev.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog))
//       );
//       toast.success("Blog updated");
//     },
//     onDelete: (deletedBlog) => {
//       setBlogs((prev) => prev.filter((blog) => blog.id !== deletedBlog.id));
//       toast.success("Blog deleted");
//     },
//   });

//   useRealtimeSubscription<News>({
//     table: "news",
//     onInsert: (newNews) => {
//       setNews((prev) => [newNews, ...prev]);
//       toast.success("New news added");
//     },
//     onUpdate: (updatedNews) => {
//       setNews((prev) =>
//         prev.map((news) => (news.id === updatedNews.id ? updatedNews : news))
//       );
//       toast.success("News updated");
//     },
//     onDelete: (deletedNews) => {
//       setNews((prev) => prev.filter((news) => news.id !== deletedNews.id));
//       toast.success("News deleted");
//     },
//   });

//   // Test CRUD operations
//   const testOperations = async () => {
//     if (isTestRunning) {
//       toast.error("Test is already running");
//       return;
//     }

//     setIsTestRunning(true);
//     try {
//       // Create a test brand
//       const newBrand = await brandService.create({
//         name: "Test Brand",
//         description: "Test Description",
//         image_url: "https://picsum.photos/200",
//       });
//       toast.success("Test brand created");

//       // Create a test product
//       const newProduct = await productService.create({
//         name: "Test Product",
//         description: "Test Product Description",
//         price: 99.99,
//         image_url: "https://picsum.photos/200",
//         brand_id: newBrand.id,
//       });
//       toast.success("Test product created");

//       // Create a test blog
//       const newBlog = await blogService.create({
//         title: "Test Blog",
//         content: "Test Blog Content",
//         image_url: "https://picsum.photos/200",
//         author: "Test Author",
//       });
//       toast.success("Test blog created");

//       // Create a test news
//       const newNews = await newsService.create({
//         title: "Test News",
//         content: "Test News Content",
//         image_url: "https://picsum.photos/200",
//       });
//       toast.success("Test news created");

//       // Wait a bit before updating
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       // Update the test brand
//       await brandService.update(newBrand.id, {
//         name: "Updated Test Brand",
//       });
//       toast.success("Test brand updated");

//       // Update the test product
//       await productService.update(newProduct.id, {
//         name: "Updated Test Product",
//       });
//       toast.success("Test product updated");

//       // Update the test blog
//       await blogService.update(newBlog.id, {
//         title: "Updated Test Blog",
//       });
//       toast.success("Test blog updated");

//       // Update the test news
//       await newsService.update(newNews.id, {
//         title: "Updated Test News",
//       });
//       toast.success("Test news updated");

//       // Wait a bit before deleting
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       // Delete test records
//       await brandService.delete(newBrand.id);
//       await productService.delete(newProduct.id);
//       await blogService.delete(newBlog.id);
//       await newsService.delete(newNews.id);
//       toast.success("Test records deleted");
//     } catch (error: any) {
//       console.error("Error during test operations:", error);
//       toast.error(error.message || "Error during test operations");
//     } finally {
//       setIsTestRunning(false);
//     }
//   };

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-6">Database Test Page</h1>

//       <button
//         onClick={testOperations}
//         disabled={isTestRunning || isLoading}
//         className={`bg-blue-500 text-white px-4 py-2 rounded mb-6 ${
//           isTestRunning || isLoading
//             ? "opacity-50 cursor-not-allowed"
//             : "hover:bg-blue-600"
//         }`}
//       >
//         {isTestRunning ? "Running Tests..." : "Run Test Operations"}
//       </button>

//       {isLoading && <div className="text-center mb-6">Loading data...</div>}

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="border p-4 rounded">
//           <h2 className="text-xl font-semibold mb-4">
//             Brands ({brands.length})
//           </h2>
//           <div className="space-y-2">
//             {brands.map((brand) => (
//               <div key={brand.id} className="border-b pb-2">
//                 <p className="font-medium">Name: {brand.name}</p>
//                 <p className="text-gray-600">
//                   Description: {brand.description}
//                 </p>
//                 <img
//                   src={brand.image_url}
//                   alt={brand.name || ""}
//                   className="w-20 h-20 object-cover mt-2"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="border p-4 rounded">
//           <h2 className="text-xl font-semibold mb-4">
//             Products ({products.length})
//           </h2>
//           <div className="space-y-2">
//             {products.map((product) => (
//               <div key={product.id} className="border-b pb-2">
//                 <p className="font-medium">Name: {product.name}</p>
//                 <p className="text-gray-600">Price: ${product.price}</p>
//                 <img
//                   src={product.image_url}
//                   alt={product.name}
//                   className="w-20 h-20 object-cover mt-2"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="border p-4 rounded">
//           <h2 className="text-xl font-semibold mb-4">Blogs ({blogs.length})</h2>
//           <div className="space-y-2">
//             {blogs.map((blog) => (
//               <div key={blog.id} className="border-b pb-2">
//                 <p className="font-medium">Title: {blog.title}</p>
//                 <p className="text-gray-600">Author: {blog.author}</p>
//                 <img
//                   src={blog.image_url}
//                   alt={blog.title}
//                   className="w-20 h-20 object-cover mt-2"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="border p-4 rounded">
//           <h2 className="text-xl font-semibold mb-4">News ({news.length})</h2>
//           <div className="space-y-2">
//             {news.map((newsItem) => (
//               <div key={newsItem.id} className="border-b pb-2">
//                 <p className="font-medium">Title: {newsItem.title}</p>
//                 <img
//                   src={newsItem.image_url}
//                   alt={newsItem.title}
//                   className="w-20 h-20 object-cover mt-2"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
