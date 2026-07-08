import React, { useState } from 'react';
import CallToAction from '../../components/CallToAction';
import WorkCard from "../../components/WorkCard";

// Data proyek tiruan sesuai gambar desain kamu
const PROJECTS_DATA = [
  {
    id: 1,
    title: "Trampah",
    filterCategory: "UI/UX",
    tag: "UI/UX DESIGN",
    description: "A smart waste management app for scanning, sorting, and educating Semarang residents to reduce waste accumulation.",
    role: "UI & Visual Asset Designer",
    image: "https://images.unsplash.com/photo-1616440347437-b1c73416efc2?auto=format&fit=crop&w=600&q=80", // Ganti dengan path gambar aslimu nanti
  },
  {
    id: 2,
    title: "BeeMath",
    filterCategory: "UI/UX",
    tag: "MOBILE APP",
    description: "A math crossword application for children aged 8-12 that help improve counting skills, critical thinking, and problem solving in a fun way.",
    role: "UI & Game Asset Designer",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Print Service & Stationery",
    filterCategory: "Development",
    tag: "E-COMMERCE WEBSITE",
    description: "An e-commerce website for print services, stationery sales, and sales management.",
    role: "UI/UX Designer, Web Developer",
    image: "https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Facilities Improvement Report",
    filterCategory: "Development",
    tag: "WEB DEVELOPMENT",
    description: "Web-based platform for reporting campus facility issues and tracking maintenance requests.",
    role: "UI/UX Designer, Frontend Developer",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80",
  },
];

export default function WorksPage({ onNavigate }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", "UI/UX", "Development"];

  // Memfilter data berdasarkan properti 'filterCategory'
  const filteredProjects = activeFilter === "All"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(project => project.filterCategory === activeFilter);

  return (
    <div className="bg-[#faf8f5] min-h-screen pt-16">
      {/* Header Halaman */}
      <div className="text-center max-w-2xl mx-auto px-4 mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 block mb-2">
          Case Studies
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-neutral-950">
          My Works
        </h1>
      </div>

      {/* Tombol Filter */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-1.5 rounded-md text-xs font-medium border transition-all ${
              activeFilter === cat
                ? "bg-[#243c20] text-white border-[#243c20]"
                : "bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* List Kartu Proyek menggunakan Component Reusable */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 mb-24">
        {filteredProjects.map((project) => (
          <WorkCard 
            key={project.id} 
            project={project} 
            onNavigate={onNavigate} 
          />
        ))}
      </div>

      {/* Komponen Call To Action */}
      <CallToAction onNavigate={onNavigate} />

    </div>
  );
}