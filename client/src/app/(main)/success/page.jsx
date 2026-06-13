import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id) {
    throw new Error("Please provide a valid session_id");
  }

  const {
    status,
    customer_details: { email: customerEmail },
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  if (status === "open") {
    return redirect("/");
  }

  if (status === "complete") {
    return (
      <div className="py-20 flex items-center justify-center bg-slate-900 to-green-50 px-4">
        <div className="w-full max-w-lg bg-black/80 rounded-3xl shadow-xl p-8 text-center border border-gray-100">
          {/* Success Icon */}
          <div className="flex justify-center mb-5">
            <CheckCircle className="w-20 h-20 text-green-500" />
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold">
            Payment Successful 🎉
          </h1>

          <p className="text-gray-400 mt-3">
            Thank you for your purchase. Your payment has been successfully
            processed.
          </p>

          {/* Customer Email */}
          <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="text-sm text-gray-500">
              Confirmation email sent to
            </p>
            <p className="font-semibold text-green-700 break-all">
              {customerEmail}
            </p>
          </div>

          {/* Info */}
          <p className="text-gray-400 text-sm mt-5">
            If you have any questions, feel free to contact our support team.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Link
              href="/"
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-xl transition"
            >
              Back to Home
            </Link>

            <a
              href="mailto:orders@example.com"
              className="flex-1 border border-gray-300 hover:bg-gray-50 font-medium py-3 rounded-xl transition"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    );
  }
}