/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const { t, i18n } = useTranslation();

  const currentLocale = i18n.language;
  const isRtl = currentLocale === "ar";

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) {
          return t("contact.errors.nameRequired") || "Name is required";
        } else if (value.trim().length < 2) {
          return (
            t("contact.errors.nameTooShort") ||
            "Name must be at least 2 characters"
          );
        }
        return "";

      case "email":
        if (!value.trim()) {
          return t("contact.errors.emailRequired") || "Email is required";
        } else if (!validateEmail(value)) {
          return (
            t("contact.errors.emailInvalid") ||
            "Please enter a valid email address"
          );
        }
        return "";

      case "message":
        if (!value.trim()) {
          return t("contact.errors.messageRequired") || "Message is required";
        } else if (value.trim().length < 10) {
          return (
            t("contact.errors.messageTooShort") ||
            "Message must be at least 10 characters"
          );
        }
        return "";

      default:
        return "";
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    const error = validateField(name, value);
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      const form = e.currentTarget;
      form.classList.add("shake-animation");
      setTimeout(() => {
        form.classList.remove("shake-animation");
      }, 500);
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form submitted:", formData);

      setShowSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" });

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
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
      ),
      title: t("contact.email"),
      value: t("contact.emailValue"),
      link: "mailto:info@yousefallouji.com",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
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
      ),
      title: t("contact.phone"),
      value: t("contact.phoneValue"),
      link: "https://wa.me/963996320963",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: t("contact.address"),
      value: t("contact.addressValue"),
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-2/6 -right-20 w-80 h-80 bg-electric-violet/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-2/6 -left-20 w-96 h-96 bg-royal-purple/10 rounded-full blur-3xl"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(138,43,226,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(138,43,226,0.03)_1px,transparent_1px)] bg-size-[60px_60px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Success Message */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.8 }}
              className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 max-w-md w-full mx-4"
            >
              <div className="bg-linear-to-r from-green-500 to-emerald-600 text-white p-4 rounded-xl sm:rounded-2xl shadow-2xl shadow-green-500/25 backdrop-blur-sm border border-green-400/30">
                <div className="flex items-center gap-3">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center"
                  >
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm sm:text-base">
                      {t("contact.successTitle") || "Success!"}
                    </h4>
                    <p className="text-xs sm:text-sm opacity-90">
                      {t("contact.successMessage")}
                    </p>
                  </div>
                  <button
                    onClick={() => setShowSuccess(false)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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
              {t("contact.title")}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-soft-lavender/80 max-w-2xl mx-auto mb-6 sm:mb-8">
            {t("contact.description")}
          </p>
          <div className="w-20 sm:w-24 h-1 bg-linear-to-r from-electric-violet to-royal-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-electric-violet/30 transition-all duration-300"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
              {t("contact.sendMessage")}
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-6 transition-all duration-300"
            >
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-soft-lavender/80 mb-2"
                >
                  {t("contact.fullName")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-white/5 border rounded-lg sm:rounded-xl px-4 py-3 text-white placeholder-soft-lavender/50 focus:border-electric-violet focus:ring-1 focus:ring-electric-violet transition-all duration-300 outline-none text-sm sm:text-base ${
                    errors.name
                      ? "border-red-400/60 bg-red-500/10"
                      : "border-white/10"
                  }`}
                  placeholder={t("contact.fullNamePlaceholder")}
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -10, height: 0 }}
                      className="flex items-center gap-2 mt-2 text-red-400 text-xs sm:text-sm"
                    >
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{errors.name}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-soft-lavender/80 mb-2"
                >
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-white/5 border rounded-lg sm:rounded-xl px-4 py-3 text-white placeholder-soft-lavender/50 focus:border-electric-violet focus:ring-1 focus:ring-electric-violet transition-all duration-300 outline-none text-sm sm:text-base ${
                    errors.email
                      ? "border-red-400/60 bg-red-500/10"
                      : "border-white/10"
                  }`}
                  placeholder={t("contact.emailPlaceholder")}
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -10, height: 0 }}
                      className="flex items-center gap-2 mt-2 text-red-400 text-xs sm:text-sm"
                    >
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{errors.email}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-soft-lavender/80 mb-2"
                >
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full bg-white/5 border rounded-lg sm:rounded-xl px-4 py-3 text-white placeholder-soft-lavender/50 focus:border-electric-violet focus:ring-1 focus:ring-electric-violet transition-all duration-300 outline-none resize-none text-sm sm:text-base ${
                    errors.message
                      ? "border-red-400/60 bg-red-500/10"
                      : "border-white/10"
                  }`}
                  placeholder={t("contact.messagePlaceholder")}
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -10, height: 0 }}
                      className="flex items-center gap-2 mt-2 text-red-400 text-xs sm:text-sm"
                    >
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{errors.message}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-linear-to-r from-electric-violet to-royal-purple hover:from-royal-purple hover:to-electric-violet text-white py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-electric-violet/30 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>{t("contact.sending") || "Sending..."}</span>
                  </>
                ) : (
                  <>
                    <span>{t("contact.sendButton")}</span>
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 transform transition-transform duration-300 group-hover:translate-x-1"
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
                  </>
                )}
              </motion.button>

              <p className="text-xs text-soft-lavender/60 text-center mt-3 sm:mt-4">
                {t("contact.sendingNote")}
              </p>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-electric-violet/30 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                {t("contact.contactInfo")}
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3 sm:gap-4 group cursor-pointer p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-electric-violet/20 rounded-lg sm:rounded-xl flex items-center justify-center text-electric-violet group-hover:bg-electric-violet/30 group-hover:scale-110 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">
                        {item.title}
                      </h4>
                      <p className="text-soft-lavender/80 text-xs sm:text-sm">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-linear-to-br from-electric-violet/20 to-royal-purple/20 backdrop-blur-sm border border-electric-violet/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center"
            >
              <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">
                {t("contact.directContact")}
              </h4>
              <p className="text-soft-lavender/80 text-xs sm:text-sm mb-3 sm:mb-4">
                {t("contact.directContactDesc")}
              </p>
              <motion.a
                href="https://wa.me/963996320963"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 font-medium shadow-lg text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.209-3.553-8.485" />
                </svg>
                <span>{t("contact.whatsappButton")}</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
