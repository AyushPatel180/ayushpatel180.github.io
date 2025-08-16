import React from "react";
import { motion } from "framer-motion";
import { Brain, Code, Zap, Rocket, Shield, Globe, Users, Award, TrendingUp } from "lucide-react";

export default function About() {
  const expertiseItems = [
    { icon: Brain, text: "LLM Fine-tuning (LoRA/QLoRA)", color: "text-blue-400" },
    { icon: Code, text: "RAG & Vector Databases", color: "text-purple-400" },
    { icon: Zap, text: "Production AI Backends", color: "text-green-400" },
    { icon: Rocket, text: "FastAPI & AWS Deployment", color: "text-orange-400" },
    { icon: Shield, text: "MLOps & Docker", color: "text-pink-400" },
    { icon: Globe, text: "Semantic Search Systems", color: "text-cyan-400" }
  ];

  const softSkills = [
    "Cross-functional Collaboration",
    "Technical Leadership", 
    "Problem-solving & Innovation",
    "Project Management",
    "Mentoring & Knowledge Sharing",
    "Agile Development"
  ];

  return (
    <section id="about" className="section scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
          About Me
        </h2>
        <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
          Passionate Machine Learning Engineer crafting intelligent systems that drive real business value
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-8 rounded-full" />
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Main About Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-2 space-y-8"
        >
          <div className="card p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
            <h3 className="text-3xl font-bold mb-8 gradient-text">Passionate ML Engineer</h3>
            
            <div className="space-y-6 text-white/80 leading-relaxed text-lg">
              <p>
                I'm a passionate Machine Learning Engineer with expertise in building scalable AI systems that drive real business value. 
                My journey in AI/ML spans from research to production deployment, with a focus on Large Language Models, 
                Retrieval-Augmented Generation (RAG), and vector database technologies.
              </p>
              
              <p>
                At <span className="text-blue-400 font-semibold">F(x) Data Labs</span>, I lead the development of production-grade AI backends, architecting systems that process 
                millions of queries with sub-5 second response times. I specialize in fine-tuning LLMs using PEFT/LoRA techniques, 
                implementing hybrid semantic search algorithms, and building robust MLOps pipelines that ensure reliability at scale.
              </p>
              
              <p>
                I'm deeply passionate about emerging AI technologies including <span className="text-purple-400 font-semibold">LangGraph</span> for complex workflows, 
                <span className="text-green-400 font-semibold"> Computer Vision</span> for intelligent systems, and <span className="text-pink-400 font-semibold">Agentic AI</span> for autonomous decision-making. 
                My expertise extends to workflow automation with n8n, enabling seamless integration between AI systems and business processes.
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card text-center p-6 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="text-4xl font-bold text-blue-400 mb-3">1+</div>
                <div className="text-white/70 font-medium">Years Experience</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card text-center p-6 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="text-4xl font-bold text-purple-400 mb-3">15+</div>
                <div className="text-white/70 font-medium">Projects Completed</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card text-center p-6 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="text-4xl font-bold text-green-400 mb-3">95%</div>
                <div className="text-white/70 font-medium">Accuracy Rate</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Core Expertise */}
          <div className="card p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl" />
            <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10">
                <Brain className="w-5 h-5 text-blue-400" />
              </div>
              Core Expertise
            </h3>
            <div className="space-y-4">
              {expertiseItems.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 text-white/80 hover:text-white transition-all duration-300 group"
                >
                  <div className={`p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors duration-300 ${item.color.replace('text-', 'bg-').replace('-400', '-400/20')}`}>
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="card p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl" />
            <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-500/10">
                <Users className="w-5 h-5 text-purple-400" />
              </div>
              Soft Skills
            </h3>
            <div className="space-y-3">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                  <span className="font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
