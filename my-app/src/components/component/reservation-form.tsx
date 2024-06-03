import { Button } from "@/components/ui/button"
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function ReservationForm() {
  return (
    <Dialog defaultOpen={false}>
      <DialogTrigger asChild>
        <Button variant="outline">Contact Us</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] w-full p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle>Get in Touch</DialogTitle>
          <DialogDescription>Fill out the form below and we'll get back to you as soon as possible.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center grid-cols-1 sm:grid-cols-4 gap-4">
            <Label className="text-right sm:text-right" htmlFor="name">
              Name
            </Label>
            <Input className="col-span-1 sm:col-span-3" id="name" placeholder="Enter your name" />
          </div>
          <div className="grid items-center grid-cols-1 sm:grid-cols-4 gap-4">
            <Label className="text-right sm:text-right" htmlFor="phone">
              Phone
            </Label>
            <Input className="col-span-1 sm:col-span-3" id="phone" placeholder="Enter your phone number" type="tel" />
          </div>
          <div className="grid items-center grid-cols-1 sm:grid-cols-4 gap-4">
            <Label className="text-right sm:text-right" htmlFor="email">
              Email
            </Label>
            <Input className="col-span-1 sm:col-span-3" id="email" placeholder="Enter your email" type="email" />
          </div>
          <div className="grid items-start grid-cols-1 sm:grid-cols-4 gap-4">
            <Label className="text-right sm:text-right" htmlFor="date">
              Reservation Date
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button className="col-span-1 sm:col-span-3 justify-start text-left font-normal" variant="outline">
                  <CalendarDaysIcon className="mr-1 h-4 w-4 -translate-x-1" />
                  Pick a date
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-auto p-0">
                <Calendar initialFocus mode="single" />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid items-start grid-cols-1 sm:grid-cols-4 gap-4">
            <Label className="text-right sm:text-right" htmlFor="time">
              Start Time
            </Label>
            <Select defaultValue="10:00 AM">
              <SelectTrigger className="col-span-1 sm:col-span-3 justify-start text-left font-normal">
                <SelectValue placeholder="Select start time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                <SelectItem value="5:00 PM">5:00 PM</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid items-start grid-cols-1 sm:grid-cols-4 gap-4">
            <Label className="text-right sm:text-right" htmlFor="duration">
              Duration
            </Label>
            <Select defaultValue="1 hour">
              <SelectTrigger className="col-span-1 sm:col-span-3 justify-start text-left font-normal">
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1 hour">1 hour</SelectItem>
                <SelectItem value="2 hours">2 hours</SelectItem>
                <SelectItem value="3 hours">3 hours</SelectItem>
                <SelectItem value="4 hours">4 hours</SelectItem>
                <SelectItem value="5 hours">5 hours</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid items-start grid-cols-1 sm:grid-cols-4 gap-4">
            <Label className="text-right sm:text-right" htmlFor="guests">
              Guests
            </Label>
            <Select defaultValue="2">
              <SelectTrigger className="col-span-1 sm:col-span-3 justify-start text-left font-normal">
                <SelectValue placeholder="Select number of guests" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 guest</SelectItem>
                <SelectItem value="2">2 guests</SelectItem>
                <SelectItem value="3">3 guests</SelectItem>
                <SelectItem value="4">4 guests</SelectItem>
                <SelectItem value="5">5 guests</SelectItem>
                <SelectItem value="6">6 guests</SelectItem>
                <SelectItem value="7">7 guests</SelectItem>
                <SelectItem value="8">8 guests</SelectItem>
                <SelectItem value="9">9 guests</SelectItem>
                <SelectItem value="10">10 guests</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid items-start grid-cols-1 sm:grid-cols-4 gap-4">
            <Label className="text-right sm:text-right" htmlFor="message">
              Message
            </Label>
            <Textarea
              className="col-span-1 sm:col-span-3 min-h-[100px]"
              id="message"
              placeholder="Enter your message"
            />
          </div>
        </div>
        <DialogFooter className="flex flex-col sm:flex-row gap-4 justify-end">
          <Button type="submit">Submit</Button>
          <div>
            <Button variant="outline">Cancel</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function CalendarDaysIcon(props:{className:string;}) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}
