import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  CheckCircle,
  BriefcaseBusiness,
  Users,
  Award,
  GraduationCap,
  Mail,
  ArrowRight,
  Building,
  BookOpen,
  Heart,
  Clock,
  Briefcase,
} from "lucide-react";

export default function CareerSection() {
  const coreValues = [
    {
      icon: <CheckCircle className="h-6 w-6 text-red-600 dark:text-red-400" />,
      value: "Integrity",
      description: "Honesty and strong moral principles in all our actions",
    },
    {
      icon: <Users className="h-6 w-6 text-red-600 dark:text-red-400" />,
      value: "Teamwork",
      description: "Collaborative efforts towards our shared goals",
    },
    {
      icon: <Award className="h-6 w-6 text-red-600 dark:text-red-400" />,
      value: "Excellence",
      description: "Striving for the highest standards in everything we do",
    },
    {
      icon: (
        <BriefcaseBusiness className="h-6 w-6 text-red-600 dark:text-red-400" />
      ),
      value: "Ownership",
      description: "Taking responsibility and pride in our work",
    },
  ];

  const benefits = [
    {
      icon: <Building className="h-5 w-5 text-purple-500" />,
      title: "Modern Workplace",
      description:
        "State-of-the-art facilities designed for productivity and comfort",
    },
    {
      icon: <BookOpen className="h-5 w-5 text-blue-500" />,
      title: "Learning & Development",
      description: "Continuous training from renowned professionals",
    },
    {
      icon: <Heart className="h-5 w-5 text-pink-500" />,
      title: "Health Benefits",
      description: "Comprehensive healthcare coverage for you and your family",
    },
    {
      icon: <Clock className="h-5 w-5 text-green-500" />,
      title: "Work-Life Balance",
      description: "Flexible policies that respect your personal time",
    },
  ];

  return (
    <section
      id="career"
      className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 rounded-full bg-red-50 dark:bg-red-900/20">
              <Briefcase className="h-7 w-7 text-red-600 dark:text-red-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Join Our Team
            </h2>
            <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Be part of our journey towards excellence and build a rewarding
              career
            </p>
            <div className="w-20 h-1 bg-red-600 rounded-full mt-2"></div>
          </div>

          <Tabs defaultValue="values" className="w-full">
            <TabsList className="flex justify-center grid-cols-3 w-full max-w-md mx-auto mb-8">
              <TabsTrigger
                value="values"
                className="rounded-md data-[state=active]:bg-red-600 data-[state=active]:text-white"
              >
                Core Values
              </TabsTrigger>
              <TabsTrigger
                value="culture"
                className="rounded-md data-[state=active]:bg-red-600 data-[state=active]:text-white"
              >
                Work Culture
              </TabsTrigger>
              <TabsTrigger
                value="internship"
                className="rounded-md data-[state=active]:bg-red-600 data-[state=active]:text-white"
              >
                Internships
              </TabsTrigger>
            </TabsList>

            {/* Core Values Tab */}
            <TabsContent
              value="values"
              className="focus-visible:outline-none focus-visible:ring-0"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    We Live By Our Core Values
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    A.T. Haque Limited is a place to learn, grow and contribute
                    for improving the quality of life of people. We attract
                    individuals who drive positive change, focused on
                    performance and accountable to achieve results.
                  </p>

                  <p className="text-gray-600 dark:text-gray-300">
                    Our values define who we are and guide every decision we
                    make. They're the foundation of our culture and what makes
                    us unique.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {coreValues.map((item, index) => (
                    <Card
                      key={index}
                      className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="p-3 rounded-full bg-red-50 dark:bg-red-900/20 mb-4">
                            {item.icon}
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            {item.value}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
                  >
                    <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 mb-4">
                      {benefit.icon}
                    </div>
                    <h4 className="text-base font-semibold text-gray-900 dark:text-white text-center mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Work Culture Tab */}
            <TabsContent
              value="culture"
              className="focus-visible:outline-none focus-visible:ring-0"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Our Work Culture
                </h3>

                <div className="space-y-6 text-gray-600 dark:text-gray-300">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-red-50 dark:bg-red-900/20">
                      <Users className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        People-First Approach
                      </h4>
                      <p>
                        A career at Haque will lead to a better working
                        environment, equal employment opportunity, competitive
                        compensation package, training & development from
                        renowned overseas & local professionals. We believe, our
                        employees are our most valuable asset and we foster such
                        an organizational culture so that our employees can get
                        the opportunity to grow.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-red-50 dark:bg-red-900/20">
                      <Heart className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Work-Life Balance
                      </h4>
                      <p>
                        We believe in work-life balance, empowerment and
                        delegation to ensure job satisfaction. We have a
                        value-based culture where dignity of the individual is
                        the highest priority. We want your enthusiasm, energy
                        and passion in our culture to support the growth of A.T.
                        Haque Limited.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-red-50 dark:bg-red-900/20">
                      <Award className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Competitive Benefits
                      </h4>
                      <p>
                        We have competitive salary, benefits and fair work
                        environment where you will be able to unleash your
                        potential. Due to a large number of applications, only
                        short-listed candidates with minimum criteria as
                        mentioned will be called for Interview/Written exam.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    View Current Openings{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Internship Tab */}
            <TabsContent
              value="internship"
              className="focus-visible:outline-none focus-visible:ring-0"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-6">
                  <div className="hidden md:flex flex-shrink-0 w-16 h-16 items-center justify-center rounded-full bg-red-50 dark:bg-red-900/20">
                    <GraduationCap className="h-8 w-8 text-red-600 dark:text-red-400" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Internship Opportunities
                    </h3>

                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        We provide internship facilities to talented and bright
                        students from reputed universities with an intention to
                        absorb them into the company for suitable positions in
                        the future.
                      </p>

                      <p>
                        The idea of internship placement is to provide bright
                        students with useful work experience opportunities
                        either during or upon completion of their degree
                        studies, but before they enter the workforce.
                        Internships are a proven way to gain relevant knowledge,
                        skills, and experience while establishing important
                        connections in the field.
                      </p>

                      <p>
                        Internships are also a way to get your feet wet and find
                        out if a specific field is something you could see
                        yourself doing as a full-time job. A.T. Haque Limited,
                        being one of the renowned business organizations in
                        Bangladesh, has taken steps to attract fresh graduates
                        for internships from the country's reputed universities.
                      </p>
                    </div>

                    <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        How to Apply
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        If you're interested in an internship opportunity with
                        our company, please send your CV to our Human Resources
                        department.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Mail className="h-5 w-5 text-red-600 dark:text-red-400" />
                          <a
                            href="mailto:hrd@haquegroup.com"
                            className="text-red-600 dark:text-red-400 hover:underline font-medium"
                          >
                            hrd@haquegroup.com
                          </a>
                        </div>

                        <Button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white">
                          Apply for Internship
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
