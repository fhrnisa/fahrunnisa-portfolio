import React from 'react';
import { Link } from 'react-router-dom'; // Gunakan Link di sini

function ArrowRightIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

// 🛠️ Prop onNavigate dihapus
export default function WorkCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-green-900/30 hover:shadow-xl">
      <div className="grid gap-0 md:grid-cols-2">
        <div className="overflow-hidden bg-neutral-100 ">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.imageAlt || project.title}
            className="h-56 w-full rounded-md object-cover transition-transform duration-500 group-hover:scale-105 md:h-full"
          />
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-8">
          <span className="text-xs md:text-sm font-medium uppercase tracking-widest text-neutral-400">{project.category}</span>
          <h3 className="mt-2 font-medium text-2xl text-neutral-900 sm:text-3xl">{project.title}</h3>
          <p className="mt-3 text-sm md:text-base lg:text-lg leading-relaxed text-neutral-500">{project.description}</p>

          <hr className="my-5 border-neutral-200" />

          <div className="text-sm font-medium text-green-800">Role:</div>
          <div className="mt-1 text-sm md:text-base lg:text-lg text-neutral-700">{project.role}</div>

          <div className="mt-6">

            <Link
              to={`/works/${project.path}`}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm md:text-base font-medium text-neutral-800 transition-all hover:border-green-900 hover:text-green-900 active:scale-95"
            >
              View Details
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}