"use client";
import BlogCard from '@/components/BlogCards';
import SectionHeader from '@/components/Header';
import { blogImg1, blogImg2, blogImg3 } from '@/constants/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const BlogSection = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <SectionHeader
                    title="Our"
                    highlightedText="Blog"
                    showDivider={true}
                    align="center"
                    titleSize="md"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
                    <BlogCard
                        title="DISCOVER HAQUE'S CULINARY JOURNEY"
                        date="23 October 2023"
                        image={blogImg1}
                        excerpt="Explore the rich history and culinary innovations that have made Haque a household name in Bangladesh for generations."
                        link="/blog/culinary-journey"
                    />
                    <BlogCard
                        title="WHAT'S COOKING AT HAQUE THIS MONTH?"
                        date="17 October 2023"
                        image={blogImg2}
                        excerpt="Get an exclusive behind-the-scenes look at our latest product developments and special seasonal offerings."
                        link="/blog/monthly-update"
                    />
                    <BlogCard
                        title="MASTERCLASS WITH HAQUE'S TOP CHEFS"
                        date="12 October 2023"
                        image={blogImg3}
                        excerpt="Learn professional baking techniques from our expert chefs and discover how to create delicious treats at home."
                        link="/blog/chef-masterclass"
                    />
                </div>

                <div className="text-center mt-8">
                    <Link href="/blog">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-all duration-300 ease-in-out"
                        >
                            Learn More
                            <svg
                                className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
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
                        </motion.button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;