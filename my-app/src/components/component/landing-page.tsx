import { Button } from "@/components/ui/button"

import { CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import LandingPageHeader from "./landing-page-header"



export function LandingPage() {
  return (
    <div className="text-black">
      <LandingPageHeader/>
      <section className="bg-gray-100 text-gray-900 py-20 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between dark:bg-gray-800 dark:text-gray-100">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold">Discover the Best Boats for Your Adventure</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Rent the perfect boat for your next getaway. From small sailboats to luxurious yachts, we have it all.
          </p>
          <Button className="mt-4" variant="default">
            Explore Boats
          </Button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img alt="Boat" className="rounded-lg shadow-lg" src="/boat.jpg" />
        </div>
      </section>
      <section className=" bg-white py-20 px-6 md:px-12 dark:bg-gray-900 dark:text-gray-100" id="boats">
        <h2 className="text-3xl font-bold text-center mb-12">Our Boat Selection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <img alt="Sailboat" className="rounded-t-lg" src="/sailboat.jpg" />
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">Sailboat</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Experience the thrill of sailing with our well-maintained sailboats.
              </p>
              <Button variant="default">Rent Now</Button>
            </CardContent>
          </Card>
          <Card>
            <img alt="Motorboat" className="rounded-t-lg" src="/motorboat.jpg" />
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">Motorboat</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Cruise the waters with power and speed in our reliable motorboats.
              </p>
              <Button variant="default">Rent Now</Button>
            </CardContent>
          </Card>
          <Card>
            <img alt="Yacht" className="rounded-t-lg" src="/yacht.jpg" />
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">Yacht</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Indulge in luxury and comfort with our well-appointed yachts.
              </p>
              <Button variant="default">Rent Now</Button>
            </CardContent>
          </Card>
        </div>
      </section>
      <section
        className="bg-gray-100 text-gray-900 py-20 px-6 md:px-12 dark:bg-gray-800 dark:text-gray-100"
        id="benefits"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex items-start">
            <CompassIcon className="h-8 w-8 mr-4 text-gray-900 dark:text-gray-50" />
            <div>
              <h3 className="text-xl font-bold mb-2">Wide Selection</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Choose from a wide range of boats to fit your needs and budget.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <ClockIcon className="h-8 w-8 mr-4 text-gray-900 dark:text-gray-50" />
            <div>
              <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600 dark:text-gray-400">Book your boat rental with ease and flexibility.</p>
            </div>
          </div>
          <div className="flex items-start">
            <ShieldCheckIcon className="h-8 w-8 mr-4 text-gray-900 dark:text-gray-50" />
            <div>
              <h3 className="text-xl font-bold mb-2">Reliable Service</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Enjoy our top-notch customer service and well-maintained boats.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-20 px-6 md:px-12 dark:bg-gray-900 dark:text-gray-100" id="contact">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="max-w-md mx-auto">
          <form>
            <div className="mb-4">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" type="text" />
            </div>
            <div className="mb-4">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="mb-4">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Enter your message" rows={5} />
            </div>
            <Button className="w-full" type="submit" variant="default">
              Submit
            </Button>
          </form>
        </div>
      </section>
      <footer className="bg-gray-100 text-gray-900 py-8 px-6 md:px-12 dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img alt="Boat Rental" className="h-8 mr-4" src="/placeholder.svg" />
            <p>© 2023 Boat Rental. All rights reserved.</p>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a className="hover:text-gray-600 dark:hover:text-gray-400" href="#">
              Home
            </a>
            <a className="hover:text-gray-600 dark:hover:text-gray-400" href="#">
              Boats
            </a>
            <a className="hover:text-gray-600 dark:hover:text-gray-400" href="#">
              Benefits
            </a>
            <a className="hover:text-gray-600 dark:hover:text-gray-400" href="#">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function ClockIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function CompassIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  )
}





function ShieldCheckIcon(props) {
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
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
