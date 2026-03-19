import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "lucelabs",
  description: "build transformative technologies that empower businesses and give hope to everyone whose future depends on bold ideas",
  icons: {
    icon: [
      { url: "/lucelabslogonew1.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/lucelabslogonew1.svg"],
    apple: ["/lucelabslogonew1.svg"],
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
        className={`${spaceMono.variable} antialiased container`}
      >
        {children}
      </body>
    </html>
  );
}
