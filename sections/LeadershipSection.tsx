import SectionHeader from "@/components/Header";
import LeaderCard from "@/components/LeaderCards";
import { leaderImg1, leaderImg2, leaderImg3 } from "@/constants/image";

const LeadershipSection = () => {
  const leaders = [
    {
      name: "BARRISTER TAMIZUL",
      title: "Founder Chairman",
      image: leaderImg1,
      badge: "1054",
    },
    {
      name: "LIZA AKTER HAQUE",
      title: "Director",
      image: leaderImg2,
    },

    {
      name: "ADAM TAMIZI HAQUE",
      title: "Chairman",
      image: leaderImg3,
    },
    {
      name: "NUSRAT AKTER HAQUE",
      title: "Chairman",
      image: leaderImg2,
    },
  ];

  return (
    <section className="py-16 lg:py-24 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl ">
        {/* Section Header */}
        <SectionHeader
          title="Our"
          description="Meet the dedicated leaders behind our success"
          highlightedText="Leaders"
          showDivider={true}
          align="center"
          titleSize="md"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 md:mt-16">
          {leaders.map((leader, idx) => (
            <LeaderCard
              key={idx}
              name={leader.name}
              title={leader.title}
              image={leader.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
