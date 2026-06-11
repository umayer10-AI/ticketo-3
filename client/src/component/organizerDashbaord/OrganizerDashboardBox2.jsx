import Link from "next/link";

export default function OrganizerDashboardBox2() {
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

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/dashboard/organizer/add-event"
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 px-6 py-3 font-semibold text-white transition hover:scale-105"
          >
            Create Event
          </Link>

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