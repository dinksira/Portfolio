'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, Code, Palette, Video, Send } from 'lucide-react';
import { useState, useEffect } from 'react';

/* ===== Custom Icons ===== */

const BehanceIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 26 26"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <path d="M19.5 12.4c.2.3.4.6.5 1.1h-3.2c0-.1 0-.3.1-.5s.1-.3.3-.5c.1-.2.3-.3.5-.4c.2-.1.5-.2.8-.2c.4.1.8.2 1 .5zm-9.2-.7c.2-.2.4-.5.4-.9c0-.2 0-.4-.1-.6c-.1-.1-.2-.3-.3-.3c-.1-.1-.3-.1-.5-.2H7.2V12h2.2c.3 0 .6-.1.9-.3zm-.8 1.7H7.2v2.7h2.3c.2 0 .4 0 .6-.1c.2 0 .4-.1.5-.2c.1-.1.3-.2.4-.4c.1-.2.1-.4.1-.6c0-.5-.1-.9-.4-1.1c-.3-.2-.7-.3-1.2-.3zM26 4.9v16.2c0 2.7-2.2 4.9-4.9 4.9H4.9C2.2 26 0 23.8 0 21.1V4.9C0 2.2 2.2 0 4.9 0h16.2C23.8 0 26 2.2 26 4.9zm-9.6 4.7h4v-1h-4v1zM13.2 15c0-.6-.1-1.1-.4-1.6c-.3-.4-.7-.7-1.3-.9c.4-.2.8-.5 1-.8c.2-.3.3-.7.3-1.2s-.1-.8-.2-1.2c-.2-.3-.4-.6-.6-.7c-.3-.2-.6-.3-1-.4c-.5-.2-.9-.2-1.4-.2H5v9.8h4.8c.4 0 .9-.1 1.3-.2s.8-.3 1.1-.5c.3-.2.6-.5.8-.9c.1-.3.2-.7.2-1.2zm3.6-.3h5.1c0-.6 0-1.1-.1-1.6s-.3-1-.6-1.3c-.3-.4-.7-.7-1.1-.9c-.5-.2-1-.4-1.6-.4c-.5 0-1 .1-1.5.3c-.4.2-.8.5-1.2.8c-.3.3-.6.7-.7 1.2c-.2.5-.3 1-.3 1.5s.1 1.1.3 1.5c.2.5.4.9.7 1.2c.3.3.7.6 1.1.8c.5.2 1 .3 1.5.3c.8 0 1.5-.2 2.1-.6c.6-.4 1-1 1.3-1.8h-1.7c-.1.2-.2.4-.5.6c-.3.2-.6.3-1 .3c-.5 0-1-.1-1.3-.4c-.3-.4-.5-.9-.5-1.5z" />
  </svg>
);

const DribbbleIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <circle cx="11.97" cy="11.97" opacity=".5" r="9" />
    <path d="M2 12a9.796 9.796 0 0 1 1.34-5.02a9.93 9.93 0 0 1 3.64-3.64A9.796 9.796 0 0 1 12 2a9.796 9.796 0 0 1 5.02 1.34a9.929 9.929 0 0 1 3.64 3.64A9.796 9.796 0 0 1 22 12a9.796 9.796 0 0 1-1.34 5.02a9.929 9.929 0 0 1-3.64 3.64A9.796 9.796 0 0 1 12 22a9.796 9.796 0 0 1-5.02-1.34a9.93 9.93 0 0 1-3.64-3.64A9.796 9.796 0 0 1 2 12z" />
  </svg>
);

/* ===== Footer ===== */

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

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, loopNum, names]);

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/dinksira-elsa-13904b319/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:dinksiraelisa@gmail.com', label: 'Email' },
    { icon: BehanceIcon, href: 'https://www.behance.net/dinksiraelsa', label: 'Behance' },
    { icon: DribbbleIcon, href: 'https://dribbble.com/dinksira-elsa', label: 'Dribbble' },
    { icon: Send, href: 'https://t.me/Dink_Sira', label: 'Telegram' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-neutral-900 text-neutral-100 overflow-hidden">
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
        <div className="md:col-span-2">
          <div className="flex items-center space-x-2 mb-4">
            <img
              src="/assets/images/profile.jpg"
              alt="Dinksira Elsa"
              className="w-8 h-8 rounded-lg object-cover"
            />
            <span className="font-display text-xl font-bold typewriter-text">
              {displayText}<span className="typing-cursor">|</span>
            </span>
          </div>
          <p className="text-neutral-400 max-w-md">
            UI/UX Designer & Frontend Developer creating beautiful, functional experiences inspired by Ethiopian heritage.
          </p>
        </div>

        <div>
          <h3 className="font-display font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-neutral-400">
            {['home','projects','skills','experience'].map(s => (
              <li key={s}>
                <button onClick={() => scrollToSection(s)} className="hover:text-sunset-gold">
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold mb-4">Connect</h3>
          <div className="flex space-x-4 mb-4">
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 bg-neutral-800 rounded-lg hover:bg-ethiopian-green transition-all"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
          {/* WhatsApp QR */}
          <img
            src="/assets/qr.jpg"
            alt="WhatsApp QR"
            className="w-24 h-24 mt-2 rounded-lg object-cover mx-auto"
          />
        </div>
      </div>

      <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400 text-sm">
        © {currentYear} Dinksira Elsa. All rights reserved.
      </div>

      <style jsx>{`
        .typewriter-text {
          background: linear-gradient(135deg, #1a6d42, #6d1a8c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .typing-cursor {
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%,50% { opacity:1 }
          51%,100% { opacity:0 }
        }
      `}</style>
    </footer>
  );
}
