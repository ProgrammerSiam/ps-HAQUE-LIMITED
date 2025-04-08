"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  // Animation variants
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
    <section
      id="about"
      className="relative min-h-[80vh] bg-app-black/90 border-primary-foreground/50 overflow-hidden py-60"
    >
      {/* Background geometric elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-600/5 rounded-full -mr-48 opacity-70 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gray-800/5 rounded-full -ml-48 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/5 rounded-full blur-2xl"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="_center flex-col text-center relative z-10 px-4"
      >
        <div className="max-w-4xl">
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary-foreground mb-8"
          >
            About Us
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mt-12 space-y-2 bg-primary-foreground/5 backdrop-blur-sm p-6 rounded-xl border border-primary-foreground/10"
          >
            <motion.h2
              whileHover={{ scale: 1.02 }}
              className="text-primary-foreground text-2xl font-semibold"
            >
              Adam Tamizi Haque
            </motion.h2>
            <motion.p
              whileHover={{ scale: 1.01 }}
              className="text-primary-foreground/70 text-lg"
            >
              Managing Director
            </motion.p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-12 text-lg sm:text-xl text-primary-foreground/70 leading-relaxed"
          >
            Over the years, we at A.T.Haque group have successfully created a
            remarkable reputation for our organization by establishing unmatched
            quality, standard and reliability in all our product by using the
            state of the art technology and best practices. Central to this
            achievement has been our drive to exceed our customers and stake
            holder&apos;s expectations.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
