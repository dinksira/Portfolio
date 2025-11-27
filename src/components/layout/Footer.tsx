import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/dinksira', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/dinksira', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/dinksira', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@dinksira.com', label: 'Email' },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-100">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex items-center space-x-2 mb-4"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-ethiopian-green to-sunset-gold rounded-lg" />
              <span className="font-display text-xl font-bold">
                Dinksira Elsa
              </span>
            </motion.div>
            <p className="text-neutral-400 max-w-md">
              UI/UX Designer & Frontend Developer creating beautiful, functional 
              experiences that honor Ethiopian heritage through modern design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#home" className="hover:text-sunset-gold transition-colors">Home</a></li>
              <li><a href="#projects" className="hover:text-sunset-gold transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-sunset-gold transition-colors">Skills</a></li>
              <li><a href="#experience" className="hover:text-sunset-gold transition-colors">Experience</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-display font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2 bg-neutral-800 rounded-lg hover:bg-ethiopian-green transition-all duration-300"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            © {currentYear} Dinksira Elsa. All rights reserved.
          </p>
          <p className="text-neutral-400 text-sm mt-2 md:mt-0">
            Built with ❤️ using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}