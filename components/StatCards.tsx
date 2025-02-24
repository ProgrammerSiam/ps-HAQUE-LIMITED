
"use client";
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { useInView } from "react-intersection-observer";

interface StatCardProps {
    icon: React.ReactNode;
    number: number;
    suffix: string;
    title: string;
    delay?: number;
}

const StatCard = ({ icon, number, suffix, title, delay = 0 }: StatCardProps) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    useEffect(() => {
        if (inView) {
            const duration = 2000;
            const startTime = Date.now();

            const animateCount = () => {
                const now = Date.now();
                const progress = Math.min((now - startTime) / duration, 1);

                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const currentCount = Math.floor(number * easeOutQuart);

                setCount(currentCount);

                if (progress < 1) {
                    requestAnimationFrame(animateCount);
                }
            };

            setTimeout(() => {
                requestAnimationFrame(animateCount);
            }, delay);
        }
    }, [inView, number, delay]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.6,
                delay: delay / 1000,
                ease: [0.22, 1, 0.36, 1]
            }}
            className="group backdrop-blur-sm bg-white/10 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
        >
            <motion.div
                initial={{ scale: 0.8 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: (delay + 200) / 1000
                }}
                className="mb-6 transform group-hover:scale-110 transition-transform duration-300"
            >
                {icon}
            </motion.div>

            <div className="text-center">
                <div className="text-4xl font-bold mb-3 tracking-tight">
                    <span className="tabular-nums text-white/95">{count}</span>
                    <span className="text-red-300">{suffix}</span>
                </div>
                <h3 className="text-sm font-medium tracking-wider text-gray-200">
                    {title}
                </h3>
            </div>
        </motion.div>
    );
};

export default StatCard;