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
  metadataBase: new URL("https://bshsolutionss.com"),
  title: {
    default: "BSH Solutions | Business Smart Hub",
    template: "%s | BSH Solutions",
  },
  description:
    "Business Smart Hub – A hub for all business tech needs. BSH Solutions provides top-notch digital, software, and IT solutions to empower businesses for the modern era.",
  keywords: [
    "BSH Solutions",
    "Business Smart Hub",
    "IT Company",
    "Software Development",
    "Digital Solutions",
    "Web Development",
    "Mobile App Development",
    "Tech Services",
  ],
  authors: [{ name: "BSH Solutions", url: "https://bshsolutionss.com" }],
  openGraph: {
    title: "BSH Solutions | Business Smart Hub",
    description:
      "A hub for all business tech needs — innovative, scalable, and smart IT solutions for your business.",
    url: "https://bshsolutionss.com",
    siteName: "BSH Solutions",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "BSH Solutions Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BSH Solutions | Business Smart Hub",
    description: "A hub for all business tech needs — powered by BSH Solutions.",
    images: ["/android-chrome-512x512.png"],
    creator: "@bshsolutions",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/android-chrome-192x192.png", sizes: "192x192" },
      { url: "/android-chrome-512x512.png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
  
  alternates: {
    canonical: "https://bshsolutionss.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
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
