// components/projectcard/Eventify.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Design Tools Icons
const FigmaIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="currentColor">
    <path fill="#f4511e" d="M12 4h4v8h-4a4 4 0 0 1-4-4a4 4 0 0 1 4-4"/>
    <path fill="#ff8a65" d="M20 12h-4V4h4a4 4 0 0 1 4 4a4 4 0 0 1-4 4"/>
    <rect x="16" y="12" fill="#29b6f6" rx="4" transform="rotate(180 20 16)"/>
    <path fill="#7c4dff" d="M12 12h4v8h-4a4 4 0 0 1-4-4a4 4 0 0 1 4-4"/>
    <path fill="#00e676" d="M12 20h4v4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4"/>
  </svg>
);

const PrototypeIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>
  </svg>
);

const WireframeIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v10H7V7zm2 2v6h6V9H9zm2 2h2v2h-2v-2z"/>
  </svg>
);

const UserFlowIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
  </svg>
);

const DesignSystemIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
  </svg>
);

const MobileDesignIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14z"/>
  </svg>
);

const Eventify = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const themeColor = "#F65857";
  const designTools = [
    { name: "Figma", icon: FigmaIcon },
    { name: "Wireframing", icon: WireframeIcon },
    { name: "Prototyping", icon: PrototypeIcon },
    { name: "User Flow Design", icon: UserFlowIcon },
    { name: "Design System", icon: DesignSystemIcon },
    { name: "Mobile UI Design", icon: MobileDesignIcon }
  ];

  const handleFigmaClick = () => {
    if (typeof window !== 'undefined') {
      window.open('https://www.figma.com/design/Ur8u3Lqjjx8LZOQwJTYaxv/premium-event-management-app--Eventify-V2-?node-id=1-10&p=f&t=hLSl32cx0qQTs8pB-0', '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="group relative rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border overflow-hidden"
      style={{ 
        backgroundColor: themeColor,
        borderColor: '#d44c4c'
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(${themeColor} 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
      </div>
      
      {/* Top Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/30" />
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Content - Design Preview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:w-2/5"
          >
            <div className="relative">
              {/* Design Preview Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl group/image h-full min-h-80 bg-white/10 backdrop-blur-sm border-2 border-white/20"
              >
                {/* Design Preview Image */}
                <div className="relative w-full h-full flex items-center justify-center p-8">
                  {/* Mockup Frames */}
                  <div className="absolute top-8 left-8 w-32 h-56 bg-white rounded-2xl shadow-xl transform -rotate-6">
                    <img 
                      src="/eventify-mobile-1.png" 
                      alt="Eventify Mobile Screen 1"
                      className="w-full h-full object-cover rounded-2xl"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://placehold.co/128x224/F65857/FFFFFF/png?text=Event+Details';
                      }}
                    />
                  </div>
                  <div className="absolute top-12 left-24 w-32 h-56 bg-white rounded-2xl shadow-xl transform rotate-3">
                    <img 
                      src="/eventify-mobile-2.png" 
                      alt="Eventify Mobile Screen 2"
                      className="w-full h-full object-cover rounded-2xl"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://placehold.co/128x224/F65857/FFFFFF/png?text=Ticket+Booking';
                      }}
                    />
                  </div>
                  <div className="absolute top-16 left-40 w-32 h-56 bg-white rounded-2xl shadow-xl transform rotate-12">
                    <img 
                      src="/eventify-mobile-3.png" 
                      alt="Eventify Mobile Screen 3"
                      className="w-full h-full object-cover rounded-2xl"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://placehold.co/128x224/F65857/FFFFFF/png?text=Event+Feed';
                      }}
                    />
                  </div>
                </div>
                
                {/* Blurry Bottom Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent backdrop-blur-sm" />
                
                {/* Figma Button */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-xs">
                  <motion.button
                    onClick={handleFigmaClick}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/button border-2 border-white cursor-pointer"
                  >
                    <FigmaIcon className="w-5 h-5" />
                    <span className="text-sm">View Figma Design</span>
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
                className="absolute -top-2 -left-2 w-6 h-6 rounded-lg shadow-lg bg-white"
              />
              <motion.div
                animate={{ 
                  y: [0, 8, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-2 -right-2 w-4 h-4 rounded-lg shadow-lg bg-white/70"
              />
            </div>
          </motion.div>

          {/* Right Content - Design Information */}
          <div className="flex-1 space-y-6">
            {/* Header with Design Badge */}
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg overflow-hidden border-2 border-white"
                >
                  <div className="text-2xl font-bold" style={{ color: themeColor }}>E</div>
                </motion.div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold text-white">
                      Eventify
                    </h3>
                    <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full border border-white/30">
                      UI/UX Design
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-white/90 mt-1">
                    Event Management App Design
                  </p>
                </div>
              </div>
              <p className="text-white/90 text-lg leading-relaxed">
                A comprehensive mobile app design for event management, featuring intuitive user flows, modern aesthetics, and seamless navigation for users, guests, and organizers.
              </p>
            </div>

            {/* Design Features */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                Design Features
              </h4>
              <ul className="space-y-2">
                <motion.li 
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-3 text-white/90"
                >
                  <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></div>
                  Simple and clear layout with minimal navigation steps for all user roles
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-3 text-white/90"
                >
                  <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></div>
                  Modern, clean typography supporting optimal readability across screens
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-3 text-white/90"
                >
                  <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></div>
                  Task-focused screens reduce user friction and guide through event process
                </motion.li>
              </ul>
            </div>

            {/* Design Process */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                Design Process
              </h4>
              <ul className="space-y-2">
                <motion.li 
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-3 text-white/90"
                >
                  <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></div>
                  Comprehensive user flows designed for 3 distinct user roles
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-3 text-white/90"
                >
                  <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></div>
                  Created scalable design system with #F65857 as primary color theme
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 }}
                  className="flex items-center gap-3 text-white/90"
                >
                  <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></div>
                  Wireframe → Prototype → High-fidelity design iterations
                </motion.li>
              </ul>
            </div>

            {/* Design Tools */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                Design Tools & Methods
              </h4>
              <div className="flex flex-wrap gap-3">
                {designTools.map((tool, index) => {
                  const ToolIcon = tool.icon;
                  return (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-xl group/tech hover:bg-white/20 transition-colors border border-white/20 hover:border-white/30"
                    >
                      <ToolIcon className="w-4 h-4 text-white" />
                      <span className="text-sm font-medium text-white">
                        {tool.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Event Types */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                Supported Event Types
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Conferences", "Workshops", "Meetups", "Social Events", "Corporate", "Concerts", "Seminars", "Networking"].map((type, index) => (
                  <motion.span
                    key={type}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.9 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 text-xs font-medium rounded-full border bg-white/10 hover:bg-white/20 transition-colors"
                    style={{ 
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                      color: 'white'
                    }}
                  >
                    {type}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Color Palette */}
            <div className="p-4 rounded-lg border bg-white/5 border-white/20">
              <h4 className="font-semibold text-white mb-3">Design Color Palette</h4>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg shadow-lg" style={{ backgroundColor: themeColor }} />
                  <div>
                    <div className="text-sm font-medium text-white">#F65857</div>
                    <div className="text-xs text-white/70">Primary Color</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg shadow-lg bg-white" />
                  <div>
                    <div className="text-sm font-medium text-white">#FFFFFF</div>
                    <div className="text-xs text-white/70">Background</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg shadow-lg bg-gray-800" />
                  <div>
                    <div className="text-sm font-medium text-white">#1F2937</div>
                    <div className="text-xs text-white/70">Text</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Eventify;