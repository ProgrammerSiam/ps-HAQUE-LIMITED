"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Heart, Target, Eye, User } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CompanyValues() {
  const ref = useRef(null);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const values = [
    {
      icon: <Target className="h-10 w-10 text-destructive" />,
      title: "Mission",
      description:
        "To improve the quality of life of families in our selected markets by providing affordably made world class products.",
    },
    {
      icon: <Eye className="h-10 w-10 text-destructive" />,
      title: "Vision",
      description:
        "Our vision is to serve our consumers with high variety of products at an affordable price and on time delivery while maintaining strategic partnership with the suppliers and becoming employer of choice.",
    },
    {
      icon: <Heart className="h-10 w-10 text-destructive" />,
      title: "Integrity",
      description:
        "Building trust with consumers, communities and suppliers by fulfilling promises of quality and quantity, complying with regulations and laws, and honoring rules of engagement.",
    },
    {
      icon: <User className="h-10 w-10 text-destructive" />,
      title: "Ownership",
      description:
        "Taking personal responsibility for the outcome by anticipating needs, being resourceful and following through until the goal is accomplished.",
    },
    {
      icon: <Users className="h-10 w-10 text-destructive" />,
      title: "Teamwork",
      description:
        "Working across organizational and cultural boundaries to achieve extraordinary performance and deliver to consumers.",
    },
    {
      icon: <Award className="h-10 w-10 text-destructive" />,
      title: "Excellence",
      description:
        "Building a culture based on excellence in thought and in execution to better serve consumers.",
    },
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: { duration: 0.3 },
    },
  };

  // Icon variants for hover state propagation
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <section
      id="company_values"
      className="relative py-16 lg:py-24 overflow-hidden"
      ref={sectionRef}
    >
      {/* Background geometric elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-red-600/5 rounded-full -mr-32 opacity-70"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gray-800/5 rounded-full -ml-40"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="section_title">
            Our Core Values
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-4 section_sub_title">
            The principles that guide our organization and define who we are
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="lg:w-[80%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover" // This is the critical line that was missing
            >
              <Card className="border-none shadow-md group bg-white/95 backdrop-blur-sm hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <motion.div
                    className="mb-6 p-4 rounded-full bg-destructive/10"
                    variants={iconVariants}
                  >
                    {/* Wrap the icon to apply color transition */}
                    <motion.div
                      variants={{
                        hover: { color: "#ef4444" },
                      }}
                    >
                      {value.icon}
                    </motion.div>
                  </motion.div>
                  <motion.h3 className="text-xl font-bold mb-3 text-gray-900">
                    {value.title}
                  </motion.h3>
                  <motion.p className="_text text-muted-foreground">
                    {value.description}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
