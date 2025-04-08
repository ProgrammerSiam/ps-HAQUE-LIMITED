import { NextPage } from "next";
import Head from "next/head";
import BrandsSection from "@/sections/BrandsSection";
import Hero from "@/sections/HeroSection";
import LeadershipSection from "@/sections/LeadershipSection";
import AchievementStatsSection from "@/sections/AchievementStatsSection";
import ProductsSection from "@/sections/ProductsSection";
import BlogSection from "@/sections/BlogSection";
import NewsletterSection from "@/sections/NewsletterSection";
import CEOMessageSection from "@/sections/CEOMessageSection";
import InfoCardSection from "@/sections/InfoCardSection";
import TestimonialSection from "@/sections/TestimonialSection";
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
        <BrandsSection />
        <InfoCardSection />
        <LeadershipSection />
        <ProductsSection />
        <AchievementStatsSection />

        <TestimonialSection />
        <NewsletterSection />
        <BlogSection />

        <CEOMessageSection />
      </main>
    </>
  );
};

export default Home;
