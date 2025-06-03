import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectsSection({ projects }) {

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold text-center mb-16 text-purple-300 font-mono"
      >
        What I've Built
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
                        src={project.image || "/images/falbackimg.jpg"}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-white font-mono">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-4 font-mono">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-purple-300/20 text-purple-200 font-mono"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <DialogContent className="bg-black/90 backdrop-blur-sm border-purple-300/20 text-white max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-purple-300 font-mono">
                    {project.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <img
                    src={project.image || "/images/falbackimg.jpg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <p className="text-gray-200 font-mono">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-purple-300/20 text-purple-200 font-mono"
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
                  </div>
                </div>
              </DialogContent>
              </motion.div>
            </Dialog>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
