'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Mascot() {
  const t = useTranslations('mascot');

  return (
    <section id="about" className="py-24 px-4 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mascot Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main lemon mascot */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-56 h-64 sm:w-64 sm:h-72 bg-gradient-to-br from-yellow-favorite via-yellow-cursor to-orange-light rounded-[40%] flex items-center justify-center shadow-2xl shadow-orange-primary/20 relative"
              >
                {/* Face */}
                <div className="text-center">
                  {/* Eyes */}
                  <div className="flex justify-center gap-6 mb-3">
                    <motion.div
                      animate={{ scaleY: [1, 0.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                      className="w-6 h-8 bg-foreground rounded-full relative"
                    >
                      <div className="absolute top-1 right-0.5 w-2.5 h-2.5 bg-white rounded-full" />
                    </motion.div>
                    <motion.div
                      animate={{ scaleY: [1, 0.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                      className="w-6 h-8 bg-foreground rounded-full relative"
                    >
                      <div className="absolute top-1 right-0.5 w-2.5 h-2.5 bg-white rounded-full" />
                    </motion.div>
                  </div>
                  {/* Blush */}
                  <div className="flex justify-center gap-16 mb-2">
                    <div className="w-6 h-3 bg-orange-light/60 rounded-full" />
                    <div className="w-6 h-3 bg-orange-light/60 rounded-full" />
                  </div>
                  {/* Smile */}
                  <div className="w-12 h-6 border-b-[3px] border-foreground rounded-b-full mx-auto" />
                </div>
                {/* Leaf */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="w-4 h-12 bg-green-primary rounded-full transform -rotate-12" />
                  <div className="w-4 h-10 bg-green-light rounded-full transform rotate-12 -mt-6 ml-2" />
                </div>
                {/* Arms */}
                <div className="absolute left-0 top-1/2 -translate-x-4 w-8 h-4 bg-yellow-favorite rounded-full transform -rotate-45" />
                <div className="absolute right-0 top-1/2 translate-x-4 w-8 h-4 bg-yellow-favorite rounded-full transform rotate-45" />
              </motion.div>

              {/* Speech Bubbles */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -top-8 -right-8 bg-yellow-bubble px-4 py-2 rounded-2xl rounded-bl-none shadow-md"
              >
                <p className="text-sm font-medium text-orange-brown">{t('bubble1')}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 -left-12 bg-yellow-bubble px-4 py-2 rounded-2xl rounded-br-none shadow-md"
              >
                <p className="text-sm font-medium text-orange-brown">{t('bubble2')}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="absolute top-1/3 -right-16 bg-yellow-bubble px-4 py-2 rounded-2xl rounded-tl-none shadow-md"
              >
                <p className="text-sm font-medium text-orange-brown">{t('bubble3')}</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block text-green-primary font-semibold mb-2">
              {t('subtitle')}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t('title')} 🍋
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              {t('description')}
            </p>

            {/* Stats or highlights */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-pale rounded-xl">
                <div className="text-2xl font-bold text-green-primary">100+</div>
                <div className="text-sm text-foreground/60">Exercices</div>
              </div>
              <div className="text-center p-4 bg-orange-light/50 rounded-xl">
                <div className="text-2xl font-bold text-orange-primary">15min</div>
                <div className="text-sm text-foreground/60">Par jour</div>
              </div>
              <div className="text-center p-4 bg-yellow-bubble rounded-xl">
                <div className="text-2xl font-bold text-yellow-favorite">∞</div>
                <div className="text-sm text-foreground/60">Motivation</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

