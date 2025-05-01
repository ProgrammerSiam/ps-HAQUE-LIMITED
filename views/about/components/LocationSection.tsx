"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

export default function LocationSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="google_map"
      className="relative py-16 lg:py-24 overflow-hidden bg-muted/30"
      ref={sectionRef}
    >
      {/* Background geometric elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-red-600/5 rounded-full -mr-32 opacity-70"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gray-800/5 rounded-full -ml-40"></div>

        {/* Animated lines */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-red-600/10"
            style={{
              top: `${20 + i * 12}%`,
              left: "10%",
              right: "10%",
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={
              isInView
                ? {
                    scaleX: 1,
                    opacity: 0.5,
                    transition: {
                      duration: 1.2,
                      delay: 0.1 * i,
                      ease: "easeOut",
                    },
                  }
                : {}
            }
          />
        ))}
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="section_title">
            Our Location
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-3 mt-4"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MapPin className="h-6 w-6 text-destructive" />
            </motion.div>
            <motion.p
              className="section_sub_title"
              whileHover={{ scale: 1.02 }}
            >
              Visit us at our headquarters in Dhaka, Bangladesh
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full"
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="rounded-lg overflow-hidden shadow-lg h-[470px] backdrop-blur-sm bg-white/50"
              variants={itemVariants}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29211.71738581826!2d90.399629!3d23.766462!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c763b77905af%3A0xd6575d0f25b5c66d!2sHaque%20Food%20Industries%20Limited!5e0!3m2!1sen!2sus!4v1742865382234!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </motion.div>

            {/* Location info card */}
            <motion.div
              className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.5 },
                    }
                  : {}
              }
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="font-bold text-lg mb-2">
                Haque Food Industries Limited
              </h3>
              <p className="text-sm text-muted-foreground">
                123 Industrial Area, Dhaka, Bangladesh
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
