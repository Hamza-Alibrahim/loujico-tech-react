/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const quickLinks = [
    { name: t("footer.home"), href: "#home" },
    { name: t("footer.about"), href: "#about" },
    { name: t("footer.services"), href: "#services" },
    { name: t("footer.contact"), href: "#contact" },
  ];

  const services = [
    t("footer.techSolutions"),
    t("footer.hardware"),
    t("footer.software"),
    t("footer.webMobile"),
    t("footer.cybersecurity"),
    t("footer.training"),
    t("footer.support"),
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric-violet/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-royal-purple/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Company Info - Full width on small, full on medium, largest on large */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sm:col-span-6 lg:col-span-5 xl:col-span-4"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="relative overflow-hidden shrink-0 group w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14">
                  <img
                    src="./logo.svg"
                    alt="Logo"
                    className="w-full h-full object-contain relative z-10 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {t("footer.companyName")}
                </h3>
              </div>
              <p className="text-soft-lavender/80 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                {t("footer.description")}
              </p>
              <div className="flex items-center gap-2 text-soft-lavender/60 text-xs sm:text-sm">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                </svg>
                <span>{t("footer.address")}</span>
              </div>
            </motion.div>

            {/* Quick Links - Wraps with other small sections on medium screens */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="sm:col-span-2 lg:col-span-2 xl:col-span-2"
            >
              <h4 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6">
                {t("footer.quickLinks")}
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      className="text-soft-lavender/70 hover:text-electric-violet transition-colors duration-300 text-xs sm:text-sm flex flex-row-reverse justify-end items-center gap-2 group"
                      whileHover={{ x: -5 }}
                    >
                      <svg
                        className="w-2 h-2 sm:w-3 sm:h-3 transform transition-all duration-300 opacity-0 group-hover:opacity-100 rtl:rotate-180"
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
                      <span>{link.name}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services - Wraps with other small sections on medium screens */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sm:col-span-2 lg:col-span-2 xl:col-span-2"
            >
              <h4 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6">
                {t("footer.ourServices")}
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#services"
                      className="text-soft-lavender/70 text-xs sm:text-sm flex items-center gap-2 hover:text-electric-violet transition-colors"
                    >
                      <div className="w-1.5 h-1.5 bg-electric-violet/50 rounded-full"></div>
                      <span>{service}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info - Wraps with other small sections on medium screens */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="sm:col-span-2 lg:col-span-3 xl:col-span-4"
            >
              <h4 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6">
                {t("footer.contactUs")}
              </h4>
              <div className="space-y-3 sm:space-y-4">
                <motion.a
                  href="mailto:info@yousefallouji.com"
                  className="flex items-center gap-2 sm:gap-3 text-soft-lavender/70 hover:text-electric-violet transition-colors duration-300 group"
                  whileHover={{ x: -5 }}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-electric-violet/20 rounded-lg flex items-center justify-center group-hover:bg-electric-violet/30 transition-all duration-300">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-medium">
                      {t("footer.email")}
                    </div>
                    <div className="text-xs">info@yousefallouji.com</div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://wa.me/963996320963"
                  className="flex items-center gap-2 sm:gap-3 text-soft-lavender/70 hover:text-electric-violet transition-colors duration-300 group"
                  whileHover={{ x: -5 }}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-electric-violet/20 rounded-lg flex items-center justify-center group-hover:bg-electric-violet/30 transition-all duration-300">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-medium">
                      {t("footer.whatsapp")}
                    </div>
                    <div className="text-xs">0996320963</div>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-4 sm:py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-soft-lavender/60 text-xs sm:text-sm text-center"
              >
                {t("footer.copyright", { year: currentYear })}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-4 sm:gap-6"
              >
                <span className="text-soft-lavender/60 text-xs sm:text-sm">
                  {t("footer.syrianMade")}
                </span>
                <div className="w-1 h-1 bg-electric-violet/50 rounded-full"></div>
                <span className="text-soft-lavender/60 text-xs sm:text-sm">
                  {t("footer.builtWithLove")}
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
