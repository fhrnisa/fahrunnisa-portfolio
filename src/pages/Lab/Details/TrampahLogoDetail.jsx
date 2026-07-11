import React from 'react';
import CallToAction from '../../../components/CallToAction';
import trampahLogoHero from '../../../assets/images/lab/trampah-logo-hero.webp';
import trampahLogoBreakdown from '../../../assets/images/lab/trampah-logo-breakdown.webp';
import mockupPhone from '../../../assets/images/lab/mockup-phone-trampah.webp';
import mockupCard from '../../../assets/images/lab/mockup-card-trampah.webp';
import mockupBag from '../../../assets/images/lab/mockup-bag-trampah.webp';
import reflectionTrampah from '../../../assets/images/lab/trampah-reflection.webp';

function AsteriskIcon({ className = "h-5 w-5 text-green-900 mt-0.5 flex-shrink-0" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2v20M4.5 6l15 12M19.5 6l-15 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function TrampahLogoDetail() {
  const metaData = [
    { label: "CATEGORY", value: "Branding Experiment" },
    { label: "PROJECT TYPE", value: "Competition Project" },
    { label: "DATE", value: "March – April 2026" },
    { label: "TOOLS", value: "Figma" },
  ];

  const explorations = [
    "Symbolic logo design",
    "Team collaboration and design feedback",
    "Visual storytelling",
    "Brand identity exploration",
  ];

  return (
    <div className="bg-[#faf8f5] min-h-screen pt-16">
      {/* 1. HEADER SECTION */}
      <div className="text-center max-w-3xl mx-auto px-4 mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 block mb-2">
          Branding Experiment
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-neutral-950 mb-3">
          Trampah Logo
        </h1>
        <p className="text-sm text-neutral-500 max-w-md mx-auto">
          Designing a meaningful logo inspired by the app's purpose and identity.
        </p>
      </div>

      {/* 2. META DATA BAR */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
        <div className="border-t border-b border-neutral-200/80 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          {metaData.map((item, idx) => (
            <div key={idx}>
              <span className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase block mb-2">
                {item.label}
              </span>
              <span className="text-sm text-neutral-700 font-medium leading-relaxed block">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. HERO IMAGE */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-20 flex items-center justify-center">
          <img
            src={trampahLogoHero}
            alt="Trampah Logo Showcase"
            className="rounded-lg overflow-hidden  shadow-sm max-w-full max-h-auto object-contain"
          />

      </div>

      {/* 4. CONTENT BLOCK (Overview & What I Explored) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-16 mb-20">
        <section>
          <h2 className="font-serif text-4xl font-semibold text-neutral-900 mb-4">Overview</h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            The Trampah logo was created for a UI/UX competition. I designed it by combining
            the letter T with the shape of a trash bin, while the lid incorporates a leaf to
            represent environmental sustainability. Throughout the process, I refined the
            concept based on feedback from my three teammates.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-4xl font-semibold text-neutral-900 mb-6">What I Explored</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {explorations.map((text, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <AsteriskIcon />
                <span className="text-sm sm:text-base text-neutral-700 font-medium">{text}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 5. LOGO BREAKDOWN */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-20">
        <h2 className="font-serif text-4xl font-semibold text-neutral-900 mb-6">Logo Breakdown</h2>
        <div className="rounded-lg overflow-hidden shadow-sm bg-white p-6 sm:p-10">
          <img
            src={trampahLogoBreakdown}
            alt="Trampah Logo Breakdown Diagram"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* 6. BRAND PREVIEW */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-24">
        <h2 className="font-serif text-4xl font-semibold text-neutral-900 mb-6">Brand Preview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-lg overflow-hidden aspect-[4/3] bg-neutral-100">
            <img src={mockupPhone} alt="Trampah Logo on Phone Mockup" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden aspect-[4/3] bg-neutral-100">
            <img src={mockupCard} alt="Trampah Logo on Business Card Mockup" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden aspect-[4/3] bg-neutral-100">
            <img src={mockupBag} alt="Trampah Logo on Tote Bag Mockup" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* 7. REFLECTION */}
      <div className="max-w-4xl font-semibold mx-auto px-4 sm:px-6 mb-28">
            <img src={reflectionTrampah} alt="Reflection on the Trampah Logo Project" 
            className="max-w-full h-auto pl-4 md:pl-10"
            />
      </div>

      {/* 8. CALL TO ACTION */}
      <CallToAction />
    </div>
  );
}