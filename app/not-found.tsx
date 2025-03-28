"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function NotFoundPage() {
  const [glitch, setGlitch] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle glitch effect timing
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  // Track mouse position for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { clientX, clientY } = e;
        const { width, height, left, top } =
          containerRef.current.getBoundingClientRect();

        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;

        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Countdown timer for auto-redirect
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  // Auto redirect when countdown reaches zero
  useEffect(() => {
    if (countdown === 0) {
      window.location.href = "/";
    }
  }, [countdown]);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden"
    >
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTAgMEg0MGExMCAxMCAwIDAgMSAxMCAxMFYwWk0wIDUwVjQwYTEwIDEwIDAgMCAxIDEwIDEwSDBaIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] opacity-40"></div>

      {/* Advanced Floating Particles */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-${Math.random() > 0.8 ? 3 : Math.random() > 0.4 ? 2 : 1} h-${Math.random() > 0.8 ? 3 : Math.random() > 0.4 ? 2 : 1} ${i % 4 === 0 ? "bg-red-500" : i % 4 === 1 ? "bg-blue-500" : i % 4 === 2 ? "bg-purple-500" : "bg-white"} rounded-full`}
          initial={{
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
            opacity: 0,
          }}
          animate={{
            y: [
              `${100 + Math.random() * 20}vh`,
              `-${10 + Math.random() * 20}vh`,
            ],
            x: [`${Math.random() * 100}vw`, `${Math.random() * 100}vw`],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}

      {/* Parallax Container */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        style={{
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
        }}
        transition={{ type: "spring", damping: 15 }}
      >
        {/* Glitch Effect 404 Number */}
        <div className="relative">
          <motion.h1
            className="text-9xl md:text-[12rem] font-black text-white relative z-10"
            initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
          >
            404
          </motion.h1>

          <AnimatePresence>
            {glitch && (
              <>
                <motion.h1
                  className="text-9xl md:text-[12rem] font-black text-red-600 absolute top-0 left-0 z-0 opacity-70"
                  initial={{ x: 0 }}
                  animate={{ x: [-4, 5, -5, 3, 0] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  404
                </motion.h1>
                <motion.h1
                  className="text-9xl md:text-[12rem] font-black text-blue-600 absolute top-0 left-0 z-0 opacity-70"
                  initial={{ x: 0 }}
                  animate={{ x: [5, -3, 6, -2, 0] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  404
                </motion.h1>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Enhanced Error Message */}
        <motion.div
          className="relative mt-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-200 mb-2">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-400 max-w-md">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          {glitch && (
            <motion.div
              className="absolute top-0 left-0 w-full h-full text-red-500 opacity-70"
              style={{
                clipPath: "polygon(0 45%, 100% 55%, 100% 100%, 0 100%)",
                filter: "blur(2px)",
              }}
              initial={{ x: 0 }}
              animate={{ x: [-2, 3, -3, 2, 0] }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
              <p className="text-lg max-w-md">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* 3D Card with Suggestions */}
      <motion.div
        className="mt-12 w-full max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          x: mousePosition.x * -10,
          y: mousePosition.y * -10,
        }}
      >
        <motion.div
          className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-white/10 shadow-xl"
          whileHover={{
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
          }}
          style={{
            rotateX: mousePosition.y * 5,
            rotateY: mousePosition.x * -5,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="text-center mb-4">
            <p className="text-lg text-gray-200">
              You&apos;ll be redirected in{" "}
              <span className="text-red-500 font-bold">{countdown}</span>{" "}
              seconds
            </p>
          </div>

          <div className="space-y-3 mb-6">
            <p className="text-gray-300 text-center">Or choose an option:</p>
            <div className="flex space-x-4 justify-center">
              <motion.button
                className="px-2 py-1 rounded-lg bg-gray-700/50 text-white/70 text-sm flex items-center space-x-1 hover:bg-gray-600/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span>Home</span>
              </motion.button>

              <motion.button
                className="px-2 py-1 rounded-lg bg-gray-700/50 text-white/70 text-sm flex items-center space-x-1 hover:bg-gray-600/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span>Search</span>
              </motion.button>

              <motion.button
                className="px-2 py-1 rounded-lg bg-gray-700/50 text-white/70 text-sm flex items-center space-x-1 hover:bg-gray-600/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Contact</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Primary Action Button */}
      <motion.div
        className="mt-8 relative z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
      >
        <Link href="/">
          <motion.button
            className="group relative px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-red-700 to-red-500 rounded-lg shadow-lg overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 30px rgba(255, 0, 0, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>Return Home</span>
              <motion.span
                animate={{ x: isHovering ? 5 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                →
              </motion.span>
            </span>

            {/* Button Glow Effect */}
            <motion.div
              className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-red-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.5, opacity: 0.3 }}
              transition={{ duration: 0.4 }}
            />

            {/* Button Border Gradient */}
            <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 opacity-30 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-500" />
          </motion.button>
        </Link>
      </motion.div>

      {/* Fancy Scanlines Effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9InBhdHRlcm4iIHdpZHRoPSIxIiBoZWlnaHQ9IjIiIHZpZXdCb3g9IjAgMCAxIDIiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMDAwIiBvcGFjaXR5PSIwLjAzIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz4KPC9zdmc+')] opacity-30 mix-blend-overlay pointer-events-none"></div>
    </div>
  );
}
