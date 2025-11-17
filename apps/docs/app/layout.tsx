import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./_components/Sidebar";
import { MDXWrapper } from "./providers";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Documentation - StackedUI",
  description: "Documentation for StackedUI component library.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen">
      
          <Sidebar />
  
          <main className="flex-1 p-8">
            <MDXWrapper>{children}</MDXWrapper>
          </main>
        </div>
      </body>
    </html>
  );
}
