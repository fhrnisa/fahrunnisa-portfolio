import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className="fixed bottom-24 right-6 z-40 flex items-center justify-center h-10 w-10 rounded-full bg-white border border-neutral-200 text-neutral-700 shadow-md transition-all hover:border-green-900 hover:text-green-900 active:scale-90"
    >
      <ChevronUp className="h-5 w-5" strokeWidth={2} />
    </button>
  );
}