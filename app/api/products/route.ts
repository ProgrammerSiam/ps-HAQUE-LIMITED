import { NextResponse } from "next/server";
import { products } from "@/data/products";

export async function GET() {
  const data = products;
  return NextResponse.json(data, { status: 200 });
}
