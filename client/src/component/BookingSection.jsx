"use client";

import { useState } from "react";

const BookingSection = ({ price, seats,_id,title }) => {
  const [quantity, setQuantity] = useState(1);

  const totalPrice = Number(price) * quantity;

   const handleBookTicket = async () => {

    const paymentData = {
      type: "booking",
      price: parseInt(price).toFixed(2),
      id: _id,
      title,
      quantity,
    }

    const res = await fetch("/api/checkout_sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(paymentData)
    });
    const data = await res.json();
    // console.log(data);
    if (data?.url) {
      window.location.href = data.url;
    }



  }

  return (
    <div className="bg-[#1F2937] border border-gray-700 rounded-xl p-6 sticky top-5">
      <h3 className="text-xl font-bold mb-5">
        Ticket Booking
      </h3>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-400">
            Price Per Ticket
          </span>

          <span className="font-bold text-cyan-400">
            ${price}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">
            Available Seats
          </span>

          <span className="font-bold">
            {seats}
          </span>
        </div>

        <div>
          <label className="block mb-2 text-gray-400">
            Select Tickets
          </label>

          <select
            value={quantity}
            onChange={(e) =>
              setQuantity(Number(e.target.value))
            }
            className="w-full bg-[#111827] border border-gray-600 rounded-lg px-4 py-3 outline-none"
          >
            {Array.from(
              { length: Math.min(Number(seats), 10) },
              (_, i) => i + 1
            ).map((num) => (
              <option key={num} value={num}>
                {num} Ticket{num > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>

        <div className="border-t border-gray-700 pt-4">
          <div className="flex justify-between items-center">
            <span className="font-medium">
              Total Price
            </span>

            <span className="text-2xl font-bold text-green-400">
              ${totalPrice}
            </span>
          </div>
        </div>

        <button onClick={handleBookTicket} className="w-full mt-4 py-3 rounded-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-700 hover:opacity-90 transition">
          🎟️ Book {quantity} Ticket
          {quantity > 1 ? "s" : ""}
        </button>
      </div>
    </div>
  );
};

export default BookingSection;