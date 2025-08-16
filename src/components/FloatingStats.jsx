import React from 'react';
import { motion } from 'framer-motion';

const FloatingStats = () => {
  const stats = [
    { label: "Projects", value: "15+", icon: "🚀" },
    { label: "Experience", value: "1+ Years", icon: "⚡" },
    { label: "Technologies", value: "20+", icon: "🛠️" },
    { label: "Accuracy", value: "95%", icon: "🎯" }
  ];

  return (
    <div className="absolute top-20 right-10 hidden lg:block">
      <div className="space-y-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 1.5 + index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.05, 
              rotateY: 5,
              transition: { duration: 0.2 }
            }}
            className="glass rounded-2xl p-4 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-300 min-w-[160px]"
          >
            <div className="flex items-center gap-3">
              <div className="text-2xl">{stat.icon}</div>
              <div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FloatingStats;
