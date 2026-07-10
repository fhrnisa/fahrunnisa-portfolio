import { Palette, Layers, ClipboardCheck, Check, ArrowUpRight, Quote, } from 'lucide-react';
import beemathMockup from "../../../assets/images/works/beemath-mockup.webp";
import beemathFinal from "../../../assets/images/works/beemath-final-design.webp";

const META = [
  { label: "Project Type", value: "Academic Project" },
  { label: "Year", value: "2024-2025" },
  { label: "Role", value: "UI & Game Asset Designer" },
  { label: "Duration", value: "± 10 Months" },
]

const CONTRIBUTIONS = [
  {
    no: "01",
    title: "UI Design",
    body: 'Designed the user interface end-to-end, from wireframes to high-fidelity prototypes in Figma.',
  },
  {
    no: "02",
    title: "Game Asset Design",
    body: "Created the “Bima” mascot, illustrations, icons, and gameplay visual assets to support the overall game experience.",
  },
  {
    no: "◆",
    title: "Additional Contributions",
    body: "Composed original background music in BandLab as an additional contribution beyond the main design role. <a href='#' target='_blank' rel='noopener noreferrer' className='font-medium text-green-800 underline decoration-green-800/40 underline-offset-4 transition-colors hover:text-green-900 hover:decoration-green-900'>Explore music process here.</a>",
  },
]

const SOLUTIONS = [
  {
    icon: Palette,
    title: "Visual Concept Development",
    body: "The team developed a bee-themed visual concept, and the mascot Bima was designed to guide children throughout the gameplay experience.",
  },
  {
    icon: Layers,
    title: "UI & Asset Production",
    body: "The interface was designed from low-fidelity wireframes to high-fidelity prototypes, supported by illustrations, icons, and gameplay assets for a consistent game identity.",
  },
  {
    icon: ClipboardCheck,
    title: "User Testing & Redesign",
    body: "User testing was conducted with 5 fifth-grade students and 2 elementary school teachers. Based on the feedback, the interface was refined to be brighter and more suitable for the target age group, and the gameplay visuals were improved.",
  },
]

const OUTCOMES = [
  "Completed an end-to-end Android educational game application over 2 semesters with a team of 9 people.",
  "Redesigned visuals in semester 2 based on user testing with 7 respondents.",
  "Created original background music in BandLab as a personal additional achievement.",
]

export default function BeemathCaseStudy() {
  return (
    <main className="min-h-screen bg-[#faf8f5] font-sans text-[#1a1a1a]">
      {/* Header */}
      <header className="mx-auto max-w-5xl px-6 pt-16 md:pt-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#666666]">
              Case Study
            </p>
            <h1 className="mt-3 font-serif text-5xl leading-none tracking-tight md:text-6xl">
              Beemath
            </h1>
            <p className="mt-5 max-w-md text-sm md:text-base lg:text-lg leading-relaxed text-[#666666]">
              A math crossword application for children aged 8-12 
              that help improve counting skills, critical thinking, 
              and problem solving in a fun way.
            </p>
          </div>

          {/* Meta grid */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-7 self-center">
            {META.map((m) => (
              <div key={m.label}>
                <p className="text-sm md:text-base font-medium uppercase tracking-[0.14em] text-[#999999]">
                  {m.label}
                </p>
                <p className="mt-1.5 text-sm md:text-base lg:text-lg leading-snug text-[#1a1a1a]">
                  {m.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Hero mockup */}
      <section className="mx-auto mt-12 mb-12 md:mb-20 max-w-5xl px-6">
        <div className="aspect-[16/9] w-full overflow-hidden rounded-md md:rounded-lg bg-neutral-100 shadow-lg shadow-black/5">
          <img
            src= {beemathMockup}
            alt="Trampah mobile app shown on a phone resting on a warm travertine surface"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Project Overview */}
      <section className="border-y border-[#eceae4] bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.4fr] md:gap-12">
            <h2 className="font-serif font-medium text-3xl md:text-4xl">Project Overview</h2>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
              <div>
                <p className="text-sm md:text-base lg:text-lg font-medium uppercase tracking-[0.14em] text-[#999999]">
                  The Challenge
                </p>
                <p className="mt-3 text-sm md:text-base lg:text-lg leading-relaxed text-[#666666]">
                  BeeMath was created to respond to several challenges 
                  identified by the team: mathematics is often perceived 
                  as boring, Indonesian students experienced a decline in 
                  mathematics performance in 2022, and many online games 
                  for children offer limited educational value.
                </p>
              </div>
              <div>
                <p className="text-sm md:text-base lg:text-lg font-medium uppercase tracking-[0.14em] text-[#999999]">
                  The Goal
                </p>
                <p className="mt-3 text-sm md:text-base lg:text-lg leading-relaxed text-[#666666]">
                  Design an engaging Mobile learning game that helps 
                  children aged 8–12 practice mathematics through 
                  crossword puzzles in a way that feels both educational and fun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Contribution */}
      <section className="bg-[#f2f0ea]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <h2 className="font-serif font-medium text-3xl md:text-4xl">My Contribution</h2>
            <div>
              {CONTRIBUTIONS.map((c, i) => (
                <div
                  key={c.no}
                  className={`grid grid-cols-[auto_1fr] gap-5 py-7 ${
                    i !== 0 ? "border-t border-[#dcd8cf]" : ""
                  }`}
                >
                  <span className="font-serif text-2xl text-[#344f2C]/60 md:text-3xl lg:text-4xl">
                    {c.no}
                  </span>
                  <div>
                    <h3 className="font-medium text-xl">{c.title}</h3>
                    <p className="mt-2 text-sm md:text-base lg:text-lg leading-relaxed text-[#666666]">
                      {c.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Highlight */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <h2 className="text-center font-serif font-medium text-3xl md:text-4xl">
          Process Highlight
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SOLUTIONS.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="group rounded-2xl border border-[#e6e2da] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f2f0ea] transition-colors group-hover:bg-green-900">
                <Icon
                  className="h-5 w-5 text-green-900 transition-colors group-hover:text-white"
                  strokeWidth={2}
                />
              </div>
              <h3 className="mt-6 font-medium text-xl md:text-2xl leading-snug">{title}</h3>
              <p className="mt-3 text-sm md:text-base lg:text-lg leading-relaxed text-[#666666]">
                {body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Final Interface Design */}
      <section className="bg-[#f2f0ea]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <h2 className="font-serif font-medium text-3xl md:text-4xl">
            Final Interface Design
          </h2>
          <p className="mt-3 text-sm md:text-lg text-[#666666]">
            High-Fidelity Wireframes designed in Figma.{" "}
            <a
              href="https://www.figma.com/proto/R8fm2xjv2XoBk8m18BGuNo/BeeMath?node-id=2822-9398&t=8l46Y0qxZ0ADoUfk-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2822%3A9398"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-green-800 underline decoration-green-800/40 underline-offset-4 transition-colors hover:text-green-900 hover:decoration-green-900"
            >
              View prototype here.
            </a>
          </p>
          <div className="mt-8 overflow-hidden rounded-md md:rounded-lg bg-[#dce8d5] shadow-lg shadow-green-900/5">
            <img
              src={beemathFinal}
              alt="Grid of high-fidelity Trampah app screens including onboarding, dashboard, community, rewards, and map"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Outcomes & Reflection */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-serif font-medium text-3xl md:text-4xl">Outcomes</h2>
            <ul className="mt-8 space-y-5">
              {OUTCOMES.map((o) => (
                <li key={o} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-green-800/40">
                    <Check className="h-3 w-3 text-green-800" strokeWidth={2.5} />
                  </span>
                  <p className="text-sm md:text-lg leading-relaxed text-[#666666]">
                    {o}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif font-medium text-3xl md:text-4xl">Reflection</h2>
            <div className="relative mt-8">
              <Quote className="absolute -left-1 -top-2 h-6 w-6 text-green-900/20" />
              <p className="pl-6 text-sm md:text-lg italic leading-relaxed text-[#666666]">
                &ldquo;This project taught me the importance of communication in a 
                large team and how essential it is to discuss challenges openly and 
                solve problems together. Working with 9 team members also helped me 
                learn how to coordinate tasks, share feedback constructively, and 
                stay aligned on a shared project vision despite different roles 
                and skill sets.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
