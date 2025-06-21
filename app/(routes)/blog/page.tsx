import { blogService } from "@/lib/services/blogService";
import BlogPageClient from "./components/BlogClientPage";
import blogBg from "@/assets/blog-img/blog-bg.png";
import Image from "next/image";
import logo from "@/assets/logo/logo.png";
import Link from "next/link";
import { Input } from "@/components/ui/input";

export default async function BlogPage() {
    const blogs = await blogService.getAllBlogs();

    const categoriesFromBlogs = blogs.map((blog) => blog.category);
    const uniqueCategories = [
        "Latest",
        ...Array.from(new Set(categoriesFromBlogs)),
    ];

    return (
        <main>
            {/* Hero Section */}
            <section className="w-full h-[680px] relative mt-20 isolate max-sm:px-5">
                <div className="absolute inset-0 w-screen h-full z-[-1]">
                    <Image
                        src={blogBg}
                        alt="about us background"
                        width={2500}
                        height={2000}
                        // className="w-full h-full object-contain bg-cover"
                        className="w-full h-full object-cover"
                        priority={true}
                    />
                </div>

                {/* Left SVG */}
                <div className="lg:block hidden absolute top-0-1/2 left-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={414}
                        height={375}
                        viewBox="0 0 414 375"
                        fill="none"
                    >
                        <rect
                            x={-33}
                            y="0.5"
                            width={169}
                            height={198}
                            rx="14.5"
                            stroke="white"
                        />
                        <rect
                            x={147}
                            y="70.5"
                            width={114}
                            height={128}
                            rx="14.5"
                            stroke="white"
                        />
                        <rect
                            x={272}
                            y="109.5"
                            width={99}
                            height={89}
                            rx="14.5"
                            stroke="white"
                        />
                        <rect
                            x={-33}
                            y="209.5"
                            width={114}
                            height={165}
                            rx="14.5"
                            stroke="white"
                        />
                        <rect
                            x={90}
                            y="209.5"
                            width={106}
                            height={138}
                            rx="14.5"
                            stroke="white"
                        />
                        <rect
                            x={205}
                            y="209.5"
                            width={107}
                            height={104}
                            rx="14.5"
                            stroke="white"
                        />
                        <rect
                            x={321}
                            y="209.5"
                            width={92}
                            height={73}
                            rx="14.5"
                            stroke="white"
                        />
                    </svg>
                </div>

                {/* Right SVG */}
                <div className="lg:block hidden absolute top-0-1/2 right-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={414}
                        height={375}
                        viewBox="0 0 414 375"
                        fill="none"
                    >
                        <rect
                            x="-0.5"
                            y="0.5"
                            width={169}
                            height={198}
                            rx="14.5"
                            transform="matrix(-1 0 0 1 446.5 176)"
                            stroke="white"
                        />
                        <rect
                            x={153}
                            y="176.5"
                            width={114}
                            height={128}
                            rx="14.5"
                            stroke="white"
                        />
                        <rect
                            x="-0.5"
                            y="0.5"
                            width={99}
                            height={89}
                            rx="14.5"
                            transform="matrix(-1 0 0 1 141.5 176)"
                            stroke="white"
                        />
                        <rect
                            x={333}
                            y="0.5"
                            width={114}
                            height={165}
                            rx="14.5"
                            stroke="white"
                        />
                        <rect
                            x={218}
                            y="27.5"
                            width={106}
                            height={138}
                            rx="14.5"
                            stroke="white"
                        />
                        <rect
                            x={102}
                            y="61.5"
                            width={107}
                            height={104}
                            rx="14.5"
                            stroke="white"
                        />
                        <rect
                            x={1}
                            y="92.5"
                            width={92}
                            height={73}
                            rx="14.5"
                            stroke="white"
                        />
                    </svg>
                </div>

                {/* Header */}
                <header className="absolute sm:top-[30px] top-2 sm:left-[50px] left-0 max-sm:px-5 sm:w-[calc(50%+40px)] w-full flex items-center justify-between">
                    <Link
                        href={"/"}
                        className="sm:size-[50px] size-8 rounded-full bg-black/15 border border-white/15 _center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={8}
                            height={13}
                            viewBox="0 0 8 13"
                            fill="none"
                            className="sm:w-2 sm:h-[13px] size-[10px]"
                        >
                            <path
                                d="M7.56657 1.07499L6.50557 0.014986L0.726568 5.79199C0.633413 5.88455 0.559484 5.99463 0.509036 6.11588C0.458588 6.23713 0.432617 6.36716 0.432617 6.49849C0.432617 6.62981 0.458588 6.75984 0.509036 6.88109C0.559484 7.00234 0.633413 7.11242 0.726568 7.20499L6.50557 12.985L7.56557 11.925L2.14157 6.49999L7.56657 1.07499Z"
                                fill="white"
                            />
                        </svg>
                    </Link>
                    <div className="sm:w-[153px] sm:h-[63px] size-[90px]">
                        <Image
                            src={logo}
                            alt="Haque's Logo"
                            width={153}
                            height={100}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </header>

                {/* Content */}
                <div className="w-full h-full _center flex-col text-white">
                    <div className="px-4 py-1 border border-white/15 bg-black/15 rounded-[30px] _center sm:mb-[70px] mb-10">
                        <span className="text-white/50 mr-2">Home</span>{" "}
                        <span className="text-white/50 mr-2">&gt; </span>{" "}
                        <span className="text-white">Blogs</span>
                    </div>
                    <div className="max-w-[562px] w-full text-center">
                        <h1 className="sm:text-[50px] text-4xl font-bold mb-[15px]">
                            The HAQUE Insights
                        </h1>
                        <p className="sm:text-[28px] text-lg font-semibold">
                            Driven by Manufacturing Excellence
                        </p>
                    </div>
                    <div className="max-w-[523px] w-full h-10 flex items-center mt-10 border-2 border-white rounded-[20px]">
                        <Input
                            placeholder="Search any Blog"
                            className="flex-1 border-none outline-none focus:!ring-0"
                        />
                        <button className="bg-white w-[90px] h-full _center rounded-r-[20px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={22}
                                height={21}
                                viewBox="0 0 22 21"
                                fill="none"
                            >
                                <path
                                    d="M19.8667 21L12.5167 13.65C11.9333 14.1167 11.2625 14.4861 10.5042 14.7583C9.74583 15.0306 8.93889 15.1667 8.08333 15.1667C5.96389 15.1667 4.17033 14.4324 2.70267 12.964C1.235 11.4956 0.500778 9.702 0.500001 7.58333C0.499223 5.46467 1.23344 3.67111 2.70267 2.20267C4.17189 0.734222 5.96544 0 8.08333 0C10.2012 0 11.9952 0.734222 13.4652 2.20267C14.9352 3.67111 15.669 5.46467 15.6667 7.58333C15.6667 8.43889 15.5306 9.24583 15.2583 10.0042C14.9861 10.7625 14.6167 11.4333 14.15 12.0167L21.5 19.3667L19.8667 21ZM8.08333 12.8333C9.54167 12.8333 10.7814 12.3231 11.8027 11.3027C12.8239 10.2822 13.3341 9.04244 13.3333 7.58333C13.3326 6.12422 12.8223 4.88483 11.8027 3.86517C10.783 2.8455 9.54322 2.33489 8.08333 2.33333C6.62344 2.33178 5.38406 2.84239 4.36517 3.86517C3.34628 4.88794 2.83567 6.12733 2.83333 7.58333C2.831 9.03933 3.34161 10.2791 4.36517 11.3027C5.38872 12.3262 6.62811 12.8364 8.08333 12.8333Z"
                                    fill="#DE2332"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section className="xl:px-32 px-6 !py-5 my-14">
                <div className="section_container">
                    <BlogPageClient
                        blogs={blogs}
                        categories={uniqueCategories}
                    />
                </div>
            </section>
        </main>
    );
}

//! Previous implementation
// import { blogService } from "@/lib/services/blogService";
// import BlogPageClient from "./components/BlogClientPage";

// export default async function BlogPage() {
//   const blogs = await blogService.getAllBlogs();

//   const categoriesFromBlogs = blogs.map((blog) => blog.category);
//   const uniqueCategories = [
//     "Latest",
//     ...Array.from(new Set(categoriesFromBlogs)),
//   ];

//   return (
//     <div className="bg-gray-50 min-h-screen mt-40">
//       <div className="container mx-auto px-4 py-16">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
//             Haque's Blog
//           </h1>
//           <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
//             Insights, news, and stories from the heart of Haque.
//           </p>
//         </div>

//         <BlogPageClient blogs={blogs} categories={uniqueCategories} />
//       </div>
//     </div>
//   );
// }
