// "use client";
// import { motion } from "framer-motion";
// import React, { useState, useEffect } from "react";
// import { useInView } from "react-intersection-observer";

// interface StatCardProps {
//   icon: React.ReactNode;
//   number: number;
//   suffix: string;
//   title: string;
//   delay?: number;
// }

// const StatCard = ({
//   icon,
//   number,
//   suffix,
//   title,
//   delay = 0,
// }: StatCardProps) => {
//   const [count, setCount] = useState(0);
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   useEffect(() => {
//     if (inView) {
//       const duration = 2000;
//       const startTime = Date.now();

//       const animateCount = () => {
//         const now = Date.now();
//         const progress = Math.min((now - startTime) / duration, 1);

//         // Easing function for smooth animation
//         const easeOutQuart = 1 - Math.pow(1 - progress, 4);
//         const currentCount = Math.floor(number * easeOutQuart);

//         setCount(currentCount);

//         if (progress < 1) {
//           requestAnimationFrame(animateCount);
//         }
//       };

//       setTimeout(() => {
//         requestAnimationFrame(animateCount);
//       }, delay);
//     }
//   }, [inView, number, delay]);

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 30 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{
//         duration: 0.6,
//         delay: delay / 1000,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       className="group backdrop-blur-sm bg-white/10 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
//     >
//       <motion.div
//         initial={{ scale: 0.8 }}
//         animate={inView ? { scale: 1 } : {}}
//         transition={{
//           type: "spring",
//           stiffness: 200,
//           damping: 20,
//           delay: (delay + 200) / 1000,
//         }}
//         className="mb-6 transform group-hover:scale-110 transition-transform duration-300"
//       >
//         {icon}
//       </motion.div>

//       <div className="text-center ">
//         <div className="text-4xl font-bold mb-3 tracking-tight">
//           <span className="tabular-nums text-white/95">{count}</span>
//           <span className="text-red-300">{suffix}</span>
//         </div>
//         <h3 className="text-sm font-medium tracking-wider text-gray-200">
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   );
// };

// export default StatCard;
"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface StatCardProps {
  icon: React.ReactNode;
  number: number;
  suffix: string;
  title: string;
  delay?: number;
}

/**
 * StatCard Component - White Variant
 * Modern, clean stat card with animations and hover effects
 */
const StatCard = ({
  icon,
  number,
  suffix,
  title,
  delay = 0,
}: StatCardProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
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
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative rounded-2xl p-8 transition-all duration-300 overflow-hidden bg-white shadow-md hover:shadow-lg border border-gray-100"
    >
      {/* Subtle gradient background that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Red accent corner */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-red-600/10 rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500 origin-top-right"></div>

      {/* Bottom left accent */}
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-600/5 rounded-tr-full transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 origin-bottom-left"></div>

      {/* Icon container with animations */}
      <motion.div
        initial={{ scale: 0.8 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          delay: (delay + 200) / 1000,
        }}
        className="mb-6 transform group-hover:scale-110 transition-transform duration-300 relative z-10"
      >
        {icon}
      </motion.div>

      {/* Content container */}
      <div className="text-center relative z-10">
        {/* Number with suffix */}
        <div className="flex items-center justify-center mb-2">
          <span className="text-4xl font-bold tabular-nums text-gray-900">
            {count}
          </span>
          <span className="text-red-600 ml-1 text-3xl font-semibold">
            {suffix}
          </span>
        </div>

        {/* Red divider line that expands on hover */}
        <div className="h-px w-8 bg-red-500 mx-auto mb-3 transition-all duration-500 group-hover:w-16"></div>

        {/* Title */}
        <h3 className="text-sm font-medium tracking-wider text-gray-600 uppercase transition-colors duration-300 group-hover:text-gray-900">
          {title}
        </h3>
      </div>

      {/* Optional subtle ring effect on hover */}
      <div className="absolute inset-0 rounded-2xl border border-red-500/0 group-hover:border-red-500/10 transition-all duration-500"></div>
    </motion.div>
  );
};

export default StatCard;
