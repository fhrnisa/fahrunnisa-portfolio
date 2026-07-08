import React from 'react';

function ArrowRightIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

export default function LabCard({ project, onNavigate }) {
  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-neutral-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-green-900/30 hover:shadow-xl">
      <div>
        {/* Kontainer Gambar */}
        <div className="overflow-hidden bg-neutral-100 rounded-2xl aspect-[4/3]">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Konten Teks */}
        <div className="pt-5 pb-4 px-2">
          <h3 className="font-serif text-2xl text-neutral-900 sm:text-3xl">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-500 min-h-[40px] line-clamp-2">
            {project.description}
          </p>

          {/* Badge Tags Dinamis */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags && project.tags.map((tag, idx) => (
              <span 
                key={idx} 
                className="rounded bg-green-50 px-2 py-0.5 text-[10px] font-medium text-green-800 border border-green-100/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Tombol View Details */}
      <div className="px-2 pb-2">
        <button
          onClick={() => onNavigate("LabDetail", project)}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white py-2.5 text-xs font-medium text-neutral-700 transition-all hover:border-green-900 hover:text-green-900 active:scale-98"
        >
          View Details
          <ArrowRightIcon />
        </button>
      </div>
    </article>
  );
}