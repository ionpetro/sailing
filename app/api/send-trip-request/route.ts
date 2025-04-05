import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { date, guests, email, tripId, tripTitle } = await req.json();

    // Save to database
    const { error } = await supabase.from("trip_requests").insert({
      trip_id: tripId,
      date: date,
      guests: guests,
      email: email,
      trip_title: tripTitle,
    });

    if (error) throw error;

    // Send confirmation email
    const { error: emailError } = await resend.emails.send({
      from: "Sail With The Boys <contact@sailwiththeboys.com>",
      to: email,
      bcc: ["ionpetro@gmail.com", "thodwrhstriant@gmail.com"],
      subject: `⛵ Trip Request Confirmation - ${tripTitle}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                margin: 0;
                padding: 0;
                color: #333333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #ffffff;
              }
              .header {
                text-align: center;
                padding: 20px 0;
                background-color: #f8fafc;
                border-radius: 8px;
                margin-bottom: 24px;
              }
              .logo {
                font-size: 24px;
                font-weight: bold;
                color: #4B75DD;
                margin-bottom: 10px;
              }
              .title {
                font-size: 28px;
                font-weight: bold;
                color: #1a1a1a;
                margin-bottom: 16px;
              }
              .details {
                background-color: #f8fafc;
                border-radius: 8px;
                padding: 20px;
                margin: 20px 0;
              }
              .detail-row {
                display: flex;
                justify-content: space-between;
                padding: 12px 0;
                border-bottom: 1px solid #e5e7eb;
              }
              .detail-row:last-child {
                border-bottom: none;
              }
              .detail-label {
                font-weight: 600;
                color: #4b5563;
              }
              .detail-value {
                color: #111827;
                margin-left: 24px;
              }
              .footer {
                text-align: center;
                padding-top: 24px;
                color: #6b7280;
                font-size: 14px;
              }
              .button {
                display: inline-block;
                padding: 12px 24px;
                background-color: #4f46e5;
                color: white;
                text-decoration: none;
                border-radius: 6px;
                margin-top: 20px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo">⛵ Sail With The Boys</div>
              </div>
              
              <h1 class="title">Thanks for your trip request!</h1>
              
              <p>We're excited about your interest in sailing with us! We've received your request and will review it shortly.</p>
              
              <div class="details">
                <div class="detail-row">
                  <span class="detail-label">Trip</span>
                  <span class="detail-value">${tripTitle}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Date</span>
                  <span class="detail-value">${new Date(
                    date
                  ).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Guests</span>
                  <span class="detail-value">${guests} ${guests === 1 ? "person" : "people"}</span>
                </div>
              </div>

              <p>We'll review your request and get back to you within the next few hours with confirmation and next steps.</p>
              
              <p>In the meantime, if you have any questions, feel free to reply to this email.</p>

              <div class="footer">
                <p>© ${new Date().getFullYear()} Sail With The Boys. All rights reserved.</p>
                <p>Athens, Greece</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (emailError) throw emailError;

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
