import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import { ThirdwebProvider } from "thirdweb/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Urbanika Regen Marketplace",
  description: "A market dedicated to green tech products and services, building the green cities of the future.",
  icons: {
    icon: [
      {
        url: "/icon/logo.png",
        href: "/icon/logo.png",
      }
    ],
    apple: {
      url: "/icon/logo.png",
      href: "/icon/logo.png",
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThirdwebProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    </ThirdwebProvider>
  );
}
