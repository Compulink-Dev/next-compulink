import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure Nodemailer transport
const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other services or SMTP
    auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
});

export async function POST(request: Request) {
    const { to, subject, text } = await request.json();

    // Define email options
    const mailOptions = {
        from: process.env.EMAIL_USER, // Sender's email address
        to, // Recipient's email address
        subject, // Subject of the email
        text, // Email body text
    };

    try {
        // Send email
        const info = await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true, info });
    } catch (error) {
        return NextResponse.json({ success: false });
    }
}
