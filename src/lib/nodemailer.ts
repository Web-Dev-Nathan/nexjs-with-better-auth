import nodemailer from "nodemailer";
type SendingEmailOptions = {
  to: string;
    subject: string;
    text: string;
};
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_EMAIL,  
    pass: process.env.SMTP_PASSWORD,
  }
});
export  function sendEmail({ to, subject, text }: SendingEmailOptions) {
  try {
    transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to,
      subject,
      text,
    });
  } catch (error) {
    console.error('Error sending email:', error);
  }
}
