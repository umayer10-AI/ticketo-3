import { getSerSession, getSerSessionBackend } from "@/lib/api/session";
import Link from "next/link";
import { CheckCircle, Crown, Sparkles } from "lucide-react";

export default async function OrganizerDashboardBox2() {
  const user = await getSerSession();
  const userData = await getSerSessionBackend(user?.email);

  if (!userData?.isPremium) {
    return (
      <section className="relative overflow-hidden mt-5 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-8 md:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.15),transparent_40%)]" />

        <div className="relative z-10 max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-400">
            Event Management Platform
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
            Unlock Ultimate
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              {" "}
              Event Creation
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            Create, manage, and scale your events effortlessly. From ticketing
            and attendee management to real-time analytics, everything you need
            is in one powerful platform.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <form action="/api/checkout_sessions" method="POST">
              <button
                type="submit"
                className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 px-6 py-3 font-semibold text-white transition hover:scale-105"
              >
                Upgrade to Premium
              </button>
            </form>

            <Link
              href="/events"
              className="rounded-xl border border-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
            >
              Explore Events
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div>
              <h3 className="text-2xl font-bold text-white">500+</h3>
              <p className="text-sm text-gray-400">Events Created</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">50K+</h3>
              <p className="text-sm text-gray-400">Tickets Sold</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">10K+</h3>
              <p className="text-sm text-gray-400">Attendees</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">99%</h3>
              <p className="text-sm text-gray-400">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="relative overflow-hidden mt-5 rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-8 md:p-12">
      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-yellow-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-yellow-500/20 bg-yellow-500/10">
            <Crown className="h-8 w-8 text-yellow-400" />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white">
              Premium Member 👑
            </h2>
            <p className="text-gray-400">
              Your premium subscription is active.
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-green-400">
          <CheckCircle className="h-5 w-5" />
          <span>Premium Membership Activated</span>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
          <h3 className="mb-4 text-lg font-semibold text-white">
            Account Details
          </h3>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Name</span>
              <span className="text-white font-medium">
                {userData?.name || "Premium User"}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Email</span>
              <span className="text-white">
                {userData?.email || user?.email}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Plan</span>
              <span className="font-semibold text-yellow-400">Premium</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Status</span>
              <span className="font-semibold text-green-400">Active</span>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-6">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-yellow-400">
            <Sparkles className="h-5 w-5" />
            Premium Benefits
          </h3>

          <ul className="mt-4 space-y-3 text-gray-300">
            <li>✓ Unlimited Event Creation</li>
            <li>✓ Priority Support</li>
            <li>✓ Advanced Analytics</li>
            <li>✓ Featured Event Placement</li>
            <li>✓ Early Access to New Features</li>
          </ul>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/dashboard"
            className="flex-1 rounded-xl bg-yellow-500 py-3 text-center font-semibold text-black transition hover:bg-yellow-400"
          >
            Dashboard
          </Link>

          <Link
            href="/events"
            className="flex-1 rounded-xl border border-slate-700 py-3 text-center font-semibold text-white transition hover:bg-slate-800"
          >
            My Events
          </Link>
        </div>
      </div>
    </div>
  );
}