import React from "react";
import { SKILLS } from "../data";
import { motion } from "framer-motion";
import { Code, Database, Cloud, Wrench, Zap, Brain } from "lucide-react";

export default function Skills() {
  const skillIcons = {
    "Languages": Code,
    "Frameworks": Zap,
    "Databases": Database,
    "Vector DBs": Brain,
    "Cloud & Tools": Wrench
  };

  const skillColors = {
    "Languages": "from-blue-400 to-blue-600",
    "Frameworks": "from-purple-400 to-purple-600",
    "Databases": "from-green-400 to-green-600",
    "Vector DBs": "from-pink-400 to-pink-600",
    "Cloud & Tools": "from-orange-400 to-orange-600"
  };

  return (
    <section id="skills" className="section scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          Skills & Technologies
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          My technical expertise spans across the entire AI/ML stack
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {Object.entries(SKILLS).map(([group, items], idx) => {
          const Icon = skillIcons[group] || Wrench;
          const gradientClass = skillColors[group] || "from-gray-400 to-gray-600";
          
          return (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="card h-full relative overflow-hidden">
                {/* Header with icon */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${gradientClass} rounded-xl flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{group}</h3>
                    <p className="text-white/60 text-sm">{items.length} technologies</p>
                  </div>
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-2 gap-2">
                  {items.map((skill, skillIdx) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIdx * 0.05 }}
                      className="group/skill"
                    >
                      <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer">
                        <span className="text-sm text-white/80 group-hover/skill:text-white transition-colors duration-300">
                          {skill}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${gradientClass} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none rounded-2xl`} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Skills summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16"
      >
        <div className="card">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {Object.values(SKILLS).flat().length}+
              </div>
              <div className="text-white/70">Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {Object.keys(SKILLS).length}
              </div>
              <div className="text-white/70">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">
                1+
              </div>
              <div className="text-white/70">Years Experience</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
