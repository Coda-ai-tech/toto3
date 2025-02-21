'use server';

import { z } from 'zod';

const ContactUsSchema = z.object({
  username: z.string(),
  message: z.string(),
  inquiry: z.string(),
});

export type ContactUsActionState = {
  username?: string;
  message?: string;
  inquiry?: string;
  errors?: {
    username?: string[];
    message?: string[];
  };
};

export async function ContactUsAction(_prevState: ContactUsActionState, form: FormData): Promise<ContactUsActionState> {
  const username = form.get('username') as string;
  const message = form.get('message') as string;
  const inquiry = form.get('inquiry') as string;

  console.log('form server action', form);

  const validatedFields = ContactUsSchema.safeParse({
    username,
    message,
    inquiry,
  });

  if (!validatedFields.success) {
    return {
      username,
      message,
      inquiry,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // @ Fetch here...
  // process validated form inputs here

  return { username, message, inquiry };
}
