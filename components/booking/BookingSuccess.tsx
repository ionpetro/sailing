"use client";

interface BookingSuccessProps {
  booking: {
    tripTitle: string;
    date: string;
    guestCount: number;
    totalAmount: number;
  };
}

const BookingSuccess = ({ booking }: BookingSuccessProps) => {
  const addToGoogleCalendar = () => {
    // Format date and time for Google Calendar URL
    const startDate = new Date(booking.date);
    const endDate = new Date(startDate);
    endDate.setHours(startDate.getHours() + 8); // Assuming 8-hour duration

    const googleCalendarUrl = new URL(
      "https://calendar.google.com/calendar/render"
    );
    googleCalendarUrl.searchParams.append("action", "TEMPLATE");
    googleCalendarUrl.searchParams.append("text", booking.tripTitle);
    googleCalendarUrl.searchParams.append(
      "dates",
      `${startDate.toISOString().replace(/[-:]/g, "").split(".")[0]}Z` +
        "/" +
        `${endDate.toISOString().replace(/[-:]/g, "").split(".")[0]}Z`
    );
    googleCalendarUrl.searchParams.append(
      "details",
      `Booking Details:\n` + `Number of Guests: ${booking.guestCount}\n`
    );

    window.open(googleCalendarUrl.toString(), "_blank");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="text-center">
          <div className="inline-flex items-center justify-center bg-green-100 rounded-full px-4 py-1 mb-4">
            <svg
              className="w-4 h-4 fill-current text-green-500 mr-2"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 11.5L7 7.8V4h2v2.7l3.5 2.8h-1z" />
            </svg>
            <span className="text-sm text-green-600 font-medium">
              Payment Successful
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Thanks for your booking!
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            We've sent you an email with all the details of your trip.
          </p>

          {/* Booking Details */}
          <div className="max-w-sm mx-auto mb-8">
            <div className="bg-gray-50 rounded-lg p-6 text-left">
              <h2 className="font-semibold text-gray-900 mb-4">
                Booking Details
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Trip:</span>
                  <span className="font-medium">{booking.tripTitle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium">
                    {new Date(booking.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Guests:</span>
                  <span className="font-medium">{booking.guestCount}</span>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <span className="text-gray-900 font-semibold">Total:</span>
                  <span className="font-semibold">€{booking.totalAmount}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/"
              className="btn text-white bg-indigo-500 hover:bg-indigo-600"
            >
              Back to Home
            </a>
            <a
              href="#"
              onClick={addToGoogleCalendar}
              className="btn text-gray-600 bg-gray-100 hover:bg-gray-200"
            >
              Add to Google Calendar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;
