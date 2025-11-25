/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { i18n } = useTranslation();

  const switchLanguage = (locale) => {
    i18n.changeLanguage(locale);
    setIsLanguageOpen(false);

    // Optional: Save to localStorage for persistence
    localStorage.setItem("preferred-language", locale);
  };

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];
  const isRtl = i18n.language === "ar";

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="relative"
    >
      <motion.button
        onClick={() => setIsLanguageOpen(!isLanguageOpen)}
        className={`text-white/90 transition-colors duration-300 font-medium flex items-center gap-1 px-4 py-2 rounded-lg hover:scale-105 hover:text-white hover:bg-white/5 border border-transparent hover:border-electric-violet ${
          isLanguageOpen
            ? "scale-105 text-white bg-white/5 border-electric-violet!"
            : ""
        }`}
      >
        <span className="text-sm font-medium">{currentLanguage.name}</span>
        <motion.svg
          animate={{ rotate: isLanguageOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
        {i18n.language !== currentLanguage.code && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-3 h-3 border border-white border-t-transparent rounded-full"
          />
        )}
      </motion.button>

      {/* Language Dropdown */}
      <AnimatePresence>
        {isLanguageOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className={`absolute top-full ${
              isRtl ? "left-0" : "right-0"
            } mt-2 w-40 bg-deep-space/95 backdrop-blur-xl border border-electric-violet/30 rounded-xl shadow-2xl shadow-electric-violet/20 overflow-hidden z-50`}
          >
            <div className="p-2">
              {languages.map((language, index) => (
                <button
                  key={language.code}
                  onClick={() => switchLanguage(language.code)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 group ${
                    i18n.language === language.code
                      ? "bg-electric-violet/20 text-white"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  } ${index !== languages.length - 1 ? "mb-1" : ""}`}
                >
                  <span className="font-medium">{language.name}</span>
                  <span className="text-lg">{language.flag}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LanguageSwitcher;
