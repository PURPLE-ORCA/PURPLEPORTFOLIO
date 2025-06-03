"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useAnimation } from "framer-motion";
import { Icon } from "@iconify/react";
import { Card } from "../../../components/ui/card";

export default function EnhancedSkillsSection() {
  const containerRef = useRef(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const x = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const contentWidth = containerRef.current.scrollWidth;
      setConstraints({ left: -(contentWidth - containerWidth), right: 0 });

      const scrollDistance = contentWidth / 2;

      // Ensure the carousel starts from the beginning before animating
      x.set(0);

      // Start the autoplay animation
      controls.start({
        x: -scrollDistance, // Animate to half the content width for seamless looping
        transition: {
          x: {
            duration: 40, // Duration of one full scroll
            ease: "linear", // Linear speed for continuous motion
            repeat: Infinity, // Loop indefinitely
            repeatType: "loop", // Seamless loop by resetting to start after each cycle
          },
        },
      });
    }
  }, [controls, x]);

  const skills = [
    { name: "HTML5", icon: "logos:html-5" },
    { name: "CSS3", icon: "logos:css-3" },
    { name: "JavaScript", icon: "logos:javascript" },
    { name: "React.js", icon: "logos:react" },
    { name: "Inertia.js", icon: "simple-icons:inertia" },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    { name: "Bootstrap", icon: "logos:bootstrap" },
    { name: "SASS", icon: "logos:sass" },
    { name: "PHP", icon: "logos:php" },
    { name: "Laravel", icon: "logos:laravel" },
    { name: "Python", icon: "logos:python" },
    { name: "Node.js", icon: "logos:nodejs-icon" },
    { name: "PostgreSQL", icon: "logos:postgresql" },
    { name: "Supabase", icon: "logos:supabase-icon" },
    { name: "Git", icon: "logos:git-icon" },
    { name: "GitHub", icon: "logos:github-icon" },
    { name: "VS Code", icon: "logos:visual-studio-code" },
    { name: "Composer", icon: "logos:composer" },
    { name: "NPM", icon: "logos:npm-icon" },
    { name: "Figma", icon: "logos:figma" },
  ];

  // Duplicate skills to create seamless loop effect
  const allSkills = [...skills, ...skills];

  return (
    <section className="py-24 px-4 bg-black/20 backdrop-blur-sm relative overflow-hidden">
      {/* Keep your existing background effects */}
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
        {/* Keep your existing header */}
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

        <Card className="relative mb-16 bg-slate-900/30 border-slate-700/50 backdrop-blur-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 to-transparent" />

          <div className="relative py-12">
            {/* Left fade effect */}
            <div className="absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-slate-900/30 to-transparent"></div>

            {/* Skills carousel */}
            <motion.div
              ref={containerRef}
              className="flex gap-12 cursor-grab"
              drag="x"
              dragConstraints={constraints}
              dragElastic={0.5}
              style={{ x }}
              onDragStart={() => controls.stop()}
              onDragEnd={() => controls.start()}
            >
              {allSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.01 }}
                  className="flex flex-col items-center gap-4 min-w-[100px] group cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                >
                  {/* Skill icon container */}
                  <motion.div
                    className="h-20 w-20 flex items-center justify-center bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-700/50 group-hover:border-cyan-400/50 transition-all duration-300"
                    whileHover={{
                      boxShadow: "0 0 20px rgba(56, 178, 172, 0.3)",
                      backgroundColor: "rgba(30, 41, 59, 0.8)",
                    }}
                  >
                    <Icon
                      icon={skill.icon}
                      width={48}
                      height={48}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </motion.div>

                  {/* Skill name */}
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-300 font-mono text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Right fade effect */}
            <div className="absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-slate-900/30 to-transparent"></div>
          </div>
        </Card>

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
                Currently Exploring New Technologies
              </h3>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-6 mb-6">
              {[
                {
                  name: "Typescript",
                  icon: "devicon:typescript",
                  color: "rgb(0, 0, 0)",
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
