import { redirect } from "next/navigation";
import Stripe from "stripe";

interface SearchParams {
  session_id?: string;
}

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2024-12-18.acacia",
  });

  if (!searchParams.session_id) {
    redirect("/");
  }

  const session = await stripe.checkout.sessions.retrieve(
    searchParams.session_id
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Thanks for your booking!
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            We've sent you an email with all the details.
          </p>
        </div>
      </div>
    </div>
  );
}
