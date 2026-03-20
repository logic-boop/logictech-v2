"use server";

import nodemailer from "nodemailer";

export async function sendLeadEmail(formData: FormData) {
  // 1. Extract the data from the form
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const category = formData.get("category") as string;
  const message = formData.get("message") as string;

  // 2. Setup the "Postman" using your .env credentials
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // 3. Design the email you will receive
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "logictech2026@gmail.com", // This is where you want to get the alert
    subject: `🚀 New LogicTech Request: ${category} from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Product/Service: ${category}
      
      Message: 
      ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Mail Error:", error);
    return { success: false };
  }
}