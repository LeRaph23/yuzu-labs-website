'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const painPoints = [
  { key: 'neck', emoji: '😣', color: 'from-red-light to-orange-light' },
  { key: 'back', emoji: '😩', color: 'from-orange-light to-yellow-bubble' },
  { key: 'shoulders', emoji: '😖', color: 'from-yellow-bubble to-green-lighter' },
];

export default function PainPoints() {
  const t = useTranslations('painPoints');

  return (
    <section id="pain-points" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center"
            >
              <div className={`w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${point.color} flex items-center justify-center shadow-md`}>
                <span className="text-3xl">{point.emoji}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {t(`${point.key}.title`)}
              </h3>
              <p className="text-foreground/70 leading-relaxed max-w-xs mx-auto">
                {t(`${point.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-xl sm:text-2xl font-semibold text-green-primary max-w-2xl mx-auto"
        >
          {t('transition')}
        </motion.p>
      </div>
    </section>
  );
}
