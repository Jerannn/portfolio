import type { Metadata } from "next";
import { Manrope, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Sidebar from "./_components/Sidebar";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jeran",
  description: "Jeran's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="h-screen overflow-hidden flex">
        <main className="p-5 flex-1 overflow-auto no-scrollbar">
          <div className="max-w-3xl w-full mx-auto px-5">{children}</div>
        </main>
        <Sidebar />
      </body>
    </html>
  );
}
