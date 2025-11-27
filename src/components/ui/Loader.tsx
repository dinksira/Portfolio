'use client';

import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-50">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-ethiopian-green border-t-transparent rounded-full mx-auto mb-4"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-neutral-600 font-medium"
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
}