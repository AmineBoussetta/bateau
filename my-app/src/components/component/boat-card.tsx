'use client';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Boat } from "../../../types/boat";
import { BookingForm } from "./booking-form";
import { PortableText } from "next-sanity";
import { useState } from "react";

import React from 'react';
import type { SVGProps } from 'react';

export function BoatCard(data: Boat) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? data.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === data.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-center p-4 md:p-6">
        <div className="relative">
          <img
            alt="Sailboat"
            className="rounded-lg object-cover w-full aspect-[16/10]"
            height={500}
            src={data.images[currentImageIndex]}
            width={800}
          />
          <div className="absolute top-1/2 transform -translate-y-1/2 left-4 right-4 flex justify-between">
            <Button variant="ghost" onClick={handlePrevImage}>
              <ChevronLeftIcon className="h-6 w-6" />
            </Button>
            <Button variant="ghost" onClick={handleNextImage}>
              <ChevronRightIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          <h2 className="text-3xl font-bold">{data.name}</h2>
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <RulerIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">
                Type: {data.type}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <RulerIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">
                Diameter: {data.diameter} ft
              </span>
            </div>
            <div className="flex items-center gap-2">
              <UserIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">
                Guests: {data.capacity}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <BedIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">
                Rooms: {data.rooms}
              </span>
            </div>
            <div  className="w-[300px] break-words">
             <PortableText value={data.description}  />
            </div>
          </div>
          <div className="prose">
            <p />
          </div>
          <BookingForm boat={data.name} key={data._id}/>
        </div>
      </div>
    </Card>
  );
}

function BedIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
    </svg>
  );
}

function RulerIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
      <path d="m14.5 12.5 2-2" />
      <path d="m11.5 9.5 2-2" />
      <path d="m8.5 6.5 2-2" />
      <path d="m17.5 15.5 2-2" />
    </svg>
  );
}

function UserIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function ChevronLeftIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}




export function HealthiconsPenis(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48" {...props}><path fill="currentColor" fillRule="evenodd" d="M13.087 6.846c1.1-.674 2.354-.846 3.47-.846H39a3 3 0 0 1 3 3v17c0 4.71-4.54 8-9 8s-9-3.29-9-8v-8.86a5.2 5.2 0 0 0-1.732.834C21.433 18.594 21 19.33 21 20v9c.756.357 1.313.827 1.641 1.51c.36.748.36 1.627.36 2.409v.08c0 2.19-.881 4.412-2.284 6.091c-1.196 1.432-2.833 2.537-4.717 2.832V16a4 4 0 0 1 4-4h15v-2H20a6 6 0 0 0-6 6v25.922c-1.884-.295-3.521-1.4-4.717-2.832C7.88 37.411 7 35.188 7 33v-.081c0-.782 0-1.66.359-2.41c.328-.682.885-1.152 1.641-1.51V14c0-3.184 1.652-5.66 4.087-7.153" clipRule="evenodd"></path></svg>);
}