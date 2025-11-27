'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, User, FileText } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const { theme, toggleTheme } = useTheme();

  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1xOvyfh9aSc9UX0xOvnCyD-w1jIEWkdcM/view?usp=sharing', '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-morphism shadow-lg backdrop-blur-md bg-white/80 dark:bg-neutral-900/80 border-b border-white/20 dark:border-neutral-700/20' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo with Profile Image */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-3"
          >
            {/* Profile Image */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="relative w-10 h-10 rounded-full border-2 border-ethiopian-green/20 dark:border-ethiopian-green/40 overflow-hidden bg-gradient-to-br from-ethiopian-green to-sunset-gold shadow-lg"
            >
              {!imageError ? (
                <Image
                  src="/profile1.png"
                  alt="Dinksira Elsa"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                  onError={() => setImageError(true)}
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-ethiopian-green to-sunset-gold">
                  <User className="text-white" size={20} />
                </div>
              )}
              
              {/* Online Status Indicator */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-white dark:border-neutral-900"
              />
            </motion.div>

            {/* Name */}
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold text-neutral-900 dark:text-white leading-tight">
                Dinksira Elsa
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                UI/UX Designer | Frontend Developer | Video Editor
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.a
                  href={item.href}
                  whileHover={{ 
                    y: -2,
                    color: item.name === 'Blog' ? '#F4B942' : '#1A6D42'
                  }}
                  className={`relative font-medium transition-colors duration-300 ${
                    item.name === 'Blog' 
                      ? 'text-sunset-gold hover:text-gold-dark dark:text-sunset-gold/90 dark:hover:text-sunset-gold' 
                      : 'text-neutral-600 dark:text-neutral-300 hover:text-ethiopian-green dark:hover:text-ethiopian-green'
                  }`}
                >
                  {item.name}
                  
                  {/* Blog Badge */}
                  {item.name === 'Blog' && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-3 w-1.5 h-1.5 bg-sunset-gold rounded-full"
                    />
                  )}
                  
                  {/* Hover Underline */}
                  <motion.div
                    className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                      item.name === 'Blog' ? 'bg-sunset-gold' : 'bg-ethiopian-green'
                    }`}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </motion.div>
            ))}
            
            {/* Resume Button */}
            <motion.button
              onClick={handleResumeClick}
              whileHover={{ 
                scale: 1.05,
                y: -1
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-ethiopian-green text-white rounded-lg font-medium transition-all duration-300 hover:bg-green-700 hover:shadow-lg border border-ethiopian-green/20"
              title="Download Resume"
            >
              <FileText size={16} />
              <span className="text-sm">Resume</span>
            </motion.button>
            
            {/* Language Switcher */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-ethiopian-green dark:hover:text-ethiopian-green transition-colors px-3 py-1 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              EN/AM
            </motion.button>
            
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors border border-neutral-200 dark:border-neutral-700 hover:border-ethiopian-green dark:hover:border-ethiopian-green"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'dark' ? (
                <Sun size={18} className="text-sunset-gold" />
              ) : (
                <Moon size={18} className="text-blue-nile" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors border border-neutral-200 dark:border-neutral-700"
          >
            {isMenuOpen ? <X size={20} className="text-neutral-900 dark:text-white" /> : <Menu size={20} className="text-neutral-900 dark:text-white" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-neutral-200 dark:border-neutral-700 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md rounded-lg shadow-lg"
            >
              <div className="flex flex-col space-y-3 pt-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-between py-3 px-4 rounded-lg transition-all duration-300 ${
                      item.name === 'Blog'
                        ? 'bg-sunset-gold/10 text-sunset-gold hover:bg-sunset-gold/20 dark:bg-sunset-gold/20 dark:hover:bg-sunset-gold/30'
                        : 'text-neutral-600 dark:text-neutral-300 hover:text-ethiopian-green dark:hover:text-ethiopian-green hover:bg-neutral-100 dark:hover:bg-neutral-800'
                    }`}
                  >
                    <span className="font-medium">{item.name}</span>
                    {item.name === 'Blog' && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-1.5 h-1.5 bg-sunset-gold rounded-full"
                      />
                    )}
                  </motion.a>
                ))}
                
                {/* Mobile Resume Button */}
                <motion.button
                  onClick={() => {
                    handleResumeClick();
                    setIsMenuOpen(false);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center justify-center gap-2 py-3 px-4 mx-4 bg-ethiopian-green text-white rounded-lg font-medium transition-all duration-300 hover:bg-green-700 hover:shadow-lg border border-ethiopian-green/20"
                >
                  <FileText size={16} />
                  <span>Download Resume</span>
                </motion.button>
                
                {/* Mobile Controls */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center justify-between pt-4 mt-2 border-t border-neutral-200 dark:border-neutral-700 px-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-ethiopian-green dark:hover:text-ethiopian-green transition-colors px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    EN/AM
                  </motion.button>
                  <motion.button
                    onClick={toggleTheme}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors border border-neutral-200 dark:border-neutral-700"
                  >
                    {theme === 'dark' ? (
                      <Sun size={18} className="text-sunset-gold" />
                    ) : (
                      <Moon size={18} className="text-blue-nile" />
                    )}
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-ethiopian-green to-sunset-gold"
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
    </motion.header>
  );
}