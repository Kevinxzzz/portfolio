"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";
import { useLanguage, Language } from "@/i18n/LanguageContext";

import styles from "./HeaderControls.module.scss";

export function HeaderControls() {
  const { language, setLanguage, dict } = useLanguage();
  const { theme, toggleTheme, mounted } = useTheme();
  
  const [langOpen, setLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    
    if (langOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [langOpen]);

  const handleSelectLanguage = (lang: Language) => {
    setLanguage(lang);
    setLangOpen(false);
  };

  return (
    <div className={styles.controls}>
      {/* Language Dropdown */}
      <div className={styles.dropdownContainer} ref={dropdownRef}>
        <button 
          type="button"
          className={styles.button}
          onClick={() => setLangOpen(!langOpen)}
          aria-expanded={langOpen}
          aria-haspopup="true"
        >
          Select language
        </button>
        
        <div className={styles.dropdownMenu} data-open={langOpen} role="menu">
          <button
            type="button"
            className={styles.option}
            data-active={language === "en"}
            onClick={() => handleSelectLanguage("en")}
            role="menuitem"
          >
            English
          </button>
          <button
            type="button"
            className={styles.option}
            data-active={language === "pt"}
            onClick={() => handleSelectLanguage("pt")}
            role="menuitem"
          >
            Português (BR)
          </button>
        </div>
      </div>

      <span className={styles.separator} aria-hidden="true">|</span>

      {/* Theme Toggle */}
      <button 
        type="button" 
        className={styles.button} 
        onClick={toggleTheme}
      >
        {mounted && theme === "dark" ? "Light mode" : mounted && theme === "light" ? "Dark mode" : "Light mode"}
      </button>

      <span className={styles.separator} aria-hidden="true">|</span>

      {/* Static text */}
      <span className={styles.button} style={{ pointerEvents: "none", color: "var(--fg-muted)" }}>
        {dict.ui.navigateMenu}
      </span>
    </div>
  );
}
