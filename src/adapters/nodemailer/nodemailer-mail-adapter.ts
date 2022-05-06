import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "5806da8f4557a1",
    pass: "ad61c2938df6e4"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ body, subject}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Eduardo Araújo <araujocarlos893@gmail.com>',
      subject,
      html: body,
    })
  };
}