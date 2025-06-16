import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase";

const supabase = createClient();

export async function GET() {
  try {
    const { data: plants, error } = await supabase
      .from("plants")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return NextResponse.json(plants);
  } catch (error: any) {
    console.error("Error fetching plants:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch plants" },
      { status: 500 }
    );
  }
}

// import { NextResponse } from "next/server";
// import { supabase } from "@/lib/supabase";
// import { v2 as cloudinary } from "cloudinary";

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // GET /api/plants
// export async function GET() {
//   try {
//     const { data: plants, error } = await supabase
//       .from("plants")
//       .select("*")
//       .order("created_at", { ascending: false });

//     if (error) throw error;

//     return NextResponse.json(plants);
//   } catch (error: any) {
//     console.error("Error fetching plants:", error);
//     return NextResponse.json(
//       { error: error.message || "Failed to fetch plants" },
//       { status: 500 }
//     );
//   }
// }

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, description, category, image_url } = body;

    if (!name || !category || !image_url) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data: plant, error } = await supabase
      .from("plants")
      .insert([
        {
          name,
          description,
          category,
          image_url,
        },
      ])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json(plant);
  } catch (error: any) {
    console.error("Error creating plant:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create plant" },
      { status: 500 }
    );
  }
}
