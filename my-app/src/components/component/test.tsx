import { Button } from "@/components/ui/button"
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea"

export function Test() {
  return (
    <Dialog defaultOpen>
      <DialogTrigger asChild>
        <Button variant="outline">Contact Us</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Get in Touch</DialogTitle>
          <DialogDescription>Fill out the form below and we'll get back to you as soon as possible.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center grid-cols-4 gap-4">
            <Label className="text-right" htmlFor="name">
              Name
            </Label>
            <Input className="col-span-3" id="name" placeholder="Enter your name" />
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label className="text-right" htmlFor="email">
              Email
            </Label>
            <Input className="col-span-3" id="email" placeholder="Enter your email" type="email" />
          </div>
          <div className="grid items-start grid-cols-4 gap-4">
            <Label className="text-right" htmlFor="date">
              Date
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button className="col-span-3 justify-start text-left font-normal" variant="outline">
                  <CalendarDaysIcon className="mr-1 h-4 w-4 -translate-x-1" />
                  Pick a date
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-auto p-0">
                <Calendar initialFocus mode="single" />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid items-start grid-cols-4 gap-4">
            <Label className="text-right" htmlFor="message">
              Message
            </Label>
            <Textarea className="col-span-3 min-h-[100px]" id="message" placeholder="Enter your message" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Submit</Button>
          <div>
            <Button variant="outline">Cancel</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function CalendarDaysIcon(props:{className: string}) {
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
