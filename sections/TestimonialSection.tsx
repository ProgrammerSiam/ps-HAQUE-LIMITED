"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import SectionHeader from "@/components/Header";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "Global Brands Inc.",
    image: "/testimonial-1.jpg",
    quote:
      "The quality of products from PRAN-RFL has consistently exceeded our expectations. Their commitment to excellence and innovation has made them our trusted partner for years.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Supply Chain Manager",
    company: "Retail Solutions",
    image: "/testimonial-2.jpg",
    quote:
      "What impresses me most about PRAN-RFL is their ability to deliver high-quality products at competitive prices. Their customer service and reliability are unmatched in the industry.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amina Patel",
    role: "CEO",
    company: "Consumer Goods Direct",
    image: "/testimonial-3.jpg",
    quote:
      "Partnering with PRAN-RFL has been a game-changer for our business. Their innovative products, timely delivery, and responsive team have helped us grow our market share significantly.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Okonkwo",
    role: "Operations Director",
    company: "Continental Distributors",
    image: "/testimonial-4.jpg",
    quote:
      "We've been working with PRAN-RFL for over five years, and they've proven to be an exceptional partner. Their quality control is impeccable, and they consistently deliver on their promises.",
    rating: 4,
  },
  {
    id: 5,
    name: "Emily Rodriguez",
    role: "Procurement Manager",
    company: "Global Food Chain",
    image: "/testimonial-5.jpg",
    quote:
      "The consistency and reliability of PRAN-RFL products make them an ideal supplier for our business. Their team is responsive, proactive and always willing to go the extra mile.",
    rating: 5,
  },
  {
    id: 6,
    name: "Robert Kim",
    role: "Retail Director",
    company: "Premier Stores Ltd.",
    image: "/testimonial-6.jpg",
    quote:
      "PRAN-RFL has transformed how we approach our product offerings. The excellent quality and competitive pricing have helped us increase customer satisfaction and loyalty significantly.",
    rating: 5,
  },
];

// Duplicate testimonials for the second row
const testimonials2 = [...testimonials].reverse();

// Create tripled arrays for seamless infinite scrolling
const tripleTestimonials1 = [...testimonials, ...testimonials, ...testimonials];
const tripleTestimonials2 = [
  ...testimonials2,
  ...testimonials2,
  ...testimonials2,
];

const TestimonialSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const controls = useAnimation();

  // Animation references
  const row1AnimRef = useRef<number | null>(null);
  const row2AnimRef = useRef<number | null>(null);

  // Animation speeds in pixels per second
  const row1Speed = 30;
  const row2Speed = 40;

  // Width of a single card including margin (in pixels)
  const cardWidth = 320;

  // Total width of the original testimonials set (used for resetting loop position)
  const totalWidth1 = testimonials.length * cardWidth;
  const totalWidth2 = testimonials2.length * cardWidth;

  // Initialize animations when component mounts and section is in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");

      // Start animations if not already running
      if (!row1AnimRef.current) startRow1Animation();
      if (!row2AnimRef.current) startRow2Animation();
    }

    return () => {
      // Clean up animations on unmount
      if (row1AnimRef.current) cancelAnimationFrame(row1AnimRef.current);
      if (row2AnimRef.current) cancelAnimationFrame(row2AnimRef.current);
    };
  }, [isInView]);

  // Handle row hover/unhover
  useEffect(() => {
    // When row 1 is hovered, pause its animation
    if (hoveredRow === 1) {
      if (row1AnimRef.current) {
        cancelAnimationFrame(row1AnimRef.current);
        row1AnimRef.current = null;
      }
    }
    // When row 1 is unhovered, restart its animation
    else if (hoveredRow !== 1 && !row1AnimRef.current && isInView) {
      startRow1Animation();
    }

    // When row 2 is hovered, pause its animation
    if (hoveredRow === 2) {
      if (row2AnimRef.current) {
        cancelAnimationFrame(row2AnimRef.current);
        row2AnimRef.current = null;
      }
    }
    // When row 2 is unhovered, restart its animation
    else if (hoveredRow !== 2 && !row2AnimRef.current && isInView) {
      startRow2Animation();
    }
  }, [hoveredRow, isInView]);

  // Row 1 animation (right to left)
  const startRow1Animation = () => {
    let lastTimestamp: number | null = null;
    let xPosition = -1 * totalWidth1;

    if (row1Ref.current) {
      const transform = row1Ref.current.style.transform;
      xPosition = parseFloat(
        transform?.match(/-?\d+\.?\d*/)?.[0] || `${-1 * totalWidth1}`
      );
    }

    const animate = (timestamp: number) => {
      if (lastTimestamp === null) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      // Calculate new position based on elapsed time and speed
      xPosition += (row1Speed * elapsed) / 1000;

      // Reset position when we complete a cycle for infinite loop
      if (xPosition >= 0) {
        xPosition = -1 * totalWidth1;
      }

      // Apply the transformation
      if (row1Ref.current) {
        row1Ref.current.style.transform = `translateX(${xPosition}px)`;
      }

      // Continue the animation
      row1AnimRef.current = requestAnimationFrame(animate);
    };

    row1AnimRef.current = requestAnimationFrame(animate);
  };

  // Row 2 animation (left to right)
  const startRow2Animation = () => {
    let lastTimestamp: number | null = null;
    let xPosition = 0;

    if (row2Ref.current) {
      const transform = row2Ref.current.style.transform;
      xPosition = parseFloat(transform?.match(/-?\d+\.?\d*/)?.[0] || "0");
    }

    const animate = (timestamp: number) => {
      if (lastTimestamp === null) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      // Calculate new position based on elapsed time and speed
      xPosition -= (row2Speed * elapsed) / 1000;

      // Reset position when we complete a cycle for infinite loop
      if (xPosition < -1 * totalWidth2) {
        xPosition = 0;
      }

      // Apply the transformation
      if (row2Ref.current) {
        row2Ref.current.style.transform = `translateX(${xPosition}px)`;
      }

      // Continue the animation
      row2AnimRef.current = requestAnimationFrame(animate);
    };

    row2AnimRef.current = requestAnimationFrame(animate);
  };

  // Handle card hover
  const handleCardHover = (
    cardId: string,
    isHovering: boolean,
    rowIndex: number
  ) => {
    if (isHovering) {
      setHoveredCard(cardId);
      setHoveredRow(rowIndex);
    } else {
      setHoveredCard(null);
      setHoveredRow(null);
    }
  };

  // Handle rating hover
  const handleRatingHover = (rating: number) => {
    setHoveredRating(rating);
  };

  // Handle mouse enter/leave for rows
  const handleRowMouseEnter = (rowIndex: number) => {
    setHoveredRow(rowIndex);
  };

  const handleRowMouseLeave = () => {
    setHoveredRow(null);
  };

  // Handle scroll events
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const scrollLeft = target.scrollLeft;
    const scrollWidth = target.scrollWidth;
    const clientWidth = target.clientWidth;

    // Check if we've scrolled to the end
    if (scrollLeft + clientWidth >= scrollWidth) {
      // Reset scroll position to create infinite scroll effect
      target.scrollLeft = 0;
    }
  };

  // Generate star rating UI
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <motion.span
        key={index}
        className={`text-2xl ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        whileHover={{ scale: 1.2 }}
        onMouseEnter={() => handleRatingHover(index + 1)}
        onMouseLeave={() => setHoveredRating(null)}
      >
        ★
      </motion.span>
    ));
  };

  // Animation variants for header elements
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

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  const cardVariants = {
    hover: {
      y: -15,
      scale: 1.03,
      zIndex: 10,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-red-50 rounded-full -mr-32 opacity-70"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gray-100 rounded-full -ml-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute h-px bg-red-100"
              style={{
                top: `${20 + i * 12}%`,
                left: "10%",
                right: "10%",
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={controls}
              variants={{
                hidden: { scaleX: 0, opacity: 0 },
                visible: {
                  scaleX: 1,
                  opacity: 0.5,
                  transition: {
                    duration: 1.2,
                    delay: 0.1 * i,
                    ease: "easeOut",
                  },
                },
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 ">
        {/* Section Header */}
        <SectionHeader
          title="What Our "
          description="Explore a selection of our brands"
          highlightedText="Clients Say"
          showDivider={true}
          align="center"
          titleSize="md"
          animationDelay={0.2}
          viewportOnce={true}
          viewportMargin="-100px"
        />

        {/* First Row - Scrolls Right to Left */}
        <div
          className="relative overflow-hidden mt-12 md:mt-16"
          onMouseEnter={() => handleRowMouseEnter(1)}
          onMouseLeave={handleRowMouseLeave}
        >
          {/* Gradient Masks */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 w-16 md:w-32 bg-gradient-to-r from-white to-transparent h-full" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 w-16 md:w-32 bg-gradient-to-l from-white to-transparent h-full" />

          <div
            ref={row1Ref}
            className="flex space-x-6 py-4 will-change-transform"
            style={{ transform: `translateX(${-1 * totalWidth1}px)` }}
          >
            {tripleTestimonials1.map((testimonial, idx) => (
              <motion.div
                key={`row1-${idx}-${testimonial.id}`}
                className="relative flex-shrink-0 w-80 bg-white rounded-xl shadow-lg overflow-hidden"
                whileHover="hover"
                variants={cardVariants}
              >
                {/* Card pattern decoration */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-red-500 to-red-600 opacity-10"></div>

                {/* Content Container */}
                <div className="relative z-10 p-6 flex flex-col h-full">
                  {/* Quote Icon */}
                  <div className="absolute top-2 right-2 text-red-100">
                    <svg
                      className="w-10 h-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                    </svg>
                  </div>

                  {/* Profile Image */}
                  <div className="flex items-center mb-6">
                    <div className="relative h-14 w-14 mr-4 rounded-full overflow-hidden ring-2 ring-red-500/30 ring-offset-2">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white font-bold text-xl">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      {testimonial.image && (
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          sizes="56px"
                          style={{ objectFit: "cover" }}
                          onError={(
                            e: React.SyntheticEvent<HTMLImageElement>
                          ) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                          }}
                        />
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-red-600">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mb-3">{renderStars(testimonial.rating)}</div>

                  {/* Quote */}
                  <blockquote className="flex-1">
                    <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                      {testimonial.quote}
                    </p>
                  </blockquote>

                  {/* Company */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500 font-medium">
                      {testimonial.company}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute bottom-0 right-0 w-8 h-8">
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-red-200"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Second Row - Scrolls Left to Right */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => handleRowMouseEnter(2)}
          onMouseLeave={handleRowMouseLeave}
        >
          {/* Gradient Masks */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 w-16 md:w-32 bg-gradient-to-r from-white to-transparent h-full" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 w-16 md:w-32 bg-gradient-to-l from-white to-transparent h-full" />

          <div
            ref={row2Ref}
            className="flex space-x-6 py-4 will-change-transform"
            style={{ transform: "translateX(0px)" }}
          >
            {tripleTestimonials2.map((testimonial, idx) => (
              <motion.div
                key={`row2-${idx}-${testimonial.id}`}
                className="relative flex-shrink-0 w-80 bg-white rounded-xl shadow-lg overflow-hidden"
                whileHover="hover"
                variants={cardVariants}
              >
                {/* Card pattern decoration */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-red-600 to-red-500 opacity-10"></div>

                {/* Content Container */}
                <div className="relative z-10 p-6 flex flex-col h-full">
                  {/* Quote Icon */}
                  <div className="absolute top-2 right-2 text-red-100">
                    <svg
                      className="w-10 h-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                    </svg>
                  </div>

                  {/* Profile Image */}
                  <div className="flex items-center mb-6">
                    <div className="relative h-14 w-14 mr-4 rounded-full overflow-hidden ring-2 ring-red-500/30 ring-offset-2">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white font-bold text-xl">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      {testimonial.image && (
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          sizes="56px"
                          style={{ objectFit: "cover" }}
                          onError={(
                            e: React.SyntheticEvent<HTMLImageElement>
                          ) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                          }}
                        />
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-red-600">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mb-3">{renderStars(testimonial.rating)}</div>

                  {/* Quote */}
                  <blockquote className="flex-1">
                    <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                      {testimonial.quote}
                    </p>
                  </blockquote>

                  {/* Company */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500 font-medium">
                      {testimonial.company}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute bottom-0 right-0 w-8 h-8">
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-red-200"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
