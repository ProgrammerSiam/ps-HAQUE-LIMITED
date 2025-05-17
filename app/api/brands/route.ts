import { NextResponse } from "next/server";

export async function GET() {
    try {
        return NextResponse.json({ message: "Hello, Next.js!" });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: "Failed to fetch brands" },
            { status: 500 }
        );
    }
}

// import { NextResponse } from "next/server";
// // import { prisma } from "@/lib/prisma";

// // GET /api/brands
// export async function GET() {
//   try {
//     const brands = await prisma.brand.findMany({
//       orderBy: { createdAt: "desc" },
//     });
//     return NextResponse.json(brands);
//   } catch (error) {
//     console.error("Error fetching brands:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch brands" },
//       { status: 500 }
//     );
//   }
// }

// // POST /api/brands
// export async function POST(request: Request) {
//   try {
//     const data = await request.json();
//     const brand = await prisma.brand.create({
//       data: {
//         name: data.name,
//         description: data.description,
//         imageUrl: data.imageUrl,
//       },
//     });
//     return NextResponse.json(brand);
//   } catch (error) {
//     console.error("Error creating brand:", error);
//     return NextResponse.json(
//       { error: "Failed to create brand" },
//       { status: 500 }
//     );
//   }
// }
