/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { t } = useTranslation();

  const servicesData = {
    "tech-solutions": {
      title: t("services.techSolutionsTitle"),
      icon: "🔧",
      services: [
        t("services.techSolution1"),
        t("services.techSolution2"),
        t("services.techSolution3"),
        t("services.techSolution4"),
      ],
    },
    hardware: {
      title: t("services.hardwareTitle"),
      icon: "💻",
      services: [
        t("services.hardware1"),
        t("services.hardware2"),
        t("services.hardware3"),
        t("services.hardware4"),
      ],
    },
    software: {
      title: t("services.softwareTitle"),
      icon: "📱",
      services: [
        t("services.software1"),
        t("services.software2"),
        t("services.software3"),
        t("services.software4"),
      ],
    },
    "web-mobile": {
      title: t("services.webMobileTitle"),
      icon: "🌐",
      services: [
        t("services.webMobile1"),
        t("services.webMobile2"),
        t("services.webMobile3"),
        t("services.webMobile4"),
      ],
    },
    cybersecurity: {
      title: t("services.cybersecurityTitle"),
      icon: "🛡️",
      services: [
        t("services.cybersecurity1"),
        t("services.cybersecurity2"),
        t("services.cybersecurity3"),
        t("services.cybersecurity4"),
      ],
    },
    training: {
      title: t("services.trainingTitle"),
      icon: "🎓",
      services: [
        t("services.training1"),
        t("services.training2"),
        t("services.training3"),
        t("services.training4"),
      ],
    },
    support: {
      title: t("services.supportTitle"),
      icon: "⚡",
      services: [
        t("services.support1"),
        t("services.support2"),
        t("services.support3"),
        t("services.support4"),
      ],
    },
  };

  const servicesEntries = Object.entries(servicesData);
  const totalServices = servicesEntries.length;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="services" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/6 -left-20 w-80 h-80 bg-electric-violet/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/6 -right-20 w-96 h-96 bg-royal-purple/10 rounded-full blur-3xl"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(138,43,226,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(138,43,226,0.03)_1px,transparent_1px)] bg-size-[60px_60px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            <span className="bg-linear-to-r from-electric-violet to-royal-purple bg-clip-text text-transparent">
              {t("services.title")}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-soft-lavender/80 max-w-2xl mx-auto mb-6 sm:mb-8">
            {t("services.description")}
          </p>
          <div className="w-20 sm:w-24 h-1 bg-linear-to-r from-electric-violet to-royal-purple mx-auto rounded-full"></div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
        >
          {servicesEntries.map(([key, service], index) => {
            const isLastItem = index === totalServices - 1;
            const isOddTotal = totalServices % 2 !== 0;

            return (
              <motion.div
                key={key}
                variants={itemVariants}
                className={`group cursor-pointer ${
                  isLastItem && isOddTotal
                    ? "md:col-span-2 lg:col-span-1 lg:col-start-2"
                    : ""
                }`}
                whileHover={{ y: -5 }}
                onClick={() =>
                  setActiveCategory(activeCategory === key ? "all" : key)
                }
              >
                <div
                  className={`bg-white/5 backdrop-blur-sm border rounded-xl sm:rounded-2xl p-4 sm:p-6 h-full transition-all duration-300 ${
                    activeCategory === key
                      ? "border-electric-violet bg-electric-violet/10 shadow-2xl shadow-electric-violet/20"
                      : "border-white/10 hover:border-electric-violet/30 hover:bg-white/10"
                  } ${isLastItem && isOddTotal ? "max-w-md mx-auto" : ""}`}
                >
                  {/* Service Icon */}
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 text-xl sm:text-2xl transition-all duration-300 ${
                      activeCategory === key
                        ? "bg-electric-violet/20 text-electric-violet"
                        : "bg-white/5 text-soft-lavender group-hover:bg-electric-violet/20 group-hover:text-electric-violet"
                    }`}
                  >
                    {service.icon}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                    {service.title}
                  </h3>

                  {/* Service List */}
                  <ul className="space-y-1 sm:space-y-2">
                    {service.services.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        variants={listItemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: itemIndex * 0.1 }}
                        className="flex items-center gap-2 text-soft-lavender/70 text-xs sm:text-sm"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                            activeCategory === key
                              ? "bg-electric-violet"
                              : "bg-soft-lavender/50 group-hover:bg-electric-violet"
                          }`}
                        ></div>
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Hover Indicator */}
                  <div
                    className={`mt-3 sm:mt-4 pt-3 sm:pt-4 border-t transition-all duration-300 ${
                      activeCategory === key
                        ? "border-electric-violet/30"
                        : "border-white/10 group-hover:border-electric-violet/30"
                    }`}
                  >
                    <span
                      className={`text-xs sm:text-sm font-medium transition-all duration-300 ${
                        activeCategory === key
                          ? "text-electric-violet"
                          : "text-soft-lavender/60 group-hover:text-electric-violet"
                      }`}
                    >
                      {activeCategory === key
                        ? t("services.selected")
                        : t("services.viewDetails")}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-linear-to-r from-electric-violet/10 to-royal-purple/10 backdrop-blur-sm border border-electric-violet/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              {t("services.ctaTitle")}
            </h3>
            <p className="text-sm sm:text-base text-soft-lavender/80 mb-4 sm:mb-6 max-w-2xl mx-auto">
              {t("services.ctaDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.a
                href="#contact"
                className="bg-linear-to-r from-electric-violet to-royal-purple hover:from-royal-purple hover:to-electric-violet text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-electric-violet/30 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{t("services.orderService")}</span>
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.a>
              <motion.a
                href="#about"
                className="border border-electric-violet text-electric-violet hover:bg-electric-violet hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all duration-300 font-medium inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{t("services.learnMore")}</span>
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
