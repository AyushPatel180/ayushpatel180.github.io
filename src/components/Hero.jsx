import React from "react";
import { PROFILE } from "../data";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "Building AI systems that scale",
      "Fine-tuning LLMs with LoRA",
      "Architecting RAG pipelines",
      "Deploying ML models to production",
      "Creating autonomous AI agents",
      "Processing millions of queries",
      "Transforming documents with AI",
      "Optimizing neural networks"
    ],
    loop: true, 
    typeSpeed: 50, 
    deleteSpeed: 30, 
    delaySpeed: 2500
  });

  return (
    <section id="hero" className="section relative overflow-hidden min-h-screen flex items-center justify-center pt-28 scroll-mt-28">
      {/* Premium animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b0c10] via-[#1a1b1f] to-[#0b0c10]" />
        <div className="absolute inset-0 opacity-30"
             style={{ 
               background: "radial-gradient(1200px 600px at 20% -20%, rgba(102, 126, 234, 0.3), transparent), radial-gradient(1000px 500px at 80% 20%, rgba(245, 87, 108, 0.3), transparent), radial-gradient(800px 400px at 50% 80%, rgba(240, 147, 251, 0.2), transparent)" 
             }} />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="text-center relative z-10 max-w-5xl mx-auto px-6">
        {/* Main heading with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
            Hi, I'm{" "}
            <span className="gradient-text relative">
              Ayush Patel
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent to-accent2 blur-xl opacity-20"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
          </h1>
        </motion.div>

        {/* Enhanced animated text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="text-xl md:text-2xl font-medium text-white/70 bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-3 inline-block border border-white/10">
            <span className="text-white/90">{text}</span>
            <Cursor className="text-accent" />
          </div>
        </motion.div>

        {/* Enhanced tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-lg md:text-xl text-white/60 mb-12 leading-relaxed"
        >
          {PROFILE.tagline}
        </motion.p>

        {/* Premium CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a 
            className="btn-primary group"
            href={PROFILE.resumeLink} 
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Download Resume</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent to-accent2 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.a>
          
          <motion.a 
            className="btn-ghost group"
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Projects</span>
            <motion.div
              className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.a>
        </motion.div>


      </div>
    </section>
  );
}
