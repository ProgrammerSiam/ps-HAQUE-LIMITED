"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactSection() {
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

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/athaqueltd/",
      label: "Facebook",
    },
    { icon: Twitter, href: "https://x.com/AT_HAQUE", label: "Twitter" },
    {
      icon: Youtube,
      href: "https://www.youtube.com/channel/UCpWOsWwPxNnpYR_jX4Ms7-Q",
      label: "YouTube",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/haque-group-of-industries/",
      label: "LinkedIn",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-16 lg:py-24 overflow-hidden"
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
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <motion.div variants={itemVariants}>
            <motion.h2
              className="sm:text-4xl text-3xl font-bold tracking-tight mb-6"
              whileHover={{ scale: 1.02 }}
            >
              Don&apos;t be a stranger just say hello!
            </motion.h2>
            <motion.p
              className="_text text-muted-foreground mb-8 max-w-md"
              whileHover={{ scale: 1.01 }}
            >
              We&apos;d love to hear from you. Feel free to reach out with any
              questions, inquiries, or feedback.
            </motion.p>

            <motion.div className="space-y-6" variants={containerVariants}>
              <motion.div variants={itemVariants}>
                <motion.div
                  className="flex items-center gap-3 mb-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <Mail className="h-5 w-5 text-destructive" />
                  <h3 className="text-lg font-medium">Email</h3>
                </motion.div>
                <a
                  href="mailto:info@athaque.com"
                  className="text-destructive hover:underline pl-8"
                >
                  info@athaque.com
                </a>
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.div
                  className="flex items-center gap-3 mb-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <Phone className="h-5 w-5 text-destructive" />
                  <h3 className="text-lg font-medium">Phone</h3>
                </motion.div>
                <a
                  href="tel:+88-02-8891540"
                  className="text-destructive hover:underline pl-8"
                >
                  +88-02-8891540
                </a>
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.div
                  className="flex items-center gap-3 mb-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <MapPin className="h-5 w-5 text-destructive" />
                  <h3 className="text-lg font-medium">Address</h3>
                </motion.div>
                <p className="_text text-muted-foreground pl-8">
                  Haque Center,37,
                  <br />
                  Sahid Tajuddinn Ahmed Sarani,
                  <br /> Dhaka-1208, Bangladesh.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.div
                  className="flex items-center gap-3 mb-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <MessageSquare className="h-5 w-5 text-destructive" />
                  <h3 className="text-lg font-medium">Follow us</h3>
                </motion.div>
                <div className="flex space-x-4 pl-8">
                  {socialLinks.map((social) => (
                    <motion.div
                      key={social.label}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link
                        target="_blank"
                        href={social.href}
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        <social.icon className="h-5 w-5" />
                        <span className="sr-only">{social.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="pt-4 sm:max-w-[70%]"
                variants={itemVariants}
              >
                <p className="text-sm text-muted-foreground">
                  To provide your valuable Opinions / Complaints / Suggestions
                  direct to Managing Director (please send him an email or sms)
                </p>
                <div className="flex gap-8 mt-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4 text-destructive" />
                    <div>
                      <h3 className="text-sm font-medium">Email</h3>
                      <a
                        href="mailto:md@athaque.com"
                        className="text-destructive hover:underline text-sm"
                      >
                        md@athaque.com
                      </a>
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-2"
                  >
                    <Phone className="h-4 w-4 text-destructive" />
                    <div>
                      <h3 className="text-sm font-medium">Phone</h3>
                      <a
                        href="tel:+88-0196-9999022"
                        className="text-destructive hover:underline text-sm"
                      >
                        +88-0196-9999 022
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.div
              className="bg-card rounded-lg shadow-lg p-6 md:p-8 backdrop-blur-sm border border-primary/10"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h2
                className="text-2xl font-bold mb-6 flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
              >
                <MessageSquare className="h-6 w-6 text-destructive" />
                Contact us
              </motion.h2>

              <form className="space-y-4">
                <motion.div className="space-y-2" variants={itemVariants}>
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="mt-2 focus:ring-2 focus:ring-destructive/50 transition-all duration-200"
                  />
                </motion.div>

                <motion.div className="space-y-2" variants={itemVariants}>
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="mt-2 focus:ring-2 focus:ring-destructive/50 transition-all duration-200"
                  />
                </motion.div>

                <motion.div className="space-y-2" variants={itemVariants}>
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Subject"
                    className="mt-2 focus:ring-2 focus:ring-destructive/50 transition-all duration-200"
                  />
                </motion.div>

                <motion.div className="space-y-2" variants={itemVariants}>
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="min-h-[120px] mt-2 focus:ring-2 focus:ring-destructive/50 transition-all duration-200"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative group"
                  >
                    <Button
                      variant={"destructive"}
                      type="submit"
                      className="w-full relative overflow-hidden bg-gradient-to-r from-destructive to-destructive/80 hover:from-destructive/90 hover:to-destructive/70 transition-all duration-300"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-destructive/90 to-destructive/70"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-white/10"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{
                          duration: 0.5,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-white/5"
                        initial={{ x: "100%" }}
                        whileHover={{ x: "-100%" }}
                        transition={{
                          duration: 0.5,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: 0.25,
                        }}
                      />
                    </Button>
                  </motion.div>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
