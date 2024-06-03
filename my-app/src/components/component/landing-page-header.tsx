"use client";
import ThemeSwitch from "./Theme-switch";

export default function LandingPageHeader() {
  return (
    <header className="bg-gray-100 text-gray-900 py-4 px-6 md:px-12 flex items-center justify-between dark:bg-gray-800 dark:text-gray-100">
      <div className="flex items-center">
        {/* <img alt="Boat Rental" className="h-8 mr-4" src="/placeholder.svg" /> */}
        <h1 className="text-xl font-bold">Boat Rental</h1>
      </div>
      <nav className="hidden md:flex items-center space-x-6">
        <a className="hover:text-gray-600 dark:hover:text-gray-400" href="#">
          Home
        </a>
        <a className="hover:text-gray-600 dark:hover:text-gray-400" href="#boats">
          Boats
        </a>
        <a className="hover:text-gray-600 dark:hover:text-gray-400" href="#benefits">
          Benefits
        </a>
        <a className="hover:text-gray-600 dark:hover:text-gray-400" href="#contact">
          Contact
        </a>
      </nav>
      <div className="flex items-center space-x-4">
        <ThemeSwitch />
      </div>
    </header>
  );
}
