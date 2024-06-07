import { createClient } from "@sanity/client";
import { Boat } from "../types/boat";
import clientConfig from "./config/client-config";
import SanityClient from "next-sanity-client";
import { Reservation } from "../types/reservation";
import { Client } from "../types/client";
import { Contact } from "../types/Contact";
import { Mail } from "../types/mail";

export async function getBoats(): Promise<Boat[]> {
  const client = new SanityClient(clientConfig);

  try {
    return client.fetch({
      query: `*[_type == "boat"]{
      _id,
      _createdAt,
      name,
      type,
      diameter,
      rooms,
      capacity,
      "images": images[].asset->url,
      description
    }`,
      config: {
        cache: "no-cache",
      },
    });
  } catch (error) {
    console.log("error fetching boats: ", error);
    throw error;
  }
}

export async function getClient(name: string): Promise<Client> {
  const client = new SanityClient(clientConfig);
  try {
    return client.fetch({
      query: `*[_type == "reservation" && name == $name ][0]{
      _id,
      
    }`,
      params: {
        name: name,
      },
      config: {
        cache: "no-cache",
      },
    });
  } catch (error) {
    console.log("error fetching client: ", error);
    throw error;
  }
}

export async function getClients(): Promise<Client[]> {
  const client = new SanityClient(clientConfig);
  try {
    return client.fetch({
      query: `*[_type == "reservation"]{
        _id,
        
      }`,
      config: {
        cache: "no-cache",
      },
    });
  } catch (error) {
    console.log("error fetching clients: ", error);
    throw error;
  }
}

export const getReservationById = async (id: string) => {
  const client = createClient(clientConfig);
  try {
    const reservation = await client.getDocument(id);
    return reservation;
  } catch (error) {
    console.error("Error fetching reservation:", error);
    throw error;
  }
};

export const verifyReservation = async (id: string) => {
  const client = createClient(clientConfig);
  try {
    const updatedReservation = await client
      .patch(id)
      .set({ isValidEmail: true })
      .commit();
    return updatedReservation;
  } catch (error) {
    console.error("Error verifying reservation:", error);
    throw error;
  }
};

export async function createReservation(
  data: Reservation
): Promise<Reservation> {
  const client = createClient(clientConfig);
  try {
    const document = {
      _type: "reservation",
      ...data,
    };

    const response: Reservation = await client.create<Reservation>(document);
    return response;
  } catch (error: any) {
    console.error("Error creating reservation:", error.message);
    throw error;
  }
}

export async function createMessage(data: Contact): Promise<Contact> {
  const client = createClient(clientConfig);

  try {
    const document = {
      _type: "message",
      ...data,
    };

    const response: Contact = await client.create<Contact>(document);
    return response;
  } catch (error: any) {
    console.error("Error creating message:", error.message);
    throw error;
  }
}

export async function getMails(): Promise<Mail[]> {
  const client = new SanityClient(clientConfig);
  try {
    return client.fetch({
      query: `*[_type == "mails"]{
        name,
        email,
      }`,
      config: {
        cache: "no-cache",
      },
    });
  } catch (error) {
    console.log("error fetching mails: ", error);
    throw error;
  }
}
