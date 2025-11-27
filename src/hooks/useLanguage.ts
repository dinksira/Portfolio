'use client';

import { useState, useEffect } from 'react';

type Language = 'en' | 'am';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Check for saved language preference or default to 'en'
    const saved = localStorage.getItem('language') as Language;
    if (saved) {
      setLanguage(saved);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'am' : 'en';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
    
    // Update document direction for RTL support
    document.documentElement.dir = newLang === 'am' ? 'rtl' : 'ltr';
  };

  return { language, toggleLanguage };
}