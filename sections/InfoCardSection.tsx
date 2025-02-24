import InfoCard from "@/components/InfoCards";
import { infoImg1 } from "@/constants/image";
import { infoImg2 } from "@/constants/image";
import { infoImg3 } from "@/constants/image";

const InfoCardSection = () => {
    return (
        <section className=" px-4 bg-gray-50">
            <div
                className="
            container mx-auto
            grid gap-[13px]
            grid-cols-1
            lg:grid-cols-[1fr_0.7fr_1fr]
          "
            >
                {/* Left card (normal) */}
                <InfoCard
                    title="Mission"
                    description="To improve the quality of life of families in our selected markets by providing affordably made world class products."
                    image={infoImg1}
                    linkText="Read More"
                    linkUrl="/about/mission"
                />

                {/* Middle card (centered text, no button) */}
                <InfoCard
                    title="ADAM TAMIZI HAQUE"
                    description="Managing Director"
                    image={infoImg2}
                    linkText="Read More"
                    linkUrl="/about/leadership"
                    centerText
                    hideButton
                />

                {/* Right card (normal) */}
                <InfoCard
                    title="Vision"
                    description="Our vision is to serve our consumers with high variety of products at an affordable price and on time delivery while maintaining strategic partnership with the suppliers and becoming employer of choice."
                    image={infoImg3}
                    linkText="Find More"
                    linkUrl="/about/vision"
                />
            </div>
        </section>
    );
};

export default InfoCardSection;
