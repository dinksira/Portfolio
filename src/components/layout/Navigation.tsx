'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'projects', label: 'Projects', icon: '💼' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'experience', label: 'Experience', icon: '📈' },
    { id: 'contact', label: 'Contact', icon: '📞' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    const offset = -90; // adjust for fixed header height
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  useEffect(() => {
    // Intersection Observer for active section
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: '-30% 0px -30% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide nav on scroll
      setIsVisible(!(currentScrollY > lastScrollY && currentScrollY > 100));
      setLastScrollY(currentScrollY);

      // Scroll progress
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((currentScrollY / totalHeight) * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ opacity: 0, x: 50 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : 50,
      }}
      transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="flex flex-col items-end space-y-3 relative">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            whileHover={{
              x: -5,
              transition: { type: 'spring', stiffness: 400, damping: 10 },
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3 group relative"
          >
            {/* Tooltip */}
            <motion.div
              className="absolute right-full mr-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-xs px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              {item.label}
              <div className="absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-neutral-900 dark:bg-neutral-100 rotate-45" />
            </motion.div>

            {/* Label */}
            <motion.span
              className={`text-sm font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-ethiopian-green dark:text-ethiopian-green/90 translate-x-0 opacity-100'
                  : 'text-neutral-400 dark:text-neutral-600 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-400'
              }`}
            >
              {item.label}
            </motion.span>

            {/* Icon */}
            <motion.span
              className={`text-base transition-all duration-300 ${
                activeSection === item.id
                  ? 'scale-110'
                  : 'scale-100 group-hover:scale-105'
              }`}
            >
              {item.icon}
            </motion.span>

            {/* Active Indicator */}
            <motion.div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-ethiopian-green dark:bg-ethiopian-green/90 scale-125 shadow-lg shadow-ethiopian-green/50'
                  : 'bg-neutral-300 dark:bg-neutral-600 scale-100 group-hover:bg-neutral-400 dark:group-hover:bg-neutral-500'
              }`}
              layoutId="activeIndicator"
            />
          </motion.button>
        ))}

        {/* Scroll Progress */}
        <div className="w-1 h-20 bg-neutral-200 dark:bg-neutral-700 rounded-full mt-4 overflow-hidden">
          <motion.div
            className="w-full bg-gradient-to-b from-ethiopian-green to-sunset-gold rounded-full"
            style={{ height: `${scrollProgress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>

      {/* Vertical Connection Line */}
      <div className="absolute top-1/2 right-3 transform -translate-y-1/2 -z-10">
        <svg width="2" height="100%" className="h-full">
          <motion.line
            x1="1"
            y1="0"
            x2="1"
            y2="100%"
            stroke="currentColor"
            strokeWidth="1"
            className="text-neutral-200 dark:text-neutral-700"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </svg>
      </div>
    </motion.nav>
  );
}
