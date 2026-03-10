'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Timer, Ban, Target, Smile } from 'lucide-react';

const features = [
  { key: 'quick', icon: Timer, color: 'bg-orange-light text-orange-primary' },
  { key: 'noEquipment', icon: Ban, color: 'bg-green-pale text-green-primary' },
  { key: 'personalized', icon: Target, color: 'bg-blue-light text-blue-primary' },
  { key: 'fun', icon: Smile, color: 'bg-yellow-bubble text-yellow-favorite' },
];

export default function Features() {
  const t = useTranslations('features');

  return (
    <section id="features" className="py-24 px-4 bg-background">
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

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 card-shadow transition-all hover:shadow-lg"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-5`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {t(`${feature.key}.title`)}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {t(`${feature.key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
