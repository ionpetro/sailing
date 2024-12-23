"use client";

import { useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { DatePickerInput } from "@mantine/dates";
import { loadStripe } from "@stripe/stripe-js";

interface BookingModalProps {
  price: string;
  title: string;
  maxGuests: number;
  id: string;
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function BookingModal({
  price,
  title,
  maxGuests,
  id,
}: BookingModalProps) {
  const [date, setDate] = useState<Date | null>(new Date());
  const [guests, setGuests] = useState(1);
  const basePrice = parseInt(price.replace(/[^0-9]/g, ""));

  const fees = {
    service: basePrice * 0.1, // 10% service fee
    tax: basePrice * 0.2, // 20% tax
  };

  const total = basePrice + fees.service + fees.tax;

  const handleBooking = async () => {
    if (!date) return;

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          basePrice,
          serviceFee: fees.service,
          tax: fees.tax,
          guests,
          date: date.toISOString(),
          tripId: id,
          tripTitle: title,
        }),
      });

      const { sessionId } = await response.json();
      const stripe = await stripePromise;

      // Redirect to Stripe Checkout
      const result = await stripe?.redirectToCheckout({
        sessionId,
      });

      if (result?.error) {
        console.error(result.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="space-y-4">
        {/* Date Selection */}
        <div>
          <label className="block text-sm font-medium mb-2">Select Date</label>
          <DatePickerInput
            value={date}
            onChange={(newDate) => setDate(newDate)}
            minDate={new Date()}
            placeholder="Pick a date"
            className="w-full"
            leftSection={<CalendarIcon className="w-4 h-4 text-gray-400" />}
            classNames={{
              input: "form-input w-full pl-10",
            }}
          />
        </div>

        {/* Guest Selection */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Number of Guests
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="form-select w-full"
          >
            {[...Array(maxGuests)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} {i === 0 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        {/* Price Breakdown */}
        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between">
            <span>Base price</span>
            <span>€{basePrice}</span>
          </div>
          <div className="flex justify-between">
            <span>Service fee</span>
            <span>€{fees.service}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>€{fees.tax}</span>
          </div>
          <div className="flex justify-between font-bold border-t pt-2">
            <span>Total</span>
            <span>€{total}</span>
          </div>
        </div>

        <button
          className="btn w-full text-white bg-indigo-500 hover:bg-indigo-600 shadow-sm"
          onClick={handleBooking}
        >
          Book now
        </button>
      </div>
    </div>
  );
}
