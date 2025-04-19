'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

// Define the schema for form validation
const ContactUsSchema = z.object({
  username: z.string().min(1, 'Name is required'),
  message: z.string().min(1, 'Message is required'),
  inquiry: z.string().optional(),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  number: z.string().optional(),
});

// Define the response type
export type ContactUsActionState = {
  username?: string;
  message?: string;
  inquiry?: string;
  email?: string;
  number?: string;
  errors?: {
    username?: string[];
    message?: string[];
    inquiry?: string[];
    email?: string[];
    number?: string[];
    file?: string[];
    server?: string;
  };
  success?: string;
};

// Create a nodemailer transporter for Mailjet SMTP
const transporter = nodemailer.createTransport({
  host: 'in-v3.mailjet.com',
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: 'dd47b11b4a532dd8d2c5555947579eed', // Mailjet API key
    pass: 'bd7aec1a7ef37cfd76dc28446d720f0f', // Mailjet Secret key
  },
  debug: true, // Enable debug output
  logger: true, // Log to console
});

export async function ContactUsAction(
  _prevState: ContactUsActionState,
  form: FormData
): Promise<ContactUsActionState> {
  try {
    // Log environment variables
    if (!process.env.MAILJET_API_KEY || !process.env.MAILJET_SECRET_KEY) {
      console.error('Missing Mailjet credentials');
      return {
        errors: { server: 'Mailjet credentials are missing.' },
      };
    }
    console.log('Mailjet API Key:', process.env.MAILJET_API_KEY);
    console.log('Mailjet Secret Key:', process.env.MAILJET_SECRET_KEY);

    // Extract form data
    const username = form.get('username') as string;
    const message = form.get('message') as string;
    const inquiry = form.get('inquiry') as string | undefined;
    const email = form.get('email') as string;
    const number = form.get('number') as string | undefined;
    const file = form.get('file') as File | null;

    // Log form data
    console.log('Form Data:', [...form.entries()]);

    // Validate form data
    const validatedFields = ContactUsSchema.safeParse({
      username,
      message,
      inquiry,
      email,
      number,
    });

    if (!validatedFields.success) {
      return {
        username,
        message,
        inquiry,
        email,
        number,
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    // Prepare email content
    const emailContent = `
      New Contact Form Submission
      -------------------------
      Name: ${username}
      Email: ${email}
      Contact Number: ${number || 'Not provided'}
      Inquiry Type: ${inquiry || 'Not specified'}
      Message: ${message}
    `;

    // Configure email options
    const mailOptions: nodemailer.SendMailOptions = {
      from: 'sean.shum@digidumpling.com', // Temporary using this account
      to: 'marketing.hk@toto.com', // Recipient
      subject: `New Contact Form Submission - ${inquiry || 'General'}`,
      text: emailContent,
      attachments: [],
    };

    // Handle file attachment
    if (file && file.size > 0) {
      const fileBuffer = Buffer.from(await file.arrayBuffer());
      const fileName = file.name;

      // Validate file size (5MB max)
      const MAX_FILE_SIZE = 5 * 1024 * 1024;
      if (file.size > MAX_FILE_SIZE) {
        return {
          username,
          message,
          inquiry,
          email,
          number,
          errors: { file: ['File size exceeds 5MB.'] },
        };
      }

      // Validate file type
      const allowedTypes = [
        'image/gif',
        'image/jpeg',
        'image/png',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ];
      if (!allowedTypes.includes(file.type)) {
        return {
          username,
          message,
          inquiry,
          email,
          number,
          errors: {
            file: ['Invalid file type. Allowed types: gif, jpg, jpeg, png, doc, docx.'],
          },
        };
      }

      // Add file as attachment
      mailOptions.attachments = [
        {
          filename: fileName,
          content: fileBuffer,
        },
      ];
    }

    // Send email and log response
    const sendResult = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', sendResult);

    return {
      username,
      message,
      inquiry,
      email,
      number,
      success: 'Form submitted successfully. We will get back to you soon!',
    };
  } catch (error: any) {
    console.error('Error sending email:', error.message, error.stack);
    return {
      errors: { server: `Failed to send email: ${error.message}` },
    };
  }
}