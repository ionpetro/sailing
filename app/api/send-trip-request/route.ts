import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const { date, guests, email, tripId, tripTitle } = await req.json();

    const { error } = await supabase.from("trip_requests").insert({
      trip_id: tripId,
      date: date,
      guests: guests,
      email: email,
      trip_title: tripTitle,
    });

    return NextResponse.json(
      { message: "Request sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error sending request", error: error },
      { status: 500 }
    );
  }
}
