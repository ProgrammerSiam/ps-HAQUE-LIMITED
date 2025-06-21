"use client";
import Image from "next/image";
import gallery1 from "@/assets/GallerySection/image1.png";
import gallery2 from "@/assets/GallerySection/image2.png";
import gallery3 from "@/assets/GallerySection/image3.png";
import gallery4 from "@/assets/GallerySection/image4.png";
import gallery5 from "@/assets/GallerySection/image5.png";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5];

const GallerySection = () => {
  return (
    <section className="w-full bg-white relative overflow-hidden pb-0">
      {/* Pill Header */}
      <div className="text-center mb-[-15px]">
        <div className="inline-block px-16 py-4 bg-[#f1f4f9] rounded-full">
          <h2 className="text-xl md:text-2xl font-semibold text-black">
            HAQUE <span className="text-red-600">GALLERY</span>
          </h2>
        </div>
      </div>

      {/* Horizontal Gallery Scroll */}
      <div className="w-full overflow-x-auto">
        <div className="flex gap-0 ">
          {images.map((img, idx) => (
            <div
              key={idx}
              className=" rounded-lg overflow-hidden  w-full"
            >
              <Image
                src={img}
                alt={`Gallery image ${idx + 1}`}
                className="object-cover w-full "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
