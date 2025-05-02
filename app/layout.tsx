import type { Metadata } from "next";
import { Geist, Geist_Mono, Titan_One } from "next/font/google";
import "./globals.css";
import MetaPixelTracker from "@/components/trackers/MetaPixel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const titanOne = Titan_One({
  variable: "--font-titan-one",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Suzuki 6.6 | Diskon Mobil Suzuki Terbaru",
  description:
    "Hanya 6.6! Promo mobil Suzuki dengan potongan harga dan bonus menarik!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <MetaPixelTracker />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${titanOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
