import { NextPage } from "next";
import Head from "next/head";
import BrandsSection from "@/sections/BrandsSection";
import Hero from "@/sections/HeroSection";
import LeadershipSection from "@/sections/LeadershipSection";
import ProductsSection from "@/sections/ProductsSection";
import BlogSection from "@/sections/BlogSection";
import NewsletterSection from "@/sections/NewsletterSection";
import CommitmentSection from "@/sections/CommitmentSection";
import GallerySection from "@/sections/GallerySection";
// import TestimonialSection from "@/sections/TestimonialSection";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          A.T. Haque Limited - Leading Biscuit & Confectionery Manufacturer
        </title>
        <meta
          name="description"
          content="A.T. Haque Limited is Bangladesh's leading biscuit, confectionery, wafer and candy manufacturing company. Explore our quality products."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <CommitmentSection />
        <BrandsSection />
        <LeadershipSection />
        {/* <InfoCardSection /> */}

        <ProductsSection />
        {/* <AchievementStatsSection /> */}

        {/* <TestimonialSection /> */}
        <BlogSection />
        <GallerySection />
        <NewsletterSection />

        {/* <CEOMessageSection /> */}
      </main>
    </>
  );
};

export default Home;
