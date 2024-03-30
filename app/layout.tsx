import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local"

const digital7  = localFont({
  src: [
    {
      path: "./fonts/digital-7.ttf",
      style: "normal"
    }
  ]
})

export const metadata: Metadata = {
  title: "Digital Clock",
  description: "Build Simple Digital Clock using NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={digital7.className}>{children}</body>
    </html>
  );
}
