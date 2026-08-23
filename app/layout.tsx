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
  metadataBase: new URL("https://www.shayanarman.com"),
  title: {
    default: "Shayan Arman — Builder & Engineer",
    template: "%s — Shayan Arman",
  },
  description:
    "Shayan Arman builds and scales ambitious software products, from Apple platforms to independent AI companies.",
  openGraph: {
    type: "website",
    siteName: "Shayan Arman",
    title: "Shayan Arman — Builder & Engineer",
    description:
      "Building and scaling ambitious software products, from Apple platforms to independent AI companies.",
    url: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
