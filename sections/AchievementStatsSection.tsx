"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  achievementImg1,
  achievementImg2,
  achievementImg3,
  achievementImg4,
  logo,
} from "@/constants/image";
import StatCard from "@/components/StatCards";

/**
 * Enhanced Achievement Stats Section with geometric design
 * Features:
 * - Bold geometric patterns
 * - Dynamic animated elements
 * - Modern minimalist look
 */
const AchievementStatsSection = () => {
  // Stats data with icons, numbers, and titles
  const stats = [
    {
      icon: (
        <Image
          src={achievementImg1}
          alt="Products"
          width={64}
          height={64}
          className="mx-auto"
        />
      ),
      number: 84,
      suffix: "+",
      title: "COUNTRIES",
    },
    {
      icon: (
        <Image
          src={achievementImg2}
          alt="Workers"
          width={64}
          height={64}
          className="mx-auto"
        />
      ),
      number: 1973,
      suffix: "",
      title: "ESTABLISHED",
    },
    {
      icon: (
        <Image
          src={achievementImg3}
          alt="Brands"
          width={64}
          height={64}
          className="mx-auto"
        />
      ),
      number: 50,
      suffix: "+",
      title: "BRANDS",
    },
    {
      icon: (
        <Image
          src={achievementImg4}
          alt="Factories"
          width={64}
          height={64}
          className="mx-auto"
        />
      ),
      number: 2,
      suffix: "",
      title: "GROUP OF COMPANIES",
    },
  ];

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
    <section className="relative py-16 lg:py-24 overflow-hidden bg-white">
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Red circle in top right */}
        <motion.div
          className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-red-600/5"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Large gray circle in bottom left */}
        <motion.div
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gray-200/40"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        />

        {/* Red rectangle in top left */}
        <motion.div
          className="absolute -top-10 -left-10 w-40 h-40 bg-red-600/5 rotate-45"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
        />

        {/* Animated diagonal lines */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute h-0.5 bg-gray-200/40"
              style={{
                top: `${10 + i * 8}%`,
                left: "0",
                right: "0",
                transformOrigin: "left",
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 1.5,
                delay: 0.1 * i,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Vertical line accents */}
        <div className="absolute right-20 top-0 bottom-0 w-px bg-red-200/30" />
        <div className="absolute right-24 top-0 bottom-0 w-px bg-red-200/20" />
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gray-200/40" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8 z-10">
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16">
            {/* Header Content */}
            <div className="max-w-xl relative">
              {/* Small decorative elements */}
              <div className="absolute -left-6 -top-6 w-12 h-12 border-l-2 border-t-2 border-red-600/20" />
              <div className="absolute -right-6 -bottom-6 w-12 h-12 border-r-2 border-b-2 border-red-600/20" />

              <motion.div className="mb-8" variants={itemVariants}>
                <Image
                  src={logo}
                  alt="Haque Logo"
                  width={180}
                  height={180}
                  className="brightness-110"
                />
              </motion.div>

              <motion.div className="space-y-6" variants={itemVariants}>
                <div className="relative inline-block">
                  <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                    Our <span className="text-red-600">Achievements</span>
                  </h2>
                  <div className="absolute -right-8 top-0 w-6 h-6 border-t-2 border-r-2 border-red-600/30" />
                </div>

                <div className="flex items-center">
                  <motion.div
                    className="h-px bg-red-600 mr-6"
                    initial={{ width: 0 }}
                    whileInView={{ width: "4rem" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  />
                  <div className="w-2 h-2 bg-red-600 rounded-full" />
                </div>

                <div className="relative">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    A.T. Haque Limited stands as Bangladesh's most trusted and
                    highly admired leader in manufacturing excellence, setting
                    new standards in innovation and quality since our inception.
                  </p>
                  <div className="absolute -left-4 bottom-0 w-1 h-12 bg-gray-200" />
                </div>
              </motion.div>
            </div>

            {/* Stats Grid with decorative frame */}
            <div className="relative flex-1">
              {/* Frame corners */}
              <div className="absolute -left-3 -top-3 w-8 h-8 border-l-2 border-t-2 border-red-600/30" />
              <div className="absolute -right-3 -top-3 w-8 h-8 border-r-2 border-t-2 border-red-600/30" />
              <div className="absolute -left-3 -bottom-3 w-8 h-8 border-l-2 border-b-2 border-red-600/30" />
              <div className="absolute -right-3 -bottom-3 w-8 h-8 border-r-2 border-b-2 border-red-600/30" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:max-w-3xl">
                {stats.map((stat, index) => (
                  <StatCard key={stat.title} {...stat} delay={index * 150} />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom decorative line */}
          <motion.div
            className="absolute -bottom-8 left-0 right-0 h-px bg-gray-200"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.8 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementStatsSection;
