import { PortableTextBlock } from "next-sanity"

export type Boat ={
    _id: string;
    _createdAt: Date;
    name: string;
    type: string;
    diameter: string;
    rooms: number;
    capacity: number; 
    images: string[];
    description: PortableTextBlock[];
}