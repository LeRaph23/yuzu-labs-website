'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import AppMockup from './AppMockup';

interface HeroProps {
  title: string; // Titre en majuscules
  description: string;
  ctaText: string;
  ctaHref: string;
  ctaSecondaryText?: string;
  ctaSecondaryHref?: string;
  mockupImages: string[]; // Array de screenshots pour le mockup
  appName: string;
  badge?: string;
  showAppStore?: boolean; // Afficher badges App Store / Google Play
}

export default function Hero({
  title,
  description,
  ctaText,
  ctaHref,
  ctaSecondaryText,
  ctaSecondaryHref,
  mockupImages,
  appName,
  badge,
  showAppStore = false,
}: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden pt-20 bg-white dark:bg-[#231212]">
      {/* Formes organiques en arrière-plan (vagues CSS) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#e3e2f7]/20 dark:bg-[#231212] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#f4f4f4]/30 dark:bg-[#231212] rounded-full blur-3xl" />
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,400 Q300,300 600,400 T1200,400 L1200,800 L0,800 Z"
            fill="currentColor"
            className="text-[#231212] dark:text-white"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Colonne gauche - Contenu texte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.3 : 0.6,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="text-left order-2 lg:order-1"
          >
            {/* Badge optionnel */}
            {badge && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : 0.15,
                  duration: 0.4,
                }}
                className="inline-flex items-center gap-2 bg-[#f4f4f4] dark:bg-white border border-[#231212]/10 dark:border-white/10 px-4 py-1.5 rounded-full mb-8 shadow-subtle"
              >
                <Sparkles size={14} className="text-foreground" />
                <span className="text-sm font-medium text-foreground">{badge}</span>
              </motion.div>
            )}

            {/* Titre en majuscules (Poppins Bold) */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-[1.1] tracking-tight uppercase">
              {title}
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-foreground dark:text-white mb-12 max-w-2xl leading-relaxed">
              {description}
            </p>

            {/* CTA Principal */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center gap-2 bg-[#231212] dark:bg-white text-white dark:text-[#231212] px-8 py-4 rounded-full font-semibold transition-premium hover:opacity-90 shadow-card"
              >
                {ctaText}
                <ArrowRight size={20} />
              </Link>
              {ctaSecondaryText && ctaSecondaryHref && (
                <Link
                  href={ctaSecondaryHref}
                  className="inline-flex items-center justify-center gap-2 bg-white dark:bg-[#231212] border-2 border-[#231212] dark:border-white text-[#231212] dark:text-white px-8 py-4 rounded-full font-semibold transition-premium hover:opacity-80"
                >
                  {ctaSecondaryText}
                </Link>
              )}
            </div>

            {/* Badges App Store / Google Play (optionnel) */}
            {showAppStore && (
              <div className="flex gap-4">
                <div className="w-32 h-10 bg-[#f4f4f4] dark:bg-white rounded-lg flex items-center justify-center">
                  <span className="text-xs text-foreground/60">App Store</span>
                </div>
                <div className="w-32 h-10 bg-[#f4f4f4] dark:bg-white rounded-lg flex items-center justify-center">
                  <span className="text-xs text-foreground/60">Google Play</span>
                </div>
              </div>
            )}
          </motion.div>

          {/* Colonne droite - Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0.3 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.3,
            }}
            className="relative flex items-center justify-center order-1 lg:order-2"
          >
            <AppMockup
              images={mockupImages}
              appName={appName}
              rotation={-8}
              shadow={true}
              className="w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
