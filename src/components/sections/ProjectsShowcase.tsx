// components/ProjectsShowcase.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import DeltaLabs from '@/components/projectcard/DeltaLabs';
import BeteSelamHospital from '@/components/projectcard/BeteSelamHospital';
import Memarya from '@/components/projectcard/Memarya';

export default function ProjectsShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-neutral-900 dark:text-white">
            Featured <span className="text-ethiopian-green">Projects</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            A collection of work that represents my passion for creating meaningful digital experiences
          </p>
        </motion.div>

        {/* Project Cards Container */}
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Delta Labs Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <DeltaLabs />
          </motion.div>

          {/* Bete Selam Hospital Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <BeteSelamHospital />
          </motion.div>

          {/* Memarya Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <Memarya />
          </motion.div>
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="btn-primary text-lg px-8 py-4">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}