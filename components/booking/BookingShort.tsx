"use client";

import { useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { DatePickerInput } from "@mantine/dates";
import { loadStripe } from "@stripe/stripe-js";

interface BookingModalProps {
  fullDayPrice: number;
  halfDayPrice: number;
  title: string;
  maxGuests: number;
  id: string;
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function BookingModal({
  fullDayPrice,
  halfDayPrice,
  title,
  maxGuests,
  id,
}: BookingModalProps) {
  const [date, setDate] = useState<Date | null>(new Date());
  const [timeSlot, setTimeSlot] = useState<"morning" | "afternoon" | "full">(
    "morning"
  );

  console.log(maxGuests);
  const [guests, setGuests] = useState(1);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [requestSent, setRequestSent] = useState(false);

  // Calculate base price based on selected time slot
  const basePrice = timeSlot === "full" ? fullDayPrice : halfDayPrice;

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSendRequest = async () => {
    // Validate email before sending request
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch("/api/send-trip-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date,
          guests,
          email,
          tripId: id,
          tripTitle: title,
        }),
      });

      if (response.ok) {
        console.log("Request sent successfully");
        setRequestSent(true);
      } else {
        const errorData = await response.json();
        console.error("Failed to send request:", errorData);
        // Optionally show error message to user
      }
    } catch (error) {
      console.error("Error:", error);
      // Optionally show error message to user
    } finally {
      setIsLoading(false);
    }
  };

  const handleBooking = async () => {
    if (!date) return;

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          basePrice: Math.round(basePrice),
          guests,
          date: date.toISOString(),
          timeSlot,
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

      {/* Time Slot Selection */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Select Time Slot
        </label>
        <select
          value={timeSlot}
          onChange={(e) =>
            setTimeSlot(e.target.value as "morning" | "afternoon" | "full")
          }
          className="form-select w-full"
        >
          <option value="morning">Morning (10:00 AM - 3:00 PM)</option>
          <option value="afternoon">Afternoon (4:00 PM - 9:00 PM)</option>
          <option value="full">Full Day</option>
        </select>
      </div>

      {/* Guest Selection */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Number of Guests (up to {maxGuests})
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

      {/* Contact Info */}
      <div>
        <label className="block text-sm font-medium mb-2">Email Address</label>
        <input
          type="email"
          className={`form-input w-full ${emailError ? "border-red-500" : ""}`}
          placeholder="your@email.com"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(""); // Clear any existing error when user types
          }}
        />
        {emailError && (
          <p className="text-red-500 text-sm mt-1">{emailError}</p>
        )}
      </div>

      {/* Price Breakdown */}
      <div>
        <div className="flex justify-between font-bold border-t pt-2">
          <span>Total Price</span>
          <span>€{basePrice}</span>
        </div>
      </div>
      {/* 
      <button
        className="btn w-full text-white bg-indigo-500 hover:bg-indigo-600 shadow-sm"
        onClick={handleBooking}
      >
        Book Now
      </button> */}

      {!requestSent ? (
        <>
          <button
            className="flex justify-center items-center btn w-full text-white bg-indigo-500 hover:bg-indigo-600 shadow-sm disabled:opacity-50 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400"
            onClick={handleSendRequest}
            disabled={!email || !date || !guests || isLoading}
          >
            {isLoading ? "Sending..." : "Send Request"}
          </button>
          <small className="text-center text-gray-500">
            You will NOT be charged.
          </small>
        </>
      ) : (
        <>
          <div className="text-center space-y-2">
            <div className="text-green-500">
              <svg
                className="w-6 h-6 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="text-gray-800 font-medium">
              Request Sent Successfully!
            </div>
            <div className="text-gray-500 text-sm">
              We will review your request and get back to you within 24 hours.
            </div>
          </div>
        </>
      )}
    </div>
  );
}
