import React from "react";
import { EDUCATION } from "../data";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          Education
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          My academic foundation in Data Science and Statistics
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {EDUCATION.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="relative mb-12"
          >
            {/* Timeline connector */}
            <div className="absolute left-4 top-12 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-transparent z-10"></div>
            
            {/* Timeline dot - positioned outside card */}
            <div className="absolute left-0 top-4 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg z-20">
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
            
            <div className="card relative ml-12">

              <div className="pl-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-lg text-white/80 font-semibold">{edu.org}</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-gradient-to-r from-green-400/10 to-blue-400/10 border border-green-400/20 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-green-400 mb-1">
                        {edu.score.split(' ')[0]}
                      </div>
                      <div className="text-sm text-white/70">
                        {edu.score.split(' ')[1]}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-white/70">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span>{edu.place}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16"
      >
        <div className="card max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Continuous Learning
          </h3>
          <p className="text-white/70 mb-6">
            I believe in lifelong learning and staying updated with the latest advancements in AI/ML technology.
            My educational background in Statistics and Data Science provides a strong foundation for building intelligent systems.
          </p>
          <div className="flex items-center justify-center gap-2 text-green-400">
            <GraduationCap className="w-5 h-5" />
            <span className="font-semibold">Always Learning, Always Growing</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
