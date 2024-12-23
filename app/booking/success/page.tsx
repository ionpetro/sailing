import { redirect } from "next/navigation";
import Stripe from "stripe";
import { supabase } from "@/lib/supabase";

interface SearchParams {
  session_id: string;
}

interface SuccessPageProps {
  searchParams: SearchParams;
}

// todo: fix this
export default async function SuccessPage({ searchParams }: any) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2024-12-18.acacia",
  });

  if (!searchParams.session_id) {
    redirect("/");
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(
      searchParams.session_id,
      {
        expand: ["payment_intent"],
      }
    );

    if (!session) {
      throw new Error("Session not found");
    }

    // Create booking record in database
    const { error } = await supabase.from("bookings").insert({
      trip_id: session.metadata?.tripId,
      guests: parseInt(session.metadata?.guests || "1"),
      date: session.metadata?.date,
      amount_total: session.amount_total,
      payment_status: session.payment_status,
      stripe_session_id: session.id,
    });

    if (error) {
      console.error("Error saving booking:", error);
      // Still show success but log the error
    }

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
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/"
                className="btn text-white bg-indigo-500 hover:bg-indigo-600"
              >
                Back to Home
              </a>
              <a
                href="/account/bookings"
                className="btn text-indigo-500 bg-indigo-50 hover:bg-indigo-100"
              >
                View Booking
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error processing success page:", error);
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Something went wrong
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Please contact support if you believe this is an error.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
