import { Metadata } from "next";
import { siteConfig } from "@/config/metadata";
import HeroSection from "@/components/about-us/HeroSection";
import WhoWeAreSection from "@/components/about-us/whoWeAreSection";
import ValuesSection from "@/components/about-us/ValuesSection";
import VenturesSection from "@/components/about-us/VenturesSection";
import ManufacturingSection from "@/components/about-us/ManufacturingSection";
import GetInTouchSection from "@/components/about-us/GetInTouchSection";
import LocationSection from "@/components/about-us/LocationSection";

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
            <VenturesSection />
            <ManufacturingSection />
            <GetInTouchSection />
            <LocationSection />
        </main>
    );
};

export default AboutPage;
