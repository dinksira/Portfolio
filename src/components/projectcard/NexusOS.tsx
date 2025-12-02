'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Tech Stack Icons
const NextJSIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l5-5-5-5v10z"/>
  </svg>
);

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

const JavaScriptIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635z"/>
  </svg>
);

// External Link Icons
const FigmaIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="currentColor">
    <path fill="#f4511e" d="M12 4h4v8h-4a4 4 0 0 1-4-4a4 4 0 0 1 4-4"/>
    <path fill="#ff8a65" d="M20 12h-4V4h4a4 4 0 0 1 4 4a4 4 0 0 1-4 4"/>
    <rect x="16" y="12" fill="#29b6f6" rx="4" transform="rotate(180 20 16)"/>
    <path fill="#7c4dff" d="M12 12h4v8h-4a4 4 0 0 1-4-4a4 4 0 0 1 4-4"/>
    <path fill="#00e676" d="M12 20h4v4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4"/>
  </svg>
);

const GitHubIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.337-3.369-1.337-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.022.8-.223 1.65-.334 2.5-.338.85.004 1.7.115 2.5.338 1.91-1.291 2.75-1.022 2.75-1.022.544 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

const NexusOS = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const techStack = [
    { name: "Next.js", icon: NextJSIcon },
    { name: "React", icon: ReactIcon },
    { name: "TypeScript", icon: TypeScriptIcon },
    { name: "Tailwind CSS", icon: TailwindIcon },
    { name: "JavaScript", icon: JavaScriptIcon }
  ];

  const handleFigmaClick = () => {
    if (typeof window !== 'undefined') {
      window.open('#', '_blank'); // Add Figma link when available
    }
  };

  const handleGitHubClick = () => {
    if (typeof window !== 'undefined') {
      window.open('#', '_blank'); // Add GitHub link when available
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="group relative bg-[#0a0a10] rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-purple-900/30 hover:border-cyan-500/50 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Cyberpunk Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,currentColor_50%,transparent_51%)] bg-[length:50px_50px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(transparent_49%,currentColor_50%,transparent_51%)] bg-[length:50px_50px]"></div>
      </div>
      
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
              {/* Image Container with Glass Effect */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl group/image h-full min-h-80 bg-gradient-to-br from-gray-900 to-purple-900/50 backdrop-blur-sm"
              >
                {/* Futuristic Dashboard Image - Using Nexus.png */}
                <img 
                  src="/Nexus.png" 
                  alt="Nexus OS Futuristic Dashboard"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover/image:scale-110"
                />
                
                {/* Glowing Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
                
                {/* Glitch Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent animate-[pulse_2s_ease-in-out_infinite]" />
                </div>
                
                {/* Blurry Bottom Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a10]/90 via-[#0a0a10]/50 to-transparent backdrop-blur-sm" />
                
                {/* Button Container */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row gap-3 w-full max-w-xs">
                  {/* Figma Design Button */}
                  <motion.button
                    onClick={handleFigmaClick}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-white/90 hover:bg-white text-black px-4 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/button backdrop-blur-sm border border-white/20"
                  >
                    <FigmaIcon className="w-4 h-4" />
                    <span className="text-sm">Figma Design</span>
                  </motion.button>

                  {/* GitHub Repo Button */}
                  <motion.button
                    onClick={handleGitHubClick}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-4 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/button backdrop-blur-sm border border-cyan-500/30"
                  >
                    <GitHubIcon className="w-4 h-4" />
                    <span className="text-sm">GitHub Repo</span>
                  </motion.button>
                </div>
              </motion.div>

              {/* Animated Decorative Elements */}
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 360, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full"
              />
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -180, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-3 -right-3 w-5 h-5 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg"
              />
            </div>
          </motion.div>

          {/* Right Content - Project Info */}
          <div className="flex-1 space-y-6">
            {/* Header with Cyberpunk Styling */}
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/20 overflow-hidden"
                >
                  {/* Logo Image - Using NexusLogo.png */}
                  <img 
                    src="/NexusLogo.png" 
                    alt="Nexus OS Logo"
                    className="w-full h-full object-contain p-1"
                  />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors bg-gradient-to-r from-white to-cyan-200 bg-clip-text">
                    Nexus OS
                  </h3>
                  <p className="text-lg text-cyan-200 font-semibold">
                    Futuristic Personal Dashboard
                  </p>
                </div>
              </div>
              <p className="text-cyan-100/90 text-lg leading-relaxed">
                A cutting-edge, cyberpunk-inspired personal dashboard built with Next.js, React, and Tailwind CSS.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                Key Achievements
              </h4>
              <ul className="space-y-2">
                <motion.li 
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="flex items-start gap-3 text-cyan-100/90"
                >
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0 mt-2"></div>
                  <span>Engineered a stunning glass-morphism UI with advanced visual effects and multiple interactive widgets</span>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="flex items-start gap-3 text-cyan-100/90"
                >
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0 mt-2"></div>
                  <span>Implemented real-time features including crypto tracking, task management, and system monitoring</span>
                </motion.li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
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
                      whileHover={{ 
                        scale: 1.05,
                        background: "linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(147, 51, 234, 0.2))"
                      }}
                      className="flex items-center gap-2 bg-[#151525] backdrop-blur-sm px-3 py-2 rounded-xl group/tech hover:bg-[#202035] transition-all duration-300 border border-purple-700/30 hover:border-cyan-400/50"
                    >
                      <TechIcon className="w-4 h-4 text-cyan-300 group-hover/tech:text-white transition-colors" />
                      <span className="text-sm font-medium text-cyan-300 group-hover/tech:text-white transition-colors">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Status Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="flex items-center gap-2 pt-2"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-cyan-300 font-medium">Production Ready</span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NexusOS;