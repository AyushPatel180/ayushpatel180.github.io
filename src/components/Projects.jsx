import React from "react";
import { PROJECTS } from "../data";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star, Zap } from "lucide-react";

export default function Projects() {

  return (
    <section id="projects" className="section scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          Featured Projects
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Showcasing my expertise in AI/ML through innovative projects and solutions
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            className="group"
          >
            <div className="card h-full relative overflow-hidden">

                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                {/* Highlights */}
                {project.highlights?.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white/80 mb-3 flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      Key Achievements
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.highlights.map((highlight, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="flex items-center gap-2 text-xs text-white/70 bg-white/5 rounded-lg px-3 py-2"
                        >
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                          <span>{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white/80 mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-blue-400" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="tag hover:bg-purple-400/20 hover:border-purple-400/30 transition-all duration-300"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto">
                  {project.links.demo && (
                    <motion.a
                      href={project.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary w-full justify-center group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                      Live Demo
                    </motion.a>
                  )}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
              </div>
            </motion.div>
          ))}
      </div>

      {/* Call to action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-16"
      >
        <div className="card max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            Want to See More?
          </h3>
          <p className="text-white/70 mb-6">
            Check out my GitHub for more projects and contributions to the AI/ML community.
          </p>
          <motion.a
            href="https://github.com/AyushPatel180"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5 mr-2" />
            View GitHub
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
