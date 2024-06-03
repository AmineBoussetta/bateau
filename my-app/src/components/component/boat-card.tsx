"use client";
import Link from "next/link";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Boat } from "../../../types/boat";
import { BookingForm } from "./booking-form";

export function BoatCard(data: Boat) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = data.images;
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
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
            src={images[currentImageIndex]}
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
          </div>
          <div className="prose">
            <p />
          </div>
          <BookingForm/>

          {/* <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Rent Now
          </Link> */}
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
