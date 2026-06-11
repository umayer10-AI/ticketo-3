"use client";

import { Edit, Trash2 } from "lucide-react";
import OrganizationEditEvent from "./OrganizationEditEvent";
import { eventDeleteOrganization } from "@/lib/api/action";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function OrganizationManageEvent({ events = [] }) {

  const router = useRouter()

  const handleDelete = async (id) => {
    const deleteData = await eventDeleteOrganization(id)
    if(deleteData.deletedCount > 0){
      router.push('/dashboard/organizer/manage-event')
      toast.success('Data Deleted')
    }
  };

  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900 p-4">
      <h2 className="text-xl font-bold text-white mb-4">
        All Events
      </h2>

      <table className="w-full text-left text-sm text-slate-300">
        <thead className="text-slate-400 border-b border-slate-700">
          <tr>
            <th className="py-3 px-2">Title</th>
            <th className="py-3 px-2">Category</th>
            <th className="py-3 px-2">Date</th>
            <th className="py-3 px-2">Seats</th>
            <th className="py-3 px-2">Price</th>
            <th className="py-3 px-2">Status</th>
            <th className="py-3 px-2 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {events.length === 0 ? (
            <tr>
              <td
                colSpan="7"
                className="text-center py-10 text-slate-500"
              >
                No events found
              </td>
            </tr>
          ) : (
            events.map((event, index) => (
              <tr
                key={index}
                className="border-b border-slate-800 hover:bg-slate-800/50 transition"
              >
                <td className="py-3 px-2 font-medium text-white">
                  {event.title}
                </td>

                <td className="py-3 px-2 capitalize">
                  {event.category}
                </td>

                <td className="py-3 px-2">
                  {event.date}
                </td>

                <td className="py-3 px-2">
                  {event.seats}
                </td>

                <td className="py-3 px-2">
                  ${event.price}
                </td>

                <td className="py-3 px-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.status === "approved"
                        ? "bg-green-500/20 text-green-400"
                        : event.status === "pending"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : event.status === "rejected"
                        ? "bg-red-500/20 text-red-400"
                        : "bg-slate-500/20 text-slate-400"
                    }`}
                  >
                    {event.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="py-3 px-2">
                  <div className="flex items-center justify-center gap-3">
                    
                    <OrganizationEditEvent myData={event}></OrganizationEditEvent>

                    <button
                      onClick={() => handleDelete(event?._id)}
                      className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}