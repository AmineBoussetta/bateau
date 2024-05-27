"use client";
import { Toggle } from "@/components/ui/toggle";
import ThemeSwitch from "./Theme-switch";

export default function LandingPageHeader() {
  return (
    <header className="bg-gray-100 text-gray-900 py-4 px-6 md:px-12 flex items-center justify-between dark:bg-gray-800 dark:text-gray-100">
      <div className="flex items-center">
        <img alt="Boat Rental" className="h-8 mr-4" src="/placeholder.svg" />
        <h1 className="text-xl font-bold">Boat Rental</h1>
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
      <div className="flex items-center space-x-4">
        <ThemeSwitch />
        {/* <button className="md:hidden text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
            <MenuIcon className="h-6 w-6" />
          </button>
          <Toggle aria-label="Toggle dark mode">
            <MoonIcon className="h-6 w-6" />
          </Toggle> */}
      </div>
    </header>
  );
}

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MoonIcon(props) {
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
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}
