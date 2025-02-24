


"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { hero } from '@/constants/image';

const NewsletterSection = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        console.log('Subscribed with email:', email);
        setTimeout(() => {
            setEmail('');
            setIsSubmitted(false);
        }, 3000);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section className="relative overflow-hidden bg-gray-50 py-24">
            {/* Background Image with Parallax Effect */}
            <motion.div
                className="absolute inset-0 z-0"
                animate={{
                    scale: isHovered ? 1.05 : 1
                }}
                transition={{ duration: 0.8 }}
            >
                <Image
                    src={hero}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="right"
                    className="opacity-[1] transition-opacity duration-500"
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40  via-black/50  to-transparent" />
            </motion.div>

            {/* Content Container */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
            >
                <div className="mx-auto max-w-2xl">
                    {/* Header */}
                    <motion.div variants={itemVariants} className="text-center">
                        <motion.h2
                            className="font-heading mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Join Our <span className="text-red-600">Newsletter</span>
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            className="mx-auto mb-8 max-w-xl text-lg text-white"
                        >
                            Stay updated with the latest information on events, sales, and exclusive offers.
                            Be the first to know about our newest products and special promotions.
                        </motion.p>
                    </motion.div>

                    {/* Subscription Form */}
                    <motion.div variants={itemVariants}>
                        <form onSubmit={handleSubmit} className="relative">
                            <div className="overflow-hidden rounded-full  bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
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
                                        className="bg-red-600 px-2 sm:px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-red-700 focus:outline-none "
                                    >
                                        Subscribe
                                    </motion.button>
                                </div>
                            </div>
                        </form>

                        {/* Success Message */}
                        <AnimatePresence>
                            {isSubmitted && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="mt-4 text-center text-sm font-medium text-white"
                                >
                                    Thank you for subscribing! We'll keep you updated with our latest news.
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