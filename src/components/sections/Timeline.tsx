'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const timelineData = [
  {
    id: 1,
    type: 'work',
    title: 'Senior UI/UX Designer',
    company: 'Tech Innovation Inc.',
    period: '2022 - Present',
    description: 'Leading design initiatives for enterprise clients, mentoring junior designers, and establishing design systems.',
    icon: Briefcase,
    color: 'text-ethiopian-green',
    bgColor: 'bg-ethiopian-green/10',
  },
  {
    id: 2,
    type: 'work',
    title: 'Frontend Developer',
    company: 'Digital Solutions Ltd.',
    period: '2020 - 2022',
    description: 'Developed responsive web applications using React and TypeScript, collaborated with cross-functional teams.',
    icon: Briefcase,
    color: 'text-blue-nile',
    bgColor: 'bg-blue-nile/10',
  },
  {
    id: 3,
    type: 'education',
    title: 'MSc in Human-Computer Interaction',
    company: 'Addis Ababa University',
    period: '2018 - 2020',
    description: 'Focused on user-centered design, accessibility, and cross-cultural design patterns.',
    icon: GraduationCap,
    color: 'text-axum-purple',
    bgColor: 'bg-axum-purple/10',
  },
  {
    id: 4,
    type: 'achievement',
    title: 'Best Design System Award',
    company: 'Ethiopian Tech Awards',
    period: '2023',
    description: 'Recognized for creating innovative design systems that blend Ethiopian heritage with modern UX principles.',
    icon: Award,
    color: 'text-sunset-gold',
    bgColor: 'bg-sunset-gold/10',
  },
];

export default function Timeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Journey & <span className="text-ethiopian-green">Experience</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            My professional path through design and development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className={`flex ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              } items-start mb-12`}
            >
              {/* Timeline Line */}
              <div className="flex flex-col items-center w-12 mx-4">
                <div
                  className={`w-12 h-12 rounded-full ${item.bgColor} flex items-center justify-center ${item.color} mb-2`}
                >
                  <item.icon size={20} />
                </div>
                {index !== timelineData.length - 1 && (
                  <div className="w-1 bg-neutral-300 flex-grow" />
                )}
              </div>

              {/* Content */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`flex-1 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  index % 2 === 0 ? 'ml-4' : 'mr-4'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                  <h3 className="text-xl font-display font-semibold text-neutral-900">
                    {item.title}
                  </h3>
                  <span className="text-sunset-gold font-medium text-sm mt-1 sm:mt-0">
                    {item.period}
                  </span>
                </div>
                
                <p className="text-ethiopian-green font-medium mb-3">
                  {item.company}
                </p>
                
                <p className="text-neutral-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Type Badge */}
                <div className="mt-4">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-medium rounded-full capitalize ${
                      item.type === 'work'
                        ? 'bg-ethiopian-green/10 text-ethiopian-green'
                        : item.type === 'education'
                        ? 'bg-blue-nile/10 text-blue-nile'
                        : 'bg-sunset-gold/10 text-sunset-gold'
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