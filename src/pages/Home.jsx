import React from 'react';
import { Link } from 'react-router-dom';
import { worksData } from '../data/worksData';
import WorkCard from '../components/WorkCard';
import CallToAction from '../components/CallToAction';

function ArrowRightIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-24 mx-auto h-72 w-[90%] max-w-3xl rounded-full bg-[#7EB26D]/20 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:py-28">
        <p className="font-serif font-medium text-xl text-neutral-800 sm:text-2xl">Hi, I&apos;m Fahrunnisa!</p>
        <h1 className="mt-4 font-serif font-medium text-4xl leading-tight tracking-tight text-neutral-900 text-balance sm:text-5xl lg:text-6xl">
          Designing and Building Digital Experiences
        </h1>
        <p className="mx-auto mt-6 max-w-md text-sm md:text-base lg:text-lg leading-relaxed text-neutral-500 sm:text-base">
          I enjoy transforming ideas into clean interfaces that are simple to use and meaningful to people.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

          <Link 
            to="/works" 
            className="rounded-full bg-[#2B4225] px-7 py-3 text-sm font-medium text-white shadow hover:bg-[#152817] block text-center"
          >
            View Works
          </Link>

          <Link 
            to="/contact" 
            className="rounded-full border border-neutral-300 bg-white px-7 py-3 text-sm font-medium text-neutral-800 hover:border-[#2B4225] block text-center"
          >
            Hire Me
          </Link>
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
    <div className="mx-auto grid max-w-4xl grid-cols-3 divide-x divide-neutral-200 px-4 py-8 sm:px-6 sm:py-8">
      {STATS.map((stat) => (
        <div key={stat.label} className="px-2 py-2 text-center sm:px-4 sm:py-0">
          <div className="font-serif text-2xl text-neutral-900 sm:text-4xl md:text-5xl">{stat.value}</div>
          <div className="mt-1 text-[9px] font-medium uppercase tracking-tight text-neutral-500 sm:mt-2 sm:text-[11px] sm:tracking-widest">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  </section>
  );
}

// 🛠️ 5. Hapus prop onNavigate dari HomePage
export default function HomePage() {
  const featuredProjects = worksData.slice(0, 3);

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 antialiased">
      <main>
  
        <Hero />
        <Stats />
        
        {/* Section Featured Projects */}
        <section className="bg-neutral-50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">Selected Works</p>
              <h2 className="mt-3 font-serif font-medium text-3xl text-neutral-900 sm:text-4xl">Featured Projects</h2>
            </div>

            <div className="mt-12 flex flex-col gap-8">
              {featuredProjects.map((project) => (

                <WorkCard key={project.title} project={project} />
              ))}
            </div>

            <div className="mt-8 flex justify-center">

              <Link
                to="/works"
                className="inline-flex items-center gap-2 rounded-full bg-[#2B4225] px-7 py-3 text-sm font-medium text-white transition-all hover:bg-[#152817] hover:shadow-md active:scale-95"
              >
                View All Works
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
    </div>
  );
}