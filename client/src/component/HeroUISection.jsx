"use client";

import React from "react";
import { Card, Button } from "@heroui/react";
import { Calendar, MapPin, Ticket, TrendingUp } from "lucide-react";

const HeroUISection = () => {
  return (
    <section className="bg-black px-6 py-30">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-700">
              Events
            </span>
          </h2>

          <p className="text-gray-400 mt-2">
            Explore trending events happening around you
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <Card className="bg-zinc-900 border border-zinc-800 p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Startup Summit</h3>
              <TrendingUp className="text-cyan-400" />
            </div>

            <div className="mt-4 space-y-2 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Calendar size={16} /> 20 July 2026
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} /> Dhaka
              </div>
              <div className="flex items-center gap-2">
                <Ticket size={16} /> ৳499
              </div>
            </div>

            <Button className="mt-5 w-full bg-gradient-to-r from-cyan-500 to-blue-700 text-white">
              View Details
            </Button>
          </Card>

          {/* Card 2 */}
          <Card className="bg-zinc-900 border border-zinc-800 p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Tech Conference</h3>
              <TrendingUp className="text-cyan-400" />
            </div>

            <div className="mt-4 space-y-2 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Calendar size={16} /> 15 Sept 2026
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} /> Dhaka Convention Center
              </div>
              <div className="flex items-center gap-2">
                <Ticket size={16} /> ৳999
              </div>
            </div>

            <Button className="mt-5 w-full bg-gradient-to-r from-cyan-500 to-blue-700 text-white">
              View Details
            </Button>
          </Card>

          {/* Card 3 */}
          <Card className="bg-zinc-900 border border-zinc-800 p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Music Night</h3>
              <TrendingUp className="text-cyan-400" />
            </div>

            <div className="mt-4 space-y-2 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Calendar size={16} /> 5 Aug 2026
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} /> Dhaka Arena
              </div>
              <div className="flex items-center gap-2">
                <Ticket size={16} /> ৳799
              </div>
            </div>

            <Button className="mt-5 w-full bg-gradient-to-r from-cyan-500 to-blue-700 text-white">
              View Details
            </Button>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default HeroUISection;