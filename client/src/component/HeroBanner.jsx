import React from "react";

const HeroBanner = () => {
  return (
    <section className="bg-black text-white px-6 py-40">
      <div className="max-w-6xl mx-auto text-center relative">
        
        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-700/20 blur-3xl rounded-full"></div>

        <h1 className="text-5xl font-bold leading-tight">
          Discover & Book <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-700">Amazing Events</span>
        </h1>

        <p className="text-gray-400 mt-5 text-lg">
          Find tickets for concerts, tech events, sports and more — all in one place.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 font-semibold hover:scale-105 transition">
            Explore Events
          </button>

          <button className="px-6 py-3 rounded-xl border border-zinc-700 hover:border-cyan-500 transition">
            Create Event
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;