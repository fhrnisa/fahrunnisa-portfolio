// src/pages/Home.jsx
import React from 'react';
import { worksData } from '../data/worksData';
import WorkCard from '../components/WorkCard';
import CallToAction from '../components/CallToAction';

function Hero({ onNavigate }) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-24 mx-auto h-72 w-[90%] max-w-3xl rounded-full bg-green-200/40 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:py-28">
        <p className="font-serif text-xl text-neutral-800 sm:text-2xl">Hi, I&apos;m Fahrunnisa!</p>
        <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-neutral-900 text-balance sm:text-5xl lg:text-6xl">
          Designing and Building Digital Experiences
        </h1>
        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-neutral-500 sm:text-base">
          I enjoy transforming ideas into clean interfaces that are simple to use and meaningful to people.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button onClick={() => onNavigate("Works")} className="rounded-full bg-green-900 px-7 py-3 text-sm font-medium text-white shadow hover:bg-green-800">
            View Works
          </button>
          <button onClick={() => onNavigate("Contact")} className="rounded-full border border-neutral-300 bg-white px-7 py-3 text-sm font-medium text-neutral-800 hover:border-green-900">
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const STATS = [
    { value: "2+", label: "Years Exploring Design" },
    { value: "10+", label: "Projects Completed" },
    { value: "1", label: "National-Level UI/UX Award" },
  ];
  return (
    <section className="border-y border-neutral-200 bg-white">
      <div className="mx-auto grid max-w-4xl grid-cols-1 divide-y divide-neutral-200 px-4 py-10 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6">
        {STATS.map((stat) => (
          <div key={stat.label} className="px-4 py-4 text-center sm:py-0">
            <div className="font-serif text-4xl text-neutral-900 sm:text-5xl">{stat.value}</div>
            <div className="mt-2 text-[11px] font-medium uppercase tracking-widest text-neutral-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function HomePage({ onNavigate }) {
  // Ambil data project dari file data terpisah
  const featuredProjects = worksData; 

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 antialiased">
      <main>
        <Hero onNavigate={onNavigate} />
        <Stats />
        
        {/* Section Featured Projects */}
        <section className="bg-neutral-50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">Selected Works</p>
              <h2 className="mt-3 font-serif text-3xl text-neutral-900 sm:text-4xl">Featured Projects</h2>
            </div>

            <div className="mt-12 flex flex-col gap-8">
              {featuredProjects.map((project) => (
                <WorkCard key={project.title} project={project} onNavigate={onNavigate} />
              ))}
            </div>
          </div>
        </section>

        <CallToAction onNavigate={onNavigate} />
      </main>

    </div>
  );
}