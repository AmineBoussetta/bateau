export function FooterComponent() {
  return (
    <footer className="bg-gray-100 py-8 dark:bg-gray-800">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-1">
            <a
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              info@example.com
            </a>
            <div className="text-sm text-gray-500 dark:text-gray-400">+1 514 558 6416</div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Yacht Rental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
