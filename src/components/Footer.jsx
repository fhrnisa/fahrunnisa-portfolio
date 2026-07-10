import React from 'react';
import { Link } from 'react-router-dom';
import nisaLogo from '../assets/fk-logo.png';

function MailIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m3 7 9 6 9-6" />
    </svg>
  )
}

function LinkedInIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21h-4V9Z" />
    </svg>
  )
}

function InstagramIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function GitHubIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.34 9.34 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

export default function Footer() {
  // 🛠️ 3. Buat NAV_ITEMS menggunakan objek yang mendefinisikan label dan path rutenya
  const NAV_ITEMS = [
    { label: "Works", path: "/works" },
    { label: "Lab", path: "/lab" },
    { label: "About", path: "/about" },
  ];

  const socials = [
    { label: "Email", icon: MailIcon, href: "mailto:kusuma.fahrunnisa@gmail.com" },
    { label: "LinkedIn", icon: LinkedInIcon, href: "https://www.linkedin.com/in/fahrunnisa/" },
    { label: "Instagram", icon: InstagramIcon, href: "https://www.instagram.com/madebyfnis/" },
    { label: "GitHub", icon: GitHubIcon, href: "https://github.com/fhrnisa" },
  ];

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 px-6 py-14 md:px-8">
      <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <img src={nisaLogo} alt="Fahrunnisa Logo" className="h-8 w-auto" />
          <p className="mt-4 max-w-xs text-sm md:text-base leading-relaxed text-neutral-500">
            A growing journey in UI/UX, shaped by visual thinking and curiosity.
          </p>
        </div>

        <div>
          <h3 className="text-xs md:text-sm font-semibold uppercase tracking-widest text-neutral-800">Navigation</h3>
          <ul className="mt-4 space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                {/* 🛠️ 4. Ubah <button> menjadi <Link> dengan atribut to */}
                <Link 
                  to={item.path} 
                  className="text-sm md:text-base text-neutral-500 hover:text-green-900 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs md:text-sm font-semibold uppercase tracking-widest text-neutral-800">Connect</h3>
          <div className="mt-4 flex items-center gap-4">
            {socials.map(({ label, icon: Icon, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-green-900 transition-colors">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-5xl border-t border-neutral-200 pt-6 text-center text-xs text-neutral-400">
        ©2026 Fahrunnisa. All Rights Reserved.
      </div>
    </footer>
  );
}