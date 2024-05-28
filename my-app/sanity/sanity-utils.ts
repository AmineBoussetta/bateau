import { createClient, groq } from "next-sanity";
import { Boat } from "../types/boat";


export async function getBoats(): Promise<Boat[]> {
  const client = createClient({
    projectId: "uhxnui9c",
    dataset: "production",
    apiVersion: "2024-05-28",
  });

  return client.fetch(
    groq`*[_type == "boat"]{
        _id,
        _createdAt,
        name,
        type, 
        diameter,
        rooms,
        capacity,
        "image": image.asset->url,
        description

    }`
  )
}
