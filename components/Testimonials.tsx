'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

interface Testimonial {
  text: string;
  author: string;
  role: string;
  avatar?: string; // URL de l'avatar ou initiales
  rating?: number; // Note sur 5 (défaut: 5)
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
  userCount?: string; // Ex: "+1K", "10K+", etc.
  className?: string;
}

export default function Testimonials({
  title,
  subtitle,
  testimonials,
  userCount,
  className = '',
}: TestimonialsProps) {
  const shouldReduceMotion = useReducedMotion();
  const [sectionRef, sectionState] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
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

        {/* Layout 2 colonnes possible ou grille */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
              sectionVisible={sectionState.isVisible}
            />
          ))}
        </div>

        {/* Indicateur nombre d'utilisateurs (optionnel) */}
        {userCount && (
          <motion.div
            initial={false}
            animate={{
              opacity: sectionState.isVisible ? 1 : 0,
              y: sectionState.isVisible ? 0 : 20,
            }}
            transition={{
              duration: shouldReduceMotion ? 0.3 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.3,
            }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-2 bg-[#f4f4f4] dark:bg-white px-6 py-3 rounded-full">
              <span className="text-foreground dark:text-white text-sm font-medium">
                {userCount} {userCount.includes('+') ? 'utilisateurs' : ''}
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index,
  shouldReduceMotion,
  sectionVisible,
}: {
  testimonial: Testimonial;
  index: number;
  shouldReduceMotion: boolean | null;
  sectionVisible: boolean;
}) {
  const [ref, state] = useScrollAnimation({ threshold: 0.15 });
  const rating = testimonial.rating || 5;

  // Fond alterné : blanc / gris clair
  const bgColor = index % 2 === 0 ? 'bg-white dark:bg-[#231212]' : 'bg-[#f4f4f4] dark:bg-white';

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
      className={`${bgColor} rounded-2xl p-8 shadow-card card-hover border border-[#231212]/5 dark:border-white/10 relative`}
    >
      {/* Quote Icon stylisé */}
      <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#231212] dark:bg-white rounded-full flex items-center justify-center shadow-card">
        <Quote size={18} className="text-white dark:text-[#231212]" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-6 pt-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={
              i < rating
                ? 'fill-yellow-favorite text-yellow-favorite'
                : 'fill-[#f4f4f4] dark:fill-white text-[#f4f4f4] dark:text-white'
            }
          />
        ))}
      </div>

      {/* Citation avec guillemets stylisés */}
      <p className="text-foreground dark:text-white leading-relaxed mb-8 text-sm italic relative pl-4">
        <span className="absolute left-0 top-0 text-4xl text-foreground/20 dark:text-foreground/30 font-serif leading-none">
          &ldquo;
        </span>
        {testimonial.text}
      </p>

      {/* Author avec avatar */}
      <div className="flex items-center gap-3">
        {testimonial.avatar ? (
          <Image
            src={testimonial.avatar}
            alt={testimonial.author}
            width={44}
            height={44}
            className="rounded-full object-cover"
          />
        ) : (
          <div className="w-11 h-11 bg-gradient-to-br from-[#231212]/20 to-[#231212]/40 dark:from-white dark:to-white rounded-full flex items-center justify-center text-foreground font-semibold text-sm">
            {testimonial.author.charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <div className="font-semibold text-foreground text-sm">
            {testimonial.author}
          </div>
          <div className="text-xs text-foreground dark:text-white">
            {testimonial.role}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
