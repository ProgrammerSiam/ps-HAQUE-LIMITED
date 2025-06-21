import React from "react";

const ManufacturingSection = () => {
    return (
        <section className="xl:px-32 px-6 relative">
            <h1 className="text-center lg:text-[68px] md:text-6xl sm:text-4xl text-xl mb-6">Our Manufacturing Excellence</h1>
            <div className="_section_container">
                <div className="relative aspect-video w-full overflow-hidden">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/GaUSi0ubfIw?si=O5LRt6BmnUKrCIfS"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="rounded-xl"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default ManufacturingSection;
