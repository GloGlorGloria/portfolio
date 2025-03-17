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
      { threshold: 0.5 }
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
        setShowMenu(window.scrollY >= userResearch.offsetTop - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-4 top-20 w-48 p-3 shadow-md rounded-md transition-all ${
        showMenu ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <ul>
        {sections.map(({ id, label }) => (
          <li key={id} className={`py-2 ${activeSection === id ? "text-blue-800 font-bold" : ""}`}>
            <a href={`#${id}`} className="block hover:text-blue-600">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
