import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function email({to,subject,text}: {to: string, subject: string, text: string}) {
  try {
    const { data } = await resend.emails.send({
      from: process.env.Email_address as string,
      to,
      subject,
      text,
    });

   return { data };
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}