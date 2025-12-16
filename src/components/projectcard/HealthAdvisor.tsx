'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Simple Icons
const AndroidIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.6 9.48l1.43-2.49a.5.5 0 0 0-.86-.5l-1.46 2.53A7.97 7.97 0 0 0 12 7a7.97 7.97 0 0 0-4.71 1.52L5.83 6.5a.5.5 0 1 0-.86.5L6.4 9.48A8.02 8.02 0 0 0 4 15v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h10v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-5a8.02 8.02 0 0 0-2.4-5.52zM9 17a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
  </svg>
);

const HealthAdvisorCard = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="group relative bg-[#0b1220] rounded-3xl p-8 shadow-2xl border border-emerald-900/40 hover:border-emerald-400/60 overflow-hidden"
    >
      {/* Ambient Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/15 via-transparent to-cyan-900/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col lg:flex-row gap-8">
        {/* Left: App Preview */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="lg:w-2/5"
        >
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-900/40 to-cyan-900/40">
            <img
              src="/health-advisor-preview.png"
              alt="Health Advisor App Preview"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/90 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Right: Content */}
        <div className="flex-1 space-y-6">
          {/* Header */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg">
              <img
                src="/health-advisor-logo.png"
                alt="Health Advisor Logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Health Advisor</h3>
              <p className="text-emerald-300 font-semibold">Personalized Health Recommendation App</p>
            </div>
          </div>

          <p className="text-emerald-100/90 text-lg leading-relaxed">
            An Android application designed to deliver personalized health insights and daily
            recommendations based on user data, habits, and wellness goals.
          </p>

          {/* Features */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold">Key Capabilities</h4>
            <ul className="space-y-2 text-emerald-100/90">
              <li className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                AI-driven health suggestions tailored to individual lifestyle patterns
              </li>
              <li className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                Nutrition, fitness, and habit tracking in a unified dashboard
              </li>
              <li className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                Clean, accessible UI optimized for everyday Android users
              </li>
            </ul>
          </div>

          {/* Platform */}
          <div className="flex items-center gap-3 pt-2">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#141c2f] border border-emerald-700/40">
              <AndroidIcon className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-300">Android</span>
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 pt-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-emerald-300 font-medium">Active Development</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HealthAdvisorCard;
