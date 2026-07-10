import trampahImage from "../assets/images/works/trampah-mockup.webp";
import beemathImage from "../assets/images/works/beemath-mockup.webp";
import printServiceImage from "../assets/images/works/print-stationary-mockup.webp";
import facilitiesReportImage from "../assets/images/works/facilities-report-mockup.webp";

export const worksData = [
  {
    id: "trampah",
    featured: true, 
    filterCategory: "UI/UX",
    category: "UI/UX DESIGN",
    title: "Trampah",
    path: "/trampah",
    description: "A smart waste management app for scanning, sorting, and educating Semarang residents to reduce waste accumulation.",
    role: "UI & Visual Asset Designer",
    image: trampahImage,
    imageAlt: "Trampah waste management app shown on a smartphone",
  },
  {
    id: "beemath",
    featured: true,
    filterCategory: "UI/UX",
    category: "MOBILE APP",
    title: "BeeMath",
    path: "/beemath",
    description: "A math crossword application for children aged 8–12 that help improve counting skills, critical thinking, and problem solving in a fun way.",
    role: "UI & Game Asset Designer",
    image: beemathImage,
    imageAlt: "BeeMath math game shown on a smartphone held in hands",
  },
  {
    id: "print-service-stationery",
    featured: true,
    filterCategory: "Development",
    category: "E-COMMERCE WEBSITE",
    title: "Print Service & Stationery",
    path: "/print-service-stationery",
    description: "An e-commerce website for print services, stationery sales, and sales management.",
    role: "Fullstack Developer",
    image: printServiceImage,
    imageAlt: "Print service e-commerce website shown on a laptop",
  },
  {
    id: "facilities-improvement-report",
    featured: false,
    filterCategory: "Development",
    category: "WEB DEVELOPMENT",
    title: "Facilities Improvement Report",
    path: "/facilities-improvement-report",
    description: "Web-based platform for reporting campus facility issues and tracking maintenance requests.",
    role: "UI/UX Designer, Frontend Developer",
    image: facilitiesReportImage,
    imageAlt: "Facilities improvement report website shown on a desktop computer",
  }
];