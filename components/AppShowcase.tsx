'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    key: 'feature1',
    mockup: { fr: '/images/yuzu-pain-relief.png', en: '/images/yuzu-pain-relief.png' },
    alt: { fr: 'Yuzu - sélection de zone de douleur pour étirements personnalisés', en: 'Yuzu - pain zone selection for personalized stretching' },
  },
  {
    key: 'feature2',
    mockup: { fr: '/images/mockups/mockup-exercise-fr.png', en: '/images/mockups/mockup-thoracic-en.png' },
    alt: { fr: 'Yuzu - exercice guidé avec timer et instructions pas à pas', en: 'Yuzu - guided exercise with timer and step-by-step instructions' },
  },
  {
    key: 'feature3',
    mockup: { fr: '/images/mockups/mockup-celebration-fr.png', en: '/images/mockups/mockup-celebration-en.png' },
    alt: { fr: 'Yuzu - écran de célébration avec mascotte après une séance', en: 'Yuzu - celebration screen with mascot after a session' },
  },
];

export default function AppShowcase() {
  const t = useTranslations('showcase');
  const locale = useLocale() as 'fr' | 'en';

  return (
    <section id="features" className="py-24 lg:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center mb-20 lg:mb-28 max-w-3xl mx-auto leading-tight"
        >
          {t('title')}
        </motion.h2>

        <div className="space-y-24 lg:space-y-32">
          {features.map((feature, index) => {
            const isReversed = index % 2 === 1;
            return (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
              >
                <div className="flex-1 max-w-md lg:max-w-none">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
                    {t(`${feature.key}.title`)}
                  </h3>
                  <p className="text-lg text-foreground/60 leading-relaxed">
                    {t(`${feature.key}.description`)}
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <div className="relative w-[240px] h-[480px] sm:w-[270px] sm:h-[540px] lg:w-[300px] lg:h-[600px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-lighter/30 to-yellow-bubble/30 rounded-[44px] blur-2xl scale-110" />
                    <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-elevated border-[6px] border-foreground/10">
                      <Image
                        src={feature.mockup[locale]}
                        alt={feature.alt[locale]}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 240px, (max-width: 1024px) 270px, 300px"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
