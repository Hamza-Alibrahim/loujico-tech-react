/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();

  const currentLocale = i18n.language;
  const isRtl = currentLocale === "ar";

  return (
    <section id="about" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-electric-violet/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-royal-purple/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            {t("about.title")}{" "}
            <span className="bg-linear-to-r from-electric-violet to-royal-purple bg-clip-text text-transparent">
              {t("about.titleHighlight")}
            </span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-linear-to-r from-electric-violet to-royal-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-electric-violet/30 transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                {t("about.vision")}
              </h3>
              <p className="text-base sm:text-lg text-soft-lavender/80 leading-relaxed">
                {t("about.visionText")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-electric-violet/30 transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                {t("about.mission")}
              </h3>
              <p className="text-base sm:text-lg text-soft-lavender/80 leading-relaxed">
                {t("about.missionText")}
              </p>
            </motion.div>
          </motion.div>

          {/* Visual Elements & Stats */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Company Visual Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-linear-to-br from-electric-violet/20 to-royal-purple/20 backdrop-blur-sm border border-electric-violet/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-electric-violet/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-electric-violet"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {t("about.location")}
              </h3>
              <p className="text-sm sm:text-base text-soft-lavender/70">
                {t("about.headquarters")}
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 gap-4 sm:gap-6"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center hover:border-electric-violet/30 transition-all duration-300 group">
                <div className="text-2xl sm:text-3xl font-bold text-electric-violet mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                  +50
                </div>
                <div className="text-soft-lavender/70 text-xs sm:text-sm">
                  {t("about.techProjects")}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center hover:border-electric-violet/30 transition-all duration-300 group">
                <div className="text-2xl sm:text-3xl font-bold text-royal-purple mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                  +30
                </div>
                <div className="text-soft-lavender/70 text-xs sm:text-sm">
                  {t("about.satisfiedClients")}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center hover:border-electric-violet/30 transition-all duration-300 group">
                <div className="text-2xl sm:text-3xl font-bold text-electric-violet mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>
                <div className="text-soft-lavender/70 text-xs sm:text-sm">
                  {t("about.technicalSupport")}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center hover:border-electric-violet/30 transition-all duration-300 group">
                <div className="text-2xl sm:text-3xl font-bold text-royal-purple mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                  100%
                </div>
                <div className="text-soft-lavender/70 text-xs sm:text-sm">
                  {t("about.qualityInnovation")}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <motion.a
                href="#services"
                className="inline-flex items-center gap-2 bg-linear-to-r from-electric-violet to-royal-purple hover:from-royal-purple hover:to-electric-violet text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-electric-violet/30 hover:scale-105 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{t("about.cta")}</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
