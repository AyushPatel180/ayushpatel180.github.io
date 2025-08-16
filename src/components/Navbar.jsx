import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PROFILE } from "../data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setIsVisible(false); // hide on scroll down
      } else {
        setIsVisible(true); // show on scroll up
      }
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-xl bg-black/70 border-b border-white/10 shadow-lg"
          : "backdrop-blur-md bg-black/40"
      }`}
      initial={{ y: -80 }}
      animate={{ y: isVisible ? 0 : -80 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <nav className="w-full px-5 md:px-10 flex items-center justify-between py-6">

        {/* Full width navbar */}
        {/* Logo */}
        <a
          href="#"
          className="relative text-lg md:text-xl font-extrabold tracking-wide group"
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
            Portfolio

          </span>
          <span className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></span>
        </a>


        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {links.map((link, i) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <a
                href={link.href}
                className="relative text-white/70 hover:text-white transition font-medium text-sm"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Desktop Socials */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md hover:bg-white/10 transition"
          >
            <Github size={16} className="text-white/80 hover:text-white" />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md hover:bg-white/10 transition"
          >
            <Linkedin size={16} className="text-white/80 hover:text-white" />
          </a>
          <button
            onClick={scrollToContact}
            className="px-4 py-1.5 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-md hover:shadow-lg hover:opacity-90 transition"
          >
            <Mail size={14} className="inline mr-1" />
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-md hover:bg-white/10 transition"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-black/90 backdrop-blur-xl border-t border-white/10"
          >
            <div className="flex flex-col space-y-3 p-5">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/80 hover:text-white text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-3 pt-3 border-t border-white/10">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-md hover:bg-white/10 transition"
                >
                  <Github size={16} className="text-white/80 hover:text-white" />
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-md hover:bg-white/10 transition"
                >
                  <Linkedin size={16} className="text-white/80 hover:text-white" />
                </a>
                <button
                  onClick={scrollToContact}
                  className="px-4 py-1.5 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 transition"
                >
                  <Mail size={14} className="inline mr-1" />
                  Contact
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
