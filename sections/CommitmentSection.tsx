"use client";
import Image from "next/image";
import bg from "@/assets/bg-commitment.png"; // Use your red background image
import icon1 from "@/assets/CommitmentSection/Vector.png"; // Box Icon
import icon2 from "@/assets/CommitmentSection/Vector (1).png"; // Worker Icon
import icon3 from "@/assets/CommitmentSection/Vector (2).png"; // Pipe Icon
import icon4 from "@/assets/CommitmentSection/green-factory.png"; // Factory Icon

const commitments = [
  {
    icon: icon1,
    count: "84+",
    label: "HAQUE PRODUCTS",
  },
  {
    icon: icon2,
    count: "1,073+",
    label: "OUR WORKERS",
  },
  {
    icon: icon3,
    count: "50+",
    label: "BRANDS",
  },
  {
    icon: icon4,
    count: "2",
    label: "FACTORIES",
  },
];

const CommitmentSection = () => {
  return (
    <section className="relative pt-20 pb-24 text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src={bg}
        alt="Commitment Background"
        fill
        priority
        className="object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/10 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 text-left">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          From People to Products:
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          The A.T. HAQUE Commitment
        </h3>
        <p className="text-sm md:text-base text-white/90  mb-12">
          We take pride in the people behind A.T. Haque, the everyday products we create, and the impact we make across Bangladesh. Built on trust and driven by quality, our journey is shaped by the needs of the communities we serve.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {commitments.map((item, index) => (
            <div
              key={index}
              className="bg-white text-[#DE2332] relative rounded-xl p-6 shadow-lg flex flex-col items-center justify-center transition-transform hover:scale-105"
            >
              {/* Image Icon */}
              <div className="w-20 h-20 rounded-full bg-white absolute top-[-40px] left-[35%]  border-4 border-red-500 flex items-center justify-center mb-4">
                <Image src={item.icon} alt={item.label} width={40} height={40} />
              </div>
              <h4 className="text-[50px] font-medium my-2">{item.count}</h4>
              <p className="text-sm font-bold text-center tracking-wide uppercase text-[#000000]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
