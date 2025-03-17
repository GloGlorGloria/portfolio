"use client";
import { useEffect, useState } from "react";

const sections = [
  { id: "user-research", label: "User Research" },
  { id: "competitive-analysis", label: "Competitive Analysis" },
  { id: "user-personas", label: "User Personas" },
  { id: "user-workflow", label: "User Workflow" },
  { id: "style-guide", label: "Style Guide" },
  { id: "key-features", label: "Key Features" },
  { id: "marketing-branding", label: "Marketing & Branding" },
  { id: "conclusion", label: "Conclusion" },
];

export default function SideMenu() {
  const [activeSection, setActiveSection] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-100px 0px -50% 0px" } // Adjusts when section is "in view"
    );

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const userResearch = document.getElementById("user-research");
      if (userResearch) {
        setShowMenu(window.scrollY >= userResearch.offsetTop - 150);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Offset for better visibility
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed left-4 top-20 w-48 p-3 bg-white shadow-md rounded-md transition-all ${
        showMenu ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <ul>
        {sections.map(({ id, label }) => (
          <li key={id} className="py-2">
            <button
              onClick={() => handleSmoothScroll(id)}
              className={`block w-full text-left px-2 py-1 rounded-md transition-all ${
                activeSection === id ? "bg-blue-500 text-white font-bold" : "hover:bg-gray-100"
              }`}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
