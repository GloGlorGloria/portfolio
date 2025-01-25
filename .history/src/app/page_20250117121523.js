import Image from "next/image";
import HeroSection from "./components/HeroSection";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weights: ['400', '700'],
});

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-[#fff1df] container mx-auto px-12 py-4">
      <HeroSection /> 
      </main>
  );
}
