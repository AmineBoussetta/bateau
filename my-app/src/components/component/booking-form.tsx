import { useState, FormEvent, ChangeEvent } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reservation } from "../../../types/reservation";
import { createReservation } from "../../../sanity/sanity-utils";

interface BookingFormProps {
  boat: string;
}

export function BookingForm(boat: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    startTime: "",
    guests: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const reservation: Reservation = {
      boatName: boat.boat, // Set boatName based on your requirement
      name: formData.name,
      phone: parseInt(formData.phone),
      date: formData.date,
      time: formData.startTime,
      guests: parseInt(formData.guests),
      email: formData.email,
      isValidEmail: false,
      message: formData.message,
      isAccepted: false, // Set initial value as needed
    };
    createReservation(reservation);
    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      startTime: "",
      guests: "",
      message: "",
    });
  };

  return (
    <Dialog defaultOpen={false}>
      <DialogTrigger
        asChild
        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
      >
        <Button variant="outline">Rent Now</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>Book Your Reservation</DialogTitle>
          <DialogTitle>{boat.boat}</DialogTitle>
          <DialogDescription>
            Fill out the form below to reserve your spot.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                placeholder="Enter your phone number"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Reservation Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startTime">Start Time</Label>
              <Input
                id="startTime"
                type="time"
                value={formData.startTime}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="guests">Guests</Label>
              <Input
                id="guests"
                type="number"
                min="1"
                placeholder="Number of guests"
                value={formData.guests}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            The rental period is four hours.
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              className="min-h-[100px]"
              id="message"
              placeholder="Enter any additional details"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
