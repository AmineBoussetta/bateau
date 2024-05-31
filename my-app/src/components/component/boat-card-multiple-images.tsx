"use client";

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Boat } from "../../../types/boat"


export function BoatCardMultipleImages(boat: Boat) {

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = boat.images
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="max-w-4xl mx-auto my-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 relative">
            <img
              alt="Boat Image"
              className="w-full h-full object-cover"
              height={600}
              src={images[currentImageIndex]}
              style={{
                aspectRatio: "800/600",
                objectFit: "cover",
              }}
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
          <div className="md:w-1/2 p-6 md:p-8">
            <h1 className="text-3xl font-bold mb-4">Luxury Yacht</h1>
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="px-4 py-3 text-left font-medium text-gray-700 dark:text-gray-300">Detail</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-700 dark:text-gray-300">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Name</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Aqua Breeze</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Length</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">50 ft</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Width</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">15 ft</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Weight</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">25 tons</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Engine Type</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Diesel</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Passengers</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChevronLeftIcon(props: {className: string}) {
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
  )
}


function ChevronRightIcon(props: {className: string}) {
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
  )
}
