import React from "react";
import { Ticket, Mail } from "lucide-react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black mt-20 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Ticket size={20} className="text-white" />
              </div>

              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-700 bg-clip-text text-transparent">
                Ticketo
              </h2>
            </div>

            <p className="text-gray-400 text-sm leading-6">
              Discover, book, and manage events effortlessly. Your one-stop
              platform for finding tickets and unforgettable experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                Home
              </Link>

              <Link
                href="/browse"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                Browse Events
              </Link>

              <Link
                href="/dashboard"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                Dashboard
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Support
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                Contact Us
              </Link>

              <Link
                href="/privacy"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Get In Touch
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={16} />
                <span>support@ticketo.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full border border-blue-600  flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500 transition-all duration-300"
                >
                  <FaFacebookF size={16} />
                </Link>

                <Link
                  href="#"
                  className="w-10 h-10 rounded-full border border-blue-600  flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500 transition-all duration-300"
                >
                  <FaGithub size={16} />
                </Link>

                <Link
                  href="#"
                  className="w-10 h-10 rounded-full border border-blue-600 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500 transition-all duration-300"
                >
                  <FaLinkedinIn size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zinc-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Ticketo. All rights reserved.
          </p>

          <p className="text-sm font-medium bg-gradient-to-r from-cyan-500 to-blue-700 bg-clip-text text-transparent">
            Built with ❤️ for event lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;