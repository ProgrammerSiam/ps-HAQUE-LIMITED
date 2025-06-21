"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/auth/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Invalid credentials");
      }

      // Store user info in localStorage for easy access
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success("Login successful!");
      window.location.href = "/dashboard";
    } catch (error: any) {
      console.error("Error logging in:", error);
      toast.error(error.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="">
        <div className="min-h-screen grid md:grid-cols-2 items-center sm:gap-8">
          <div className="_center bg-muted h-full">
            <div className="lg:size-[400px] sm:size-[350px] size-[200px]">
              <Image
                src="/images/login/login.svg"
                alt="login"
                width={400}
                height={400}
                className="object-cover size-full"
              />
            </div>
          </div>

          {/* Form */}
          <div className="max-w-[660px] mx-auto bg-card p-6 rounded-lg shadow-sm">
            <div className="w-full _center flex-col">
              <Image
                src={"/logo.png"}
                alt="login"
                width={136}
                height={74}
                className="object-cover"
              />
              <h2 className="text-2xl font-bold text-app-black text-center my-5">
                Welcome back to A.T.Haque!
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Username"
                  className="h-12"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-1">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="h-12"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button
                type="submit"
                variant={"destructive"}
                className="w-full"
                disabled={loading}
              >
                {loading ? "Logging in..." : "LOG IN"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
