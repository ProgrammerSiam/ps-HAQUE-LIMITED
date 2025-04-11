"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Image from "next/image";
import { hero } from "@/constants/image";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  // Start animations when component mounts
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log("Subscribed with email:", email);
    setTimeout(() => {
      setEmail("");
      setIsSubmitted(false);
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={hero}
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="right"
          className="transition-opacity duration-500"
          quality={90}
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-transparent" /> */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40  via-black/50  to-transparent" />
      </motion.div>

      {/* Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="mx-auto max-w-2xl relative">
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="relative inline-block">
              <motion.h2
                className="font-heading mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Join Our{" "}
                <span className="text-red-600 relative">Newsletter</span>
              </motion.h2>
            </div>

            <div className="flex items-center justify-center mb-4">
              <motion.div
                className="h-px bg-gray-400 w-12"
                initial={{ width: 0 }}
                animate={{ width: "3rem" }}
                transition={{ duration: 0.8 }}
              />
              <motion.div
                className="h-1 bg-red-600 mx-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "4rem" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.div
                className="h-px bg-gray-400 w-12"
                initial={{ width: 0 }}
                animate={{ width: "3rem" }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </div>

            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-xl text-lg text-white"
            >
              Stay updated with the latest information on events, sales, and
              exclusive offers. Be the first to know about our newest products
              and special promotions.
            </motion.p>
          </motion.div>

          {/* Subscription Form with geometric accents */}
          <motion.div variants={itemVariants} className="relative">
            <form onSubmit={handleSubmit} className="relative">
              <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 sm:px-6 py-4 text-base placeholder:text-gray-400 focus:outline-none"
                    required
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="relative bg-red-600 px-4 sm:px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-red-700 focus:outline-none"
                  >
                    Subscribe
                    <span className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-white/40"></span>
                    <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-white/40"></span>
                  </motion.button>
                </div>
              </div>
            </form>

            {/* Success Message with accent lines */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-center text-sm font-medium text-white relative"
                >
                  <div className="absolute -left-4 top-1/2 w-3 h-px bg-red-600/40"></div>
                  <div className="absolute -right-4 top-1/2 w-3 h-px bg-red-600/40"></div>
                  Thank you for subscribing! We'll keep you updated with our
                  latest news.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default NewsletterSection;
