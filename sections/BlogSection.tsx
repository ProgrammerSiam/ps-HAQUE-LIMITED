"use client";
import BlogCard from "@/components/BlogCards";
import SectionHeader from "@/components/Header";
import { blogImg1, blogImg2, blogImg3 } from "@/constants/image";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

/**
 * BlogSection with Geometric Background Elements
 * Features:
 * - Geometric background elements
 * - Frame corner decorations
 * - Animated lines and shapes
 * - Consistent with site design language
 */
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
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Red circle in top right */}
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-red-600/5"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={controls}
          variants={{
            hidden: { scale: 0.8, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 1,
              transition: { duration: 1.5, ease: "easeOut" },
            },
          }}
        />

        {/* Gray circle in bottom left */}
        <motion.div
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gray-200/40"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={controls}
          variants={{
            hidden: { scale: 0.8, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 1,
              transition: { duration: 1.5, delay: 0.2, ease: "easeOut" },
            },
          }}
        />

        {/* Animated diagonal lines */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute h-px bg-gray-200/40"
              style={{
                top: `${20 + i * 12}%`,
                left: "0",
                right: "0",
                transformOrigin: "left",
              }}
              initial={{ scaleX: 0 }}
              animate={controls}
              variants={{
                hidden: { scaleX: 0 },
                visible: {
                  scaleX: 1,
                  transition: {
                    duration: 1.5,
                    delay: 0.1 * i,
                    ease: "easeOut",
                  },
                },
              }}
            />
          ))}
        </div>

        {/* Vertical accent lines */}
        <div className="absolute right-24 top-0 bottom-0 w-px bg-red-200/30" />
        <div className="absolute right-28 top-0 bottom-0 w-px bg-red-200/20" />
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gray-200/30" />

        {/* Decorative corner elements */}
        <div className="absolute top-12 left-12 w-12 h-12 border-l-2 border-t-2 border-red-600/20" />
        <div className="absolute bottom-12 right-12 w-12 h-12 border-r-2 border-b-2 border-red-600/20" />

        {/* Small decorative elements */}
        <div className="absolute top-1/3 right-12 w-4 h-4 bg-red-600/10 rounded-full" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-red-600/10 rounded-full" />
        <div className="absolute top-2/3 left-16 w-16 h-16 bg-gray-200/10 rotate-45" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Main content frame */}
        <div className="relative">
          {/* Corner frame elements for the entire section */}
          <div className="absolute -left-4 -top-4 w-8 h-8 border-l-2 border-t-2 border-red-600/20 hidden md:block" />
          <div className="absolute -right-4 -top-4 w-8 h-8 border-r-2 border-t-2 border-red-600/20 hidden md:block" />
          <div className="absolute -left-4 -bottom-4 w-8 h-8 border-l-2 border-b-2 border-red-600/20 hidden md:block" />
          <div className="absolute -right-4 -bottom-4 w-8 h-8 border-r-2 border-b-2 border-red-600/20 hidden md:block" />

          {/* Section Header */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <SectionHeader
              title="Our"
              highlightedText="Blog"
              description="A collection of articles and resources"
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
              {/* Decorative line elements */}
              <motion.div
                className="absolute top-1/2 left-0 right-0 h-px bg-gray-200/40 -z-10"
                initial={{ scaleX: 0 }}
                animate={controls}
                variants={{
                  hidden: { scaleX: 0 },
                  visible: {
                    scaleX: 1,
                    transition: { delay: 0.8, duration: 1 },
                  },
                }}
              />

              <Link href="/blog">
                <motion.div className="relative inline-block">
                  {/* Small corner elements for button */}
                  <div className="absolute -left-1 -top-1 w-2 h-2 border-l border-t border-red-600/30" />
                  <div className="absolute -right-1 -top-1 w-2 h-2 border-r border-t border-red-600/30" />
                  <div className="absolute -left-1 -bottom-1 w-2 h-2 border-l border-b border-red-600/30" />
                  <div className="absolute -right-1 -bottom-1 w-2 h-2 border-r border-b border-red-600/30" />

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

        {/* Bottom decorative line */}
        <motion.div
          className="absolute -bottom-6 left-1/4 right-1/4 h-px bg-gray-400/30"
          initial={{ scaleX: 0 }}
          animate={controls}
          variants={{
            hidden: { scaleX: 0 },
            visible: {
              scaleX: 1,
              transition: { duration: 1.5, delay: 1 },
            },
          }}
        />
      </div>
    </section>
  );
};

export default BlogSection;
