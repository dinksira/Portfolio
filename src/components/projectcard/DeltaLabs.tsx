'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Tech Stack Icons
const ReactIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 18.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5zm0-12c-3.03 0-5.5 2.47-5.5 5.5s2.47 5.5 5.5 5.5 5.5-2.47 5.5-5.5-2.47-5.5-5.5-5.5z"/>
    <path d="M12 21.35c-5.24 0-9.5-4.26-9.5-9.5s4.26-9.5 9.5-9.5 9.5 4.26 9.5 9.5-4.26 9.5-9.5 9.5zm0-18c-4.69 0-8.5 3.81-8.5 8.5s3.81 8.5 8.5 8.5 8.5-3.81 8.5-8.5-3.81-8.5-8.5-8.5z"/>
  </svg>
);

const TypeScriptIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0h-21.75zm10.219 20.25c-3.125 0-4.688-1.458-4.688-3.438 0-2.344 1.667-3.385 4.219-3.906l1.25-.26c1.302-.26 1.875-.625 1.875-1.25 0-.625-.521-1.042-1.458-1.042-.938 0-1.667.26-2.552.938l-1.458-1.875c1.146-1.042 2.708-1.562 4.219-1.562 2.969 0 4.479 1.458 4.479 3.333 0 2.239-1.667 3.333-4.271 3.854l-1.25.26c-1.042.26-1.562.625-1.562 1.25 0 .625.521 1.042 1.667 1.042 1.042 0 1.875-.313 2.813-1.146l1.458 1.667c-1.25 1.25-3.021 1.875-4.792 1.875zm8.906-.521V4.271h-2.813V19.73h2.813z"/>
  </svg>
);

const TailwindIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.85 14.5 6.7 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.15 9.5 17.3 12 17.3c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.85 9.5 12.7 7 12z"/>
  </svg>
);

const ViteIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
);

const DeltaLabs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const techStack = [
    { name: "React", icon: ReactIcon },
    { name: "TypeScript", icon: TypeScriptIcon },
    { name: "Tailwind CSS", icon: TailwindIcon },
    { name: "Vite", icon: ViteIcon }
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="group relative bg-white dark:bg-neutral-800 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-neutral-100 dark:border-neutral-700 hover:border-ethiopian-green/30 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ethiopian-green/5 via-transparent to-axum-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Content - Project Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:w-2/5"
          >
            <div className="relative">
              {/* Image Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl group/image"
              >
                {/* Main Image */}
                <img 
                  src="/DeltaLabs.png" 
                  alt="Delta Labs Educational Platform"
                  className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover/image:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 }}
                  className="absolute top-4 right-4 bg-gradient-to-r from-ethiopian-green to-sunset-gold text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
                >
                  Live Project
                </motion.div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -left-2 w-6 h-6 bg-sunset-gold rounded-lg"
              />
              <motion.div
                animate={{ 
                  y: [0, 8, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-2 -right-2 w-4 h-4 bg-ethiopian-green rounded-lg"
              />
            </div>
          </motion.div>

          {/* Right Content - Project Info */}
          <div className="flex-1 space-y-6">
            {/* Header */}
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-gradient-to-r from-ethiopian-green to-sunset-gold rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <span className="text-white font-bold text-lg">Δ</span>
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-ethiopian-green transition-colors">
                    Delta Labs
                  </h3>
                  <p className="text-lg text-ethiopian-green font-semibold">
                    Educational Learning Platform
                  </p>
                </div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed">
                An interactive educational platform exploring AI-powered learning features and engaging content delivery with modern UX patterns.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              <h4 className="font-semibold text-neutral-900 dark:text-white flex items-center gap-2">
                <div className="w-2 h-2 bg-sunset-gold rounded-full"></div>
                Key Achievements
              </h4>
              <ul className="space-y-2">
                <motion.li 
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300"
                >
                  <div className="w-1.5 h-1.5 bg-ethiopian-green rounded-full flex-shrink-0"></div>
                  Built modular React app with intuitive navigation & smooth course progression
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300"
                >
                  <div className="w-1.5 h-1.5 bg-ethiopian-green rounded-full flex-shrink-0"></div>
                  Developed engaging learning modules with interactive content & progress tracking
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300"
                >
                  <div className="w-1.5 h-1.5 bg-ethiopian-green rounded-full flex-shrink-0"></div>
                  Implemented scalable educational architecture with TypeScript & custom learning hooks
                </motion.li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3">
              <h4 className="font-semibold text-neutral-900 dark:text-white flex items-center gap-2">
                <div className="w-2 h-2 bg-axum-purple rounded-full"></div>
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => {
                  const TechIcon = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 bg-neutral-50 dark:bg-neutral-700 px-3 py-2 rounded-xl group/tech hover:bg-ethiopian-green/10 transition-colors border border-neutral-200 dark:border-neutral-600"
                    >
                      <TechIcon className="w-4 h-4 text-neutral-700 dark:text-neutral-300 group-hover/tech:text-ethiopian-green transition-colors" />
                      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 group-hover/tech:text-ethiopian-green transition-colors">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* View Project Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-ethiopian-green to-sunset-gold text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group/button"
              >
                <span>View Project</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="group-hover/button:translate-x-1 transition-transform"
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DeltaLabs;