"use server";

import { send } from "@/app/api/contact";
import { createReservation, getClient } from "../../sanity/sanity-utils";
import { Reservation } from "../../types/reservation";
import { Client } from "../../types/client";
import { url } from "@/lib/constants";

export async function UpFrom(boat: string, formData: FormData) {
  const reservation: Reservation = {
    boatName: boat,
    name: formData.get("name") as string,
    phone: parseInt(formData.get("phone") as string),
    date: formData.get("date") as string,
    time: formData.get("time") as string,
    guests: parseInt(formData.get("guests") as string),
    email: formData.get("email") as string,
    isValidEmail: false,
    message: formData.get("message") as string,
    isAccepted: false,
  };
  try {
    createReservation(reservation).then((reservation: Reservation) => {
      getClient(reservation.name).then((value: Client) => {
        send(reservation, `${url}/verify/${value?._id}`);
      });
    });
  } catch (error) {
    return {
      error: "Something went wrong!",
    };
  }
}
