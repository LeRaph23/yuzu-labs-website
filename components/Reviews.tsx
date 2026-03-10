'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviewKeys = ['review1', 'review2', 'review3', 'review4', 'review5', 'review6'];

export default function Reviews() {
  const t = useTranslations('reviews');

  return (
    <section id="reviews" className="py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center leading-tight"
        >
          {t('title')}
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="reviews-carousel flex gap-5 overflow-x-auto px-4 sm:px-8 pb-4 snap-x snap-mandatory"
      >
        {reviewKeys.map((key, index) => (
          <div
            key={key}
            className="flex-shrink-0 w-[320px] sm:w-[360px] bg-white rounded-2xl p-6 shadow-card snap-start"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-favorite text-yellow-favorite" />
              ))}
            </div>

            <p className="text-foreground/80 leading-relaxed mb-5 text-[15px]">
              &ldquo;{t(`${key}.text`)}&rdquo;
            </p>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-green-light to-green-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                {t(`${key}.author`).charAt(0)}
              </div>
              <span className="font-medium text-foreground text-sm">
                {t(`${key}.author`)}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
