import { redirect } from "next/navigation";
import Stripe from "stripe";
import { supabase } from "@/lib/supabase";
import BookingSuccess from "@/components/booking/BookingSuccess";

interface PageProps {
  searchParams: Promise<{
    session_id?: string;
  }>;
}

export default async function SuccessPage({ searchParams }: PageProps) {
  const params = await searchParams;

  if (!params.session_id) {
    redirect("/");
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2024-12-18.acacia",
  });

  try {
    const session = await stripe.checkout.sessions.retrieve(params.session_id, {
      expand: ["payment_intent"],
    });

    if (!session) {
      throw new Error("Session not found");
    }

    // Get authenticated user or create anonymous user
    const {
      data: { user },
    } = await supabase.auth.getUser();
    let userId = user?.id;

    if (!userId) {
      // TODO: For now anonymous user when no user is logged in
      const {
        data: { user: anonUser },
        error: signUpError,
      } = await supabase.auth.signUp({
        email: `anon_${Date.now()}@example.com`,
        password: crypto.randomUUID(),
      });

      if (signUpError) {
        console.error("Error creating anonymous user:", signUpError);
        throw signUpError;
      }

      userId = anonUser?.id;
    }

    // Create booking record in database
    const { error } = await supabase.from("bookings").insert({
      trip_id: parseInt(session.metadata?.tripId || "0"),
      user_id: userId,
      start_date: session.metadata?.date,
      end_date: session.metadata?.date, // For single-day trips
      guest_count: parseInt(session.metadata?.guests || "1"),
      total_amount: session.amount_total ? session.amount_total / 100 : 0, // Convert from cents
      status: session.payment_status === "paid" ? "confirmed" : "pending",
      payment_intent_id: (session.payment_intent as Stripe.PaymentIntent)?.id,
      created_at: new Date().toISOString(),
    });

    if (error) {
      console.error("Error saving booking:", error);
      // Still show success but log the error
    }

    return (
      <BookingSuccess
        booking={{
          tripTitle: session.metadata?.tripTitle || "Sailing Trip",
          date: session.metadata?.date || new Date().toISOString(),
          guestCount: parseInt(session.metadata?.guests || "1"),
          totalAmount: session.amount_total ? session.amount_total / 100 : 0,
        }}
      />
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
