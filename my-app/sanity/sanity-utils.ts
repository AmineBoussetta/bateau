import { createClient } from "@sanity/client";
import { Boat } from "../types/boat";
import clientConfig from "./config/client-config";
import SanityClient from 'next-sanity-client';
import { Reservation } from "../types/reservation";



export async function getBoats(): Promise<Boat[]> {
  
  const client = new SanityClient(clientConfig);

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
      cache: 'no-cache',
    }
  }
  );
}


export async function createReservation(data: Reservation): Promise<Reservation> {
  const client = createClient(clientConfig);

  try {
    const document = {
      _type: 'reservation',
      ...data,
    };

    const response: Reservation = await client.create<Reservation>(document);
    return response;
  } catch (error: any) {
    console.error('Error creating reservation:', error.message);
    throw error;
  }
}
