import Navbar from '../components/Navbar';
import styles from "./projects.module.css";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col bg-[#fff1df]">
      <Navbar />
      
      <div className="container mt-24 mx-auto px-12 py-12">
        <h1>About me</h1>
      </div>
    </main>
  );
}
