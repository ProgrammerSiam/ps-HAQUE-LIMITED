import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase";
import bcrypt from "bcryptjs";
import { verifyToken } from "@/lib/services/auth";

export async function POST(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await verifyToken(token);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { currentPassword, newPassword } = await request.json();

    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const supabase = createClient();

    // Get the user's current password hash from the database
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("password_hash")
      .eq("id", user.id)
      .single();

    if (userError || !userData) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Verify the current password
    const isMatch = await bcrypt.compare(
      currentPassword,
      userData.password_hash
    );
    if (!isMatch) {
      return NextResponse.json(
        { error: "Incorrect current password" },
        { status: 400 }
      );
    }

    // Hash the new password
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    // Update the password in the database
    const { error: updateError } = await supabase
      .from("users")
      .update({ password_hash: hashedNewPassword })
      .eq("id", user.id);

    if (updateError) {
      throw new Error("Failed to update password");
    }

    return NextResponse.json(
      { message: "Password updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error changing password:", error);
    return NextResponse.json(
      { error: "An internal error occurred" },
      { status: 500 }
    );
  }
}
