import { NextResponse } from "next/server";
import { databaseService } from "@/lib/supabaseService";

export async function GET() {
  try {
    const commercials = await databaseService.tv_commercials.getAll();
    return NextResponse.json(commercials);
  } catch (error) {
    console.error("Error fetching commercials:", error);
    return NextResponse.json(
      { error: "Failed to fetch commercials" },
      { status: 500 }
    );
  }
}
