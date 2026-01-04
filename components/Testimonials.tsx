'use client';

import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

const testimonials = ['testimonial1', 'testimonial2', 'testimonial3'];

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const shouldReduceMotion = useReducedMotion();
  const [sectionRef, sectionState] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-32 px-4 bg-green-pale/30">
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((key, index) => (
            <TestimonialCard
              key={key}
              testimonialKey={key}
              index={index}
              t={t}
              shouldReduceMotion={shouldReduceMotion}
              sectionVisible={sectionState.isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonialKey,
  index,
  t,
  shouldReduceMotion,
  sectionVisible,
}: {
  testimonialKey: string;
  index: number;
  t: (key: string) => string;
  shouldReduceMotion: boolean | null;
  sectionVisible: boolean;
}) {
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
        delay: shouldReduceMotion ? 0 : index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={shouldReduceMotion ? {} : { y: -4 }}
      className="bg-white rounded-2xl p-8 shadow-card card-hover border border-gray-100/50 relative"
    >
      {/* Quote Icon */}
      <div className="absolute -top-4 -left-4 w-10 h-10 bg-green-primary rounded-full flex items-center justify-center shadow-card">
        <Quote size={18} className="text-white" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-6 pt-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className="fill-yellow-favorite text-yellow-favorite"
          />
        ))}
      </div>

      {/* Quote Text */}
      <p className="text-foreground/70 leading-relaxed mb-8 text-sm italic">
        &ldquo;{t(`${testimonialKey}.text`)}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 bg-gradient-to-br from-green-light to-green-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
          {t(`${testimonialKey}.author`).charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-foreground text-sm">
            {t(`${testimonialKey}.author`)}
          </div>
          <div className="text-xs text-foreground/50">
            {t(`${testimonialKey}.role`)}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

