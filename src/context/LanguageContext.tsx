"use client";
import React, { createContext, useContext, useState } from 'react';
import { translations, Language } from '../app/translations';

export type LanguageContextType = { 
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.it;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('it');

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage deve essere usato dentro LanguageProvider");
  return context;
};