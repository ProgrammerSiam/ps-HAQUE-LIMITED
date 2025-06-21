import About from "@/views/about";

import { Metadata } from "next";
import { siteConfig } from "@/config/metadata";
import HeroSection from "@/components/about-us/HeroSection";
import WhoWeAreSection from "@/components/about-us/whoWeAreSection";
import ValuesSection from "@/components/about-us/ValuesSection";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about Haque Galaxy's journey, mission, and commitment to quality confectionery manufacturing in Bangladesh",
    openGraph: {
        title: `About ${siteConfig.name}`,
        description:
            "Leading confectionery manufacturer in Bangladesh with a commitment to quality and innovation",
        images: ["/images/about-og.jpg"],
    },
};

const AboutPage = () => {
    return (
        <main>
            <HeroSection />
            <WhoWeAreSection />
            <ValuesSection />
            <About />
        </main>
    );
};

export default AboutPage;
