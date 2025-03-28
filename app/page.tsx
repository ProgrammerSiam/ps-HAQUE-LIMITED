import { NextPage } from "next";
import Head from "next/head";
import Navbar from "@/shared/Navbar";
import Footer from "@/shared/Footer";
import BrandsSection from "@/sections/BrandsSection";
import Hero from "@/sections/HeroSection";
import LeadershipSection from "@/sections/LeadershipSection";
import AchievementStatsSection from "@/sections/AchievementStatsSection";
import ProductsSection from "@/sections/ProductsSection";
import BlogSection from "@/sections/BlogSection";
import NewsletterSection from "@/sections/NewsletterSection";
import CEOMessageSection from "@/sections/CEOMessageSection";
import InfoCardSection from "@/sections/InfoCardSection";

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
        <Navbar />
        <Hero />
        <BrandsSection />
        <InfoCardSection />
        <LeadershipSection />
        <AchievementStatsSection />
        <ProductsSection />
        <BlogSection />
        <NewsletterSection />
        <CEOMessageSection />
        <Footer />
      </main>
    </>
  );
};

export default Home;
