

"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { achievementImg1, achievementImg2, achievementImg3, achievementImg4, logo } from "@/constants/image";
import StatCard from "@/components/StatCards";


const AchievementStatsSection = () => {
    const stats = [
        {
            icon: <Image src={achievementImg1} alt="Products" width={64} height={64} className="mx-auto" />,
            number: 84,
            suffix: "+",
            title: "HAQUE PRODUCTS"
        },
        {
            icon: <Image src={achievementImg2} alt="Workers" width={64} height={64} className="mx-auto" />,
            number: 1073,
            suffix: "+",
            title: "OUR WORKERS"
        },
        {
            icon: <Image src={achievementImg3} alt="Brands" width={64} height={64} className="mx-auto" />,
            number: 50,
            suffix: "+",
            title: "BRANDS"
        },
        {
            icon: <Image src={achievementImg4} alt="Factories" width={64} height={64} className="mx-auto" />,
            number: 2,
            suffix: "",
            title: "FACTORIES"
        }
    ];

    return (
        <section className="relative  py-16 lg:py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-700 via-red-600 to-red-500" />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"
            />

            <div className="container relative mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16">
                    {/* Header Content */}
                    <div className="max-w-xl">
                        <div
                            // initial={{ opacity: 0, x: -20 }}
                            // whileInView={{ opacity: 1, x: 0 }}
                            // viewport={{ once: true }}
                            // transition={{ duration: 0.6 }}
                            className="mb-8"
                        >
                            <Image
                                src={logo}
                                alt="Haque Logo"
                                width={180}
                                height={180}
                            // className="brightness invert"
                            />
                        </div>

                        <div
                            // initial={{ opacity: 0, y: 20 }}
                            // whileInView={{ opacity: 1, y: 0 }}
                            // viewport={{ once: true }}
                            // transition={{ delay: 0.2, duration: 0.6 }}
                            className="space-y-6"
                        >
                            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
                                Our Achievements
                            </h2>
                            <div className="w-20 h-1 bg-red-400" />
                            <p className="text-xl text-gray-100 leading-relaxed">
                                A.T. Haque Limited stands as Bangladesh's most trusted and highly admired leader in manufacturing excellence, setting new standards in innovation and quality since our inception.
                            </p>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:max-w-3xl flex-1">
                        {stats.map((stat, index) => (
                            <StatCard
                                key={stat.title}
                                {...stat}
                                delay={index * 100}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AchievementStatsSection;
