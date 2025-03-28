import { Building } from "lucide-react";
import Link from "next/link";

export default function OurConcerns() {
    const companies = [
        {
            name: "A.T. HAQUE LTD.",
            description:
                "All the products from Haque are marketed by A. T. Haque Ltd. The corporate office of A. T. Haque is situated at Tejgaon Industrial area but the factory under it is at Tongi. Haque have state of art V-60 cookie machine of HAAS under this concern. All the cookies are exclusive from the house of Haque. The products are totally new in our country. The products include Kheer Malai Biscuit, Super Bite Cookies, Salty Star Cookies, Romancio Cookies, La’ Butter Cookies, Sor Malai Cookies, etc. The Romancio is an unique center filled biscuit of Bangladesh where the Super Bite Cookies is enriched with milk, egg and butter. From real butter, Haque has La’ Butter exclusive cookies. There are few upcoming Brand which are totally new in our country. A. T. Haque also has snack plant where Haque produces Mukhorochok Chanachur and Moto Vaja.",
            year: "Est. 1947",
        },
        {
            name: "HAQUE FOOD INDUSTRIES LTD.",
            description:
                "Company deals with food items, which includes Biscuit, Chips, Wafer, Chocolate, etc. The factory is at Tejgaon industrial area. Haque have world’s known HASS-HECRONA, NISHIN RYOKI, BAKER PERKINGS these three modern machineries are used to produce biscuits here. We have our Mr. Cookie, Digestive Biscuit, Bourbon Biscuit, Mr. Energy Biscuit, Cream Crackers Biscuit, Fata Futty Biscuit, Choco Nutty Biscuit, Lemon Chocolate Biscuit, etc. here. We also have Pillow Chips, Tarzan and Jane Chips, etc. from our Japanese N. P. Machine.",
            year: "Est. 1970",
        },
        {
            name: "HAQUE LTD.",
            description:
                "A Fully Automatic State of the art completes Soap Factory wherein toilet soaps are manufactured. We have first ever man soap here named Man Soul. Haque also have Rose, Jasmine and Mini soap named Silky. All soaps are grape-1 beauty soap. This concern also produces Dettol, Sevlon, Cute, etc. soaps as contract manufacturer.",
            year: "Est. 1980",
        },
        {
            name: "HAQUE (CARBIDE) LTD.",
            description:
                "It is a Modern and high capacity complete factory to manufacture Zinc Carbon Dry Cell battery of UM-1 and UM-2. Haque’s famous Haque 786 is a product of Haque (Carbide) ltd.",
            year: "Est. 1990",
        },
        {
            name: "HAQUE (DRYCELL) LTD.",
            description:
                "A Modern High-tech Battery producing unit wherein UM-3 Battery (Pencil Cell), UM-4 (Remote Battery) & Metal Jacket UM-1 heavy-duty Battery cells are manufactured.",
            year: "Est. 1995",
        },
        {
            name: "JUNU BEACH RESORT LTD.",
            description:
                "Junu beach resort of Cox’s bazar is one of most attractive beach resort of Bangladesh with all recreational facilities. The resort introduced most luxurious yacht in Bangladesh for the first time. It also going to establish world class Water Park with all types of recreation facilities.",
            year: "Est. 1985",
        },
        {
            name: "HAQUE RECREATIONAL PRODUCTS LTD.",
            description:
                "Haque has imported few world class beach recreational items like for Cox’s Bazar’s Junu beach. Haque Recreational Products Ltd. is the country’s first beach recreational products based company which import, sell, rent and service the toys, vehicle and equipment. It has highly equipped rescue team. It provides the ultimate pleasure on sea. It has several services including- Luxurious yacht, Jetski, Catamaran, wakeboarding etc.",
            year: "Est. 2000",
        },
        {
            name: "HAQUE IMPERIAL PROPERTIES LTD.",
            description:
                "It’s the property business wing of Haque Group of Industries.",
            year: "Est. 1975",
        },
        {
            name: "WORLD TRAVELLER",
            description:
                "World Traveler is the travelling company from Haque. It provides facilities like special travelling packages, air ticket booking facilities, packages in different tourist spots, holiday packages, etc. ",
            year: "Est. 2005",
        },
    ];

    return (
        <section id="our_concerns" className="">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="section_title">Our Concerns</h2>
                    <p className="mt-4 section_sub_title">
                        Explore our diverse business units and subsidiaries
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {companies.map((company, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex flex-col h-full">
                                <div className="bg-destructive/5 p-4 border-b border-destructive/20 border-dashed">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-lg font-bold text-destructive">
                                            {company.name}
                                        </h3>
                                        {/* <span className="text-xs font-medium bg-destructive/10 text-destructive px-2 py-1 rounded-full text-nowrap">
                                            {company.year}
                                        </span> */}
                                        <div className="size-4 bg-destructive/50 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="p-5 flex-grow">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                                                <Building className="h-5 w-5 text-destructive" />
                                            </div>
                                        </div>

                                        <div>
                                            <p className="text-muted-foreground text-sm">
                                                {company.description}
                                                {index ===
                                                companies.length - 1 ? (
                                                    <span>
                                                        Visit website
                                                        <Link
                                                            href="http://www.worldtravellerbd.com/"
                                                            target="_blank"
                                                            className="text-destructive hover:underline italic"
                                                        >
                                                            {" "}
                                                            WorldTraveller.
                                                        </Link>
                                                    </span>
                                                ) : null}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
