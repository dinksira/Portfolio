'use client';

import { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export default function Parallax({ children, offset = 50, className = '' }: ParallaxProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, offset]);

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}