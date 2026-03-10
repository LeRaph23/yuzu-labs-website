'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import PhoneMockup from './PhoneMockup';

const APP_STORE_URL = 'https://apps.apple.com/app/yuzu-move-pain-free/id6756885861';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
          >
            {t('title')}
            <br />
            <span className="bg-gradient-to-r from-green-primary to-green-light bg-clip-text text-transparent">
              {t('titleHighlight')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {t('subtitle')}
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-foreground hover:bg-foreground/85 text-white px-8 py-4 rounded-2xl font-semibold transition-all shadow-elevated hover:shadow-card-hover"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            {t('cta')}
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex justify-center items-end gap-4 sm:gap-6 lg:gap-8"
        >
          <div className="hidden sm:block -mb-8 opacity-90">
            <PhoneMockup
              src="/images/yuzu-exercise.png"
              alt="Yuzu app - écran d'exercice guidé avec timer et illustrations d'étirements"
            />
          </div>
          <div className="z-10 scale-105 sm:scale-110">
            <PhoneMockup
              src="/images/yuzu-home.png"
              alt="Yuzu app - écran d'accueil avec séance personnalisée et tableau de bord"
              priority
            />
          </div>
          <div className="hidden sm:block -mb-8 opacity-90">
            <PhoneMockup
              src="/images/yuzu-pain-relief.png"
              alt="Yuzu app - sélection de zone de douleur : nuque, dos, épaules, jambes"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
