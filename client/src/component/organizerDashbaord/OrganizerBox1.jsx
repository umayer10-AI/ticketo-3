import { CalendarDays, Users, DollarSign } from "lucide-react";

export default function OrganizerBox1() {
  const stats = [
    {
      title: "TOTAL HOSTED EVENTS",
      value: "15",
      icon: CalendarDays,
      iconBg: "bg-red-500/20",
      iconColor: "text-red-400",
    },
    {
      title: "TOTAL TICKET SALES",
      value: "450",
      icon: Users,
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-400",
    },
    {
      title: "ACCUMULATED REVENUE",
      value: "$25000.00",
      icon: DollarSign,
      iconBg: "bg-green-500/20",
      iconColor: "text-green-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="
              relative overflow-hidden
              bg-white/[0.03]
              border border-white/10
              backdrop-blur-xl
              rounded-3xl
              px-8 py-6
              shadow-[0_0_30px_rgba(255,255,255,0.03)]
            "
          >
            {/* Glow */}
            <div className="absolute bg-gradient-to-r from-white/[0.02] to-transparent" />

            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold text-white">
                  {item.value}
                </h2>
              </div>

              <div
                className={`
                  h-12 w-12 rounded-2xl
                  flex items-center justify-center
                  border border-white/10
                  ${item.iconBg}
                `}
              >
                <Icon
                  size={25}
                  className={item.iconColor}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}