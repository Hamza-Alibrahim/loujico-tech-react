/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background that extends BEHIND the navbar */}
      <div className="absolute inset-0 "></div>

      {/* Animated Background Orbs */}
      <div className="absolute top-1/4 -left-10 w-60 h-60 sm:w-72 sm:h-72 bg-electric-violet/70 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-10 w-60 h-60 sm:w-96 sm:h-96 bg-royal-purple rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>

      {/* Content - This starts BELOW the navbar */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center rtl:lg:grid-flow-row-dense">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left rtl:lg:text-right"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 text-left rtl:text-right"
            >
              <span className="text-white">{t("hero.title1")} </span>
              <span className="bg-linear-to-r from-electric-violet to-royal-purple bg-clip-text text-transparent">
                {t("hero.titleHighlight")}
              </span>
              <span className="text-white"> {t("hero.title2")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-soft-lavender/80 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 rtl:text-right"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="text-sm sm:text-base bg-electric-violet hover:bg-royal-purple text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-electric-violet/25 text-center"
              >
                {t("hero.ctaPrimary")}
              </a>

              <a
                href="#services"
                className="text-sm sm:text-base border border-electric-violet text-electric-violet hover:bg-electric-violet hover:text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 text-center"
              >
                {t("hero.ctaSecondary")}
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-soft-lavender/20"
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  +50
                </div>
                <div className="text-soft-lavender/60 text-xs sm:text-sm">
                  {t("hero.stats.projects")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  +30
                </div>
                <div className="text-soft-lavender/60 text-xs sm:text-sm">
                  {t("hero.stats.clients")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  24/7
                </div>
                <div className="text-soft-lavender/60 text-xs sm:text-sm">
                  {t("hero.stats.support")}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative max-sm:hidden"
          >
            <div className="relative bg-linear-to-br from-electric-violet/20 to-royal-purple/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-electric-violet/30">
              {/* Abstract Tech Visualization */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {[...Array(9)].map((_, index) => (
                  <div key={index} className="space-y-2 sm:space-y-4">
                    <div className="h-3 sm:h-4 bg-electric-violet rounded-full"></div>
                    <div className="h-3 sm:h-4 bg-electric-violet/60 rounded-full"></div>
                    <div className="h-3 sm:h-4 bg-electric-violet/40 rounded-full"></div>
                  </div>
                ))}
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-electric-violet rounded-full shadow-lg shadow-electric-violet/50"></div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 bg-royal-purple rounded-full shadow-lg shadow-royal-purple/50"></div>
              <div className="absolute top-1/2 -right-4 sm:-right-6 w-4 h-4 sm:w-6 sm:h-6 bg-soft-lavender rounded-lg transform rotate-45 shadow-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
