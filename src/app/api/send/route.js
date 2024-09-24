import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend API with the environment variable
const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    // Parse the request body
    const { email, subject, message } = await req.json();

    // Log data to check if it's correctly received
    console.log("Received data:", { email, subject, message });

    // Validate incoming data
    if (!email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Send the email
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email], // Send to both yourself and the submitter
      subject: subject,
      html: `
        <h1>${subject}</h1>
        <p>Thank you for contacting us!</p>
        <p>New message submitted:</p>
        <p>${message}</p>
      `,
    });

    // Return the response
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
