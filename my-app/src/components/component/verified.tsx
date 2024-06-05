import Link from "next/link"

export function Verified() {
  return (
    <div className="flex min-h-[100dvh] w-full items-center justify-center bg-gray-100 px-4 dark:bg-gray-900">
      <div className="mx-auto max-w-md space-y-6 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
        <div className="space-y-2 text-center">
          <CircleCheckIcon className="mx-auto h-12 w-12 text-green-500" />
          <h2 className="text-2xl font-bold">Your email has been verified successfully!</h2>
          <p className="text-gray-500 dark:text-gray-400">You can now access all the features of our platform.</p>
        </div>
        <Link
          className="inline-flex w-full justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-900/90 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"
          href="/"
        >
          Go to Home
        </Link>
      </div>
    </div>
  )
}

function CircleCheckIcon(props: {className: string}) {
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
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
