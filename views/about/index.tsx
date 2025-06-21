import React from "react";
import HeroSection from "./components/HeroSection";
import CompanyProfile from "./components/CompanyProfileSection";
import LocationSection from "./components/LocationSection";
import ContactSection from "./components/ContactSection";
import CompanyValues from "./components/CompanyValueSection";
import CompanyConcern from "./components/CompanyConcernSection";
import WhoWeAreSection from "../../components/about-us/whoWeAreSection";

const About = () => {
    return (
        <>
            {/* <HeroSection /> */}
            {/* <WhoWeAreSection /> */}
            {/* <CompanyValues /> */}
            <CompanyConcern />
            <CompanyProfile />
            <LocationSection />
            <ContactSection />
        </>
    );
};

export default About;
