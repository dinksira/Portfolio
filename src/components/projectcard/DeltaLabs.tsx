'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

const FigmaIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="currentColor">
    <path fill="#f4511e" d="M12 4h4v8h-4a4 4 0 0 1-4-4a4 4 0 0 1 4-4"/>
    <path fill="#ff8a65" d="M20 12h-4V4h4a4 4 0 0 1 4 4a4 4 0 0 1-4 4"/>
    <rect x="16" y="12" fill="#29b6f6" rx="4" transform="rotate(180 20 16)"/>
    <path fill="#7c4dff" d="M12 12h4v8h-4a4 4 0 0 1-4-4a4 4 0 0 1 4-4"/>
    <path fill="#00e676" d="M12 20h4v4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4"/>
  </svg>
);

// GitHub Icon
const GitHubIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.337-3.369-1.337-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.022.8-.223 1.65-.334 2.5-.338.85.004 1.7.115 2.5.338 1.91-1.291 2.75-1.022 2.75-1.022.544 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
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
    { name: "Vite", icon: ViteIcon },
    { name: "Figma", icon: FigmaIcon }
  ];

  const handleFigmaClick = () => {
    window.open('https://www.figma.com/design/FKY5f0yd3fSsTmgjERfFHb/Education-UIUX?node-id=0-1&p=f&t=eVN64FtUWw0NKS1Z-0', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/Delta-Rabbit/Delta_Labs', '_blank');
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="group relative bg-[#174A5F] rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-[#1E5A75] hover:border-[#2A7A9A] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#174A5F] via-[#1E5A75] to-[#0F3A4F] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
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
                
                {/* Blurry Bottom Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#174A5F]/90 to-transparent backdrop-blur-sm" />
                
                {/* Button Container */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row gap-3 w-full max-w-xs">
                  {/* Figma Link Button - White with black text and border */}
                  <motion.button
                    onClick={handleFigmaClick}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-white hover:bg-gray-100 text-black px-4 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/button border-2 border-gray-300 hover:border-gray-400"
                  >
                    <FigmaIcon className="w-4 h-4" />
                    <span className="text-sm">Figma Design</span>
                  </motion.button>

                  {/* GitHub Link Button */}
                  <motion.button
                    onClick={handleGitHubClick}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gray-800 hover:bg-gray-900 text-white px-4 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/button border border-gray-600/50"
                  >
                    <GitHubIcon className="w-4 h-4" />
                    <span className="text-sm">GitHub Repo</span>
                  </motion.button>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -left-2 w-6 h-6 bg-[#2A7A9A] rounded-lg"
              />
              <motion.div
                animate={{ 
                  y: [0, 8, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#3A8AAA] rounded-lg"
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
                  className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg overflow-hidden"
                >
                  <img 
                    src="/DeltaLabslogo.png" 
                    alt="Delta Labs Logo"
                    className="w-full h-full object-contain p-1"
                  />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#A8D8EA] transition-colors">
                    Delta Labs
                  </h3>
                  <p className="text-lg text-[#A8D8EA] font-semibold">
                    Educational Learning Platform
                  </p>
                </div>
              </div>
              <p className="text-[#C4E4F2] text-lg leading-relaxed">
                An interactive educational platform exploring AI-powered learning features and engaging content delivery with modern UX patterns.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white flex items-center gap-2">
                <div className="w-2 h-2 bg-[#A8D8EA] rounded-full"></div>
                Key Achievements
              </h4>
              <ul className="space-y-2">
                <motion.li 
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-3 text-[#C4E4F2]"
                >
                  <div className="w-1.5 h-1.5 bg-[#A8D8EA] rounded-full flex-shrink-0"></div>
                  Built modular React app with intuitive navigation & smooth course progression
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-3 text-[#C4E4F2]"
                >
                  <div className="w-1.5 h-1.5 bg-[#A8D8EA] rounded-full flex-shrink-0"></div>
                  Developed engaging learning modules with interactive content & progress tracking
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-3 text-[#C4E4F2]"
                >
                  <div className="w-1.5 h-1.5 bg-[#A8D8EA] rounded-full flex-shrink-0"></div>
                  Implemented scalable educational architecture with TypeScript & custom learning hooks
                </motion.li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white flex items-center gap-2">
                <div className="w-2 h-2 bg-[#2A7A9A] rounded-full"></div>
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
                      className="flex items-center gap-2 bg-[#1E5A75] backdrop-blur-sm px-3 py-2 rounded-xl group/tech hover:bg-[#2A7A9A] transition-colors border border-[#2A7A9A]/50 hover:border-[#A8D8EA]/50"
                    >
                      <TechIcon className="w-4 h-4 text-[#A8D8EA] group-hover/tech:text-white transition-colors" />
                      <span className="text-sm font-medium text-[#A8D8EA] group-hover/tech:text-white transition-colors">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DeltaLabs;