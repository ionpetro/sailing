import "./css/style.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { Analytics } from "@vercel/analytics/react";

import { Inter, Nothing_You_Could_Do } from "next/font/google";
import { MantineProvider } from "@mantine/core";
import { theme } from "./css/mantine-theme";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nycd = Nothing_You_Could_Do({
  subsets: ["latin"],
  variable: "--font-nycd",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sailwiththeboys.com"),
  title: "Home - SailwiththeBoys",
  description: "Book your dream sailing adventure in the Greek Islands",
  openGraph: {
    title: "Home - SailwiththeBoys",
    description: "Book your dream sailing adventure in the Greek Islands",
    url: "https://www.sailwiththeboys.com",
    siteName: "SailwiththeBoys",
    images: [
      {
        url: "https://www.sailwiththeboys.com/opengraph-image.jpg",
        width: 1200,
        height: 600,
        alt: "SailwiththeBoys Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home - SailwiththeBoys",
    description: "Book your dream sailing adventure in the Greek Islands",
    images: ["https://www.sailwiththeboys.com/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${nycd.variable} font-inter antialiased bg-white text-gray-800 tracking-tight`}
      >
        <MantineProvider theme={theme}>
          <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
            {children}
          </div>
          <Analytics />
        </MantineProvider>
      </body>
    </html>
  );
}
