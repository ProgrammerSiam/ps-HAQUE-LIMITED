// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// const NotFoundPage = () => {
//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
//             <motion.h1
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="text-6xl font-extrabold text-red-600"
//             >
//                 404
//             </motion.h1>

//             <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.3, duration: 0.8 }}
//                 className="text-xl text-gray-700 mt-4"
//             >
//                 Oops! The page you are looking for doesn’t exist.
//             </motion.p>

//             <motion.div
//                 initial={{ scale: 0.8 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: 0.6, duration: 0.5, type: "spring", stiffness: 120 }}
//             >
//                 <Link
//                     href="/"
//                     className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg text-lg transition"
//                 >
//                     Go Home
//                 </Link>
//             </motion.div>
//         </div>
//     );
// };

// export default NotFoundPage;


"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFoundPage() {
    const [glitch, setGlitch] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setGlitch((prev) => !prev);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative flex flex-col items-center justify-center h-screen bg-[#0D0D0D] text-white overflow-hidden">
            {/* Floating Particles */}
            <div className="absolute inset-0">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-red-500 rounded-full"
                        initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, opacity: 0 }}
                        animate={{ y: ["100vh", "-10vh"], opacity: [0, 1, 0] }}
                        transition={{ duration: Math.random() * 5 + 2, repeat: Infinity, delay: Math.random() * 3 }}
                    />
                ))}
            </div>

            {/* Animated 404 Text */}
            <motion.h1
                className={`text-9xl font-extrabold ${glitch ? "text-red-600" : "text-white"} transition-all duration-500`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                404
            </motion.h1>

            {/* Glitch Effect Text */}
            <motion.p
                className="mt-4 text-lg text-gray-400 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                The page you’re looking for doesn’t exist.
                <span
                    className="absolute top-0 left-0 w-full h-full bg-transparent text-red-500 blur-sm"
                    style={{ clipPath: "polygon(0 45%, 100% 55%, 100% 100%, 0 100%)" }}
                >
                    The page you’re looking for doesn’t exist.
                </span>
            </motion.p>

            {/* Glassmorphism Card */}
            <motion.div
                className="mt-10 px-10 py-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
            >
                <p className="text-white text-lg">You might want to go back home.</p>
            </motion.div>

            {/* Animated Button */}
            <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
            >
                <Link href="/">
                    <motion.button
                        className="relative px-6 py-3 text-lg font-bold bg-red-600 rounded-lg shadow-lg hover:bg-red-700 transition-all overflow-hidden"
                        whileHover={{
                            scale: 1.1,
                            boxShadow: "0px 0px 20px rgba(255, 0, 0, 0.8)",
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Go Home
                        {/* Hover Ripple Effect */}
                        <span className="absolute inset-0 bg-red-800 opacity-0 hover:opacity-20 transition duration-500"></span>
                    </motion.button>
                </Link>
            </motion.div>
        </div>
    );
}
