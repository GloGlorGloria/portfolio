import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-[#fff1df]">
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-12">
        <HeroSection /> 
        <AboutSection />
      </div>
 
      </main>
  );
}
