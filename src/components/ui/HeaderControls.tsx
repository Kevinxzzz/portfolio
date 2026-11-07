"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";
import { useLanguage, Language } from "@/i18n/LanguageContext";
import { cn } from "@/utils/cn";

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

  const themeLabel =
    mounted && theme === "dark" ? dict.ui.lightMode : mounted && theme === "light" ? dict.ui.darkMode : dict.ui.lightMode;
  // The icon shows where the toggle goes (same logic as the label).
  const goesDark = mounted && theme === "light";

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
          aria-label={dict.ui.selectLanguage}
        >
          <span className={styles.full}>{dict.ui.selectLanguage}</span>
          <span className={styles.short} aria-hidden="true">{language.toUpperCase()}</span>
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
        aria-label={themeLabel}
      >
        <span className={styles.full}>{themeLabel}</span>
        <svg className={styles.icon} viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
          {goesDark ? (
            <path
              d="M13.25 9.6A5.5 5.5 0 0 1 6.4 2.75a5.5 5.5 0 1 0 6.85 6.85Z"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinejoin="miter"
            />
          ) : (
            <>
              <circle cx="8" cy="8" r="2.75" stroke="currentColor" strokeWidth="1.25" />
              <path
                d="M8 1.5v1.75M8 12.75v1.75M1.5 8h1.75M12.75 8h1.75M3.4 3.4l1.25 1.25M11.35 11.35l1.25 1.25M3.4 12.6l1.25-1.25M11.35 4.65l1.25-1.25"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="square"
              />
            </>
          )}
        </svg>
      </button>

      <span className={styles.separator} aria-hidden="true">|</span>

      {/* Static text */}
      <span className={cn(styles.button, styles.hint)} style={{ pointerEvents: "none", color: "var(--fg-muted)" }}>
        {dict.ui.navigateMenu}
      </span>
    </div>
  );
}
