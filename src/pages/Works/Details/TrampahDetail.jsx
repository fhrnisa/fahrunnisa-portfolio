import { Trophy, ScanLine, Share2, Gift, Check, ArrowUpRight, Quote, } from "lucide-react";
import trampahMockup from "../../../assets/images/works/trampah-mockup.webp";
import trampahFinal from "../../../assets/images/works/trampah-final-design.webp";

const META = [
  { label: "Project Type", value: "Competition Project" },
  { label: "Year", value: "2024" },
  { label: "Role", value: "UI & Visual Asset Designer" },
  { label: "Duration", value: "± 3 Months" },
]

const CONTRIBUTIONS = [
  {
    no: "01",
    title: "Brand Identity",
    body: 'Crafted the name "Trampah" (a bilingual fusion: trash + sampah), designed the logo with a hidden letter T and a dual-leaf motif.',
  },
  {
    no: "02",
    title: "UI Design",
    body: "Crafted the entire user journey from initial wireframes to high-fidelity interactive prototypes with a focus on accessibility.",
  },
  {
    no: "03",
    title: "Visual Assets",
    body: "Created visual assets supporting the app and competition presentation.",
  },
]

const SOLUTIONS = [
  {
    icon: ScanLine,
    title: "Guided Waste Scanning",
    body: "Using AI to identify waste categories instantly and provide specific disposal instructions for the user.",
  },
  {
    icon: Share2,
    title: "Connected Ecosystem",
    body: "Bridging the gap between residents, local waste collectors, and official waste banks for efficient pick-ups.",
  },
  {
    icon: Gift,
    title: "Education & Rewards",
    body: "Gamifying the sorting process with points that can be redeemed for local utility payments or shopping vouchers.",
  },
]

const OUTCOMES = [
  "1st Place Winner — National UI/UX Design Competition Genetic 2024 with SnapanDeh Team.",
  "Interactive Prototype — Full end-to-end user journey with high-fidelity interactions.",
  "Brand Identity — Full visual guidelines including iconography and color theory.",
]

export default function TrampahCaseStudy({ onNavigate = () => {} }) {
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
              Trampah
            </h1>
            <p className="mt-5 max-w-md text-sm md:text-base leading-relaxed text-[#666666]">
              Smart waste management application with waste scanning, sorting,
              and public education features designed to help reduce waste
              accumulation in Semarang City.
            </p>
          </div>

          {/* Meta grid */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-7 self-center">
            {META.map((m) => (
              <div key={m.label}>
                <p className="text-sm md:text-base font-medium uppercase tracking-[0.14em] text-[#999999]">
                  {m.label}
                </p>
                <p className="mt-1.5 text-sm md:text-base leading-snug text-[#1a1a1a]">
                  {m.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Award badge */}
        <div className="mt-8 inline-flex items-center gap-2 rounded-lg border border-[#e6e2da] bg-white px-4 py-2.5">
          <Trophy className="h-4 w-4 text-green-900" strokeWidth={2} />
          <span className="text-sm text-[#1a1a1a]">
            1st Place — National UI/UX Competition GENETIC 2024
          </span>
        </div>
      </header>

      {/* Hero mockup */}
      <section className="mx-auto mt-12 mb-12 md:mb-20 max-w-5xl px-6">
        <div className="aspect-[16/9] w-full overflow-hidden rounded-lg bg-neutral-100 shadow-lg shadow-black/5">
          <img
            src= {trampahMockup}
            alt="Trampah mobile app shown on a phone resting on a warm travertine surface"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Project Overview */}
      <section className="border-y border-[#eceae4] bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <h2 className="font-serif font-medium text-3xl md:text-4xl">Project Overview</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <p className="text-sm md:text-base lg:text-lg font-medium uppercase tracking-[0.14em] text-[#999999]">
                  The Challenge
                </p>
                <p className="mt-3 text-sm md:text-base lg:text-lg leading-relaxed text-[#666666]">
                  Semarang City faces an increasing waste volume with low
                  resident awareness and limited coordination between waste
                  banks and collectors. Traditional sorting methods are often
                  viewed as tedious and confusing.
                </p>
              </div>
              <div>
                <p className="text-sm md:text-base lg:text-lg font-medium uppercase tracking-[0.14em] text-[#999999]">
                  The Goal
                </p>
                <p className="mt-3 text-sm md:text-base lg:text-lg leading-relaxed text-[#666666]">
                  Create a digital experience that simplifies waste sorting
                  through AI, connects the entire ecosystem for seamless
                  collection, and incentivizes community participation through a
                  reward system.
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

      {/* Key Solutions */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <h2 className="text-center font-serif font-medium text-3xl md:text-4xl">
          Key Solutions
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
              href="https://www.figma.com/proto/l15QutAVzYpitiXOsbl1k2/Trampah?node-id=254-980&t=0lfg7JDUc35fJtJR-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=254%3A980&show-proto-sidebar=1"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-green-800 underline decoration-green-800/40 underline-offset-4 transition-colors hover:text-green-900 hover:decoration-green-900"
            >
              View prototype here.
            </a>
          </p>
          <div className="mt-8 overflow-hidden rounded-lg bg-[#dce8d5] shadow-lg shadow-green-900/5">
            <img
              src={trampahFinal}
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
                &ldquo;Designing Trampah taught me that the most complex
                societal issues, like waste management, often require the
                simplest digital interventions. By focusing on reducing friction
                in the sorting process and humanizing the waste collection
                ecosystem, we were able to present a concept that resonated
                deeply with the jury. This project reinforced my belief that
                design is not just about aesthetics, but about facilitating
                positive behavioral shifts within a community.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
