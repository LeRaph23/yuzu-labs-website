'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MapPin, Play, Zap } from 'lucide-react';

const steps = [
  { key: 'step1', icon: MapPin, color: 'bg-orange-light text-orange-primary' },
  { key: 'step2', icon: Play, color: 'bg-green-pale text-green-primary' },
  { key: 'step3', icon: Zap, color: 'bg-yellow-bubble text-yellow-favorite' },
];

export default function HowItWorks() {
  const t = useTranslations('howItWorks');

  return (
    <section id="how-it-works" className="py-24 px-4 bg-green-mint/30">
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

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-orange-light via-green-lighter to-yellow-bubble" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative text-center"
              >
                <div className="relative z-10 mx-auto mb-6">
                  <div className={`w-16 h-16 mx-auto ${step.color} rounded-2xl flex items-center justify-center shadow-md`}>
                    <Icon size={28} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-green-primary text-white rounded-full flex items-center justify-center text-sm font-bold shadow">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t(`${step.key}.title`)}
                </h3>
                <p className="text-foreground/70 leading-relaxed max-w-sm mx-auto">
                  {t(`${step.key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
