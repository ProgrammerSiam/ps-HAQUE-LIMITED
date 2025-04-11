import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary with explicit values - for debugging
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
  try {
    // Log configuration for debugging
    console.log("Cloudinary Config:", {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY ? "Present" : "Missing",
      api_secret: process.env.CLOUDINARY_API_SECRET ? "Present" : "Missing",
    });

    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }
    // Convert file to buffer
    const buffer = Buffer.from(await (file as Blob).arrayBuffer());
    const dataURI = `data:${(file as Blob).type};base64,${buffer.toString("base64")}`;

    // Use a simpler approach - upload via a string
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload(
        dataURI,
        { folder: "brands" },
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
      return NextResponse.json({
        success: true,
        url: result.secure_url,
      });
    } else {
      throw new Error("Unexpected result format");
    }
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    return NextResponse.json(
      {
        error: "Error uploading image",
        details: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
