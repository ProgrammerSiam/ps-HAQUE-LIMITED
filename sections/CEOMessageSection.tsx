

"use client"
import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import { ceoImg } from '@/constants/image';
import SectionHeader from '@/components/Header';

const CEOMessageSection = () => {
  return (
    <section className=" py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          title="Leadership"
          description=""
          highlightedText="Message"
          showDivider={true}
          align="center"
          titleSize="md"
        />

        <div className="mt-12 md:mt-16 rounded-2xl border-0 shadow-xl bg-white/80 backdrop-blur overflow-hidden">
          <div className="flex flex-col lg:flex-row items-stretch">
            {/* Image Column */}
            <div
              // initial={{ opacity: 0, x: -20 }}
              // whileInView={{ opacity: 1, x: 0 }}
              // transition={{ duration: 0.6 }}
              // viewport={{ once: true }}
              className="relative w-full lg:w-2/5 h-[400px] lg:h-[600px]"
            >
              <div className="absolute inset-0 bg-red-600/10 transform -skew-x-6 z-10" />
              <div className="relative h-full w-full">
                <Image
                  src={ceoImg}
                  alt="Adam Tamizi Haque - CEO"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-20" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-30">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Adam Tamizi Haque</h3>
                  <p className="text-lg font-medium text-gray-200">Chief Executive Officer</p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div
              // initial={{ opacity: 0, x: 20 }}
              // whileInView={{ opacity: 1, x: 0 }}
              // transition={{ duration: 0.6, delay: 0.2 }}
              // viewport={{ once: true }}
              className="w-full lg:w-3/5 p-6 md:p-8 lg:p-12 flex flex-col justify-center"
            >
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-1 bg-red-600 rounded-full" />
                  <h4 className="text-lg md:text-xl font-semibold text-red-600">
                    Message From The CEO
                  </h4>
                </div>

                <blockquote className="relative">
                  <span className="absolute -top-8 -left-2 text-8xl text-red-100 leading-none font-serif select-none">
                    "
                  </span>
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed pl-4 lg:pl-8">
                    Over the years, we at A.T.Haque group have successfully created
                    a remarkable reputation for our organization by establishing
                    unrivaled quality, standard, and reliability in all our products
                    using state-of-the-art technology and best practices. Central to
                    this achievement has been our drive to exceed our customers'
                    and stakeholders' expectations.
                  </p>
                </blockquote>

                <div className="pt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-all duration-300 ease-in-out"
                  >
                    Learn More About Our Vision
                    <svg
                      className="w-5 h-5 hidden sm:block transform transition-transform duration-300 group-hover:translate-x-1"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOMessageSection;