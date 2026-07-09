import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LabCard from '../../components/LabCard';
import CallToAction from '../../components/CallToAction';
import Footer from '../../components/Footer';
import trampahLogo from '../../assets/images/lab/trampah-logo-hero.webp';
import cloverTask from '../../assets/images/lab/clover-task-hero.webp';
import dayflowAI from '../../assets/images/lab/dayflow-ai-hero.webp';
import beemathBGM from '../../assets/images/lab/beemath-bgm-hero.webp';

const LAB_DATA = [
  {
    id: 1,
    title: "Clover Task (To Do App)",
    filterCategory: "Code",
    description: "My first React project, from UI design to frontend implementation.",
    tags: ["UI Design", "Frontend", "React"],
    image: cloverTask
  },
  {
    id: 2,
    title: "Trampah Logo",
    filterCategory: "Visual & Exploration",
    description: "Designing a meaningful logo inspired by the app's purpose and identity.",
    tags: ["Branding", "Logo Design"],
    image: trampahLogo
  },
  {
    id: 3,
    title: "DayFlow AI (Gemini API)",
    filterCategory: "Code",
    description: "Building an AI-powered scheduling assistant using the Gemini API.",
    tags: ["Gemini API", "Chatbot", "JavaScript"],
    image: dayflowAI
  },
  {
    id: 4,
    title: "BeeMath BGM",
    filterCategory: "Visual & Exploration",
    description: "Composing an original game soundtrack to support a fun learning experience.",
    tags: ["Game Audio", "Music Composition"],
    image: beemathBGM
  }
];

export default function LabPage({ onNavigate }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Visual & Exploration', 'Code'];

  const filteredLab = activeFilter === 'All'
    ? LAB_DATA
    : LAB_DATA.filter(item => item.filterCategory === activeFilter);

  return (
    <div className="bg-[#faf8f5] min-h-screen pt-16">
      {/* Header Halaman */}
      <div className="text-center max-w-2xl mx-auto px-4 mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 block mb-2">
          My Exploration
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-neutral-950">
          The Projects Lab
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
                ? 'bg-[#243c20] text-white border-[#243c20]'
                : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Sistem 2 Kolom untuk Lab */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-2 mb-24">
        {filteredLab.map((item) => (
          <LabCard 
            key={item.id}
            project={item}
            onNavigate={onNavigate}
          />
        ))}
      </div>

      {/* Section CTA */}
      <CallToAction onNavigate={onNavigate} />

    </div>
  );
}