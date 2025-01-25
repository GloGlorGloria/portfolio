import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gloria CHAN | Portfolio",
  description: "Gloria is a UX/UI designer and project manager with expertise in government communications, research, and award-winning digital innovation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >   <main className="flex min-h-screen flex-col bg-[#fff1df]">
            <Navbar />
          </main>
        {children}
      </body>
    </html>
  );
}
