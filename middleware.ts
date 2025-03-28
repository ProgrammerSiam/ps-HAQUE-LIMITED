import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    // Handle dashboard routes
    return NextResponse.next();
  }
  // Handle public routes
  return NextResponse.next();
}
