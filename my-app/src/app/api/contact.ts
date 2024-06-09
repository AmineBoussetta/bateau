"use server";
import { url } from "@/lib/constants";
import { compileVerifyTemplate, sendMail } from "../../../lib/mail";
import { Mail } from "../../../types/mail";
import { Reservation } from "../../../types/reservation";
import { Resend } from "resend";


export async function sendReservationMail(
  reservation: Reservation,
  link: string
) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  const { data, error } = await resend.emails.send({
    from: 'mtlyachtexperience <noreplya@mtlyachtexperience.com>',
    to: reservation.email,
    subject: "Verify your email",
    html: compileVerifyTemplate(reservation.name, link),
  });
  if (error) {
    return{
      error :"Something went wrong!"
    }
  } else{
    console.log("success sending the verification email", data?.id);
  }
}

export async function sendAcceptMail(reservation: Reservation) {

  const resend = new Resend(process.env.RESEND_API_KEY);
  
  const { data, error } = await resend.emails.send({
    from: 'mtlyachtexperience <noreplya@mtlyachtexperience.com>',
    to: reservation.email,
    subject: "Reservation accepter",
    html: '<h1>Your boat reservation accepted</h1>',
  });
  if (error) {
    console.log("failed sending the verification email", error);
  } else{
    console.log("success sending the verification email", data?.id);
  }
}

export async function sendToAdminsMail(mailData: Mail, reservation:Reservation) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  const { data, error } = await resend.emails.send({
    from: 'mtlyachtexperience <noreplya@mtlyachtexperience.com>',
    to: mailData.email,
    subject: "New reservation",
    html: `<h1>You have a new reservation Request form ${reservation.name}</h1></br>${url}/admin`,
  });
  if (error) {
    console.log("failed sending the verification email", error);
  } else{
    console.log("success sending the verification email", data?.id);
  }
}
