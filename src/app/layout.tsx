import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tiny Curling Wand | H5 Landing Page",
  description:
    "Mobile-first H5 landing page for Pinterest and Instagram traffic converting into tiny curling wand purchase clicks.",
  openGraph: {
    title: "Tiny Curling Wand | H5 Landing Page",
    description:
      "Explain the value, usage, and visible results of a 9mm tiny curling wand before sending traffic to the product page.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiny Curling Wand | H5 Landing Page",
    description:
      "Mobile-first landing page for 9mm tiny curling wand traffic conversion.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
