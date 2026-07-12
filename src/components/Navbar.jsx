import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoFk from '../assets/fk-logo.png'; 

function Logo() {
  return (
    <img src={logoFk} alt="Logo Nisa" className="h-8 w-auto object-contain" />
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  
  // Kita buat data menu beserta path/rute URL-nya agar lebih mudah di-map
  const NAV_ITEMS = [
    { label: "Works", path: "/works" },
    { label: "Lab", path: "/lab" },
    { label: "About", path: "/about" }
  ];

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-neutral-200/70 bg-white/90 px-4 py-3 shadow-sm backdrop-blur sm:px-6">
        
        {/* 🛠️ PERBAIKAN 1: Mengubah button Logo menjadi Link ke "/" (Homepage) */}
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              {/* 🛠️ PERBAIKAN 2: Menggunakan NavLink dengan callback isActive untuk styling otomatis */}
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-sm md:text-base transition-colors hover:text-green-900 ${
                    isActive ? "text-green-900 font-bold" : "text-neutral-600"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Contact Button & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <a
            href="mailto:kusuma.fahrunnisa@gmail.com?subject=Inquiry%20from%20Portfolio&body=Hi%20Fahrunnisa,"
            className="hidden rounded-full bg-[#2B4225] px-5 py-2 text-sm font-medium text-white transition-all hover:bg-[#152817] md:inline-block"
          >
            Contact
          </a>
          
          {/* Tombol Mobile Menu (Hamburger) - Tetap karena mengontrol state internal navbar */}
          <button 
            onClick={() => setOpen((v) => !v)} 
            className="rounded-lg p-2 text-neutral-600 hover:bg-neutral-100 md:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            {open ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

{/* Mobile Menu Conditional Rendering */}
      {open && (
        <div className="mx-auto mt-2 max-w-5xl rounded-2xl border border-neutral-200/70 bg-white/95 p-2 shadow-sm md:hidden">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block w-full text-left px-4 py-3 text-sm rounded-xl transition-colors ${
                  isActive ? "bg-neutral-50 text-green-900 font-bold" : "text-neutral-600 hover:text-green-900 hover:bg-neutral-50"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          
          <a
            href="mailto:kusuma.fahrunnisa@gmail.com?subject=Inquiry%20from%20Portfolio&body=Hi%20Fahrunnisa,"
            onClick={() => setOpen(false)}
            className="mt-1 block w-full text-center px-4 py-2.5 text-sm font-medium bg-green-900 text-white rounded-xl hover:bg-green-800 transition-colors"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}