import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const [typewriterText, setTypewriterText] = useState("");

  const fullText =
    "const purpleOrca = { role: 'Full Stack Developer', passion: 'Building stuff', status: 'Available for hire' };";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-purple-300 font-mono">
          About Me
        </h2>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 font-mono text-left max-w-4xl mx-auto border border-purple-300/20">
          <div className="flex items-center mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="ml-4 text-gray-400">orca.js</span>
          </div>
          <div className="text-purple-300">
            {"> "}
            <span className="text-white">{typewriterText}</span>
            <span className="animate-pulse">|</span>
          </div>
        </div>

        <p className="text-lg text-gray-200 mt-8 max-w-3xl mx-auto leading-relaxed font-mono">
          I'm a 19 years old passionate junior full-stack developer who loves crafting digital
          experiences. When I'm not coding, you'll find me
          exploring new technologies, contributing to open source, or probably
          slepping.
        </p>
      </motion.div>
    </section>
  );
}
