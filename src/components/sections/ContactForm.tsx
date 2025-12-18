'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactForm() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'dinksiraelisa@gmail.com', href: 'mailto:dinksiraelisa@gmail.com' },
    { icon: Phone, label: 'Phone', value: '0949765679', href: 'tel:0949765679' },
    { icon: MapPin, label: 'Location', value: 'Addis Ababa, Ethiopia', href: '#' },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-neutral-900 dark:text-white">
            Let's <span className="text-ethiopian-green">Connect</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-col space-y-8"
          >
            <div className="bg-neutral-50 dark:bg-neutral-800 rounded-3xl p-8 backdrop-blur-md shadow-lg dark:shadow-gray-700 transition-colors duration-300">
              <h3 className="text-2xl font-display font-semibold mb-6 text-neutral-900 dark:text-white">
                Get in Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, idx) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.label !== 'Location' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white dark:hover:bg-neutral-700 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-ethiopian-green/10 text-ethiopian-green rounded-lg group-hover:bg-ethiopian-green group-hover:text-white transition-all duration-300">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">{item.label}</p>
                      <p className="font-medium text-neutral-900 dark:text-white group-hover:text-ethiopian-green transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Note */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="mt-8 p-4 bg-sunset-gold/10 dark:bg-sunset-gold/20 rounded-xl border border-sunset-gold/20 text-center"
              >
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  Let's connect with warmth and creativity
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-neutral-800 backdrop-blur-md bg-opacity-80 dark:bg-opacity-50 p-8 rounded-3xl shadow-lg dark:shadow-gray-700 border border-neutral-200 dark:border-neutral-700 transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-ethiopian-green focus:border-transparent transition-all duration-300 bg-transparent text-neutral-900 dark:text-white"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-ethiopian-green focus:border-transparent transition-all duration-300 bg-transparent text-neutral-900 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-ethiopian-green focus:border-transparent transition-all duration-300 bg-transparent text-neutral-900 dark:text-white"
                  placeholder="What's this about?"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-ethiopian-green focus:border-transparent transition-all duration-300 resize-vertical bg-transparent text-neutral-900 dark:text-white"
                  placeholder="Tell me about your project, ideas, or just say hello..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-ethiopian-green text-white py-4 px-8 rounded-xl font-semibold text-lg hover:bg-green-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
