import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "./_components/AppShell";
import { MDXWrapper } from "./providers";

export const metadata: Metadata = {
  title: "Stacked UI — Production-Ready React UI Library & Templates",
  description:
    "Accessible, beautifully designed React UI components, website sections, application blocks, and production dashboard templates built with Tailwind CSS v4.",
  openGraph: {
    title: "Stacked UI — Production-Ready React UI Library & Templates",
    description:
      "Accessible, beautifully designed React UI components, website sections, application blocks, and production dashboard templates built with Tailwind CSS v4.",
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
          <AppShell>{children}</AppShell>
        </MDXWrapper>
      </body>
    </html>
  );
}
