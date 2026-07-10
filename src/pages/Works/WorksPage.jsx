import React, { useState } from 'react';
import { worksData } from '../../data/worksData';
import CallToAction from '../../components/CallToAction';
import WorkCard from '../../components/WorkCard';

export default function WorksPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", "UI/UX", "Development"];

  const filteredProjects = activeFilter === "All"
    ? worksData
    : worksData.filter(project => project.filterCategory === activeFilter);

  return (
    <div className="bg-[#faf8f5] min-h-screen pt-16">
      {/* Header Halaman */}
      <div className="text-center max-w-2xl mx-auto px-4 mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 block mb-2">
          Case Studies
        </span>
        <h1 className="font-serif font-medium text-4xl sm:text-5xl text-neutral-950">
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

      {/* List Kartu Proyek */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 mb-24">
        {filteredProjects.map((project) => (
          <WorkCard 
            key={project.id} 
            project={project} 
          />
        ))}
      </div>

      {/* Komponen Call To Action */}
      <CallToAction />
    </div>
  );
}