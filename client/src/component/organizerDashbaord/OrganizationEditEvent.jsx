"use client";

import { eventUpdateOrganization } from "@/lib/api/action";
import { authClient } from "@/lib/auth-client";
import { Edit } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function OrganizationEditEvent({myData}) {
  const [open, setOpen] = useState(false);
  const router = useRouter()

  const {data: session} = authClient.useSession()
  const user = session?.user
//   console.log(user)

    const a = async () =>{
        setOpen(true)
        // console.log(myData)
    }

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {

      let imageUrl = "";

      // ✅ IMAGE UPLOAD (IMGBB)
      const file = data.image?.[0];

      if (file) {
        const formData = new FormData();
        formData.append("image", file);

        const res = await fetch(
          `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB}`,
          {
            method: "POST",
            body: formData,
          }
        );

        const result = await res.json();
        imageUrl = result?.data?.display_url || "";
      }

      // ✅ FINAL EVENT DATA
      const eventData = {
        title: data.title,
        organizationEmail: user?.email,
        date: data.date,
        location: data.location,
        price: data.price,
        category: data.category,
        seats: Number(data.seats),
        description: data.description,
        image: imageUrl,
      };

      console.log("FINAL EVENT:", eventData);

      // 👉 API CALL HERE
      const addData = await eventUpdateOrganization(eventData,myData._id)

      if(addData.modifiedCount > 0){
        toast.success("Event Updated successfully");
        router.push('/dashboard/organizer/manage-event')
      }


      reset();
      setOpen(false);
    } catch (error) {
      console.log(error);
      toast.error("Failed to create event");
    }
  };

  return (
    <>
      {/* Button */}
      <button onClick={a}
        className="p-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition"
        >
        <Edit size={18} />
        </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl"
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
                Create Event
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Add new event for your organization
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">

              {/* Title */}
              <div>
                <label className="text-sm text-slate-300 mb-1 block">
                  Event Title
                </label>
                <input
                  type="text"
                  defaultValue={myData?.title}
                  {...register("title", { required: "Title is required" })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-1.5 text-white"
                />
                {errors.title && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.title.message}
                  </p>
                )}
              </div>

              {/* Category */}
              <div>
                <label className="text-sm text-slate-300 mb-1 block">
                  Category
                </label>
                <select
                defaultValue={myData?.category}
                  {...register("category", {
                    required: "Category is required",
                  })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-1.5 text-white"
                >
                  <option value="">Select category</option>
                  <option value="tech">Tech</option>
                  <option value="business">Business</option>
                  <option value="education">Education</option>
                  <option value="music">Music</option>
                  <option value="sports">Sports</option>
                </select>
                {errors.category && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.category.message}
                  </p>
                )}
              </div>

              {/* Date */}
              <div>
                <label className="text-sm text-slate-300 mb-1 block">
                  Event Date
                </label>
                <input
                  type="date"
                  defaultValue={myData?.date}
                  {...register("date", { required: true })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-1.5 text-white"
                />
              </div>

              {/* Location */}
              <div>
                <label className="text-sm text-slate-300 mb-1 block">
                  Location
                </label>
                <input
                  type="text"
                  defaultValue={myData?.location}
                  {...register("location")}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-1.5 text-white"
                />
              </div>

              {/* Price */}
              <div>
                <label className="text-sm text-slate-300 mb-1 block">
                  Ticket Price
                </label>
                <input
                  type="number"
                  defaultValue={myData?.price}
                  {...register("price", { required: true })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-1.5 text-white"
                />
              </div>

              {/* Seats */}
              <div>
                <label className="text-sm text-slate-300 mb-1 block">
                  Seats
                </label>
                <input
                  type="number"
                  defaultValue={myData?.seats}
                  placeholder="Total seats"
                  {...register("seats", {
                    required: "Seats is required",
                    min: 1,
                  })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-1.5 text-white"
                />
                {errors.seats && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.seats.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm text-slate-300 mb-2 block">
                  Event Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  {...register("image")}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-1.5 text-white file:mr-3 file:rounded-lg file:border-0 file:bg-cyan-600 file:px-3 file:py-1 file:text-white"
                />
              </div>

              {/* Description */}
              <div>
                <label className="text-sm text-slate-300 mb-1 block">
                  Description
                </label>
                <textarea
                  rows={1}
                  defaultValue={myData?.description}
                  {...register("description")}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-1.5 text-white"
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
                  {isSubmitting ? "Creating..." : "Create Event"}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </>
  );
}