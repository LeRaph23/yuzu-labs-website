'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';
import Link from 'next/link';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  bgColor?: string; // Couleur de fond pastel optionnelle
}

interface FeaturesProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  className?: string;
}

export default function Features({
  title,
  subtitle,
  features,
  className = '',
}: FeaturesProps) {
  const shouldReduceMotion = useReducedMotion();
  const [sectionRef, sectionState] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="features"
      className={`py-32 px-4 bg-white dark:bg-[#231212] ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        {(title || subtitle) && (
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
            {title && (
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight uppercase">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-foreground dark:text-white max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        {/* Features Grid - 3 colonnes desktop */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
              sectionVisible={sectionState.isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  index,
  shouldReduceMotion,
  sectionVisible,
}: {
  feature: Feature;
  index: number;
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
      className={`rounded-2xl p-8 shadow-card card-hover border border-[#231212]/5 dark:border-white/10 ${
        feature.bgColor || 'bg-[#f4f4f4] dark:bg-white'
      }`}
    >
      {/* Icône outline */}
      <div className="w-14 h-14 flex items-center justify-center mb-6">
        <Icon
          size={28}
          className="text-foreground stroke-2"
          strokeWidth={1.5}
        />
      </div>

      {/* Titre (Poppins SemiBold) */}
      <h3 className="text-xl font-semibold text-foreground mb-3">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-foreground dark:text-white leading-relaxed text-sm mb-6">
        {feature.description}
      </p>

      {/* Bouton "En savoir plus" (fond noir, texte blanc) */}
      {feature.href && (
        <Link
          href={feature.href}
          className="inline-flex items-center gap-2 bg-[#231212] dark:bg-white text-white dark:text-[#231212] px-6 py-2.5 rounded-full font-semibold text-sm transition-premium hover:opacity-90"
        >
          En savoir plus
          <ArrowRight size={16} />
        </Link>
      )}
    </motion.div>
  );
}
