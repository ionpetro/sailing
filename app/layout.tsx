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
  title: "SailVoyages",
  description: "Book your dream sailing adventure in the Greek Islands",
  icons: {
    icon: [
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      {
        url: "/images/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
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
