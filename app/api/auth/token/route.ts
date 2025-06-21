// For App Router (app/api/auth/token/route.ts)
import { NextRequest, NextResponse } from "next/server";
import { login, refreshToken } from "@/lib/services/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password, refresh_token } = body;

    // Handle refresh token request
    if (refresh_token) {
      const response = await refreshToken(refresh_token);
      return NextResponse.json(response);
    }

    // Handle login request
    if (!username || !password) {
      return NextResponse.json(
        { error: "Username and password are required" },
        { status: 400 }
      );
    }

    const response = await login(username, password);

    // Create the response object
    const res = NextResponse.json(response);
    // Set the token cookie server-side
    res.cookies.set("token", response.access, {
      httpOnly: false, // set to true for more security, but then you can't access it from JS
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
    res.cookies.set("refreshToken", response.refresh, {
      httpOnly: false,
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    return res;
  } catch (error) {
    console.error("Authentication error:", error);
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }
}
