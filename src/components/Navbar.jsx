import React, { useState } from 'react';
import logoFk from '../assets/fk-logo.png'; 

function Logo() {
  return (
    <img src={logoFk} alt="Logo Nisa" className="h-8 w-auto object-contain" />
  );
}

export default function Navbar({ activePage, onNavigate }) {
  const [open, setOpen] = useState(false);
  const NAV_ITEMS = ["Works", "Lab", "About"];

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-neutral-200/70 bg-white/90 px-4 py-3 shadow-sm backdrop-blur sm:px-6">
        <button onClick={() => onNavigate("Home")} className="shrink-0">
          <Logo />
        </button>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <button
                onClick={() => onNavigate(item)}
                className={`text-sm transition-colors hover:text-green-900 ${
                  activePage === item ? "text-green-900 font-bold" : "text-neutral-600"
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Contact Button & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate("Contact")}
            className="hidden rounded-full bg-green-900 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-green-800 md:inline-block"
          >
            Contact
          </button>
          
          {/* Tombol Mobile Menu (Hamburger) */}
          <button 
            onClick={() => setOpen((v) => !v)} 
            className="rounded-lg p-2 text-neutral-600 hover:bg-neutral-100 md:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            {open ? (
              // Ikon "X" (Tutup) saat menu terbuka
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Ikon "Hamburger" (Tiga Garis) saat menu tertutup
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
            <button
              key={item}
              onClick={() => { onNavigate(item); setOpen(false); }}
              className="block w-full text-left px-4 py-3 text-sm text-neutral-600 hover:text-green-900 hover:bg-neutral-50 rounded-xl transition-colors"
            >
              {item}
            </button>
          ))}
          {/* Tombol Contact tambahan di versi mobile */}
          <button
            onClick={() => { onNavigate("Contact"); setOpen(false); }}
            className="mt-1 block w-full text-center px-4 py-2.5 text-sm font-medium bg-green-900 text-white rounded-xl hover:bg-green-800 transition-colors"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
}