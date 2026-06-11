"use client";

import { updateOrganization } from "@/lib/api/action";
import { myOrganization } from "@/lib/api/data";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function UpdateProfileModal() {
  const [open, setOpen] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("SUBMIT WORKING:", data);

    try {
      const exist = await myOrganization(user?.email);

      console.log(exist.org)
      if (!exist?.org?._id) {
        toast.error("Organization not found");
        return;
      }

      let logoUrl = "";

      const image = data.logo?.[0];

      if (image) {
        const formData = new FormData();
        formData.append("image", image);

        const imageUploadRes = await fetch(
          `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB}`,
          {
            method: "POST",
            body: formData,
          }
        );

        const imageResult = await imageUploadRes.json();
        logoUrl = imageResult?.data?.display_url || "";
      }

      const organizationData = {
        name: data.name,
        email: data.email,
        website: data.website,
        address: data.address,
        description: data.description,
        logo: logoUrl,
      };

      const res = await updateOrganization(organizationData, exist?.org?._id);

      if (res?.modifiedCount > 0) {
        toast.success("Organization updated successfully 🚀");
      } else {
        toast.error("No changes detected");
      }

      reset();
      setOpen(false);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      {/* Open Button */}
      <button
        onClick={() => setOpen(true)}
        className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-white font-medium hover:opacity-90 transition"
      >
        Update
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 h-8 w-8 rounded-full bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
            >
              ✕
            </button>

            {/* Header */}
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold text-white">
                Update Organization
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Update your organization details
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              
              {/* Name */}
              <div>
                <label className="text-sm text-slate-300 mb-2 block">
                  Organization Name
                </label>
                <input
                  type="text"
                  disabled
                  defaultValue={user?.name || ""}
                  {...register("name", { required: "Name required" })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-slate-300 mb-2 block">
                  Contact Email
                </label>
                <input
                  type="email"
                  disabled
                  defaultValue={user?.email || ""}
                  {...register("email", { required: "Email required" })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Website */}
              <div>
                <label className="text-sm text-slate-300 mb-2 block">
                  Website
                </label>
                <input
                  type="text"
                  {...register("website")}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
                />
              </div>

              {/* Address */}
              <div>
                <label className="text-sm text-slate-300 mb-2 block">
                  Address
                </label>
                <input
                  type="text"
                  {...register("address")}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
                />
              </div>

              {/* Description */}
              <div>
                <label className="text-sm text-slate-300 mb-2 block">
                  Description
                </label>
                <textarea
                  rows={3}
                  {...register("description")}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
                />
              </div>

              {/* Logo */}
              <div>
                <label className="text-sm text-slate-300 mb-2 block">
                  Logo
                </label>
                <input
                  type="file"
                  {...register("logo")}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-xl border border-slate-700 py-3 text-slate-300 hover:bg-slate-800"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-white font-semibold hover:opacity-90"
                >
                  {isSubmitting ? "Updating..." : "Update"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}