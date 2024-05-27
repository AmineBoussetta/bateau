
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { AlertDescription, Alert } from "@/components/ui/alert"
import { Button } from "../ui/button"


export function BookingForm() {
  return (
    <div className=" mt-10 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 ">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Boat Reservation</h1>
        <p className="text-gray-500 dark:text-gray-400">Reserve your boat for an unforgettable day on the water.</p>
      </div>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-3 py-2 border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700  dark:text-white dark:border-gray-800"
            id="name"
            placeholder="Enter your name"
            required
            type="text"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="w-full px-3 py-2 border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700  dark:text-white dark:border-gray-800"
            id="phone"
            placeholder="Enter your phone number"
            required
            type="tel"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="date">
            Reservation Date
          </label>
          <input
            className="w-full px-3 py-2 border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700  dark:text-white dark:border-gray-800"
            id="date"
            required
            type="date"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="time">
            Reservation Time
          </label>
          <div className="flex gap-2">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Start Time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="8">8:00</SelectItem>
                <SelectItem value="9">9:00</SelectItem>
                <SelectItem value="10">10:00</SelectItem>
                <SelectItem value="11">11:00</SelectItem>
                <SelectItem value="12">12:00</SelectItem>
                <SelectItem value="13">13:00</SelectItem>
                <SelectItem value="14">14:00</SelectItem>
                <SelectItem value="15">15:00</SelectItem>
                <SelectItem value="16">16:00</SelectItem>
                <SelectItem value="17">17:00</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="End Time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="9">9:00</SelectItem>
                <SelectItem value="10">10:00</SelectItem>
                <SelectItem value="11">11:00</SelectItem>
                <SelectItem value="12">12:00</SelectItem>
                <SelectItem value="13">13:00</SelectItem>
                <SelectItem value="14">14:00</SelectItem>
                <SelectItem value="15">15:00</SelectItem>
                <SelectItem value="16">16:00</SelectItem>
                <SelectItem value="17">17:00</SelectItem>
                <SelectItem value="18">18:00</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="guests">
            Number of Guests
          </label>
          <input
            className="w-full px-3 py-2 border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700  dark:text-white dark:border-gray-800"
            id="guests"
            min="1"
            placeholder="Enter the number of guests"
            required
            type="number"
          />
        </div>
        <Button
          variant = "default"
          type="submit"
        >
          Reserve
        </Button>
      </form>
      <div className="mt-4">
        <Alert variant="default">
          <AlertDescription>The minimum reservation duration must be greater than 4 hours.</AlertDescription>
        </Alert>
      </div>
    </div>
  )
}
