import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./about";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-[#fff1df]">
      <Navbar/>
      <div class="container mt-24 mx-auto px-12 py-12">
        <HeroSection /> 
      </div>
 
      </main>
  );
}
