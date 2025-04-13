import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { subject, body } = await request.json();

    if (!subject || !body) {
      return NextResponse.json(
        { error: "Subject and body are required" },
        { status: 400 }
      );
    }

    const supabase = createClient();

    // Get all subscribers
    const { data: subscribers, error: fetchError } = await supabase
      .from("subscribers")
      .select("email");

    if (fetchError) {
      throw fetchError;
    }

    if (!subscribers || subscribers.length === 0) {
      return NextResponse.json(
        { error: "No subscribers found" },
        { status: 400 }
      );
    }

    // Send email to all subscribers
    const emails = subscribers.map((sub) => sub.email);

    await resend.emails.send({
      from: "Your Company <newsletter@yourdomain.com>",
      to: ["newsletter@yourdomain.com"], // Primary recipient
      bcc: emails,
      subject: subject,
      text: body, // Plain text version
      html: body, // HTML version
    });

    // Log the newsletter
    const { error: logError } = await supabase
      .from("newsletter_messages")
      .insert([{ subject, body }]);

    if (logError) {
      console.error("Error logging newsletter:", logError);
    }

    return NextResponse.json(
      { message: "Newsletter sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter sending error:", error);
    return NextResponse.json(
      { error: "Failed to send newsletter" },
      { status: 500 }
    );
  }
}
