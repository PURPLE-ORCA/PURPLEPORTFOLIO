"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { Card } from "../../../components/ui/card";

export default function EnhancedSkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const containerRef = useRef(null);

  const skillsData = [
    // Frontend Core
    {
      id: "html",
      name: "HTML5",
      icon: "logos:html-5",
      category: "frontend",
      level: "expert",
      x: 20,
      y: 15,
      connections: ["css", "javascript"],
      color: "rgb(227, 79, 38)",
      description: "Semantic markup & web standards",
      yearsOfExperience: 5,
    },
    {
      id: "css",
      name: "CSS3",
      icon: "logos:css-3",
      category: "frontend",
      level: "expert",
      x: 35,
      y: 25,
      connections: ["html", "sass", "tailwind", "bootstrap"],
      color: "rgb(21, 114, 182)",
      description: "Advanced styling & responsive design",
      yearsOfExperience: 5,
    },
    {
      id: "sass",
      name: "SASS",
      icon: "logos:sass",
      category: "frontend",
      level: "advanced",
      x: 50,
      y: 15,
      connections: ["css"],
      color: "rgb(207, 100, 154)",
      description: "CSS preprocessor with superpowers",
      yearsOfExperience: 3,
    },
    {
      id: "javascript",
      name: "JavaScript",
      icon: "logos:javascript",
      category: "frontend",
      level: "expert",
      x: 30,
      y: 40,
      connections: ["html", "react", "node", "npm"],
      color: "rgb(247, 223, 30)",
      description: "Modern ES6+ programming",
      yearsOfExperience: 4,
    },
    {
      id: "react",
      name: "React.js",
      icon: "logos:react",
      category: "frontend",
      level: "advanced",
      x: 45,
      y: 50,
      connections: ["javascript", "inertia", "tailwind"],
      color: "rgb(97, 218, 251)",
      description: "Component-based UI library",
      yearsOfExperience: 3,
    },
    {
      id: "inertia",
      name: "Inertia.js",
      icon: "simple-icons:inertia",
      category: "frontend",
      level: "advanced",
      x: 60,
      y: 40,
      connections: ["react", "laravel"],
      color: "rgb(159, 90, 253)",
      description: "Modern monolith SPA adapter",
      yearsOfExperience: 2,
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      icon: "logos:tailwindcss-icon",
      category: "frontend",
      level: "expert",
      x: 65,
      y: 25,
      connections: ["css", "react", "laravel"],
      color: "rgb(56, 178, 172)",
      description: "Utility-first CSS framework",
      yearsOfExperience: 3,
    },
    {
      id: "bootstrap",
      name: "Bootstrap",
      icon: "logos:bootstrap",
      category: "frontend",
      level: "advanced",
      x: 80,
      y: 20,
      connections: ["css"],
      color: "rgb(86, 61, 124)",
      description: "Popular CSS framework",
      yearsOfExperience: 4,
    },

    // Backend & Languages
    {
      id: "php",
      name: "PHP",
      icon: "logos:php",
      category: "backend",
      level: "expert",
      x: 75,
      y: 60,
      connections: ["laravel", "composer"],
      color: "rgb(119, 123, 180)",
      description: "Server-side scripting language",
      yearsOfExperience: 4,
    },
    {
      id: "laravel",
      name: "Laravel",
      icon: "logos:laravel",
      category: "backend",
      level: "expert",
      x: 55,
      y: 70,
      connections: [
        "php",
        "inertia",
        "tailwind",
        "postgresql",
        "composer",
        "api",
      ],
      color: "rgb(255, 45, 32)",
      description: "Elegant PHP web framework",
      yearsOfExperience: 3,
    },
    {
      id: "python",
      name: "Python",
      icon: "logos:python",
      category: "backend",
      level: "intermediate",
      x: 85,
      y: 45,
      connections: [],
      color: "rgb(55, 118, 171)",
      description: "Versatile programming language",
      yearsOfExperience: 2,
    },
    {
      id: "node",
      name: "Node.js",
      icon: "logos:nodejs-icon",
      category: "backend",
      level: "intermediate",
      x: 15,
      y: 55,
      connections: ["javascript", "npm"],
      color: "rgb(104, 160, 99)",
      description: "JavaScript runtime environment",
      yearsOfExperience: 2,
    },

    // Database & Backend Services
    {
      id: "sql",
      name: "SQL",
      icon: "vscode-icons:file-type-sql",
      category: "database",
      level: "advanced",
      x: 40,
      y: 85,
      connections: ["postgresql"],
      color: "rgb(0, 96, 156)",
      description: "Database query language",
      yearsOfExperience: 3,
    },
    {
      id: "postgresql",
      name: "PostgreSQL",
      icon: "logos:postgresql",
      category: "database",
      level: "advanced",
      x: 25,
      y: 75,
      connections: ["sql", "laravel", "supabase"],
      color: "rgb(50, 103, 145)",
      description: "Advanced relational database",
      yearsOfExperience: 3,
    },
    {
      id: "supabase",
      name: "Supabase",
      icon: "logos:supabase-icon",
      category: "database",
      level: "intermediate",
      x: 10,
      y: 70,
      connections: ["postgresql", "api"],
      color: "rgb(62, 207, 142)",
      description: "Open source Firebase alternative",
      yearsOfExperience: 1,
    },
    {
      id: "api",
      name: "REST API",
      icon: "material-symbols:api",
      category: "backend",
      level: "advanced",
      x: 70,
      y: 80,
      connections: ["laravel", "supabase"],
      color: "rgb(255, 193, 7)",
      description: "RESTful web services",
      yearsOfExperience: 3,
    },

    // Tools & Development
    {
      id: "git",
      name: "Git",
      icon: "logos:git-icon",
      category: "tools",
      level: "expert",
      x: 15,
      y: 30,
      connections: ["github"],
      color: "rgb(240, 80, 50)",
      description: "Version control system",
      yearsOfExperience: 4,
    },
    {
      id: "github",
      name: "GitHub",
      icon: "logos:github-icon",
      category: "tools",
      level: "expert",
      x: 5,
      y: 40,
      connections: ["git"],
      color: "rgb(36, 41, 46)",
      description: "Code hosting & collaboration",
      yearsOfExperience: 4,
    },
    {
      id: "vscode",
      name: "VS Code",
      icon: "logos:visual-studio-code",
      category: "tools",
      level: "expert",
      x: 10,
      y: 15,
      connections: [],
      color: "rgb(0, 122, 204)",
      description: "Code editor and IDE",
      yearsOfExperience: 5,
    },
    {
      id: "composer",
      name: "Composer",
      icon: "logos:composer",
      category: "tools",
      level: "advanced",
      x: 90,
      y: 65,
      connections: ["php", "laravel"],
      color: "rgb(136, 93, 61)",
      description: "PHP dependency manager",
      yearsOfExperience: 3,
    },
    {
      id: "npm",
      name: "NPM",
      icon: "logos:npm-icon",
      category: "tools",
      level: "advanced",
      x: 15,
      y: 85,
      connections: ["javascript", "node"],
      color: "rgb(203, 56, 55)",
      description: "Node package manager",
      yearsOfExperience: 3,
    },
    {
      id: "figma",
      name: "Figma",
      icon: "logos:figma",
      category: "design",
      level: "intermediate",
      x: 90,
      y: 30,
      connections: [],
      color: "rgb(162, 89, 255)",
      description: "Collaborative design tool",
      yearsOfExperience: 2,
    },
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case "expert":
        return "from-emerald-400 via-green-500 to-emerald-600";
      case "advanced":
        return "from-blue-400 via-cyan-500 to-blue-600";
      case "intermediate":
        return "from-orange-400 via-amber-500 to-orange-600";
      default:
        return "from-gray-400 via-gray-500 to-gray-600";
    }
  };

  const getLevelSize = (level) => {
    switch (level) {
      case "expert":
        return "w-24 h-24";
      case "advanced":
        return "w-20 h-20";
      case "intermediate":
        return "w-16 h-16";
      default:
        return "w-14 h-14";
    }
  };

  const getConnectedSkills = (skillId) => {
    const skill = skillsData.find((s) => s.id === skillId);
    return skill ? skill.connections : [];
  };

  const isSkillHighlighted = (skillId) => {
    if (!hoveredSkill) return true;
    if (skillId === hoveredSkill) return true;
    return getConnectedSkills(hoveredSkill).includes(skillId);
  };

  return (
    <section className="py-24 px-4 bg-black/20 backdrop-blur-sm relative overflow-hidden min-h-screen">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15)_0%,transparent_50%)] animate-pulse" />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,45,32,0.1)_0%,transparent_50%)] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,178,172,0.08)_0%,transparent_50%)] animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-block"
          >
            <h2 className="text-7xl md:text-7xl font-black bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent relative font-mono">
              My Tech Universe
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            </h2>
          </motion.div>
        </motion.div>

        {/* Enhanced Skills Constellation */}
        <Card className="relative h-[700px] mb-16 bg-slate-900/30 border-slate-700/50 backdrop-blur-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 to-transparent" />

          <div ref={containerRef} className="relative w-full h-full">
            {/* Enhanced Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient
                  id="connectionGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="rgba(100, 116, 139, 0.6)" />
                  <stop offset="50%" stopColor="rgba(56, 178, 172, 0.4)" />
                  <stop offset="100%" stopColor="rgba(100, 116, 139, 0.6)" />
                </linearGradient>
              </defs>

              {skillsData.map((skill) =>
                skill.connections
                  .filter((connectionId) =>
                    skillsData.some((s) => s.id === connectionId)
                  )
                  .map((connectionId) => {
                    const connectedSkill = skillsData.find(
                      (s) => s.id === connectionId
                    );
                    if (!connectedSkill) return null;

                    const isHighlighted =
                      isSkillHighlighted(skill.id) &&
                      isSkillHighlighted(connectionId);

                    return (
                      <motion.line
                        key={`${skill.id}-${connectionId}`}
                        x1={`${skill.x}%`}
                        y1={`${skill.y}%`}
                        x2={`${connectedSkill.x}%`}
                        y2={`${connectedSkill.y}%`}
                        stroke={
                          isHighlighted
                            ? "url(#connectionGradient)"
                            : "rgba(100, 116, 139, 0.2)"
                        }
                        strokeWidth={isHighlighted ? 2 : 1}
                        className="transition-all duration-500"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                          pathLength: 1,
                          opacity: isHighlighted ? 1 : 0.3,
                        }}
                        transition={{ duration: 2, delay: 0.5 }}
                      />
                    );
                  })
              )}
            </svg>

            {/* Enhanced Skill Nodes */}
            <AnimatePresence>
              {skillsData.map((skill, index) => {
                const isHighlighted = isSkillHighlighted(skill.id);

                return (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: isHighlighted ? 1 : 0.4,
                      scale: isHighlighted ? 1 : 0.8,
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="absolute cursor-pointer group"
                    style={{
                      left: `${skill.x}%`,
                      top: `${skill.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    onMouseEnter={() => setHoveredSkill(skill.id)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Enhanced Glow Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full blur-xl transition-all duration-500"
                      style={{ backgroundColor: skill.color }}
                      animate={{
                        opacity: hoveredSkill === skill.id ? 0.6 : 0,
                        scale: hoveredSkill === skill.id ? 1.5 : 1,
                      }}
                    />

                    {/* Pulse Ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 opacity-0"
                      style={{ borderColor: skill.color }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: hoveredSkill === skill.id ? [0, 0.5, 0] : 0,
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    />

                    {/* Main Node */}
                    <motion.div
                      className={`relative ${getLevelSize(
                        skill.level
                      )} rounded-full border-2 border-slate-600 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 shadow-2xl`}
                      whileHover={{
                        scale: 1.2,
                        borderColor: skill.color,
                        boxShadow: `0 0 30px ${skill.color}40`,
                      }}
                      style={{
                        borderColor:
                          hoveredSkill === skill.id ? skill.color : undefined,
                      }}
                    >
                      <Icon
                        icon={skill.icon}
                        className={`${
                          skill.level === "expert"
                            ? "w-12 h-12"
                            : skill.level === "advanced"
                            ? "w-10 h-10"
                            : "w-8 h-8"
                        } drop-shadow-lg transition-transform duration-300 group-hover:scale-110`}
                      />
                    </motion.div>

                    {/* Enhanced Level Indicator */}
                    <motion.div
                      className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${getLevelColor(
                        skill.level
                      )} text-white shadow-lg`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill.level}
                    </motion.div>

                    {/* Enhanced Tooltip */}
                    <AnimatePresence>
                      {hoveredSkill === skill.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.8 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.8 }}
                          className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-slate-800/95 backdrop-blur-sm border border-slate-600 rounded-lg p-4 min-w-[200px] z-50 shadow-2xl"
                        >
                          <div className="text-center">
                            <h4 className="font-bold text-white mb-1 font-mono">
                              {skill.name}
                            </h4>
                            <p className="text-sm text-slate-300 mb-2 font-mono">
                              {skill.description}
                            </p>
                            {skill.yearsOfExperience && (
                              <div className="text-xs text-slate-400 font-mono">
                                {skill.yearsOfExperience} years experience
                              </div>
                            )}
                          </div>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-600" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </Card>

        {/* Enhanced Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl border-slate-700/50 p-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3 font-mono">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <Icon icon="mdi:school" className="w-8 h-8 text-yellow-400" />
                </motion.div>
                Currently Expanding My Arsenal
              </h3>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-6 mb-6">
              {[
                {
                  name: "Next.js",
                  icon: "logos:nextjs-icon",
                  color: "rgb(0, 0, 0)",
                },
                {
                  name: "Svelte",
                  icon: "logos:svelte-icon",
                  color: "rgb(255, 62, 0)",
                },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center gap-3 px-6 py-4 bg-slate-700/50 rounded-2xl border border-dashed border-slate-500 hover:border-slate-400 transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon
                    icon={tech.icon}
                    className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-lg font-medium text-slate-200 font-mono">
                    {tech.name}
                  </span>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-slate-400 text-lg font-mono"
            >
              Always learning, always growing.
            </motion.p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}