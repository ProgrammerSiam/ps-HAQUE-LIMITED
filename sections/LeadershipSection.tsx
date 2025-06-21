// import SectionHeader from "@/components/Header";
// import LeaderCard from "@/components/LeaderCards";
// import { leaderImg1, leaderImg2, leaderImg3 } from "@/constants/image";

// const LeadershipSection = () => {
//   const leaders = [
//     {
//       name: "BARRISTER TAMIZUL",
//       title: "Founder Chairman",
//       image: leaderImg1,
//       badge: "1054",
//     },
//     {
//       name: "LIZA AKTER HAQUE",
//       title: "Director",
//       image: leaderImg2,
//     },

//     {
//       name: "ADAM TAMIZI HAQUE",
//       title: "Chairman",
//       image: leaderImg3,
//     },
//     {
//       name: "NUSRAT AKTER HAQUE",
//       title: "Chairman",
//       image: leaderImg2,
//     },
//   ];

//   return (
//     <section id="leadership" className="py-16 lg:py-24 px-4 bg-gray-50">
//       <div className="container mx-auto max-w-6xl ">
//         {/* Section Header */}
//         <SectionHeader
//           title="Our"
//           description="Meet the dedicated leaders behind our success"
//           highlightedText="Leaders"
//           showDivider={true}
//           align="center"
//           titleSize="md"
//         />

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 md:mt-16">
//           {leaders.map((leader, idx) => (
//             <LeaderCard
//               key={idx}
//               name={leader.name}
//               title={leader.title}
//               image={leader.image}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LeadershipSection;
"use client";
import Image from "next/image";
import bg from "@/assets/leadership-bg.png"; // Group 469775.png
import badge from "@/assets/badge.png"; // optional badge overlay
import { leaderImg1, leaderImg2, leaderImg3 } from "@/constants/image";

const leaders = [
  {
    name: "BARRISTER TAMIZUL HAQUE",
    title: "Founder Chairman",
    image: leaderImg1,
    color: "bg-red-600",
  },
  {
    name: "NUSRAT AKTER HAQUE",
    title: "Chairman",
    image: leaderImg2,
    color: "bg-cyan-600",
  },
  {
    name: "ADAM TAMIZI HAQUE",
    title: "Managing Director",
    image: leaderImg3,
    color: "bg-neutral-700",
  },
  {
    name: "LIZA AKTER HAQUE",
    title: "Director",
    image: leaderImg2,
    color: "bg-indigo-700",
  },
];

const LeadershipSection = () => {
  return (
    <section id="leadership" className="relative pb-60 pt-20 px-4 overflow-hidden">
      {/* Background Image */}
      <Image
        src={bg}
        alt="Leadership Background"
        fill
        className="object-cover z-0"
        priority
      />
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto text-left">
        <h2 className="text-3xl md:text-5xl font-semibold mb-2 text-black">
          Leadership That Builds{" "}
          <span className="text-red-600 block mt-3">Legacy</span>
        </h2>
        <p className="text-[#000000] text-[px]  max-w-[600px]  mt-4 ">
          Driving A.T. Haque Forward Through Vision, Values, And Generations Of Excellence.
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl overflow-hidden shadow-xl"
            >
              {/* Image Container with brand background */}
              <div className={`h-80 ${leader.color} flex items-center relative justify-center`}>
                <Image
                  src={leader.image}
                  alt={leader.name}
                  className="object-cover h-full w-full"
                />
                        <h4 className="text-[20px] font-bold text-white absolute  left-[25px] bottom-10 max-w-[180px]">{leader.name}</h4>
              </div>

              {/* Optional Badge */}
              <Image
                src={badge}
                alt="Haque badge"
                className="absolute top-6 right-4 w-[50px] h-[30px]"
              />
       
              {/* Info */}
              <div className="p-2 text-left">
              
                <p className="text-[14px] text-[#000]  mt-1 ml-2 font-semibold">{leader.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
