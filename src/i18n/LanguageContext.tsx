"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { en } from "./en";
import { pt } from "./pt";

export type Language = "en" | "pt";
export type Dictionary = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dict: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en"); // Default is English
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const saved = localStorage.getItem("language") as Language;
    if (saved === "pt" || saved === "en") {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const dict = language === "pt" ? pt : en;
  const safeDict = mounted ? dict : en; // Always default to en for hydration safety

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dict: safeDict }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
