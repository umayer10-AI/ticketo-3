import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import BookingSection from "./BookingSection";

const CardDetails = async ({ event }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  return (
    <div className="bg-[#0F172A] text-white py-10 px-4">
      <div className="max-w-5xl mx-auto bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden">
        {/* Event Image */}
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-[300px] object-cover"
        />

        <div className="p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h1 className="text-3xl md:text-4xl font-bold">
              {event.title}
            </h1>

            <span
              className={`px-4 py-2 rounded-full text-sm font-semibold w-fit ${
                event.status === "pending"
                  ? "bg-yellow-500/20 text-yellow-400"
                  : "bg-green-500/20 text-green-400"
              }`}
            >
              {event.status}
            </span>
          </div>

          {/* Event Info */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="space-y-4">
              <p className="text-gray-300">
                📅 <span className="font-medium">Date:</span> {event.date}
              </p>

              <p className="text-gray-300">
                📍 <span className="font-medium">Location:</span>{" "}
                {event.location}
              </p>

              <p className="text-gray-300">
                🎫 <span className="font-medium">Ticket Price:</span> $
                {event.price}
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-300">
                🏷️ <span className="font-medium">Category:</span>{" "}
                {event.category}
              </p>

              <p className="text-gray-300">
                👥 <span className="font-medium">Available Seats:</span>{" "}
                {event.seats}
              </p>

              <p className="text-gray-300">
                📧 <span className="font-medium">Organizer:</span>{" "}
                {event.organizationEmail}
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 justify-between mt-8">
            {/* Description */}
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4">
                Event Description
              </h2>

              <div className="bg-[#1F2937] border border-gray-700 rounded-xl p-5">
                <p className="text-gray-300 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>

            {/* Booking Section */}
            <div className="lg:w-[350px]">
              {user?.role !== "organizer" ? (
                <BookingSection
                  price={event.price}
                  seats={event.seats}
                  _id={event._id}
                  title={event.title}
                />
              ) : (
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5">
                  <h2 className="text-red-500 font-bold text-center">
                    Organizer can not book tickets
                  </h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;