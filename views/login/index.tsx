"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import noiseBg from "@/assets/products-img/sign-up-noice-bg.png";

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
    <div className="grid min-h-screen md:grid-cols-2">
      <div className="hidden items-center justify-center bg-white md:flex">
        <div className="">
          <Image
            src="/images/login/login.svg"
            alt="login"
            width={0}
            height={0}
            className="h-96 w-full object-cover"
          />
        </div>
      </div>

      <div
        className="flex flex-col items-center justify-center p-6"
        style={{
          backgroundColor: "#C5242A",
          backgroundImage: `url(${noiseBg.src})`,
        }}
      >
        <div className="w-96 max-w-sm ">
          <div className="flex w-full flex-col items-center mb-10">
            <Image
              src={"/logo.png"}
              alt="Haque"
              width={136}
              height={74}
              className="object-cover"
            />
            <h2 className="my-5 text-center text-2xl uppercase text-white">
              <span className="font-medium">WELCOME BACK TO</span> <br />
              <span className="font-bold text-white">A.T. HAQUE</span>
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="">
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                className="h-12 border-2 rounded-[12px] border-white bg-transparent text-white placeholder:text-gray-200"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="">
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className="h-12 border-2 rounded-[12px] border-white bg-transparent text-white placeholder:text-gray-200"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full py-6 bg-white rounded-[10px] text-[#686868] hover:bg-gray-200"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log In"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
