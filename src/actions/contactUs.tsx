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
    console.log('Starting ContactUsAction');

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
    const files = form.getAll('file') as File[];

    // Log form data
    console.log('Form Data:', [...form.entries()]);
    console.log('Files received:', files.map(f => ({ name: f.name, size: f.size, type: f.type })));

    // Validate form data
    const validatedFields = ContactUsSchema.safeParse({
      username,
      message,
      inquiry,
      email,
      number,
    });

    if (!validatedFields.success) {
      console.log('Validation errors:', validatedFields.error.flatten().fieldErrors);
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

    // Validate and handle file attachments
    if (files && files.length > 0) {
      console.log('Validating files...');
      const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB per file
      const MAX_TOTAL_SIZE = 10 * 1024 * 1024; // 10MB total
      const MAX_FILES = 5; // Max 5 files
      const allowedTypes = [
        'image/gif',
        'image/jpeg',
        'image/png',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ];

      // Check number of files
      if (files.length > MAX_FILES) {
        console.log(`Too many files: ${files.length}`);
        return {
          username,
          message,
          inquiry,
          email,
          number,
          errors: { file: [`Maximum ${MAX_FILES} files allowed.`] },
        };
      }

      // Check total file size
      const totalSize = files.reduce((sum, file) => sum + file.size, 0);
      if (totalSize > MAX_TOTAL_SIZE) {
        console.log(`Total file size exceeds limit: ${totalSize} bytes`);
        return {
          username,
          message,
          inquiry,
          email,
          number,
          errors: { file: ['Total file size exceeds 10MB.'] },
        };
      }

      const attachments = [];
      for (const file of files) {
        if (file.size === 0) {
          console.log(`Skipping empty file: ${file.name}`);
          continue;
        }

        console.log(`Processing file: ${file.name}, size: ${file.size}, type: ${file.type}`);
        const fileBuffer = Buffer.from(await file.arrayBuffer());
        const fileName = file.name;

        // Validate file size
        if (file.size > MAX_FILE_SIZE) {
          console.log(`File "${fileName}" exceeds size limit`);
          return {
            username,
            message,
            inquiry,
            email,
            number,
            errors: { file: [`File "${fileName}" exceeds 5MB.`] },
          };
        }

        // Validate file type
        if (!allowedTypes.includes(file.type)) {
          console.log(`Invalid file type for "${fileName}"`);
          return {
            username,
            message,
            inquiry,
            email,
            number,
            errors: {
              file: [`Invalid file type for "${fileName}". Allowed types: gif, jpg, jpeg, png, doc, docx.`],
            },
          };
        }

        // Add file as attachment
        attachments.push({
          filename: fileName,
          content: fileBuffer,
        });
      }

      console.log(`Attaching ${attachments.length} files`);
      mailOptions.attachments = attachments;
    } else {
      console.log('No files to attach');
    }

    // Send email with timeout
    console.log('Sending email...');
    const sendResult = await Promise.race([
      transporter.sendMail(mailOptions),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Email sending timeout after 30 seconds')), 30000)
      ),
    ]);
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
    console.error('Error in ContactUsAction:', error.message, error.stack);
    return {
      errors: { server: `Failed to process form: ${error.message}` },
    };
  }
}