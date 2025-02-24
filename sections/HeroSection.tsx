


"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { hero } from "@/constants/image";

const slides = [
    {
        image: hero,
        title: "A.T. HAQUE LIMITED",
        subtitle: "EXCELLENCE IN MANUFACTURING",
        description: "Leading biscuit, confectionery, soap and battery manufacturer in Bangladesh.",
        ctaText: "EXPLORE OUR PRODUCTS",
    },
    {
        image: hero,
        title: "QUALITY & INNOVATION",
        subtitle: "TRUSTED BY MILLIONS",
        description: "Delivering excellence through innovation and quality since our inception.",
        ctaText: "DISCOVER MORE",
    },
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const timer = setInterval(handleNext, 5000);
        return () => clearInterval(timer);
    }, [currentSlide, isAutoPlaying]);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <section
            className="relative h-[85vh] md:h-[95vh] overflow-hidden group "


            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            {/* Background Pattern */}
            <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.2),rgba(0,0,0,0.4))] pointer-events-none" />

            {slides.map((slide, index) => (
                <AnimatePresence key={index}>
                    {index === currentSlide && (
                        <motion.div
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                style={{ objectFit: "cover" }}
                                priority={index === 0}
                                className="transition-transform duration-[3000ms] transform scale-100 group-hover:scale-105"
                            />
                            {/* Enhanced Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/75" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

                            {/* Animated Lines */}
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-slide-right" />
                                <div className="absolute right-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-slide-left" />
                            </div>

                            {/* Content Container */}
                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white"
                            >
                                {/* Decorative Element */}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.8, duration: 1 }}
                                    className="w-20 h-1 bg-gradient-to-r from-transparent via-white to-transparent mb-6"
                                />

                                {/* Subtitle */}
                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.8 }}
                                    className="text-sm md:text-base tracking-[0.3em] text-white/80 mb-4 font-light"
                                >
                                    {slide.subtitle}
                                </motion.p>

                                {/* Title */}
                                <motion.h1
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.7, duration: 0.8 }}
                                    className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-center drop-shadow-lg"
                                >
                                    {slide.title}
                                </motion.h1>

                                {/* Description */}
                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.8, duration: 0.8 }}
                                    className="text-lg md:text-2xl mb-12 max-w-2xl text-center leading-relaxed text-white/90"
                                >
                                    {slide.description}
                                </motion.p>

                                {/* CTA Button */}
                                <Link href="/about">
                                    <motion.button
                                        whileHover={{
                                            scale: 1.05,
                                            backgroundColor: "rgba(255, 255, 255, 1)",
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        className="relative overflow-hidden group/btn bg-white/10 backdrop-blur-md hover:bg-white hover:text-gray-900 border border-white/30 text-white px-10 py-4 rounded-full text-lg md:text-xl font-semibold transition-all duration-500"
                                    >
                                        <span className="relative z-10">{slide.ctaText}</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
                                    </motion.button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            ))}

            {/* Enhanced Navigation Arrows */}
            <div className={`absolute hidden inset-x-0 top-1/2 md:flex items-center justify-between px-4 transform -translate-y-1/2 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handlePrev}
                    className="group/nav bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full p-4 transition-all duration-300 border border-white/20"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white transition-transform duration-300 group-hover/nav:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleNext}
                    className="group/nav bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full p-4 transition-all duration-300 border border-white/20"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white transition-transform duration-300 group-hover/nav:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </motion.button>
            </div>

            {/* Enhanced Progress Indicators */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center space-x-4 z-20">
                {slides.map((_, idx) => (
                    <motion.button
                        key={idx}
                        whileHover={{ scale: 1.2 }}
                        onClick={() => setCurrentSlide(idx)}
                        className="group/indicator"
                    >
                        <div className={`w-12 h-1 rounded-full transition-all duration-500 ${idx === currentSlide
                            ? "bg-white"
                            : "bg-white/30 group-hover/indicator:bg-white/50"
                            }`} />
                    </motion.button>
                ))}
            </div>

            {/* Auto-play Control */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="absolute bottom-8 right-8 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full p-3 transition-all duration-300 border border-white/20"
            >
                {isAutoPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                )}
            </motion.button>
        </section>
    );
};

export default Hero;