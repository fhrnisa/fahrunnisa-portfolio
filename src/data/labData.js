import trampahLogo from "../assets/images/lab/trampah-logo-hero.webp";
import cloverTask from "../assets/images/lab/clover-task-hero.webp";
import dayflowAI from "../assets/images/lab/dayflow-ai-hero.webp";
import beemathBGM from "../assets/images/lab/beemath-bgm-hero.webp";

export const labData = [
  {
    id: 1,
    title: "Clover Task (To Do App)",
    filterCategory: "Code",
    path: "/clover-task",
    description: "My first React project, from UI design to frontend implementation.",
    tags: ["UI Design", "Frontend", "React"],
    image: cloverTask
  },
  {
    id: 2,
    title: "DayFlow AI (Gemini API)",
    filterCategory: "Code",
    path: "/dayflow-ai",
    description: "Building an AI-powered scheduling assistant using the Gemini API.",
    tags: ["Gemini API", "Chatbot", "JavaScript"],
    image: dayflowAI
    },
    {
      id: 3,
      title: "BeeMath BGM",
      filterCategory: "Visual & Exploration",
      path: "/beemath-bgm",
      description: "Composing an original game soundtrack to support a fun learning experience.",
      tags: ["Game Audio", "Music Composition"],
      image: beemathBGM
    },
    {
      id: 4,
      title: "Trampah Logo",
      filterCategory: "Visual & Exploration",
      path: "/trampah-logo",
      description: "Designing a meaningful logo inspired by the app's purpose and identity.",
      tags: ["Branding", "Logo Design"],
      image: trampahLogo
    }
];