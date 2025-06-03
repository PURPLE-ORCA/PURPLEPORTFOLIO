import { useState } from "react";

import AnimatedBackground from "./Home/components/AnimatedBackground";
import HeroSection from "./Home/components/HeroSection";
import AboutSection from "./Home/components/AboutSection";
import SkillsSection from "./Home/components/SkillsSection";
import ProjectsSection from "./Home/components/ProjectsSection";
import StatsSection from "./Home/components/StatsSection";
import ContactSection from "./Home/components/ContactSection";
import EasterEgg from "./Home/components/EasterEgg";
import Footer from "./Home/components/Footer";

export default function Home() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  // const skills = {
  //   Frontend: [
  //     { name: "React", icon: "logos:react" },
  //     { name: "Javascript", icon: "material-icon-theme:javascript" },
  //     { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  //     { name: "Framer Motion", icon: "tabler:brand-framer-motion" },
  //   ],
  //   Backend: [
  //     { name: "Node.js", icon: "logos:nodejs-icon" },
  //     { name: "Node.js", icon: "logos:nodejs-icon" },
  //     { name: "Python", icon: "logos:python" },
  //     { name: "PostgreSQL", icon: "logos:postgresql" },
  //     { name: "Express", icon: "logos:express" },
  //     { name: "FastAPI", icon: "logos:fastapi-icon" },
  //   ],
  //   Tools: [
  //     { name: "Git", icon: "logos:git-icon" },
  //     { name: "Docker", icon: "logos:docker-icon" },
  //     { name: "AWS", icon: "logos:aws" },
  //     { name: "Vercel", icon: "logos:vercel-icon" },
  //     { name: "Figma", icon: "logos:figma" },
  //     { name: "VS Code", icon: "logos:visual-studio-code" },
  //     { name: "Webpack", icon: "logos:webpack" },
  //   ],
  // };

  const projects = [
    {
      id: 1,
      title: "PURPLE SECTOR",
      description:
        "An app to Cut through the F1 scheduling. Deliver clear, accurate race weekend timings (especially for GMT+1 sufferers), standings, and essential info without the user needing a degree in astrophysics and a world clock. ",
      tech: ["React", "Node.js", "Express"],
      image: "images/projectsimg/purplesector.png",
      github: "https://github.com/PURPLE-ORCA/PURPLESECTOR.git",
    },
    {
      id: 2,
      title: "PROFS2EXAMS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tech: ["Laravel", "React", "postgreSQL"],
      // image: "images/projectsimg/profs2exams.png",
      github: "https://github.com/PURPLE-ORCA/PROFS2EXAMS.git",
    },
    {
      id: 3,
      title: "WEMILIA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tech: ["Laravel", "React", "postgreSQL"],
      // image: "images/projectsimg/wemilia.png",
      github: "https://github.com/PURPLE-ORCA/WEMILIA.git",
    },
    {
      id: 4,
      title: "FSJESCTRL",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tech: ["Laravel", "React", "postgreSQL"],
      // image: "images/projectsimg/fsjesctrl.png",
      github: "https://github.com/PURPLE-ORCA/FSJESCTRL.git",
    },
  ];



  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Content */}
      <div className="relative z-10 text-white">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <ProjectsSection projects={projects} />

        {/* Stats Section */}
        <StatsSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Easter Egg */}
        <EasterEgg showEasterEgg={showEasterEgg} setShowEasterEgg={setShowEasterEgg} />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
