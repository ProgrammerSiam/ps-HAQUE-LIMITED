import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

import {
    CheckCircle,
    BriefcaseBusiness,
    Users,
    Award,
    GraduationCap,
} from "lucide-react";

export default function CareerSection() {
    const coreValues = [
        {
            icon: <CheckCircle className="h-5 w-5 text-destructive" />,
            value: "Integrity",
        },
        {
            icon: <Users className="h-5 w-5 text-destructive" />,
            value: "Teamwork",
        },
        {
            icon: <Award className="h-5 w-5 text-destructive" />,
            value: "Excellence",
        },
        {
            icon: <BriefcaseBusiness className="h-5 w-5 text-destructive" />,
            value: "Ownership",
        },
    ];

    return (
        <section id="career" className="">
            <div className="container px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="section_title mb-8">Career</h2>
                        <div className="mt-4 mb-6 mx-auto w-24 h-[2px] bg-destructive/50" />
                        <p className="section_sub_title">
                            Join our team and be part of our journey towards
                            excellence
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                        <div className="relative aspect-square md:aspect-auto md:h-full overflow-hidden rounded-xl">
                            <Image
                                src="/images/news/career.jpg"
                                alt="Career at Haque"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold">
                                We live by our core values
                            </h3>

                            <div className="grid grid-cols-2 gap-4">
                                {coreValues.map((item, index) => (
                                    <Card
                                        key={index}
                                        className="border-none shadow-sm bg-white"
                                    >
                                        <CardContent className="p-4 flex items-center gap-3">
                                            {item.icon}
                                            <span className="font-medium">
                                                {item.value}
                                            </span>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            <p className="text-muted-foreground _text">
                                A.T. Haque Limited is a place to learn, grow and
                                contribute for improving the quality of life of
                                people. We attract individuals who drive
                                positive change, focused on performance and
                                accountable to achieve results, collaborate with
                                teams and with customers and consumers and who
                                demonstrate their positive spirit and energy.
                            </p>

                            <div className="flex items-center gap-2">
                                <GraduationCap className="h-5 w-5 text-destructive" />
                                <span className="font-medium">
                                    Internship Opportunities Available
                                </span>
                            </div>

                            <p className="text-muted-foreground _text">
                                We provide internship facilities to the talented
                                and bright students of the reputed universities
                                with an intention to absorb them in the company
                                for any suitable position in the future.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
                        <h3 className="text-xl font-bold mb-4">
                            Our Work Culture
                        </h3>

                        <div className="space-y-4 mb-6 _text">
                            <p>
                                A career at Haque will lead to a better working
                                environment, equal employment opportunity,
                                competitive compensation package, training &
                                development from renowned overseas & local
                                professionals etc. We believe, our employees are
                                our most valuable asset and we foster such an
                                organizational culture so that our employees can
                                get the opportunity to grow.
                            </p>

                            <p>
                                We also believe in work life balance,
                                empowerment and delegation to ensure job
                                satisfaction. We have a value based culture
                                where dignity of the individual is the highest
                                priority. We want your enthusiasm, energy and
                                passion in our culture to support the growth of
                                A.T. Haque Limited. We have competitive salary,
                                benefits and fair work environment where you
                                will be able to unleash your potential.
                            </p>
                        </div>

                        <p className="mb-6 _text">
                            Due to a large number of applications, only short
                            listed candidates with minimum criteria as mentioned
                            will be called for Interview/Written exam. The
                            company reserves the right to amend the decision
                            regarding the recruitment or selection. We are
                            looking for the people who have excellent academic
                            and family backgrounds. Plain and simple, we invite
                            you if you are the best with the finest mind and an
                            aim to attain the greatness and won’t settle for the
                            stereotype. Internship The idea of the internship
                            placement is to provide bright students with useful
                            work experience opportunities either during or on
                            the completion of their degree studies, but before
                            they enter the workforce.
                            <br />
                            <br /> Internships are a proven way to gain relevant
                            knowledge, skills, and experience while establishing
                            important connections in the field. Internships are
                            also a way to get your feet wet and find out if a
                            specific field is something you could see yourself
                            doing as a full-time job. A.T. Haque Limited, being
                            one of the renowned business organizations in
                            Bangladesh has taken steps in attracting fresh
                            graduates to do internship from countries reputed
                            universities.
                        </p>
                        
                        <p className="text-center _text text-muted-foreground mt-4">
                            If anybody interested for internship in our company,
                            please send your CV to this email address:{" "}
                            <a
                                href="mailto:hrd@haquegroup.com"
                                className="text-destructive hover:underline"
                            >
                                 hrd@haquegroup.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
