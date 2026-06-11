"use client";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Ticket } from "lucide-react";
import { authClient } from "@/lib/auth-client";


const uploadToImgBB = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch(
    `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB}`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await res.json();
  return data?.data?.url;
};

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (v) => {
    try {
      console.log(v);

      const file = v.image?.[0];

      let imageUrl = "";

      if (file) {
        imageUrl = await uploadToImgBB(file);
      }

      const { data, error } = await authClient.signUp.email({
        name: v.name,
        email: v.email,
        password: v.password,
        image: imageUrl,
        role: v.role,
        isblock: false,
        callbackURL: "/",
      });

      if (data) alert("Data Successfully");
      if (error) alert(error.message);
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="bg-black flex items-center justify-center px-6 my-10">
      
      <div className="max-w-md w-full bg-zinc-900 rounded-2xl py-5 px-8 shadow-xl shadow-cyan-400">
        
        {/* ================= LOGO ================= */}
        <div className="flex flex-col items-center mb-5">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Ticket className="text-white" />
          </div>

          <h1 className="mt-2 text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-700 bg-clip-text text-transparent">
            Create account
          </h1>
        </div>

        {/* ================= FORM ================= */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          
          {/* NAME */}
          <div>
            <label className="text-gray-300 text-sm font-semibold">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: true })}
              className="w-full mt-2 px-4 py-3 rounded-xl bg-black border border-zinc-800 text-white focus:outline-none focus:border-cyan-500"
            />

            {errors.name && (
              <p className="text-red-500 text-xs mt-1">Name is required</p>
            )}
          </div>

          {/* EMAIL */}
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
              <p className="text-red-500 text-xs mt-1">Email is required</p>
            )}
          </div>

          {/* IMAGE UPLOAD */}
          <div>
            <label className="text-gray-300 text-sm font-semibold">
              Profile Image
            </label>

            <input
              type="file"
              accept="image/*"
              {...register("image", { required: true })}
              className="w-full mt-2 px-4 py-3 rounded-xl bg-black border border-zinc-800 text-white"
            />

            {errors.image && (
              <p className="text-red-500 text-xs mt-1">Image is required</p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-gray-300 text-sm font-semibold">
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
              {...register("password", { required: true })}
              className="w-full mt-2 px-4 py-3 rounded-xl bg-black border border-zinc-800 text-white"
            />

            {errors.password && (
              <p className="text-red-500 text-xs mt-1">Password is required</p>
            )}
          </div>

          {/* ROLE */}
          <div>
            <label className="text-gray-300 text-sm font-semibold">
              Select Role
            </label>

            <select
              {...register("role", { required: true })}
              className="w-full mt-2 px-4 py-3 rounded-xl bg-black border border-zinc-800 text-white"
            >
              <option value="">Select role</option>
              <option value="attendee">Attendee</option>
              <option value="organizer">Organizer</option>
            </select>

            {errors.role && (
              <p className="text-red-500 text-xs mt-1">Role is required</p>
            )}
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-700 hover:scale-105 transition"
          >
            Create Account
          </button>
        </form>

        {/* LOGIN LINK */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-cyan-400 hover:underline font-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;