import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// GET /api/plants
export async function GET() {
  try {
    const plants = await prisma.plant.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(plants);
  } catch (error) {
    console.error("Error fetching plants:", error);
    return NextResponse.json(
      { error: "Failed to fetch plants" },
      { status: 500 }
    );
  }
}

// POST /api/plants
export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const name = formData.get("name");
    const description = formData.get("description");
    const category = formData.get("category");

    if (!file || !name || !description || !category) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const buffer = Buffer.from(await (file as Blob).arrayBuffer());
    const dataURI = `data:${(file as Blob).type};base64,${buffer.toString("base64")}`;

    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload(
        dataURI,
        { folder: "plants" },
        (error, result) => {
          if (error) {
            console.error("Cloudinary upload error:", error);
            return reject(error);
          }
          resolve(result);
        }
      );
    });

    if (
      typeof result === "object" &&
      result !== null &&
      "secure_url" in result
    ) {
      const plant = await prisma.plant.create({
        data: {
          name,
          description,
          category,
          imageUrl: result.secure_url,
        },
      });

      return NextResponse.json(plant);
    } else {
      throw new Error("Unexpected result format");
    }
  } catch (error) {
    console.error("Error creating plant:", error);
    return NextResponse.json(
      { error: "Failed to create plant" },
      { status: 500 }
    );
  }
}
