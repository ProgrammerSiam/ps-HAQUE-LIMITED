const bcrypt = require("bcryptjs");
const { createClient } = require("@supabase/supabase-js");

// Initialize Supabase client
const supabaseUrl = "https://hjqyvvjfujqzqlzbwqxk.supabase.co";
const supabaseServiceKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqcXl2dmpmdWpxenFsemJ3cXhrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDI3MzE1NiwiZXhwIjoyMDU5ODQ5MTU2fQ.RdbFsodhQ0RVuscR4d9XgXrLXf2b6KCQUcS4LZia8y0";
console.log(supabaseUrl, supabaseServiceKey);

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Missing Supabase environment variables");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function setupAdminUser() {
  try {
    const adminUsername = "admin";
    const adminEmail = "admin@haque.com";
    const adminPassword = "admin123"; // Change this in production

    // Hash the password
    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    // Check if admin user already exists
    const { data: existingUser, error: checkError } = await supabase
      .from("users")
      .select("id")
      .eq("username", adminUsername)
      .single();

    if (existingUser) {
      console.log("Admin user already exists");
      return;
    }

    // Create admin user
    const { data: user, error } = await supabase
      .from("users")
      .insert([
        {
          username: adminUsername,
          email: adminEmail,
          password_hash: hashedPassword,
          role: "admin",
          is_active: true,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Error creating admin user:", error);
      return;
    }

    console.log("Admin user created successfully:", {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
    });

    console.log("Login credentials:");
    console.log("Username:", adminUsername);
    console.log("Password:", adminPassword);
  } catch (error) {
    console.error("Setup failed:", error);
  }
}

setupAdminUser();
