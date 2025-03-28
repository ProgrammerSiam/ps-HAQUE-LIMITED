import React from "react";
import HeroSection from "./components/HeroSection";
import Paper from "./components/Paper";
import Interview from "./components/Interview";
import DirectorMessage from "./components/DirectorMessage";
import CareerSection from "./components/CareerSection";

const News = () => {
    return (
        <>
            <HeroSection />
            <Paper />
            <Interview />
            <DirectorMessage />
            <CareerSection />
        </>
    );
};

export default News;
