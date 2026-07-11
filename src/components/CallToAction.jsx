import React from 'react';
import { Link } from 'react-router-dom';
import cloverBg from '../assets/clover-full.png'; 

function ArrowUpRightIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5 19.5 4.5m0 0H9m10.5 0V15" />
    </svg>
  );
}

export default function CallToAction({ 
  title = "Have Something in Mind?", 
  description = "If you'd like to connect, discuss an opportunity, or simply say hello, I'd be happy to hear from you." 
}) {
  return (
    <section className="relative overflow-hidden bg-[#ffffff] px-4 py-24 sm:px-6 sm:py-28">
      
      {/* Gambar Clover Full Section */}
      <div 
        className="pointer-events-none absolute inset-0 bg-center bg-cover bg-no-repeat opacity-80"
        style={{
          backgroundImage: `url(${cloverBg})`,
        }}
      />

      {/* Konten Utama */}
      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-4xl lg:text-5xl font-medium text-neutral-900 text-balance sm:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-md text-sm md:text-base lg:text-lg leading-relaxed text-neutral-500 sm:text-base">{description}</p>
        <div className="mt-8 flex justify-center">
          <Link
            to="mailto:kusuma.fahrunnisa@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-[#1b331e] px-7 py-3 text-sm font-medium text-white transition-all hover:bg-[#152817] hover:shadow-md active:scale-95"
          >
            Get in Touch
            <ArrowUpRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}