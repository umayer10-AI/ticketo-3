import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

const BAseUrl = process.env.NEXT_PUBLIC_SERVER_URL

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id) {
    throw new Error("Please provide a valid session_id");
  }

  const stripeSession = await stripe.checkout.sessions.retrieve(
    session_id,
    {
      expand: ["line_items", "payment_intent"],
    }
  );

  const customerEmail = stripeSession.customer_details?.email;
  const customerName = stripeSession.customer_details?.name;

  console.log("Stripe Session:", stripeSession);

  const res = await fetch(`${BAseUrl}/api/users/upgrade-premium/${customerEmail}`,{
    method: "PATCH",
    headers: {
      'content-type': 'application/json'
    },
  })
  const data = await res.json()
  console.log(data)

  if (stripeSession.status === "open") {
    return redirect("/");
  }

  if (stripeSession.status === "complete") {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-lg bg-black/80 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-800 p-8">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-green-500/10 p-4">
              <CheckCircle className="w-20 h-20 text-green-500" />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white">
              Payment Successful 🎉
            </h1>

            <p className="text-gray-400 mt-3">
              Thank you for your purchase. Your payment has been processed
              successfully.
            </p>
          </div>

          {/* Customer Info */}
          <div className="mt-8 rounded-xl border border-green-500/20 bg-green-500/10 p-4">
            <h3 className="font-semibold text-green-400 mb-2">
              Customer Information
            </h3>

            {customerName && (
              <p className="text-gray-300">
                <span className="font-medium">Name:</span> {customerName}
              </p>
            )}

            {customerEmail && (
              <p className="text-gray-300 break-all">
                <span className="font-medium">Email:</span> {customerEmail}
              </p>
            )}
          </div>

          {/* Payment Info */}
          <div className="mt-4 rounded-xl border border-gray-800 bg-slate-800/50 p-4">
            <p className="text-sm text-gray-400">
              Payment Status:
              <span className="ml-2 text-green-400 font-semibold capitalize">
                {stripeSession.status}
              </span>
            </p>
          </div>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            A confirmation email has been sent to your registered email
            address.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Link
              href="/"
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-xl text-center transition"
            >
              Back to Home
            </Link>

            <a
              href="mailto:orders@example.com"
              className="flex-1 border border-gray-700 hover:bg-gray-800 text-white font-medium py-3 rounded-xl text-center transition"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      Something went wrong.
    </div>
  );
}