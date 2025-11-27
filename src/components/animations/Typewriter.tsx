'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TypewriterProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function Typewriter({
  children,
  delay = 0,
  duration = 2,
  className = '',
}: TypewriterProps) {
  return (
    <motion.span
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      transition={{ duration, delay, ease: 'easeInOut' }}
      className={`inline-block overflow-hidden whitespace-nowrap ${className}`}
    >
      {children}
    </motion.span>
  );
}