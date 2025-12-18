'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap } from 'lucide-react';

const timelineData = [
  {
    id: 1,
    type: 'work',
    title: 'UI/UX Designer',
    company: 'Delta Labs',
    location: 'Addis Ababa, Ethiopia',
    period: 'Dec 2024 - Present • Full-time',
    description: [
      'Led the end-to-end UI/UX design for the Delta Educational Website using Figma, from wireframes to high-fidelity prototypes.',
      'Conducted iterative feedback sessions to refine user flows, improving usability and accessibility.',
      'Collaborated with frontend developers to ensure pixel-perfect implementation and cohesive user experience.',
      'Focused on user-centric design principles, resulting in a more engaging and effective learning platform.'
    ],
    icon: Briefcase,
    color: 'text-ethiopian-green',
    bgColor: 'bg-ethiopian-green/10',
  },
  {
    id: 2,
    type: 'work',
    title: 'Video Editor',
    company: 'EBJ Media',
    location: 'Remote',
    period: 'July 2024 - Dec 2024 • 6 months',
    description: [
      'Edited and produced high-quality promotional and social media content from raw footage to final delivery.',
      'Used Adobe Premiere Pro and After Effects for color correction, audio balancing, motion graphics, and visual effects.',
      'Collaborated with producers and designers to maintain brand consistency and meet tight deadlines.'
    ],
    icon: Briefcase,
    color: 'text-blue-nile',
    bgColor: 'bg-blue-nile/10',
  },
  {
    id: 3,
    type: 'internship',
    title: 'ICT Intern',
    company: 'Hawassa University ICT Center',
    location: 'Hawassa, Ethiopia',
    period: 'Jul 2024 - Sep 2024 • Full-time',
    description: [
      'Collaborated on documentation and configuration of a new network topology project.',
      'Diagnosed and resolved network issues using advanced troubleshooting tools.',
      'Applied theoretical computer science knowledge to real-world infrastructure challenges.'
    ],
    icon: GraduationCap,
    color: 'text-axum-purple',
    bgColor: 'bg-axum-purple/10',
  },
];

export default function Timeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="experience"
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
            Journey & <span className="text-ethiopian-green">Experience</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            My professional path through design, development, and media
          </p>
        </motion.div>

        {/* Timeline Items */}
        <div className="max-w-4xl mx-auto">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-start mb-12`}
            >
              {/* Timeline Line & Icon */}
              <div className="flex flex-col items-center w-12 mx-4">
                <div
                  className={`w-12 h-12 rounded-full ${item.bgColor} flex items-center justify-center ${item.color} mb-2`}
                >
                  <item.icon size={20} />
                </div>
                {index !== timelineData.length - 1 && (
                  <div className="w-1 bg-neutral-300 dark:bg-neutral-700 flex-grow" />
                )}
              </div>

              {/* Content */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`flex-1 bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg dark:shadow-gray-700 hover:shadow-xl transition-all duration-300 ${
                  index % 2 === 0 ? 'ml-4' : 'mr-4'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="text-xl font-display font-semibold text-neutral-900 dark:text-white">
                    {item.title}
                  </h3>
                  <span className="text-sunset-gold font-medium text-sm mt-1 sm:mt-0">
                    {item.period}
                  </span>
                </div>

                <p className="text-ethiopian-green font-medium mb-1">{item.company}</p>
                <p className="text-neutral-500 dark:text-neutral-400 mb-3">{item.location}</p>

                <ul className="text-neutral-600 dark:text-neutral-300 leading-relaxed list-disc list-inside space-y-1">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>

                {/* Type Badge */}
                <div className="mt-4">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-medium rounded-full capitalize ${
                      item.type === 'work'
                        ? 'bg-ethiopian-green/10 text-ethiopian-green'
                        : item.type === 'internship'
                        ? 'bg-axum-purple/10 text-axum-purple'
                        : 'bg-blue-nile/10 text-blue-nile'
                    }`}
                  >
                    {item.type}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Download Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <button className="btn-secondary text-lg px-8 py-4">
            Download Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
}
