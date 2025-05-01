import React from "react";
import PlantsSection from "./components/PlantsSection";
import TvCommercialSection from "./components/TvCommercialSection";
import ShowCardsSection from "./components/ShowCardsSection";


const Gallery = () => {
    return (
        <div>
            <PlantsSection />
            <TvCommercialSection />
            <ShowCardsSection />
        </div>
    );
};

export default Gallery;
