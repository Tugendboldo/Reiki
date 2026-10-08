import { useState, useEffect } from 'react';
import { Language } from '../types/translations';

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('language') as Language;
      return saved || 'de';
    } catch {
      return 'de';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('language', currentLanguage);
    } catch {
      // ignore storage errors
    }
  }, [currentLanguage]);

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  return {
    currentLanguage,
    changeLanguage
  };
};