import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({event}) => {
    return (
        <div>
        <div className="bg-[#111827] border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
  {event?.image && (
  <img
    src={event.image}
    alt={event.title}
    className="w-full h-52 object-cover"
  />
)}

  <div className="p-5">
    <div className="flex justify-between items-start gap-3">
      <h2 className="text-xl font-bold text-white">
        {event.title}
      </h2>

      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold ${
          event.status === "pending"
            ? "bg-yellow-500/20 text-yellow-400"
            : "bg-green-500/20 text-green-400"
        }`}
      >
        {event.status}
      </span>
    </div>

    <div className="mt-4 space-y-2 text-gray-400 text-sm">
      <p>📅 {event.date}</p>
      <p>📍 {event.location}</p>
      <p>🎫 ${event.price}</p>
      <p>🏷️ {event.category}</p>
      <p>👥 {event.seats} Seats</p>
    </div>

    <Link href={`/browse/${event._id}`}>
      <button className="mt-5 w-full bg-linear-to-r from-cyan-500 to-blue-700 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition">
        View Details
      </button>
    </Link>
  </div>
</div>
        </div>
    );
};

export default Card;