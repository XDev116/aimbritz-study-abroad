import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, country, message } = await req.json();

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"AimBritz Contact" <${process.env.GMAIL_USER}>`,
      to: "info@aimbritz.com",
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#0a0a0a">
          <div style="background:#0a0a0a;padding:24px 32px">
            <h2 style="color:#F6F2EA;margin:0;font-size:22px;font-weight:900;letter-spacing:-0.02em;text-transform:uppercase">New Enquiry</h2>
            <p style="color:rgba(246,242,234,0.5);margin:4px 0 0;font-size:12px;font-family:monospace;letter-spacing:0.1em;text-transform:uppercase">AimBritz Contact Form</p>
          </div>
          <div style="padding:32px;background:#f9f9f7;border:1px solid #e8e8e4">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:10px 0;border-bottom:1px solid #e8e8e4;font-size:11px;font-family:monospace;letter-spacing:0.15em;text-transform:uppercase;color:#666;width:130px">Name</td><td style="padding:10px 0;border-bottom:1px solid #e8e8e4;font-size:15px;font-weight:600">${name}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e8e8e4;font-size:11px;font-family:monospace;letter-spacing:0.15em;text-transform:uppercase;color:#666">Email</td><td style="padding:10px 0;border-bottom:1px solid #e8e8e4;font-size:15px"><a href="mailto:${email}" style="color:#c2410c">${email}</a></td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e8e8e4;font-size:11px;font-family:monospace;letter-spacing:0.15em;text-transform:uppercase;color:#666">Phone</td><td style="padding:10px 0;border-bottom:1px solid #e8e8e4;font-size:15px"><a href="tel:${phone}" style="color:#c2410c">${phone}</a></td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e8e8e4;font-size:11px;font-family:monospace;letter-spacing:0.15em;text-transform:uppercase;color:#666">Destination</td><td style="padding:10px 0;border-bottom:1px solid #e8e8e4;font-size:15px">${country || "—"}</td></tr>
              <tr><td style="padding:14px 0 0;font-size:11px;font-family:monospace;letter-spacing:0.15em;text-transform:uppercase;color:#666;vertical-align:top">Message</td><td style="padding:14px 0 0;font-size:15px;line-height:1.6">${message ? message.replace(/\n/g, "<br>") : "—"}</td></tr>
            </table>
          </div>
          <div style="padding:16px 32px;background:#f2f2ef;border:1px solid #e8e8e4;border-top:none">
            <p style="margin:0;font-size:11px;font-family:monospace;letter-spacing:0.1em;text-transform:uppercase;color:#999">Reply directly to this email to respond to ${name}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}