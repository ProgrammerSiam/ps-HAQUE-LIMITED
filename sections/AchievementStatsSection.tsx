

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
        <section className="relative py-24 overflow-hidden">
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
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-8"
                        >
                            <Image
                                src={logo}
                                alt="Haque Logo"
                                width={180}
                                height={180}
                            // className="brightness invert"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="space-y-6"
                        >
                            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
                                Our Achievements
                            </h2>
                            <div className="w-20 h-1 bg-red-400" />
                            <p className="text-xl text-gray-100 leading-relaxed">
                                A.T. Haque Limited stands as Bangladesh's most trusted and highly admired leader in manufacturing excellence, setting new standards in innovation and quality since our inception.
                            </p>
                        </motion.div>
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

// import React from "react";

// import { Card, CardContent } from "@/components/ui/card";

// const AchievementStatsSection = () => {
//     const stats = [
//         {
//             icon: <Image src={achievementImg1} alt="Products" width={64} height={64} className="mx-auto" />,
//             number: 84,
//             suffix: "+",
//             title: "HAQUE PRODUCTS",
//             description: "Diverse range of quality products"
//         },
//         {
//             icon: <Image src={achievementImg2} alt="Workers" width={64} height={64} className="mx-auto" />,
//             number: 1073,
//             suffix: "+",
//             title: "OUR WORKERS",
//             description: "Dedicated team members"
//         },
//         {
//             icon: <Image src={achievementImg3} alt="Brands" width={64} height={64} className="mx-auto" />,
//             number: 50,
//             suffix: "+",
//             title: "BRANDS",
//             description: "Trusted brand portfolio"
//         },
//         {
//             icon: <Image src={achievementImg4} alt="Factories" width={64} height={64} className="mx-auto" />,
//             number: 2,
//             suffix: "",
//             title: "FACTORIES",
//             description: "State-of-the-art facilities"
//         }
//     ];

//     return (
//         <section className="relative py-24 overflow-hidden">
//             {/* Enhanced Gradient Background */}
//             <div className="absolute inset-0 bg-gradient-to-br from-red-800 via-red-700 to-red-600" />

//             {/* Animated Pattern Overlay */}
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1.5 }}
//                 className="absolute inset-0"
//                 style={{
//                     backgroundImage: `
//                         radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 10%),
//                         radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 10%)
//                     `,
//                     backgroundSize: "80px 80px",
//                 }}
//             />

//             <div className="container relative mx-auto px-4 lg:px-8">
//                 <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16">
//                     {/* Header Content */}
//                     <div className="max-w-xl">
//                         <motion.div
//                             initial={{ opacity: 0, x: -20 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.8 }}
//                             className="mb-8"
//                         >
//                             <Image
//                                 src={logo}
//                                 alt="Haque Logo"
//                                 width={180}
//                                 height={180}
//                                 className="drop-shadow-xl"
//                             />
//                         </motion.div>

//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ delay: 0.3, duration: 0.8 }}
//                             className="space-y-8"
//                         >
//                             <div className="space-y-4">
//                                 <h2 className="text-4xl lg:text-5xl font-bold text-white drop-shadow-sm">
//                                     Our Achievements
//                                 </h2>
//                                 <div className="w-24 h-1.5 bg-gradient-to-r from-red-400 to-red-300 rounded-full" />
//                             </div>
//                             <p className="text-xl text-gray-100 leading-relaxed font-light">
//                                 A.T. Haque Limited stands as Bangladesh's most trusted and highly admired leader in manufacturing excellence, setting new standards in innovation and quality since our inception.
//                             </p>
//                         </motion.div>
//                     </div>

//                     {/* Stats Grid */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:max-w-3xl flex-1">
//                         {stats.map((stat, index) => (
//                             <motion.div
//                                 key={stat.title}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
//                             >
//                                 <div className="relative overflow-hidden group hover:shadow-xl transition-shadow duration-300 border-red-200/10 bg-white/10 backdrop-blur-sm">
//                                     <div className="p-6 text-center">
//                                         {/* Hover Effect Background */}
//                                         <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                                         {/* Content */}
//                                         <div className="relative space-y-4">
//                                             <motion.div
//                                                 whileHover={{ scale: 1.1 }}
//                                                 transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                                                 className="mb-6"
//                                             >
//                                                 {stat.icon}
//                                             </motion.div>

//                                             <div className="space-y-2">
//                                                 <div className="flex items-center justify-center gap-1">
//                                                     <span className="text-4xl font-bold text-white">
//                                                         {stat.number}
//                                                     </span>
//                                                     <span className="text-2xl font-semibold text-red-300">
//                                                         {stat.suffix}
//                                                     </span>
//                                                 </div>
//                                                 <h3 className="text-lg font-semibold text-red-100">
//                                                     {stat.title}
//                                                 </h3>
//                                                 <p className="text-sm text-red-200/80">
//                                                     {stat.description}
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AchievementStatsSection;