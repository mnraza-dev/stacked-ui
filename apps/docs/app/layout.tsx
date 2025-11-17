import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MDXProviders } from "./providers";
import DocLayout from "./_components/DocLayout";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Documentation - StackedUI",
  description: "Documentation for StackedUI component library.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} `}
      >
         <MDXProviders>{children}</MDXProviders>
      </body>
    </html>
  );
}
