"use client";
import { Award, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CompanyProfile() {
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

  const paragraphVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="company_profile"
      className="relative py-16 lg:py-24 overflow-hidden bg-white"
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
            Company Profile
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-3 mt-4"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Award className="h-6 w-6 text-destructive" />
            </motion.div>
            <motion.span
              className="text-lg font-medium italic"
              whileHover={{ scale: 1.02 }}
            >
              Trusted by millions since 1947
            </motion.span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div
            className="bg-destructive/5 p-6 rounded-lg border border-primary/10 max-w-4xl mx-auto backdrop-blur-sm"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex items-center gap-3 mb-6"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <BookOpen className="h-6 w-6 text-destructive" />
              </motion.div>
              <motion.h3
                className="text-2xl font-bold"
                whileHover={{ scale: 1.02 }}
              >
                Our History
              </motion.h3>
            </motion.div>
            <motion.div className="space-y-6" variants={containerVariants}>
              {[
                "A 1947 company, A.T. Haque Limited is the most trusted and highly admired biscuits, chips, confectionery, soap, and battery manufacturer in Bangladesh. Visionary Barrister Tamizul Haque established its first factory at Tejgaon in January 1957. World known HAAS-HECRONA, NISSHIN RYOKI and BAKER PERKINS are the three modern machinery to produce Mr. Cookie, Cream Crackers, Bourbon, and Digestive Biscuits in this factory.",
                "In January 1965, the carbide factory 'Haque Carbide' was established at Tongi. 'Haque Battery 786' is one of the renowned brand back then from Haque carbide. Soap plant was started in July, 1988 in Tongi and Haque is the contract-manufacturer of renowned Branded Soap, such as Dettol, Savlon, Cute, Meril, Neem, Cinthol & Santoor. The dry cell factory is in operation since September, 1994 at Tongi, Dhaka.",
                "Haque has got 'V- 60' plant from the globally reputed and Giant biscuit-machine manufacturer 'HAAS' to produce oven fresh cookies like Kheer Malai, Sor Malai, Super Bite and Romancio Cookies in 2016.",
                "To respond to the Huge Market Demand, Haque went for two-folded Capacity Expansion with purchasing another Machine 'GF-2' from HAAS.",
                "A. T. Haque Ltd. is producing world renowned paint company Berger paints Bangladesh Limited's cement paint Durocem, Robbialac Wall Putty, Breathe Easy Wall Putty, Mr. Expert Latex Plus, Illusions and Power Bond DDL since 2011. Late Barrister Tamizul Haque was the founder Chairman of A. T. Haque Ltd. Josna Adam Haque is the Chairman of A. T. Haque Ltd. Now the growth-vision of overall business is persuaded by the inspiration and strategic direction of Adam Tamizi Haque, the Managing Director of A.T. Haque Ltd.",
                "Haque is the symbol of faith and trust to the consumers of Bangladesh backed by the strength of quality-products and consumer-orientation. Haque values the contribution of its people and always patronize their development.",
              ].map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={paragraphVariants}
                  className="_text text-muted-foreground"
                  whileHover={{ scale: 1.01 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20"
        >
          <motion.h3
            variants={itemVariants}
            className="section_title mb-10 text-center"
          >
            Our Manufacturing Excellence
          </motion.h3>

          <motion.div
            className="relative aspect-video w-full overflow-hidden rounded-xl shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/GaUSi0ubfIw?si=O5LRt6BmnUKrCIfS"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-xl"
            ></iframe>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
