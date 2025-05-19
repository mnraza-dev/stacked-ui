import type { Metadata } from "next";
import {Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Stacked UI Docs | A component library for developers to ship better products faster",
  description: "Build faster. Ship better. Get started in minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
     <main className="min-h-screen">
         {children}
     </main>
      </body>
    </html>
  );
}
