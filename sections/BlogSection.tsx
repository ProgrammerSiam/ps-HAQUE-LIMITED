"use client";
import BlogCard from "@/components/BlogCards";
import SectionHeader from "@/components/Header";
import { blogImg1, blogImg2, blogImg3 } from "@/constants/image";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const BlogSection = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative">
        <div className="relative">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <SectionHeader
              title="Our"
              highlightedText="Blog"
              description="A collection of articles and resources about our products and services from our team and industry experts "
              showDivider={true}
              align="center"
              titleSize="md"
            />

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 md:mt-16"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              <motion.div variants={itemVariants}>
                <BlogCard
                  title="DISCOVER HAQUE'S CULINARY JOURNEY"
                  date="23 October 2023"
                  image={blogImg1}
                  excerpt="Explore the rich history and culinary innovations that have made Haque a household name in Bangladesh for generations."
                  link="/blog/culinary-journey"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <BlogCard
                  title="WHAT'S COOKING AT HAQUE THIS MONTH?"
                  date="17 October 2023"
                  image={blogImg2}
                  excerpt="Get an exclusive behind-the-scenes look at our latest product developments and special seasonal offerings."
                  link="/blog/monthly-update"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <BlogCard
                  title="MASTERCLASS WITH HAQUE'S TOP CHEFS"
                  date="12 October 2023"
                  image={blogImg3}
                  excerpt="Learn professional baking techniques from our expert chefs and discover how to create delicious treats at home."
                  link="/blog/chef-masterclass"
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="text-center mt-12 relative"
              variants={itemVariants}
            >
              <Link href="/blog">
                <motion.div className="relative inline-block">
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
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
