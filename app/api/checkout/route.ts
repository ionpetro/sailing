import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { basePrice, tax, guests, date, tripId, tripTitle } = body;

    // Ensure we have valid numbers for the price calculation
    const totalAmount = Math.round(basePrice + tax);

    if (isNaN(totalAmount) || totalAmount <= 0) {
      return NextResponse.json(
        { error: "Invalid price calculation" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: tripTitle,
              description: `Booking for ${guests} guest${
                guests > 1 ? "s" : ""
              } on ${date}`,
            },
            unit_amount: totalAmount * 100, // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/trips/${tripId}`,
      metadata: {
        tripId,
        guests,
        date,
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      { error: "Error creating checkout session" },
      { status: 500 }
    );
  }
}
