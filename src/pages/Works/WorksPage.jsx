import React, { useState } from 'react';
import CallToAction from '../../components/CallToAction';
import WorkCard from '../../components/WorkCard';
import trampahImage from "../../assets/images/works/trampah-mockup.webp";
import beemathImage from "../../assets/images/works/beemath-mockup.webp";
import printServiceImage from "../../assets/images/works/print-stationary-mockup.webp";
import facilitiesReportImage from "../../assets/images/works/facilities-report-mockup.webp";

// Data proyek tiruan sesuai gambar desain kamu
const PROJECTS_DATA = [
  {
    id: 1,
    title: "Trampah",
    filterCategory: "UI/UX",
    category: "UI/UX DESIGN",
    description: "A smart waste management app for scanning, sorting, and educating Semarang residents to reduce waste accumulation.",
    role: "UI & Visual Asset Designer",
    image: trampahImage,
  },
  {
    id: 2,
    title: "BeeMath",
    filterCategory: "UI/UX",
    category: "MOBILE APP",
    description: "A math crossword application for children aged 8-12 that help improve counting skills, critical thinking, and problem solving in a fun way.",
    role: "UI & Game Asset Designer",
    image: beemathImage,
  },
  {
    id: 3,
    title: "Print Service & Stationery",
    filterCategory: "Development",
    category: "E-COMMERCE WEBSITE",
    description: "An e-commerce website for print services, stationery sales, and sales management.",
    role: "UI/UX Designer, Web Developer",
    image: printServiceImage,
  },
  {
    id: 4,
    title: "Facilities Improvement Report",
    filterCategory: "Development",
    category: "WEB DEVELOPMENT",
    description: "Web-based platform for reporting campus facility issues and tracking maintenance requests.",
    role: "UI/UX Designer, Frontend Developer",
    image: facilitiesReportImage,
  },
];

// 🛠️ Prop onNavigate dihapus dari parameter
export default function WorksPage() {
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
            className={`px-4 py-1.5 rounded-lg text-sm md:text-base font-medium border transition-all ${
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
          /* 🛠️ PERBAIKAN 1: Menghapus properti onNavigate dari WorkCard */
          <WorkCard 
            key={project.id} 
            project={project} 
          />
        ))}
      </div>

      {/* Komponen Call To Action */}
      {/* 🛠️ PERBAIKAN 2: Menghapus properti onNavigate dari CallToAction */}
      <CallToAction />

    </div>
  );
}