import { Trophy, ScanLine, Share2, Gift, Check, ArrowUpRight, Quote, } from "lucide-react";
import printStationaryMockup from "../../../assets/images/works/print-stationary-mockup.webp";

const META = [
  { label: "Project Type", value: "Vocational Competency Project" },
  { label: "Year", value: "2025" },
  { label: "Role", value: "Solo Full-Stack Developer (End-to-End)" },
  { label: "Duration", value: "± 5 Months" },
]

const CONTRIBUTIONS = [
  {
    no: "01",
    title: "User Research & Analysis",
    body: 'Conducted direct interviews with the business owner, analyzed systemic bottlenecks, and mapped out the entire user journey and system workflow.',
  },
  {
    no: "02",
    title: "Database & Architecture Design",
    body: "Designed the database schema (MySQL) and system architecture to handle complex relations between products, printing specifications, and order statuses.",
  },
  {
    no: "03",
    title: "UI/UX Design & Development",
    body: "Crafted high-fidelity wireframes in Figma and fully implemented both the frontend interface and backend logic using the Laravel framework.",
  },
]

const SOLUTIONS = [
  {
    icon: ScanLine,
    title: "Smart Document Upload",
    body: "Allows customers to seamlessly upload files, customize print configurations (paper type, color/black-and-white, layout), and minimize file-handling errors.",
  },
  {
    icon: Share2,
    title: "Stationery Catalog & Checkout",
    body: "A structured, real-time catalog featuring current stationery stock with an integrated, intuitive shopping cart and checkout pipeline.",
  },
  {
    icon: Gift,
    title: "Centralized Admin Dashboard",
    body: "Replaces manual paperwork with a digital ledger for the owner to monitor order queues, track payment statuses, and organize inventory efficiently.",
  },
]

const OUTCOMES = [
  "Successfully integrated Laravel with a robust MySQL database architecture.",
  "Pitch-ready product; successfully presented the complete system architecture and application workflow to the internal assessor team.",
]

export default function PrintServiceStationaryCaseStudy({ onNavigate = () => {} }) {
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
              Print Service Stationary
            </h1>
            <p className="mt-5 max-w-md text-sm md:text-base leading-relaxed text-[#666666]">
              A web-based e-commerce and printing service platform 
              designed to digitalize order management, minimize 
              transaction errors, and expand business reach for 
              local vocational competency assessment.
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
            src= {printStationaryMockup}
            alt="Print Service Stationary mobile app shown on a phone resting on a warm travertine surface"
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
                  The current manual system heavily relies on WhatsApp and memory, 
                  leading to critical issues: long customer queues, mixed-up files, 
                  and forgotten orders due to buried chat notifications. Marketing 
                  relies purely on word-of-mouth, limiting business growth. Furthermore, 
                  paper-based tracking poses a high risk of data loss, and repetitive 
                  orders from regular customers create unnecessary friction in daily operations.
                </p>
              </div>
              <div>
                <p className="text-sm md:text-base lg:text-lg font-medium uppercase tracking-[0.14em] text-[#999999]">
                  The Goal
                </p>
                <p className="mt-3 text-sm md:text-base lg:text-lg leading-relaxed text-[#666666]">
                  To digitalize the print-on-demand workflow and stationery 
                  retail process into a centralized web platform, ensuring 
                  faster order processing, precise data tracking, and a scalable 
                  system to handle concurrent high-volume orders.
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
