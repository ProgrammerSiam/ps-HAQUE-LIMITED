"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ceoImg } from "@/constants/image";
import SectionHeader from "@/components/Header";
import Link from "next/link";

const CEOMessageSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          title="Leadership"
          description=""
          highlightedText="Message"
          showDivider={true}
          align="center"
          titleSize="md"
        />

        {/* Main content card */}
        <div className="mt-12 md:mt-16 relative">
          <div className="flex flex-col items-center lg:flex-row rounded-lg overflow-hidden shadow-lg bg-white">
            {/* Image Column - Left side */}
            <div className="relative w-full lg:w-2/5 h-[350px] md:h-[400px] lg:h-[520px]">
              <Image
                src={ceoImg}
                alt="Adam Tamizi Haque - CEO"
                fill
                priority
                className="object-cover object-center brightness-[0.85] contrast-[1.05]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 35vw"
                quality={90}
              />

              {/* Text overlay for name and title */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-2xl font-bold text-white">
                  Adam Tamizi Haque
                </h3>
                <div className="flex items-center mt-1">
                  <div className="w-8 h-0.5 bg-red-500 mr-3"></div>
                  <p className="text-gray-200">Chief Executive Officer</p>
                </div>
              </div>
            </div>

            {/* Content Column - Right side */}
            <div className="w-full lg:w-3/5 p-6 md:p-8 lg:p-10">
              <div className="flex items-center mb-6">
                <div className="w-1 h-5 bg-red-500 mr-3"></div>
                <h4 className="text-lg text-red-500 font-medium">
                  Message From The CEO
                </h4>
              </div>

              <blockquote className="mb-8 relative">
                <span className="absolute top-0 -right-2 text-6xl text-red-100 leading-none font-serif select-none">
                  "
                </span>

                <p className="text-gray-700 leading-relaxed pr-6">
                  Over the years, we at A.T.Haque group have successfully
                  created a remarkable reputation for our organization by
                  establishing unrivaled quality, standard, and reliability in
                  all our products using state-of-the-art technology and best
                  practices. Central to this achievement has been our drive to
                  exceed our customers' and stakeholders' expectations.
                </p>
              </blockquote>

              <Link href="/about/vision">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-2 px-5 py-3 bg-red-500 text-white rounded-md font-medium transition-all duration-200"
                >
                  Learn More About Our Vision
                  <svg
                    className="w-5 h-5 transform transition-transform duration-200 group-hover:translate-x-1"
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
        </div>
      </div>
    </section>
  );
};

export default CEOMessageSection;
