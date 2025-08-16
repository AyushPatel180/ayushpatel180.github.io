import React from "react";
import { EXPERIENCE } from "../data";
import { motion } from "framer-motion";
import { Calendar, MapPin, Building, Award } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          Experience
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          My professional journey in building and deploying AI systems at scale
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        {EXPERIENCE.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="relative mb-12"
          >
            {/* Timeline connector */}
            <div className="absolute left-4 top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-transparent z-10"></div>
            
            {/* Timeline dot - positioned outside card */}
            <div className="absolute left-0 top-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg z-20">
              <Building className="w-4 h-4 text-white" />
            </div>
            
            <div className="card relative ml-12">

              <div className="grid lg:grid-cols-4 gap-6">
                {/* Header */}
                <div className="lg:col-span-3">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                      <div className="flex items-center gap-4 text-white/80">
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4 text-blue-400" />
                          <span className="text-lg font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-purple-400" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bullets */}
                  <div className="space-y-3 mb-6">
                    {exp.bullets.map((bullet, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="flex items-start gap-3 text-white/80"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <p className="leading-relaxed">{bullet}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="lg:col-span-1">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-green-400" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="tag hover:bg-blue-400/20 hover:border-blue-400/30 transition-all duration-300"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
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
            Ready to Build Something Amazing?
          </h3>
          <p className="text-white/70 mb-6">
            Let's collaborate on your next AI project and bring your ideas to life with cutting-edge technology.
          </p>
          <motion.a
            href="#contact"
            className="btn-primary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
