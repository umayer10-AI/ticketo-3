import React from 'react';

const CardDetails = ({event}) => {

    return (
        <div>
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

          {/* Description */}
          <div className='flex items-center justify-between'>
            <div className="mt-5">
            <h2 className="text-2xl font-semibold mb-4">
              Event Description
            </h2>

            <div className="bg-[#1F2937] border border-gray-700 rounded-xl p-5">
              <p className="text-gray-300 leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-5">
            <button className="w-full md:w-auto px-8 py-3 bg-linear-to-r from-cyan-500 to-blue-700 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300">
              🎟️ Book Ticket Now
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default CardDetails;