import type { Metadata, Viewport } from "next";
import { Audiowide } from "next/font/google";
import "./globals.css";

const audiowide = Audiowide({
  variable: "--font-audiowide",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Mike's Space",
  description: "Mike's Space",
  icons: {
    icon: "/favicon.ico?v=2",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${audiowide.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
