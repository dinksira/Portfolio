'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

import DeltaLabs from '@/components/projectcard/DeltaLabs';
import BeteSelamHospital from '@/components/projectcard/BeteSelamHospital';
import Memarya from '@/components/projectcard/Memarya';
import Eventify from '@/components/projectcard/Eventify';
import NexusOS from '@/components/projectcard/NexusOS';
import HealthAdvisorCard from '@/components/projectcard/HealthAdvisor';

const additionalProjects = [
  {
    id: 4,
    title: 'Eventify - Event Management Platform',
    component: Eventify,
    props: {},
  },
  {
    id: 5,
    title: 'Nexus OS - Futuristic Personal Dashboard',
    component: NexusOS,
    props: {},
  },
  {
    id: 6,
    title: 'Health Advisor - Personalized Health App',
    component: HealthAdvisorCard,
    props: {},
  },
];

export default function ProjectsShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-neutral-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
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

        {/* Project Cards */}
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Always-visible Featured Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <DeltaLabs />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <BeteSelamHospital />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <Memarya />
          </motion.div>

          {/* Additional Projects */}
          <AnimatePresence>
            {showAllProjects &&
              additionalProjects.map((project, index) => {
                const ProjectComponent = project.component;
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <ProjectComponent {...project.props} />
                  </motion.div>
                );
              })}
          </AnimatePresence>
        </div>

        {/* View All / Show Less CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="btn-primary text-lg px-8 py-4 group transition-all duration-300 hover:scale-105"
          >
            {showAllProjects ? (
              <span className="flex items-center justify-center">
                Show Less
                <svg
                  className="w-5 h-5 ml-2 rotate-180 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            ) : (
              <span className="flex items-center justify-center">
                View All Projects ({additionalProjects.length})
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
