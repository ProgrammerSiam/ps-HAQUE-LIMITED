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
import SectionHeader from "@/components/Header";

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
    <section className="relative overflow-hidden bg-white">
      <div className="container relative z-10">
        <motion.div
          className="relative flex flex-col items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
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
            {/* <motion.div
              className="absolute -top-10 -left-10 w-40 h-40 bg-red-600/5 rotate-45"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
            /> */}
          </div>

          {/* Header Content */}
          <div className="">
            <SectionHeader
              title="Our"
              description="A.T. Haque Limited stands as Bangladesh's most trusted and
                    highly admired leader in manufacturing excellence, setting
                    new standards in innovation and quality since our inception."
              highlightedText="Achievements"
              showDivider={true}
              align="center"
              titleSize="md"
              animationDelay={0.2}
              viewportOnce={true}
              viewportMargin="-100px"
            />
          </div>

          {/* Stats Grid with decorative frame */}
          <div className="flex flex-col lg:flex-col lg:items-center lg:justify-between gap-16 py-16 lg:py-24 ">
            <div className="relative flex-1">
              {/* Frame corners */}
              {/* <div className="absolute -left-3 -top-3 w-8 h-8 border-l-2 border-t-2 border-red-600/30" />
              <div className="absolute -right-3 -top-3 w-8 h-8 border-r-2 border-t-2 border-red-600/30" />
              <div className="absolute -left-3 -bottom-3 w-8 h-8 border-l-2 border-b-2 border-red-600/30" />
              <div className="absolute -right-3 -bottom-3 w-8 h-8 border-r-2 border-b-2 border-red-600/30" /> */}

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:w-full">
                {stats.map((stat, index) => (
                  <StatCard key={stat.title} {...stat} delay={index * 150} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementStatsSection;
