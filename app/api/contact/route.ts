import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

interface ContactBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactBody;
    const { name, email, message } = body;

    // Validate
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Sanitize
    const safeName = name.substring(0, 100).replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const safeEmail = email.substring(0, 200);
    const safeMessage = message.substring(0, 2000).replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Business notification email
    const businessMail = {
      from: `"Inkbit Labs Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO ?? process.env.EMAIL_USER,
      replyTo: safeEmail,
      subject: `✦ New Inquiry from ${safeName} — Inkbit Labs`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body{font-family:'Helvetica Neue',Arial,sans-serif;background:#f4f4f0;margin:0;padding:0}
            .wrapper{max-width:600px;margin:40px auto;background:#fff;border:1px solid #e8e8e2}
            .header{background:#0d0d0d;padding:32px 40px}
            .header h1{color:#fafaf8;font-size:22px;margin:0;font-weight:400;letter-spacing:.05em}
            .header span{color:#c8a96e}
            .body{padding:40px}
            .label{font-size:11px;text-transform:uppercase;letter-spacing:.15em;color:#b0afa8;margin-bottom:6px}
            .value{font-size:15px;color:#1a1a1a;line-height:1.6;margin-bottom:24px}
            .msg{background:#f4f4f0;padding:20px;border-left:3px solid #c8a96e;white-space:pre-wrap}
            .footer{padding:24px 40px;border-top:1px solid #e8e8e2;font-size:12px;color:#b0afa8}
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="header"><h1><span>✦</span> Inkbit Labs — New Inquiry</h1></div>
            <div class="body">
              <div class="label">Full Name</div>
              <div class="value">${safeName}</div>
              <div class="label">Email Address</div>
              <div class="value"><a href="mailto:${safeEmail}" style="color:#c8a96e">${safeEmail}</a></div>
              <div class="label">Message</div>
              <div class="value msg">${safeMessage}</div>
            </div>
            <div class="footer">Received: ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} EST · Inkbit Labs Contact Form</div>
          </div>
        </body>
        </html>
      `,
    };

    // Auto-reply to sender
    const autoReply = {
      from: `"Inkbit Labs" <${process.env.EMAIL_USER}>`,
      to: safeEmail,
      subject: `We received your message — Inkbit Labs`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body{font-family:'Helvetica Neue',Arial,sans-serif;background:#f4f4f0;margin:0;padding:0}
            .wrapper{max-width:600px;margin:40px auto;background:#fff;border:1px solid #e8e8e2}
            .header{background:#0d0d0d;padding:32px 40px}
            .header h1{color:#fafaf8;font-size:22px;margin:0;font-weight:400}
            .header span{color:#c8a96e}
            .body{padding:40px;color:#1a1a1a;line-height:1.7}
            .body p{margin:0 0 16px}
            .accent{color:#c8a96e}
            .footer{padding:24px 40px;border-top:1px solid #e8e8e2;font-size:12px;color:#b0afa8}
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="header"><h1><span>✦</span> Inkbit Labs</h1></div>
            <div class="body">
              <p>Hi ${safeName},</p>
              <p>Thank you for reaching out to <strong>Inkbit Labs</strong>. We've received your message and a member of our team will be in touch within <span class="accent">24 business hours</span>.</p>
              <p>Warm regards,<br/><strong>The Inkbit Labs Team</strong></p>
            </div>
            <div class="footer">hello@inkbitlabs.com · +1 (555) 010-2040 · inkbitlabs.com</div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(businessMail);
    // Non-blocking auto-reply
    transporter.sendMail(autoReply).catch((err: Error) =>
      console.warn("Auto-reply failed:", err.message)
    );

    console.log(`✅ Contact email sent from: ${safeEmail}`);
    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
