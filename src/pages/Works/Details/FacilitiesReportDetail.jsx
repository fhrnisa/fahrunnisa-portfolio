import { FileText, Activity, Check, ArrowUpRight, Quote, } from "lucide-react";
import facilitiesReportMockup from "../../../assets/images/works/facilities-report-mockup.webp";

const META = [
  { label: "Project Type", value: "Internship Project" },
  { label: "Year", value: "2026" },
  { label: "Role", value: "UI/UX & Frontend Developer (Team of 2)" },
  { label: "Duration", value: "± 3 Months" },
]

const CONTRIBUTIONS = [
  {
    no: "01",
    title: "UI/UX Design",
    body: "Designed the user interface and experience from scratch, focusing on creating an intuitive, accessible reporting form for users and a clean, data-driven dashboard layout for administrators.",
  },
  {
    no: "02",
    title: "Frontend Development",
    body: "Handled 90% of the frontend implementation, translating high-fidelity designs into clean, responsive web layouts and code structures.",
  },
  {
    no: "03",
    title: "API Integration",
    body: "Collaborated closely with the backend developer to integrate the frontend user interfaces with Laravel-based REST APIs for seamless data flow.",
  },
]

const SOLUTIONS = [
  {
    icon: FileText,
    title: "Streamlined Report Form",
    body: "An intuitive form that allows faculty members to report facility issues quickly, ensuring all necessary data is accurately captured for the maintenance team.",
  },
  {
    icon: Activity,
    title: "Dynamic Progress Tracking Dashboard",
    body: "A centralized control panel where administrators can monitor incoming reports and update statuses dynamically (e.g., from Pending to In Progress, Rejected, or Completed).",
  },
]

const OUTCOMES = [
  "Delivered a 90% design-to-code precision on the frontend interface.",
  "Successfully established a bridge between frontend and backend architectures via seamless API integration in a collaborative team environment.",
]

export default function FacilitiesReportDetail() {
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
              Facilities Improvement Report System
            </h1>
            <p className="mt-5 max-w-md text-sm md:text-base leading-relaxed text-[#666666]">
              A web-based ticketing system designed as a solution to streamline facility damage reporting
               and maintenance tracking for the Faculty of Engineering at Universitas Negeri Semarang.
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

      </header>

      {/* Hero mockup */}
      <section className="mx-auto mt-12 mb-12 md:mb-20 max-w-5xl px-6">
        <div className="aspect-[16/9] w-full overflow-hidden rounded-lg bg-neutral-100 shadow-lg shadow-black/5">
          <img
            src= {facilitiesReportMockup}
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
                  Managing campus facility maintenance across a large faculty often leads 
                  to delayed responses due to fragmented or unrecorded damage reports. The 
                  internal operations required a system where campus members could easily 
                  report faulty facilities, and administrators could efficiently track, 
                  prioritize, and resolve these issues without losing data or oversight.
                </p>
              </div>
              <div>
                <p className="text-sm md:text-base lg:text-lg font-medium uppercase tracking-[0.14em] text-[#999999]">
                  The Goal
                </p>
                <p className="mt-3 text-sm md:text-base lg:text-lg leading-relaxed text-[#666666]">
                  To design and build a structured, transparent facility reporting system that 
                  bridge the gap between campus reporters and the maintenance admin team, 
                  ensuring every issue is tracked from submission to completion.
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
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
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

      {/* Current State & Code Repository */}
      <section className="bg-[#f2f0ea] border-y border-[#eceae4]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <h2 className="font-serif font-medium text-3xl md:text-4xl">
                Current State
              </h2>
              <p className="mt-4 text-sm md:text-base lg:text-lg leading-relaxed text-[#666666]">
                The core reporting system is fully functional. Users can submit complaints via the API, and administrators can dynamically manage report statuses. The team is currently refining the granular Role-Based Access Control (RBAC) to fully separate Super Admin, Standard Admin, and Viewer permissions.
              </p>
            </div>
            <div className="flex md:justify-end">
              <a
                href="https://github.com/fhrnisa/laporan-sarpras-ft"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-green-900 px-6 py-3.5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-green-950 hover:shadow-md"
              >
                Explore GitHub Repository
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
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
                &ldquo;Working on this internship project gave me invaluable experience 
                in real-world team collaboration and the API-first development workflow. 
                Building the interface and connecting it to a Laravel API taught me how 
                to handle dynamic states and data changes on the frontend. Encountering 
                the complexities of multi-level role authorization (RBAC) was an 
                eye-opener—it taught me that building robust software requires careful 
                architectural planning around user permissions and security.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}