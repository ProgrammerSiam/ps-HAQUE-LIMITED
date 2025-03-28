import { Award, BookOpen } from "lucide-react";

export default function CompanyProfile() {
    return (
        <section id="company_profile" className="py-16 bg-white">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="section_title">Company Profile</h2>
                    <div className="flex items-center justify-center gap-3 mt-4">
                        <Award className="h-6 w-6 text-destructive" />
                        <span className="text-lg font-medium italic">
                            Trusted by millions since 1947
                        </span>
                    </div>
                </div>

                <div className="mb-16">
                    <div className="bg-destructive/5 p-6 rounded-lg border border-primary/10 max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <BookOpen className="h-6 w-6 text-destructive" />
                            <h3 className="text-2xl font-bold">Our History</h3>
                        </div>
                        <div className="">
                            <p className="_text text-muted-foreground mb-6">
                                A 1947 company, A.T. Haque Limited is the most
                                trusted and highly admired biscuits, chips,
                                confectionery, soap, and battery manufacturer in
                                Bangladesh.Visionary Barrister Tamizul Haque
                                established its first factory at Tejgaon in
                                January 1957. World known HAAS-HECRONA, NISSHIN
                                RYOKI and BAKER PERKINS are the three modern
                                machinery to produce Mr. Cookie, Cream Crackers,
                                Bourbon, and Digestive Biscuits in this factory.
                            </p>
                            <p className="_text text-muted-foreground mb-6">
                                In January 1965, the carbide factory “Haque
                                Carbide” was established at Tongi. “Haque
                                Battery 786” is one of the renowned brand back
                                then from Haque carbide. Soap plant was started
                                in July, 1988 in Tongi and Haque is the
                                contract-manufacturer of renowned Branded Soap,
                                such as Dettol, Savlon, Cute, Meril, Neem,
                                Cinthol & Santoor. The dry cell factory is in
                                operation since September, 1994 at Tongi, Dhaka.
                            </p>
                            <p className="_text text-muted-foreground mb-6">
                                Haque has got ‘V- 60’ plant from the globally
                                reputed and Giant biscuit-machine manufacturer
                                ‘HAAS’ to produce oven fresh cookies like Kheer
                                Malai, Sor Malai, Super Bite and Romancio
                                Cookies in 2016.
                            </p>{" "}
                            <p className="_text text-muted-foreground mb-6">
                                To respond to the Huge Market Demand, Haque went
                                for two-folded Capacity Expansion with
                                purchasing another Machine ‘GF-2’ from HAAS.
                            </p>{" "}
                            <p className="_text text-muted-foreground mb-6">
                                A. T. Haque Ltd. is producing world renowned
                                paint company Berger paints Bangladesh Limited’s
                                cement paint Durocem, Robbialac Wall Putty,
                                Breathe Easy Wall Putty, Mr. Expert Latex Plus,
                                Illusions and Power Bond DDL since 2011. Late
                                Barrister Tamizul Haque was the founder Chairman
                                of A. T. Haque Ltd. Josna Adam Haque is the
                                Chairman of A. T. Haque Ltd. Now the
                                growth-vision of overall business is persuaded
                                by the inspiration and strategic direction of
                                Adam Tamizi Haque, the Managing Director of A.T.
                                Haque Ltd.
                            </p>
                            <p className="_text text-muted-foreground mb-6">
                                Haque is the symbol of faith and trust to the
                                consumers of Bangladesh backed by the strength
                                of quality-products and consumer-orientation.
                                Haque values the contribution of its people and
                                always patronize their development.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <h3 className="section_title mb-10 text-center">
                        Our Manufacturing Excellence
                    </h3>

                    <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/GaUSi0ubfIw?si=O5LRt6BmnUKrCIfS"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
