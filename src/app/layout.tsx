import type { Metadata } from "next";
import localFont from "next/font/local";

import Footer from "@/components/footer";

import "./globals.css";

const geistSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Radiant - Close every deal",
  description:
    "Radiant helps you sell more by revealing sensitive information about your customers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={geistSans.className}>
      <body className="antialiased">
        <div className="overflow-hidden">
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
