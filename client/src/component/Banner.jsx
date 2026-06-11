import React from "react";
import { Ticket, Calendar, MapPin, ArrowRight } from "lucide-react";

const Banner = () => {
  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6">
              <Ticket size={16} className="text-cyan-400" />
              <span className="text-sm text-cyan-400">
                Bangladeshs Smart Ticketing Platform
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Book Your
              <span className="block bg-gradient-to-r from-cyan-500 to-blue-700 bg-clip-text text-transparent">
                Next Event
              </span>
              In Seconds
            </h1>

            <p className="text-gray-400 text-lg mt-6 max-w-xl">
              Discover concerts, tech conferences, workshops, sports events,
              and more. Buy tickets securely and manage all your bookings in
              one place.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-700 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition">
                Browse Events
                <ArrowRight size={18} />
              </button>

              <button className="border border-zinc-700 px-6 py-3 rounded-xl hover:border-cyan-500 transition">
                Become Organizer
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-3xl font-bold text-cyan-400">10K+</h3>
                <p className="text-gray-500 text-sm">Tickets Sold</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-cyan-400">500+</h3>
                <p className="text-gray-500 text-sm">Events</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-cyan-400">50+</h3>
                <p className="text-gray-500 text-sm">Organizers</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
  {/* Glow background */}
  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-700/20 blur-3xl rounded-3xl" />

  {/* Image Card */}
  <div className="relative rounded-3xl overflow-hidden border border-zinc-800">
    
    {/* Banner Image */}
    <img
      src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=1200&q=80"
      alt="Event Banner"
      className="w-full h-[420px] object-cover"
    />

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/50" />

    {/* Content over image */}
    <div className="absolute bottom-0 left-0 p-8 w-full">
      
      <div className="max-w-xl">
        <h3 className="text-3xl md:text-4xl font-bold text-white">
          Tech Summit 2026
        </h3>

        <p className="text-gray-300 mt-2">
          Join the biggest tech conference with developers, startups & innovators.
        </p>

        <div className="flex items-center gap-6 mt-4 text-gray-200 text-sm">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>15 September, 2026</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Dhaka Convention Center</span>
          </div>
        </div>

        <button className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-700 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
          Get Ticket Now
        </button>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Banner;