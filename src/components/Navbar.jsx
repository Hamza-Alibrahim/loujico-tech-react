/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MobileLanguageSwitcher from "./MobileLanguageSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("navbar.home"), href: "#home" },
    { name: t("navbar.about"), href: "#about" },
    { name: t("navbar.services"), href: "#services" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-deep-space/95 backdrop-blur-md transition-all duration-500 ${
          isScrolled ? "shadow-2xl shadow-electric-violet/10" : ""
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo with Scale Animation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center"
            >
              <a
                href="#home"
                className="text-lg sm:text-xl font-bold text-white transition-all duration-300 whitespace-nowrap flex items-center"
              >
                <div className="relative overflow-hidden group w-10 h-10">
                  <img
                    src="./logo.svg"
                    alt="Logo"
                    className="w-full h-full object-contain relative z-10 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <span className="max-[400px]:hidden">{t("navbar.logo")}</span>
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-5 xl:space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    className="text-sm lg:text-base text-white/90 whitespace-nowrap transition-colors duration-300 font-medium flex items-baseline px-3 lg:px-4 py-2 rounded-lg hover:scale-105 hover:text-white hover:bg-white/5 border border-transparent hover:border-electric-violet"
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}

              <LanguageSwitcher />

              {/* Contact Button with Pulse Animation */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.a
                  href="#contact"
                  className="text-sm lg:text-base whitespace-nowrap bg-linear-to-r from-electric-violet to-royal-purple text-white px-4 lg:px-5 py-2 rounded-lg transition-all duration-300 font-medium shadow-lg relative overflow-hidden"
                  whileHover={{
                    boxShadow: "0 10px 30px rgba(138, 43, 226, 0.4)",
                  }}
                >
                  <span className="relative z-10">{t("navbar.contact")}</span>
                </motion.a>
              </motion.div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex items-center gap-2 sm:gap-3 md:hidden">
              <MobileLanguageSwitcher />

              {/* Mobile Menu Button */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200 border border-white/10"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center space-y-1 relative">
                  <motion.span
                    className="block h-0.5 bg-white rounded-full"
                    animate={{
                      rotate: isMobileMenuOpen ? 45 : 0,
                      y: isMobileMenuOpen ? 5 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <motion.span
                    className="block h-0.5 bg-white rounded-full"
                    animate={{
                      opacity: isMobileMenuOpen ? 0 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <motion.span
                    className="block h-0.5 bg-white rounded-full"
                    animate={{
                      rotate: isMobileMenuOpen ? -45 : 0,
                      y: isMobileMenuOpen ? -5 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Animated Gradient Border Bottom - Starts from center and expands */}
        <motion.div
          className="h-0.5 bg-linear-to-r from-electric-violet to-royal-purple"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ originX: 0.5 }}
        />

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-deep-space/98 backdrop-blur-xl border-t border-electric-violet/30"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          setIsMobileMenuOpen(false);
                          setTimeout(() => {
                            const target = document.querySelector(item.href);
                            if (target) {
                              target.scrollIntoView({ behavior: "smooth" });
                            }
                          }, 300);
                        }}
                        className="block py-3 text-base text-white/90 hover:text-white transition-colors duration-300 font-medium border-b border-white/10 hover:pr-4"
                        whileHover={{ x: -5 }}
                      >
                        {item.name}
                      </motion.a>
                    </motion.div>
                  ))}

                  <motion.a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      setTimeout(() => {
                        const target = document.querySelector("#contact");
                        if (target) {
                          target.scrollIntoView({ behavior: "smooth" });
                        }
                      }, 300);
                    }}
                    className="block text-base bg-linear-to-r from-electric-violet to-royal-purple hover:from-royal-purple hover:to-electric-violet text-white text-center py-3 rounded-lg transition-all duration-300 font-medium mt-4 shadow-lg hover:shadow-electric-violet/30"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t("navbar.contact")}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
