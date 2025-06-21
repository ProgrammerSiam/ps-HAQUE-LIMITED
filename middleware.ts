import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "@/lib/services/auth";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  // Public routes that don't require authentication
  const publicRoutes = [
    "/",
    "/about-us",
    "/gallery",
    "/news",
    "/our-products",
    "/signin",
  ];
  const isPublicRoute = publicRoutes.some(
    (route) =>
      request.nextUrl.pathname === route ||
      request.nextUrl.pathname.startsWith("/api/") ||
      request.nextUrl.pathname.startsWith("/_next/") ||
      request.nextUrl.pathname.startsWith("/images/")
  );

  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Protected routes (dashboard and admin)
  if (
    request.nextUrl.pathname.startsWith("/dashboard") ||
    request.nextUrl.pathname.startsWith("/admin")
  ) {
    if (!token) {
      return NextResponse.redirect(new URL("/signin", request.url));
    }

    try {
      // Verify the token
      const user = await verifyToken(token);
      if (!user) {
        return NextResponse.redirect(new URL("/signin", request.url));
      }

      // Add user info to headers for use in components
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set("x-user-id", user.id);
      requestHeaders.set("x-user-role", user.role);

      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    } catch (error) {
      console.error("Token verification failed:", error);
      return NextResponse.redirect(new URL("/signin", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
