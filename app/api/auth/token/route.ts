// For App Router (app/api/auth/token/route.ts)
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();

    try {
        const response = await fetch(
            "https://haque-api.vercel.app/api/auth/token/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            }
        );

        const data = await response.json();
        return NextResponse.json(data, { status: response.status });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: "Failed to fetch from API" },
            { status: 500 }
        );
    }
}
