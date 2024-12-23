"use client";

import { useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { DatePickerInput } from "@mantine/dates";
import dayjs from "dayjs";

interface BookingModalProps {
  price: string;
  title: string;
  maxGuests: number;
  onClose: () => void;
}

export default function BookingModal({
  price,
  title,
  maxGuests,
  onClose,
}: BookingModalProps) {
  const [date, setDate] = useState<Date | null>(null);
  const [guests, setGuests] = useState(1);
  const basePrice = parseInt(price.replace(/[^0-9]/g, ""));

  const fees = {
    service: basePrice * 0.1, // 10% service fee
    tax: basePrice * 0.2, // 20% tax
  };

  const total = basePrice + fees.service + fees.tax;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          {/* Date Selection */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Select Date
            </label>
            <DatePickerInput
              value={date}
              onChange={setDate}
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

          {/* Book Button */}
          <button
            className="btn w-full text-white bg-indigo-500 hover:bg-indigo-600 shadow-sm"
            onClick={() => {
              console.log("Booking:", {
                date: date ? dayjs(date).format("YYYY-MM-DD") : null,
                guests,
                total,
              });
            }}
          >
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
}
