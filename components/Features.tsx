'use client';

import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Heart, 
  Dumbbell, 
  Target, 
  Brain, 
  TrendingUp, 
  User 
} from 'lucide-react';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

const features = [
  { key: 'painRelief', icon: Heart, color: 'bg-red-light text-red-primary' },
  { key: 'stretching', icon: Dumbbell, color: 'bg-green-pale text-green-primary' },
  { key: 'splits', icon: Target, color: 'bg-orange-light text-orange-primary' },
  { key: 'antiStress', icon: Brain, color: 'bg-blue-light text-blue-primary' },
  { key: 'progress', icon: TrendingUp, color: 'bg-yellow-bubble text-yellow-favorite' },
  { key: 'personalized', icon: User, color: 'bg-green-lighter text-green-primary' },
];

export default function Features() {
  const t = useTranslations('features');
  const shouldReduceMotion = useReducedMotion();
  const [sectionRef, sectionState] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={sectionRef} id="features" className="py-32 px-4 bg-green-mint/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={false}
          animate={{
            opacity: sectionState.isVisible ? 1 : 0,
            y: sectionState.isVisible ? 0 : 30,
          }}
          transition={{
            duration: shouldReduceMotion ? 0.3 : 0.6,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <FeatureCard
                key={feature.key}
                feature={feature}
                index={index}
                t={t}
                shouldReduceMotion={shouldReduceMotion}
                sectionVisible={sectionState.isVisible}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  index,
  t,
  shouldReduceMotion,
  sectionVisible,
}: {
  feature: typeof features[0];
  index: number;
  t: (key: string) => string;
  shouldReduceMotion: boolean | null;
  sectionVisible: boolean;
}) {
  const Icon = feature.icon;
  const [ref, state] = useScrollAnimation({ threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={{
        opacity: state.isVisible && sectionVisible ? 1 : 0,
        y: state.isVisible && sectionVisible ? 0 : 30,
        scale: state.isVisible && sectionVisible ? 1 : 0.96,
      }}
      transition={{
        duration: shouldReduceMotion ? 0.3 : 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.08,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.02 }}
      className="bg-white rounded-2xl p-8 shadow-card card-hover border border-gray-100/50"
    >
      <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">
        {t(`${feature.key}.title`)}
      </h3>
      <p className="text-foreground/60 leading-relaxed text-sm">
        {t(`${feature.key}.description`)}
      </p>
    </motion.div>
  );
}

