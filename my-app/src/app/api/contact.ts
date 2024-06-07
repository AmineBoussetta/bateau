import { compileVerifyTemplate, sendMail } from "../../../lib/mail";
import { Mail } from "../../../types/mail";
import { Reservation } from "../../../types/reservation";

export async function sendReservationMail(data: Reservation, link: string) {
  "use server";
  await sendMail({
    to: data.email,
    name: data.name,
    subject: "Verify your email",
    body: compileVerifyTemplate(data.name, link),
  });
}

export async function sendToAdminsMail(data:Mail){
  "use server";
  await sendMail({
    to:data.email,
    name: data.name,
    subject: "New reservation",
    body:`<h1>You have a new reservation Request</h1>`
  })
}

