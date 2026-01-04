'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
              {/* Main mascot image */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-64 h-64 sm:w-80 sm:h-80"
              >
                <Image
                  src="/images/yuzu-wave.webp"
                  alt="Yuzu mascotte"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </motion.div>

              {/* Speech Bubbles */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -top-4 -right-4 bg-yellow-bubble px-4 py-2 rounded-2xl rounded-bl-none shadow-md"
              >
                <p className="text-sm font-medium text-orange-brown">{t('bubble1')}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 -left-8 bg-yellow-bubble px-4 py-2 rounded-2xl rounded-br-none shadow-md"
              >
                <p className="text-sm font-medium text-orange-brown">{t('bubble2')}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="absolute top-1/3 -right-12 bg-yellow-bubble px-4 py-2 rounded-2xl rounded-tl-none shadow-md"
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-left">
              {t('title')}
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8 text-left">
              {t('description')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-pale rounded-xl">
                <div className="text-2xl font-bold text-green-primary">300+</div>
                <div className="text-sm text-foreground/60">Exercices</div>
              </div>
              <div className="text-center p-4 bg-orange-light/50 rounded-xl">
                <div className="text-2xl font-bold text-orange-primary">0</div>
                <div className="text-sm text-foreground/60">Obligation</div>
              </div>
              <div className="text-center p-4 bg-yellow-bubble rounded-xl">
                <div className="text-2xl font-bold text-yellow-favorite">24/7</div>
                <div className="text-sm text-foreground/60">Disponible</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional mascot poses */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 flex justify-center items-end gap-8 sm:gap-16"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: -5 }}
            className="relative w-32 h-32 sm:w-40 sm:h-40"
          >
            <Image
              src="/images/yuzu-splits.webp"
              alt="Yuzu fait le grand écart"
              fill
              className="object-contain drop-shadow-lg"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-36 h-36 sm:w-48 sm:h-48"
          >
            <Image
              src="/images/yuzu-wave.webp"
              alt="Yuzu dit bonjour"
              fill
              className="object-contain drop-shadow-lg"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="relative w-32 h-32 sm:w-40 sm:h-40"
          >
            <Image
              src="/images/yuzu-strong.webp"
              alt="Yuzu montre ses muscles"
              fill
              className="object-contain drop-shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
