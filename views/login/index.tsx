"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <div className="">
                <div className="min-h-screen grid md:grid-cols-2 items-center sm:gap-8">
                    <div className="_center bg-muted h-full">
                        <div className="lg:size-[400px] sm:size-[350px] size-[200px]">
                            <Image
                                src={"/images/login/login.svg"}
                                alt="login"
                                width={400}
                                height={400}
                                className="object-cover size-full"
                            />
                        </div>
                    </div>

                    {/* Form */}
                    <div className="px-4 md:px-6">
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
                            <form className="space-y-6">
                                <div className="space-y-1">
                                    <Input
                                        id="email"
                                        name="email"
                                        type="text"
                                        placeholder="Username or Email Address"
                                        className="h-12"
                                        required
                                    />
                                </div>

                                <div className="space-y-1 relative">
                                    <Input
                                        id="password"
                                        name="password"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        placeholder="Password"
                                        className="h-12 pr-10"
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-3 top-3 text-destructive hover:text-destructive/80"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5" />
                                        ) : (
                                            <Eye className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <Checkbox id="remember-me" />
                                        <label
                                            htmlFor="remember-me"
                                            className="ml-2 block text-sm text-muted-foreground"
                                        >
                                            Remember Me
                                        </label>
                                    </div>
                                    <div className="text-sm">
                                        <Link
                                            href="/forgot-password"
                                            className="text-destructive hover:text-destructive/80"
                                        >
                                            Forgot password?
                                        </Link>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    variant={"destructive"}
                                    className="w-full"
                                >
                                    LOG IN
                                </Button>

                                <div className="text-center text-sm text-gray-500">
                                    Don&apos;t have an account?{" "}
                                    <Link
                                        href="/register"
                                        className="text-destructive hover:text-destructive/80"
                                    >
                                        Sign up
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
