import React, { useState } from "react";
import { PROFILE } from "../data";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      const subject = `Portfolio Contact from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink);
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: PROFILE.email,
      href: `mailto:${PROFILE.email}`,
      color: "text-blue-400"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/AyushPatel180",
      href: PROFILE.github,
      color: "text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ayush-patel18",
      href: PROFILE.linkedin,
      color: "text-blue-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: PROFILE.phone,
      href: `tel:${PROFILE.phone}`,
      color: "text-green-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: PROFILE.location,
      href: null,
      color: "text-purple-400"
    }
  ];

  return (
    <section id="contact" className="section scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          Let's Connect
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Ready to collaborate on your next AI project? Let's build something amazing together!
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="card">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-blue-400" />
              Get In Touch
            </h3>
            <p className="text-white/70 mb-8 leading-relaxed">
              Open to roles in ML, LLMs, and AI Platforms. If you'd like to collaborate or chat about AI projects, 
              feel free to reach out through any of the channels below.
            </p>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {info.href ? (
                    <a 
                      href={info.href}
                      target={info.href.startsWith('http') ? "_blank" : undefined}
                      rel={info.href.startsWith('http') ? "noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {info.label}
                        </div>
                        <div className="text-sm text-white/60">{info.value}</div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-xl flex items-center justify-center">
                        <info.icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white">{info.label}</div>
                        <div className="text-sm text-white/60">{info.value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card"
          onSubmit={handleSubmit}
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Send className="w-6 h-6 text-purple-400" />
            Send Message
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Name</label>
              <input 
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 text-white placeholder-white/50" 
                placeholder="Your name" 
                name="name" 
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Email</label>
              <input 
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 text-white placeholder-white/50" 
                placeholder="your.email@example.com" 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Message</label>
              <textarea 
                className="w-full h-32 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 text-white placeholder-white/50 resize-none" 
                placeholder="Tell me about your project..." 
                name="message" 
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            
            <motion.button 
              className="btn-primary w-full"
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Sending...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </div>
              )}
            </motion.button>
          </div>
          
          <p className="text-xs text-white/50 mt-4 text-center">
            This will open your default email client with a pre-filled message.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
