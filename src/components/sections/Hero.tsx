'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Code, Palette, Video, Sparkles, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const { theme } = useTheme();
  
  const names = ['Dinksira Elsa', 'ድንቅስራ ኤልሳ'];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  // Social media links
  const socialLinks = [
    {
      name: 'Behance',
      url: 'https://www.behance.net/dinksiraelsa',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
        </svg>
      ),
      color: 'hover:text-[#1769FF]'
    },
    {
      name: 'Dribbble',
      url: 'https://dribbble.com/dinksira-elsa',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm10.032-11.051c-1.319-.064-2.473-.097-3.504-.097-1.117 0-2.094.048-2.906.154.227 1.141.447 2.279.66 3.416 1.083-.161 2.203-.242 3.359-.242 1.228 0 2.391.097 3.391.291v-3.322zm-5.579-1.416c-1.035-1.694-2.171-3.338-3.408-4.932 1.838-.645 3.912-.999 6.102-.999 1.083 0 2.137.097 3.162.291v2.804c-1.901-.516-3.856-.774-5.856-.774v3.61zm-2.906 7.787c-.291-1.417-.599-2.833-.922-4.249-1.035.161-2.137.242-3.307.242-1.032 0-2.049-.081-3.051-.242v3.322c1.083.161 2.207.242 3.371.242 1.356 0 2.627-.113 3.909-.315zm-1.611-10.083c1.237 1.594 2.373 3.238 3.408 4.932h-7.999c-.774-1.678-1.611-3.371-2.511-5.079 2.207-.645 4.657-.999 7.102-.999v.146zm-7.102 7.787c.9-1.708 1.737-3.401 2.511-5.079h7.999c.291 1.111.573 2.222.847 3.333-1.292.226-2.627.339-3.999.339-1.292 0-2.549-.097-3.771-.291v1.698z"/>
        </svg>
      ),
      color: 'hover:text-[#EA4C89]'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/dinksira-elsa-13904b319/',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'hover:text-[#0A66C2]'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/dinksira',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: 'hover:text-[#333333] dark:hover:text-[#f5f5f5]'
    },
    {
      name: 'Upwork',
      url: 'https://www.upwork.com/freelancers/~0169e7871bfcb02264?mp_source=share',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
        </svg>
      ),
      color: 'hover:text-[#14A800]'
    }
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const handleTyping = () => {
      const currentName = names[loopNum % names.length];
      
      if (isDeleting) {
        setDisplayText(currentName.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
        
        if (currentIndex === 0) {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      } else {
        setDisplayText(currentName.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
        
        if (currentIndex === currentName.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, loopNum, names]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-neutral-900">
      {/* Animated Background */}
      <div className="absolute inset-0 ethiopian-pattern opacity-5 dark:opacity-10" />
      
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 text-ethiopian-green opacity-20 dark:opacity-30"
      >
        <Code size={48} />
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-10 text-sunset-gold opacity-20 dark:opacity-30"
      >
        <Palette size={48} />
      </motion.div>

      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, 180, 360] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 left-20 text-axum-purple opacity-20 dark:opacity-30"
      >
        <Video size={48} />
      </motion.div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Ethiopian Welcome */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-ethiopian-green dark:text-ethiopian-green/90 font-amharic mb-4"
              >
                እንኳን ደህና መጡ
              </motion.p>
              
              {/* Main Headline with Typewriter Effect */}
              <div className="mb-6">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-display font-bold"
                >
                  <span className="block h-20 lg:h-24 flex items-center justify-center lg:justify-start">
                    <span className="text-ethiopian-green dark:text-ethiopian-green/90 font-bold typewriter-text">
                      {displayText}
                      <span className="typing-cursor">|</span>
                    </span>
                  </span>
                </motion.h1>
              </div>

              {/* Typewriter Effect for Tagline */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mb-8"
              >
                <div className="inline-block">
                  <span className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300">
                    I create{' '}
                    <span className="text-ethiopian-green dark:text-ethiopian-green/90 font-semibold">
                      intuitive digital experiences
                    </span>
                  </span>
                </div>
              </motion.div>

              {/* Roles in Single Line */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex flex-nowrap justify-center lg:justify-start items-center gap-3 mb-8 overflow-visible"
              >
                {[
                  { role: 'UI/UX DESIGNER', icon: Palette, color: 'text-ethiopian-green dark:text-ethiopian-green/90', bgColor: 'bg-ethiopian-green/10 dark:bg-ethiopian-green/20', borderColor: 'border-ethiopian-green/20 dark:border-ethiopian-green/30' },
                  { role: 'FRONTEND DEVELOPER', icon: Code, color: 'text-blue-nile dark:text-blue-nile/90', bgColor: 'bg-blue-nile/10 dark:bg-blue-nile/20', borderColor: 'border-blue-nile/20 dark:border-blue-nile/30' },
                  { role: 'VIDEO EDITOR', icon: Video, color: 'text-axum-purple dark:text-axum-purple/90', bgColor: 'bg-axum-purple/10 dark:bg-axum-purple/20', borderColor: 'border-axum-purple/20 dark:border-axum-purple/30' }
                ].map((item, index) => (
                  <motion.div
                    key={item.role}
                    initial={{ opacity: 0, scale: 0, x: -20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ 
                      delay: 1.4 + index * 0.1,
                      type: "spring", 
                      stiffness: 300,
                      damping: 20
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -3,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    className="group relative flex-shrink-0"
                  >
                    <div className={`px-4 py-3 ${item.bgColor} backdrop-blur-sm rounded-xl text-neutral-700 dark:text-neutral-200 border ${item.borderColor} font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap hover:shadow-lg`}>
                      <item.icon size={18} className={item.color} />
                      <span className="text-sm md:text-base">{item.role}</span>
                    </div>
                    
                    {/* Hover Glow Effect */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className={`absolute inset-0 ${item.bgColor.replace('10', '20').replace('20', '30')} rounded-xl blur-md -z-10`}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Social Media Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="flex justify-center lg:justify-start items-center gap-4 mb-8"
              >
                {socialLinks.map((social, index) => (
                  <motion.button
                    key={social.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.7 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSocialClick(social.url)}
                    className={`p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 transition-all duration-300 ${social.color} border border-transparent hover:border-current hover:shadow-lg group relative`}
                    title={social.name}
                  >
                    {social.icon}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-xs px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      {social.name}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-neutral-900 dark:bg-neutral-100 rotate-45" />
                    </motion.div>
                  </motion.button>
                ))}
              </motion.div>

              {/* CTA Buttons with Enhanced Animations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
                className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center"
              >
                {/* Primary Button - View My Work (Scrolls to Projects) */}
                <motion.button 
                  onClick={() => scrollToSection('projects')}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative bg-ethiopian-green text-white px-8 py-4 rounded-xl font-semibold text-lg overflow-hidden group"
                >
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-ethiopian-green to-green-700"
                    whileHover={{
                      background: [
                        'linear-gradient(to right, #1A6D42, #166C3F)',
                        'linear-gradient(to right, #1A6D42, #2D8B5C)',
                        'linear-gradient(to right, #1A6D42, #166C3F)'
                      ],
                      transition: { duration: 1, repeat: Infinity }
                    }}
                  />
                  
                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.8 }}
                  />
                  
                  {/* Sparkle Particles */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 overflow-hidden"
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        initial={{ 
                          x: Math.random() * 100 - 50, 
                          y: Math.random() * 40 - 20,
                          scale: 0 
                        }}
                        whileHover={{ 
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                          transition: { 
                            duration: 1, 
                            delay: i * 0.2,
                            repeat: Infinity 
                          }
                        }}
                      />
                    ))}
                  </motion.div>
                  
                  <span className="relative z-10 flex items-center gap-2">
                    View My Work
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      ↓
                    </motion.span>
                  </span>
                </motion.button>

                {/* Secondary Button - Let's Connect (Scrolls to Contact) */}
                <motion.button 
                  onClick={() => scrollToSection('contact')}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative bg-sunset-gold text-neutral-900 dark:text-neutral-900 px-8 py-4 rounded-xl font-semibold text-lg overflow-hidden group"
                >
                  {/* Base Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-sunset-gold to-gold-dark" />
                  
                  {/* Hover Glow */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-sunset-gold via-gold-dark to-sunset-gold"
                  />
                  
                  {/* Pulse Ring */}
                  <motion.div
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{ 
                      scale: 1.1, 
                      opacity: [0, 0.5, 0],
                      transition: { duration: 1.5, repeat: Infinity }
                    }}
                    className="absolute inset-0 border-2 border-sunset-gold/50 rounded-xl"
                  />
                  
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                  
                  <span className="relative z-10 flex items-center gap-2">
                    Let's Connect
                    <motion.span
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      💫
                    </motion.span>
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Background Decoration */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-ethiopian-green via-sunset-gold to-axum-purple rounded-full blur-xl opacity-20 dark:opacity-30"
              />
              
              {/* Profile Image Container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-white dark:border-neutral-800 shadow-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800"
              >
                <Image
                  src="/profile.png"
                  alt="Dinksira Elsa - UI/UX Designer & Frontend Developer"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                />
              </motion.div>

              {/* Floating Elements Around Image */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 w-12 h-12 bg-ethiopian-green/20 dark:bg-ethiopian-green/30 rounded-full flex items-center justify-center"
              >
                <Palette className="text-ethiopian-green dark:text-ethiopian-green/90" size={20} />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-nile/20 dark:bg-blue-nile/30 rounded-full flex items-center justify-center"
              >
                <Code className="text-blue-nile dark:text-blue-nile/90" size={20} />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10], rotate: [0, 180, 360] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -top-8 right-8 w-12 h-12 bg-axum-purple/20 dark:bg-axum-purple/30 rounded-full flex items-center justify-center"
              >
                <Video className="text-axum-purple dark:text-axum-purple/90" size={20} />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-neutral-400 dark:text-neutral-500 hover:text-ethiopian-green dark:hover:text-ethiopian-green transition-colors cursor-pointer group"
          >
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="text-sm mb-2"
            >
              Scroll to explore
            </motion.span>
            <motion.div
              whileHover={{ y: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .typewriter-text {
          font-family: 'Clash Display', sans-serif;
          background: linear-gradient(135deg, #1A6D42, #6D1A8C);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .typing-cursor {
          animation: blink 1s infinite;
          color: #1A6D42;
          font-weight: normal;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .ethiopian-pattern {
          background: linear-gradient(
            45deg,
            #1A6D42,
            #6D1A8C,
            #F4B942,
            #1A6D8C
          );
          background-size: 400% 400%;
          animation: ethiopian-pattern 15s ease infinite;
        }

        @keyframes ethiopian-pattern {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}