'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Code, Palette, Video } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const names = ['Dinksira Elsa', 'ድንቅስራ ኤልሳ'];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

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

  const socialLinks = [
    { icon: Github, href: 'https://github.com/dinksira', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/dinksira', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/dinksira', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@dinksira.com', label: 'Email' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="relative bg-neutral-900 text-neutral-100 overflow-hidden">
      {/* Floating Icons */}
      <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-10 left-5 opacity-20">
        <Code size={32} />
      </motion.div>
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute bottom-10 right-5 opacity-20">
        <Palette size={32} />
      </motion.div>
      <motion.div animate={{ y: [5, -5, 5], rotate: [0, 180, 360] }} transition={{ duration: 7, repeat: Infinity, delay: 2 }} className="absolute top-1/2 left-1/2 opacity-20">
        <Video size={32} />
      </motion.div>

      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-ethiopian-green to-sunset-gold rounded-lg" />
            <span className="font-display text-xl font-bold typewriter-text">
              {displayText}<span className="typing-cursor">|</span>
            </span>
          </motion.div>
          <p className="text-neutral-400 max-w-md">
            UI/UX Designer & Frontend Developer creating beautiful, functional experiences inspired by Ethiopian heritage.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-display font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-neutral-400">
            {['home','projects','skills','experience'].map(section => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className="hover:text-sunset-gold transition-colors"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-display font-semibold mb-4">Connect</h3>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 bg-neutral-800 rounded-lg hover:bg-ethiopian-green transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-neutral-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-neutral-400 text-sm relative z-10">
        <p>© {currentYear} Dinksira Elsa. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Built with ❤️ using Next.js & Tailwind CSS</p>
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
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </footer>
  );
}
