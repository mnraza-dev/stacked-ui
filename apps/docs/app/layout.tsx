import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./_components/Sidebar";
import { Navbar } from "./_components/Navbar";
import { MDXWrapper } from "./providers";

export const metadata: Metadata = {
  title: "Stacked UI — Production-Ready React UI Library",
  description:
    "Accessible, beautifully designed React UI components built with Tailwind CSS v4, Radix UI primitives, and strict TypeScript.",
  openGraph: {
    title: "Stacked UI — Production-Ready React UI Library",
    description:
      "Accessible, beautifully designed React UI components built with Tailwind CSS v4, Radix UI primitives, and strict TypeScript.",
    siteName: "Stacked UI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary selection:text-primary-foreground">
        <MDXWrapper>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex flex-1">
              <Sidebar />
              <main className="flex-1 p-6 sm:p-10 max-w-6xl overflow-y-auto">
                {children}
              </main>
            </div>
          </div>
        </MDXWrapper>
      </body>
    </html>
  );
}
