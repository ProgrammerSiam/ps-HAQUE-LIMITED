

"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { brandImg1 } from "@/constants/image";
import { brandImg2 } from "@/constants/image";
import { brandImg3 } from "@/constants/image";
import { brandImg4 } from "@/constants/image";
import { brandImg5 } from "@/constants/image";
import { brandImg6 } from "@/constants/image";
import SectionHeader from '@/components/Header';

const BrandsSection = () => {
    // Updated brand data using imported images
    const brands = [
        { id: 1, name: 'Brand 1', logo: brandImg1 },
        { id: 2, name: 'Brand 2', logo: brandImg2 },
        { id: 3, name: 'Brand 3', logo: brandImg3 },
        { id: 4, name: 'Brand 4', logo: brandImg4 },
        { id: 5, name: 'Brand 5', logo: brandImg5 },
        { id: 6, name: 'Brand 6', logo: brandImg6 }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const brandVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' }
        }
    };

    return (
        <section className="relative overflow-hidden bg-white py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <SectionHeader
                    title="Explore a Selection of"
                    description=''
                    highlightedText="Our Brands"
                    showDivider={true}
                    align="center"
                    titleSize="md"
                    animationDelay={0.2} // Optional delay before animation starts
                    viewportOnce={true} // Animate only once when coming into view
                    viewportMargin="-100px" // Start animation 100px before element comes into view

                />

                {/* Brands Container */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative mt-12 md:mt-16"
                >
                    {/* Gradient Masks */}
                    <div className="pointer-events-none absolute left-0 top-0 z-10 w-24 bg-gradient-to-r from-white" style={{ height: '100%' }} />
                    <div className="pointer-events-none absolute right-0 top-0 z-10 w-24 bg-gradient-to-l from-white" style={{ height: '100%' }} />

                    {/* Infinite Scroll Container */}
                    <div className="flex overflow-hidden">
                        <div className="flex gap-8 pr-8 py-2 flex-none animate-move-left [animation-duration:10s] hover:[animation-play-state:paused]">
                            {[...Array(2)].map((_, groupIndex) => (
                                <div key={groupIndex} className="flex gap-8">
                                    {brands.map((brand) => (
                                        <motion.div
                                            key={`${groupIndex}-${brand.id}`}
                                            variants={brandVariants}
                                            whileHover={{ y: -5, scale: 1.02 }}
                                            className="flex h-20 w-40 flex-shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md  lg:h-24 lg:w-44"
                                        >
                                            <Image
                                                src={brand.logo}
                                                alt={brand.name}
                                                // width={140}
                                                // height={60}
                                                className="max-h-full max-w-full object-contain"
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>


        </section>
    );
};

export default BrandsSection;