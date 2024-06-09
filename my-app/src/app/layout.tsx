import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";



export const metadata: Metadata = {
  title: "Yacht Rental",
  description: "Yacht Rental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
