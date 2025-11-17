import nodemailer, { type Transporter } from "nodemailer";

class NodemailerService {
  private readonly transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 587,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
  }

  async sendEmail({ email, html, subject }: EmailPayload) {
    try {
      const info = await this.transporter.sendMail({
        from: "Alfa Trading House DMCC",
        to: email,
        subject,
        html,
      });

      return info;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default new NodemailerService();
