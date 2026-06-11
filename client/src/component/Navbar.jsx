"use client";

import React, { useState } from "react";
import { ChevronDown, Ticket } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = authClient.useSession()
  const user = session?.user
  console.log(user)

  let dash;
  if(user?.role==='organizer'){
    dash = '/dashboard/organizer'
  }
  if(user?.role==='attendee'){
    dash = '/dashboard/attendee'
  }

  const a = async() => {
    await authClient.signOut()
  }

  return (
    <nav className="bg-black border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Ticket size={22} className="text-white" />
            </div>

            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-700 bg-clip-text text-transparent">
              Ticketo
            </h1>
          </Link>

          {/* Center Menu */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className={
                pathname === "/"
                  ? "bg-linear-to-r from-cyan-500 to-blue-700 py-1.5 px-5 font-medium rounded-lg"
                  : "text-gray-300 hover:text-cyan-400 transition"
              }
            >
              Home
            </Link>

            <Link
              href="/browse"
              className={
                pathname === "/browse"
                  ? "bg-linear-to-r from-cyan-500 to-blue-700 py-1.5 px-5 font-medium rounded-lg"
                  : "text-gray-300 hover:text-cyan-400 transition"
              }
            >
              Browse
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            
            {/* Login Button */}
            {
                !user && <Link href={'/login'} className="bg-linear-to-r from-cyan-500 to-blue-700 text-white px-5 py-2 rounded-lg font-medium hover:scale-105 transition-transform">
              Login
            </Link>
            }

            {/* Profile Dropdown */}
            {
              user && <div className="relative">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 cursor-pointer hover:border-cyan-500/50 transition"
              >
                <img
                  src={user?.image || "https://i.pravatar.cc/150?img=12"}
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
                {user && <h2>hey , {user?.name?.split(' ')[0] || 'Jhon Doe'}</h2>}

                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {isOpen && (
                <div className="absolute right-0 mt-3 w-52 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden">
                  <Link
                    href={dash}
                    className="block px-5 py-3 text-gray-300 hover:bg-zinc-800 hover:text-cyan-400 transition"
                  >
                    Dashboard
                  </Link>

                  <button onClick={a} className="w-full text-left px-5 py-3 text-red-400 hover:bg-zinc-800 transition">
                    Logout
                  </button>
                </div>
              )}
            </div>
            }

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;