import { compileVerifyTemplate, sendMail } from "../../../lib/mail";
import { Reservation } from "../../../types/reservation";

export async function send (data: Reservation, link: string) {
    "use server";
    await sendMail({
      to: data.email,
      name: data.name,
      subject: "Verify your email",
      body: compileVerifyTemplate(data.name, link),
    });
  };