import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext({
  lang: 'uz',
  setLang: () => {},
  t: (val) => val,
});

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    return localStorage.getItem('portfolio_lang') || 'uz';
  });

  const setLang = (newLang) => {
    setLangState(newLang);
    localStorage.setItem('portfolio_lang', newLang);
  };

  useEffect(() => {
    localStorage.setItem('portfolio_lang', lang);
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  // Resolves localized objects like { uz: '...', en: '...', ru: '...' }
  const t = (item) => {
    if (!item) return '';
    if (typeof item === 'object' && !Array.isArray(item)) {
      return item[lang] || item.uz || item.en || item.ru || '';
    }
    return item;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
