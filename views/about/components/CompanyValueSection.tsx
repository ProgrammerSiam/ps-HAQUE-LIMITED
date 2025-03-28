import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Heart, Target, Eye, User } from "lucide-react";

export default function CompanyValues() {
    const values = [
        {
            icon: <Target className="h-10 w-10 text-destructive" />,
            title: "Mission",
            description:
                "To improve the quality of life of families in our selected markets by providing affordably made world class products.",
        },
        {
            icon: <Eye className="h-10 w-10 text-destructive" />,
            title: "Vision",
            description:
                "Our vision is to serve our consumers with high variety of products at an affordable price and on time delivery while maintaining strategic partnership with the suppliers and becoming employer of choice.",
        },
        {
            icon: <Heart className="h-10 w-10 text-destructive" />,
            title: "Integrity",
            description:
                "Building trust with consumers, communities and suppliers by fulfilling promises of quality and quantity,complying with regulations and laws, and honoring rules of engagement.",
        },
        {
            icon: <User className="h-10 w-10 text-destructive" />,
            title: "Ownership",
            description:
                "Taking personal responsibility for the outcome by anticipating needs, being resourceful and following through until the goal is accomplished.",
        },
        {
            icon: <Users className="h-10 w-10 text-destructive" />,
            title: "Teamwork",
            description:
                "Working across organizational and cultural boundaries to achieve extraordinary performance and deliver to consumers.",
        },
        {
            icon: <Award className="h-10 w-10 text-destructive" />,
            title: "Excellence",
            description:
                "Building a culture based on excellence in thought and in execution to better serve consumers.",
        },
    ];

    return (
        <section id="company_values" className="">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="section_title">Our Core Values</h2>
                    <p className="mt-4 section_sub_title">
                        The principles that guide our organization and define
                        who we are
                    </p>
                </div>

                <div className="lg:w-[80%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {values.map((value, index) => (
                        <Card
                            key={index}
                            className="border-none shadow-md bg-white hover:shadow-lg transition-shadow"
                        >
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <div className="mb-4 p-3 rounded-full bg-destructive/10">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">
                                    {value.title}
                                </h3>
                                <p className="_text text-muted-foreground">
                                    {value.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
