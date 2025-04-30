// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";

// // GET /api/brands/[id] - Get a single brand
// export async function GET(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const brand = await prisma.brand.findUnique({
//       where: { id: params.id },
//     });
//     if (!brand) {
//       return NextResponse.json({ error: "Brand not found" }, { status: 404 });
//     }
//     return NextResponse.json(brand);
//   } catch (error) {
//     console.error("Error fetching brand:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch brand" },
//       { status: 500 }
//     );
//   }
// }

// // PUT /api/brands/[id] - Update a brand
// export async function PUT(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const data = await request.json();
//     const brand = await prisma.brand.update({
//       where: { id: params.id },
//       data: {
//         name: data.name,
//         description: data.description,
//         imageUrl: data.imageUrl,
//       },
//     });
//     return NextResponse.json(brand);
//   } catch (error) {
//     console.error("Error updating brand:", error);
//     return NextResponse.json(
//       { error: "Failed to update brand" },
//       { status: 500 }
//     );
//   }
// }

// // DELETE /api/brands/[id] - Delete a brand
// export async function DELETE(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     await prisma.brand.delete({
//       where: { id: params.id },
//     });
//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Error deleting brand:", error);
//     return NextResponse.json(
//       { error: "Failed to delete brand" },
//       { status: 500 }
//     );
//   }
// }
