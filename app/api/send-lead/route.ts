import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, domain } = await request.json();

    if (!name || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Sending the email via Resend
    // Note: If you haven't verified a custom domain yet, Resend allows sending from onboarding@resend.dev to your verified account email.
    const data = await resend.emails.send({
      from: "Gaur Alaris Leads <sales@gauryamunaproject.in>",
      to: ["realtyfmleads@gmail.com"],
      subject: `New Lead from ${domain || "Website"} (Gaur Alaris)`,
      html: `
        <h2>New Lead Enquiry Received</h2>
        <p><strong>Project:</strong> Gaur Alaris</p>
        <p><strong>Website Domain:</strong> ${domain || "Not specified"}</p>
        <hr />
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> +91 ${phone}</p>
        <p><strong>Email:</strong> ${email || "Not Provided"}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}