import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col bg-[#fff1df]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-12">
        <HeroSection />
      </div>
    </main>
  );
  console.log('About');
}
