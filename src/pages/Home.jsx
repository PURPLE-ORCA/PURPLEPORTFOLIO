import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  ChevronDown,
  GitBranch,
  Coffee,
  Zap,
} from "lucide-react";
import { Icon } from "@iconify/react";

export default function Home() {
  const [typewriterText, setTypewriterText] = useState("");
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const fullText =
    "const purpleOrca = { role: 'Full Stack Developer', passion: 'Building dope stuff', status: 'Available for hire' };";

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

  // Easter egg trigger
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === "P") {
        setShowEasterEgg(true);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  const skills = {
    Frontend: [
      { name: "React", icon: "logos:react" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "Framer Motion", icon: "logos:framer" },
      { name: "Vue.js", icon: "logos:vue" },
      { name: "Svelte", icon: "logos:svelte-icon" },
    ],
    Backend: [
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "Python", icon: "logos:python" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "MongoDB", icon: "logos:mongodb-icon" },
      { name: "Redis", icon: "logos:redis" },
      { name: "Express", icon: "logos:express" },
      { name: "FastAPI", icon: "logos:fastapi-icon" },
    ],
    Tools: [
      { name: "Git", icon: "logos:git-icon" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "AWS", icon: "logos:aws" },
      { name: "Vercel", icon: "logos:vercel-icon" },
      { name: "Figma", icon: "logos:figma" },
      { name: "VS Code", icon: "logos:visual-studio-code" },
      { name: "Webpack", icon: "logos:webpack" },
    ],
  };

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
      icon: Icon,
      iconName: "mdi:code-braces",
    },
    { label: "GitHub Commits", value: 1337, icon: GitBranch },
    { label: "Coffee Consumed", value: 999, icon: Coffee },
    { label: "Hours Coding", value: 5000, icon: Zap },
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0129] via-[#2f024f] to-[#0f0118] animate-gradient-shift"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2f024f] rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#4a0e7a] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#1a0129] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative">
          <motion.div style={{ y }} className="text-center z-10">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent"
            >
              Purple Orca
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl md:text-2xl mb-8 text-gray-200"
            >
              Talk less, build more
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="relative w-64 h-64 mx-auto mb-12"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-40 animate-pulse"></div>
              <img
                src="/images/proropic.jpg"
                alt="Purple Orca"
                width={256}
                height={256}
                className="relative z-10 rounded-full border-4 border-purple-300 hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-purple-300 animate-bounce" />
          </motion.div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-purple-300">
              About Me
            </h2>

            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 font-mono text-left max-w-4xl mx-auto border border-purple-300/20">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="ml-4 text-gray-400">terminal.js</span>
              </div>
              <div className="text-purple-300">
                {"> "}
                <span className="text-white">{typewriterText}</span>
                <span className="animate-pulse">|</span>
              </div>
            </div>

            <p className="text-lg text-gray-200 mt-8 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate full-stack developer who loves crafting digital
              experiences that don't suck. When I'm not coding, you'll find me
              exploring new technologies, contributing to open source, or
              probably drinking way too much coffee.
            </p>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4 bg-black/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-center mb-16 text-purple-300"
            >
              Skills & Tech
            </motion.h2>

            <div className="space-y-12">
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-purple-200">
                    {category}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                    {skillList.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="group"
                      >
                        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-purple-300/20 hover:border-purple-300 transition-all duration-300 text-center">
                          <Icon
                            icon={skill.icon}
                            className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300"
                          />
                          <span className="text-sm text-gray-200 group-hover:text-white transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-purple-300"
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="bg-black/40 backdrop-blur-sm border-purple-300/20 hover:border-purple-300 transition-all duration-300 cursor-pointer group">
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={500}
                            height={300}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2 text-white">
                            {project.title}
                          </h3>
                          <p className="text-gray-300 mb-4">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="bg-purple-300/20 text-purple-200"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="bg-black/90 backdrop-blur-sm border-purple-300/20 text-white max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-purple-300">
                        {project.title}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <p className="text-gray-200">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-purple-300/20 text-purple-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-4 pt-4">
                        <Button
                          asChild
                          className="bg-purple-600 hover:bg-purple-700"
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                          </a>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          className="border-purple-300 text-purple-300 hover:bg-purple-600 hover:text-white"
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-black/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-center mb-16 text-purple-300"
            >
              My Stats
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-purple-300/20 hover:border-purple-300 transition-colors duration-300">
                    {stat.iconName ? (
                      <Icon
                        icon={stat.iconName}
                        className="w-8 h-8 text-purple-300 mx-auto mb-4"
                      />
                    ) : (
                      <stat.icon className="w-8 h-8 text-purple-300 mx-auto mb-4" />
                    )}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="text-3xl font-bold text-white mb-2"
                    >
                      {stat.value}+
                    </motion.div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* GitHub-style contribution graph */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-purple-300/20"
            >
              <h3 className="text-xl font-bold mb-4 text-center text-purple-200">
                Coding Activity
              </h3>
              <div className="grid grid-cols-12 gap-1">
                {Array.from({ length: 84 }, (_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.1, delay: i * 0.01 }}
                    viewport={{ once: true }}
                    className={`w-3 h-3 rounded-sm ${
                      Math.random() > 0.7
                        ? "bg-purple-400"
                        : Math.random() > 0.4
                        ? "bg-purple-600"
                        : "bg-gray-800"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-purple-300"
          >
            Let's Connect
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-purple-200">
                Get in touch
              </h3>
              <p className="text-gray-200 mb-8">
                Ready to build something amazing together? Drop me a line and
                let's make it happen.
              </p>

              <div className="flex space-x-6">
                {[
                  { icon: Github, href: "https://github.com", label: "GitHub" },
                  {
                    icon: Linkedin,
                    href: "https://linkedin.com",
                    label: "LinkedIn",
                  },
                  {
                    icon: Twitter,
                    href: "https://twitter.com",
                    label: "Twitter",
                  },
                  {
                    icon: Mail,
                    href: "mailto:hello@purpleorca.dev",
                    label: "Email",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, color: "#a855f7" }}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                  >
                    <social.icon className="w-8 h-8" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    className="bg-black/40 backdrop-blur-sm border-purple-300/20 focus:border-purple-300 text-white"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-black/40 backdrop-blur-sm border-purple-300/20 focus:border-purple-300 text-white"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={4}
                    className="bg-black/40 backdrop-blur-sm border-purple-300/20 focus:border-purple-300 text-white resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Easter Egg */}
        <AnimatePresence>
          {showEasterEgg && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50"
              onClick={() => setShowEasterEgg(false)}
            >
              <div className="text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="text-8xl mb-8"
                >
                  🐋
                </motion.div>
                <h2 className="text-4xl font-bold text-purple-300 mb-4">
                  You found the secret!
                </h2>
                <p className="text-xl text-gray-200">
                  Congrats! You discovered the hidden easter egg. <br />
                  You're clearly someone who pays attention to details. <br />
                  <span className="text-purple-300">I like that.</span>
                </p>
                <p className="text-sm text-gray-400 mt-4">
                  (Press Ctrl+Shift+P or click anywhere to close)
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-purple-300/20 text-center text-gray-300">
          <p>
            &copy; 2024 Purple Orca. Built with Next.js, Tailwind CSS, and lots
            of coffee.
          </p>
        </footer>
      </div>
    </div>
  );
}
