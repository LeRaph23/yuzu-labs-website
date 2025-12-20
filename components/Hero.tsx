'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-lighter/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-bubble/50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-light/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-green-pale border border-green-lighter px-4 py-2 rounded-full mb-6"
            >
              <Sparkles size={16} className="text-green-primary" />
              <span className="text-sm font-medium text-green-primary">
                {t('badge')}
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {t('title')}{' '}
              <span className="bg-gradient-to-r from-green-primary to-green-light bg-clip-text text-transparent">
                {t('titleHighlight')}
              </span>
            </h1>

            <p className="text-lg text-foreground/70 mb-8 max-w-xl leading-relaxed">
              {t('subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#features"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-green-primary hover:bg-green-light text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-green-primary/25"
              >
                {t('cta')}
                <ArrowRight size={20} />
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-green-pale text-green-primary px-8 py-4 rounded-full font-semibold transition-all border-2 border-green-primary"
              >
                {t('ctaSecondary')}
              </motion.a>
            </div>
          </motion.div>

          {/* Mascot Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              {/* Main Yuzu mascot */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
              >
                <Image
                  src="/images/yuzu-wave.webp"
                  alt="Yuzu mascotte"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-green-pale rounded-2xl flex items-center justify-center shadow-lg"
              >
                <span className="text-2xl">🧘</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 w-14 h-14 bg-orange-light rounded-2xl flex items-center justify-center shadow-lg"
              >
                <span className="text-xl">💪</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -right-8 w-12 h-12 bg-yellow-bubble rounded-2xl flex items-center justify-center shadow-lg"
              >
                <span className="text-lg">✨</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-green-primary/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-green-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
