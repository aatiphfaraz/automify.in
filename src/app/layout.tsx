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
  metadataBase: new URL("https://automify.in"),
  title: {
    default: "automify.in - Build & Scale MVPs | Enterprise-Grade Engineering",
    template: "%s | automify.in",
  },
  description: "From idea to launch, we build and scale digital products for startups and small businesses. Enterprise-grade engineering meets startup speed. Custom software, AI solutions, and growth strategies from senior engineers who've shipped products at scale.",
  keywords: [
    "MVP development",
    "startup development",
    "custom software development",
    "AI solutions",
    "web application development",
    "mobile app development",
    "full-stack development",
    "software engineering",
    "product development",
    "startup consulting",
    "growth strategy",
    "digital transformation",
    "automation",
    "scalable applications",
    "Next.js development",
    "React development",
    "TypeScript development",
  ],
  authors: [{ name: "automify.in" }],
  creator: "automify.in",
  publisher: "automify.in",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://automify.in",
    siteName: "automify.in",
    title: "automify.in - Build & Scale MVPs | Enterprise-Grade Engineering",
    description: "From idea to launch, we build and scale digital products for startups and small businesses. Enterprise-grade engineering meets startup speed.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "automify.in - Build & Scale MVPs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "automify.in - Build & Scale MVPs | Enterprise-Grade Engineering",
    description: "From idea to launch, we build and scale digital products for startups and small businesses.",
    images: ["/og-image.png"],
    creator: "@automify",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: "https://automify.in",
  },
  category: "technology",
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
