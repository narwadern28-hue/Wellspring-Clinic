import { Resend } from "resend";

export const config = {
  runtime: "nodejs",
};

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Server misconfiguration: RESEND_API_KEY not set." });
  }

  const { name, email, phone, message } = req.body || {};

  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return res.status(400).json({ error: "Name is required." });
  }
  if (!email || typeof email !== "string" || email.trim().length === 0) {
    return res.status(400).json({ error: "Email is required." });
  }

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: "Wellspring Clinic <appointments@wellspringclinic.com>",
      to: "appointments@wellspringclinic.com",
      subject: `New Appointment Request — ${name.trim()}`,
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${name.trim()}</p>
        <p><strong>Email:</strong> ${email.trim()}</p>
        <p><strong>Phone:</strong> ${phone ? phone.trim() : "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message ? message.trim() : "Not provided"}</p>
      `,
      text: `New Appointment Request\nName: ${name.trim()}\nEmail: ${email.trim()}\nPhone: ${phone ? phone.trim() : "Not provided"}\nMessage: ${message ? message.trim() : "Not provided"}`,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return res.status(502).json({ error: "Failed to send email. Please try again later." });
    }

    return res.status(200).json({ success: true, message: "Appointment request sent successfully." });
  } catch (err: any) {
    console.error("Exception sending email:", err);
    return res.status(500).json({ error: "Internal server error. Could not send email." });
  }
}
