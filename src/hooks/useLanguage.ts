import { useState, useEffect } from 'react';
import { Language } from '../types/translations';

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    // Get saved language from localStorage or default to German
    const saved = localStorage.getItem('language') as Language;
    return saved || 'de';
  });

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('language', currentLanguage);
  }, [currentLanguage]);

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  return {
    currentLanguage,
    changeLanguage
  };
};