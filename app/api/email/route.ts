// app/api/email/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
    try {
        const { to, subject, text } = await req.json();

        // Send the email using Resend
        const response = await resend.emails.send({
            from: 'your-email@example.com', // Use your verified sender email
            to,
            subject,
            text,
        });

        return NextResponse.json({ success: true, response });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ success: false });
    }
}
