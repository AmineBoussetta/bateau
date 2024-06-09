"use client";
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
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { UpFrom } from "@/actions/actions";
import { useRef } from "react";
import { Result } from "postcss";

interface BookingFormProps {
  boat: string;
}

export function BookingForm(boat: BookingFormProps) {
  const ref = useRef<HTMLFormElement>(null);
  const UpFormWithBoatName = UpFrom.bind(null, boat.boat);

  return (
    <Dialog defaultOpen={false}>
      <DialogTrigger asChild>
        <Button className="w-full" type="submit" variant="default">
          Rent Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>Book Your Reservation</DialogTitle>
          <DialogTitle>{boat.boat}</DialogTitle>
          <DialogDescription>
            Fill out the form below to reserve your spot.
          </DialogDescription>
        </DialogHeader>
        <form
          ref={ref}
          className="grid gap-4 py-4"
          action={async (formData: FormData) => {
            await UpFormWithBoatName(formData).then((result) => {
              if (result?.error) {
                toast.error(result?.error);
              } else {
                toast.success("Please verify your email");
                ref.current?.reset();
              }
            });
          }}
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your name"
                defaultValue=""
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                type="tel"
                defaultValue=""
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Enter your email"
                type="email"
                defaultValue=""
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Reservation Date</Label>
              <Input
                id="date"
                name="date"
                type="date"
                defaultValue=""
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startTime">Start Time</Label>
              <Input
                id="startTime"
                name="time"
                type="time"
                defaultValue=""
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="guests">Guests</Label>
              <Input
                id="guests"
                name="guests"
                type="number"
                min="1"
                placeholder="Number of guests"
                defaultValue=""
                required
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
              name="message"
              placeholder="Enter any additional details"
              defaultValue=""
            />
          </div>

          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
      <ToastContainer />
    </Dialog>
  );
}
