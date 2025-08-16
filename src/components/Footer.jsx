import React from "react";
import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "../data";

export default function Footer() {
  return (
    <footer className="section py-16 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold gradient-text mb-2">Ayush Patel</h3>
            <p className="text-white/70 text-sm">
              Machine Learning Engineer crafting intelligent systems that drive real business value.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-white/70 hover:text-white transition-colors duration-300">About</a>
              <a href="#experience" className="block text-white/70 hover:text-white transition-colors duration-300">Experience</a>
              <a href="#projects" className="block text-white/70 hover:text-white transition-colors duration-300">Projects</a>
              <a href="#contact" className="block text-white/70 hover:text-white transition-colors duration-300">Contact</a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <motion.a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5 text-white/70" />
              </motion.a>
              <motion.a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5 text-white/70" />
              </motion.a>
              <motion.a
                href={`mailto:${PROFILE.email}`}
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 text-white/70" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-white/10 text-center"
        >
          <p className="text-white/60 text-sm flex items-center justify-center gap-2">
            © {new Date().getFullYear()} Ayush Patel • Built with 
            <span className="text-red-400">React</span>, 
            <span className="text-blue-400">Tailwind</span> & 
            <span className="text-purple-400">Framer Motion</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
