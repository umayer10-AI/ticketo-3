"use client";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Ticket } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (v) => {
    console.log(v);

    const { data, error } = await authClient.signIn.email({
            email: v.email,
            password: v.password,
            callbackURL: "/",
        });
    
        if(data){
            alert('Data Successfully')
        }
        if(error){
            alert(error.message)
        }
  };

  const handleGoogle = async () => {
    const data = await authClient.signIn.social({
        provider: "google",
    });
  }

  return (
    <div className="bg-black flex items-center justify-center px-6 my-10">
      
      <div className="max-w-md w-full bg-zinc-900 rounded-2xl p-8 shadow-xl shadow-cyan-400">
        
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 flex items-center justify-center shadow-lg p-2 shadow-cyan-500/20">
            <Ticket className="text-white" />
          </div>

          <h1 className="mt-3 text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-700 bg-clip-text text-transparent">
            Login account
          </h1>
        </div>

        {/* Google Login Button */}
        <button
          type="button"
          onClick={handleGoogle}
          className="w-full flex items-center justify-center gap-3 bg-white text-black py-3 rounded-xl font-medium hover:scale-105 transition mb-5"
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px flex-1 bg-zinc-700"></div>
          <span className="text-gray-500 text-sm">OR</span>
          <div className="h-px flex-1 bg-zinc-700"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          
          {/* Email */}
          <div>
            <label className="text-gray-300 text-sm font-semibold">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
              className="w-full mt-2 px-4 py-3 rounded-xl bg-black border border-zinc-800 text-white focus:outline-none focus:border-cyan-500"
            />

            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                Email is required
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-300 text-sm font-semibold">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: true })}
              className="w-full mt-2 px-4 py-3 rounded-xl bg-black border border-zinc-800 text-white focus:outline-none focus:border-cyan-500"
            />

            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                Password is required
              </p>
            )}
          </div>

          {/* Forgot */}
          <div className="flex justify-end">
            <Link href="#" className="text-sm text-cyan-400 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-700 hover:scale-105 transition"
          >
            Login
          </button>
        </form>

        {/* Register */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-cyan-400 hover:underline font-semibold"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;