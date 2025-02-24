
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { logo } from '@/constants/image';

const Footer = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info Section */}
          <motion.div {...fadeInUp} className="space-y-6">
            <Image
              src={logo}
              alt="Haque Logo"
              width={120}
              height={75}
              className=""
            />
            <p className="text-gray-400 leading-relaxed pr-4">
              Delivering excellence through innovation and quality since 1975. Your trusted partner in industrial solutions.
            </p>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="text-white">Quick Links</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-600"></span>
            </h3>
            <ul className="space-y-3">
              {['Home', 'Our Products', 'About Us', 'Contact', 'FAQ'].map((item, index) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Location Section */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="text-white">Our Location</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-600"></span>
            </h3>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">HAQUE CENTRE</h4>
              <p className="text-gray-400 leading-relaxed">
                37, Sahid Tajuddinn Ahmed Sarani,
                <br />Tejgaon (New) 340-341,
                <br />Tejgaon Industrial Area,
                <br />Dhaka-1208, Bangladesh
              </p>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="text-white">Connect With Us</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-600"></span>
            </h3>

            <div className="space-y-4">
              <motion.a
                href="tel:+88-02-9931840"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200"
                whileHover={{ x: 6 }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +88-02-9931840
              </motion.a>

              <motion.a
                href="mailto:info@athaque.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200"
                whileHover={{ x: 6 }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@athaque.com
              </motion.a>

              <div className="flex gap-4 pt-4">
                {['facebook', 'instagram', 'twitter', 'linkedin'].map((social, index) => (
                  <motion.a
                    key={social}
                    href={`https://${social}.com`}
                    className="bg-gray-800 hover:bg-red-600 p-2.5 rounded-full transition-colors duration-200"
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      {social === 'facebook' && <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />}
                      {social === 'instagram' && <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.8c-2.67 0-2.987.01-4.04.059-.976.045-1.505.207-1.858.344-.466.181-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.054-.058 1.37-.058 4.041 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.858.181.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.181.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.048-1.37-.058-4.041-.058zm0 3.08a5.12 5.12 0 110 10.24 5.12 5.12 0 010-10.24zm0 8.44a3.32 3.32 0 100-6.64 3.32 3.32 0 000 6.64zm6.53-8.44a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />}
                      {social === 'twitter' && <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />}
                      {social === 'linkedin' && <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />}
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} <Link href="/" className="text-white hover:text-red-600 transition-colors duration-200">Faarns.ltd</Link>. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;