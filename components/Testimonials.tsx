'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = ['testimonial1', 'testimonial2', 'testimonial3'];

export default function Testimonials() {
  const t = useTranslations('testimonials');

  return (
    <section className="py-24 px-4 bg-green-pale/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-2xl p-6 card-shadow relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-green-primary rounded-full flex items-center justify-center">
                <Quote size={20} className="text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 pt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-favorite text-yellow-favorite"
                  />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                &ldquo;{t(`${key}.text`)}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-light to-green-primary rounded-full flex items-center justify-center text-white font-bold">
                  {t(`${key}.author`).charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {t(`${key}.author`)}
                  </div>
                  <div className="text-sm text-foreground/60">
                    {t(`${key}.role`)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

