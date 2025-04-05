import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { to, subject, html } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "SailwiththeBoys <contact@sailwiththeboys.com>", // Update this with your verified domain
      to: to,
      subject: subject,
      html: html,
    });

    if (error) {
      return NextResponse.json(
        { message: "Error sending email", error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error sending email", error },
      { status: 500 }
    );
  }
}
