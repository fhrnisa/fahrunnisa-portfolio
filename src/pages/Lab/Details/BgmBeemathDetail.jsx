import React from 'react';
import CallToAction from '../../../components/CallToAction';
import beemathHero from '../../../assets/images/lab/beemath-bgm-hero.webp';
import beemathPreview from '../../../assets/images/lab/beemath-bgm-preview.webp';
import reflectionBGMBeemath from '../../../assets/images/lab/beemath-bgm-reflection.webp';

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

function ArrowUpRightIcon({ className = "h-3.5 w-3.5" }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={2} 
      stroke="currentColor" 
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
  );
}

export default function BGMBeemathDetail({ onNavigate }) {
  const metaData = [
    { label: "CATEGORY", value: "Music Experiment" },
    { label: "PROJECT TYPE", value: "Academic Project" },
    { label: "DATE", value: "January – May 2025" },
    { label: "TOOLS", value: "Bandlab" },
  ];

  const explorations = [
    "Game music composition",
    "Mood and atmosphere",
    "Instrument selection",
    "Major and minor scales",
    "Music production with BandLab"
  ];

  return (
    <div className="bg-[#faf8f5] min-h-screen pt-16">
      {/* 1. HEADER SELECTION */}
      <div className="text-center max-w-3xl mx-auto px-4 mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 block mb-2">
          Music Experiment
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-neutral-950 mb-3">
          Background Music Beemath (BGM Beemath)
        </h1>
        <p className="text-sm text-neutral-500 max-w-md mx-auto">
          Composing an original game soundtrack to support a fun learning experience.
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

      {/* 3. HERO IMAGE (Main Mockup) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-20">
        <div className="rounded-lg overflow-hidden shadow-sm bg-neutral-100 aspect-[16/9]">
          <img 
            src={beemathHero}
            alt="BGM Beemath Showcase" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 4. CONTENT BLOCK (Overview & What I Explored) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-16 mb-20">
        {/* Overview */}
        <section>
          <h2 className="font-serif text-4xl font-semibold text-neutral-900 mb-4">Overview</h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Besides designing the game's assets and UI, I challenged myself to compose 
            the background music for BeeMath using BandLab. It was a goal I had since 
            the first semester, and I finally completed it in the second semester at 11th 
            grade. I studied educational game soundtracks, learned basic music concepts, 
            and adapted what I learned into an original composition.
          </p>
        </section>

        {/* What I Explored */}
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

      {/* 5. INTERFACE PREVIEW & LIVE DEMO */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-24 text-center">
        <h2 className="font-serif text-4xl font-semibold text-neutral-900 text-left max-w-3xl mx-auto mb-6">
          Interface Preview
        </h2>
        <div className="rounded-lg flex justify-center items-center mb-8 shadow-inner">
          <img 
            src={beemathPreview}
            alt="Interface Preview UI" 
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
        
        <a
          href="https://drive.google.com/file/u/0/d/1aHOYRlqpDCoBna-p-ZJRInrP8pbz-jSA/view?usp=drivesdk&pli=1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-2.5 text-xs font-medium text-neutral-800 transition-all hover:border-green-900 hover:text-green-900 active:scale-95 shadow-sm"
        >
          Listening to BGM Beemath
          <ArrowUpRightIcon />
        </a>
      </div>

      {/* 6. REFLECTION BOX */}
      <div className="max-w-4xl font-semibold mx-auto px-4 sm:px-6 mb-28">
            <img src={reflectionBGMBeemath} alt="Reflection on the BGM Beemath Project" 
            className="max-w-full h-auto pl-4 md:pl-10"
            />
      </div>

      {/* 7. CALL TO ACTION */}
      <CallToAction />
    </div>
  );
}