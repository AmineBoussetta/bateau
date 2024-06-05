import nodemailer from "nodemailer";
import * as handlebars from "handlebars";
import { verifyTemplate } from "./templates/verify";


export async function sendMail({
  to,
  name,
  subject,
  body,
}: {
  to: string;
  name: string;
  subject: string;
  body: string;
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
  try {
    const testResult = await transport.verify();
    
  } catch (error) {
    console.log(error);
    return;
  }
  try{
    const sendResult = await transport.sendMail({
        from: SMTP_EMAIL, to, subject, html: body
    })
    
  }catch (error){
    console.log(error)
  }
}


export function compileVerifyTemplate(name: string, url:string) {
    const template = handlebars.compile(verifyTemplate)
    const htmlBody = template({
        name: name,
        url: url,
    })
    return htmlBody
}