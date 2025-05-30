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
      title: "AI-Powered Dashboard",
      description:
        "Modern analytics dashboard with real-time data visualization",
      tech: ["React", "Node.js", "PostgreSQL"],
      image: "/placeholder.svg?height=300&width=500",
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      tech: ["Next.js", "Stripe", "MongoDB"],
      image: "/placeholder.svg?height=300&width=500",
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      id: 3,
      title: "Social Media App",
      description: "Real-time social platform with chat and media sharing",
      tech: ["React Native", "Firebase", "WebRTC"],
      image: "/placeholder.svg?height=300&width=500",
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ];

  const stats = [
    {
      label: "Projects Built",
      value: 42,
      icon: "mdi:code-braces",
    },
    { label: "GitHub Commits", value: 1337, icon: "logos:github-icon" },
    { label: "Coffee Consumed", value: 999, icon: "mdi:coffee" },
    { label: "Hours Coding", value: 5000, icon: "mdi:flash" },
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
        <SkillsSection
         />

        {/* Projects Section */}
        <ProjectsSection projects={projects} />

        {/* Stats Section */}
        <StatsSection stats={stats} />

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
