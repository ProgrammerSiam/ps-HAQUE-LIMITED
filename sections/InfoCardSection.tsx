"use client";
import { motion } from "framer-motion";
import SectionHeader from "@/components/Header";
import { infoImg1, infoImg2, infoImg3 } from "@/constants/image";
import PremiumInfoCard from "@/components/InfoCards";

const InfoCardSection = () => {
  // Array of card data for easier management
  const cardsData = [
    {
      title: "Mission",
      description:
        "Enhancing family life with affordable, world-class products.",
      image: infoImg1 || "/images/mission.jpg",
      linkText: "Read More",
      linkUrl: "/about/mission",
      accentColor: "bg-red-600",
    },
    {
      title: "Our Values",
      description:
        "Integrity, innovation, excellence, and customer focus define us.",
      image: infoImg3 || "/images/values.jpg",
      linkText: "Read More",
      linkUrl: "/about/leadership",
      centerText: true,
      hideButton: true,
      accentColor: "bg-indigo-600",
    },
    {
      title: "Vision",
      description:
        "Offering diverse, affordable products with timely delivery.",
      image: infoImg2 || "/images/vision.jpg",
      linkText: "Find More",
      linkUrl: "/about/vision",
      accentColor: "bg-emerald-600",
    },
  ];

  // Section variants for animation
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] },
    },
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <SectionHeader
          title="Our"
          description="To improve the quality of life of families in our selected markets by providing affordably made world class products that exceed expectations."
          highlightedText="Mission"
          showDivider={true}
          align="center"
          titleSize="md"
          animationDelay={0.2}
          viewportOnce={true}
          viewportMargin="-100px"
        />

        {/* Card Grid with Motion */}
        <motion.div
          className="grid gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {cardsData.map((card, index) => (
            <motion.div key={index} variants={cardVariants} className="flex">
              <PremiumInfoCard
                title={card.title}
                description={card.description}
                image={card.image.src}
                linkText={card.linkText}
                linkUrl={card.linkUrl}
                accentColor={card.accentColor}
                centerText={card.centerText}
                hideButton={card.hideButton}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InfoCardSection;
