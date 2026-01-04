'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles, Activity, Leaf } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParallax } from '@/lib/hooks/useParallax';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

export default function HomePage() {
  const locale = useLocale();
  const shouldReduceMotion = useReducedMotion();
  const parallaxRef = useParallax<HTMLDivElement>({ speed: 0.3, maxOffset: 15 });

  const apps = [
    {
      name: 'Yuzu',
      tagline: locale === 'fr' ? 'Ton coach bien-être' : 'Your wellness coach',
      description: locale === 'fr'
        ? 'Étirements guidés, soulagement des douleurs et exercices anti-stress. Atteins tes objectifs de flexibilité avec ton compagnon citron préféré.'
        : 'Guided stretching, pain relief, and anti-stress exercises. Reach your flexibility goals with your favorite lemon companion.',
      icon: Leaf,
      color: 'green',
      href: `/${locale}/yuzu`,
      gradient: 'from-green-500 to-green-400',
      bgLight: 'bg-green-100',
      textColor: 'text-green-600',
      borderColor: 'border-green-500',
      available: true,
    },
    {
      name: 'Motus',
      tagline: locale === 'fr' ? 'Ta mobilité au quotidien' : 'Your daily mobility',
      description: locale === 'fr'
        ? 'Exercices de mobilité personnalisés, suivi par ton kiné, et programmes adaptés à tes besoins. Retrouve une mobilité optimale.'
        : 'Personalized mobility exercises, physio follow-up, and programs tailored to your needs. Regain optimal mobility.',
      icon: Activity,
      color: 'blue',
      href: `/${locale}/motus`,
      gradient: 'from-blue-600 to-blue-400',
      bgLight: 'bg-blue-100',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-600',
      available: true,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background decorations - gradients subtils au lieu de blurs */}
        <div ref={parallaxRef} className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-green-lighter/20 to-green-pale/10 rounded-full" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-tl from-blue-200/15 to-blue-100/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-yellow-bubble/10 to-orange-light/5 rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: shouldReduceMotion ? 0.3 : 0.6,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="text-center mb-20"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: shouldReduceMotion ? 0 : 0.15,
                duration: 0.4
              }}
              className="inline-flex items-center gap-2 bg-green-pale/80 backdrop-blur-sm border border-green-lighter/50 px-4 py-1.5 rounded-full mb-8 shadow-subtle"
            >
              <Sparkles size={14} className="text-green-primary" />
              <span className="text-sm font-medium text-green-primary">
                {locale === 'fr' ? 'Applications de bien-être' : 'Wellness Applications'}
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-[1.1] tracking-tight">
              <span className="bg-gradient-to-r from-green-primary via-green-light to-green-primary bg-clip-text text-transparent">
                Yuzu Labs
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed">
              {locale === 'fr'
                ? 'Nous développons des applications de bien-être innovantes pour améliorer ta qualité de vie au quotidien.'
                : 'We develop innovative wellness applications to improve your quality of life every day.'}
            </p>
          </motion.div>

          {/* Apps Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {apps.map((app, index) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: shouldReduceMotion ? 0.3 : 0.5,
                  delay: shouldReduceMotion ? 0 : 0.25 + index * 0.1,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <Link href={app.href} className="block group">
                  <div className="bg-white rounded-2xl p-8 shadow-card card-hover border border-gray-100/50 h-full">
                    {/* App Icon */}
                    <div className={`w-14 h-14 ${app.bgLight} rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-premium`}>
                      <app.icon className={app.textColor} size={28} />
                    </div>

                    {/* App Info */}
                    <h2 className="text-2xl font-bold text-foreground mb-2">{app.name}</h2>
                    <p className={`text-sm font-medium ${app.textColor} mb-4`}>{app.tagline}</p>
                    <p className="text-foreground/60 mb-6 leading-relaxed text-sm">{app.description}</p>

                    {/* CTA */}
                    <div className={`inline-flex items-center gap-2 ${app.textColor} font-semibold group-hover:gap-3 transition-premium`}>
                      {locale === 'fr' ? 'Découvrir' : 'Discover'}
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection locale={locale} />
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              {locale === 'fr' ? 'Notre mission' : 'Our mission'}
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              {locale === 'fr'
                ? "Chez Yuzu Labs, nous croyons que le bien-être devrait être accessible à tous. Nos applications sont conçues pour t'accompagner au quotidien dans ta quête de mobilité, flexibilité et sérénité."
                : 'At Yuzu Labs, we believe wellness should be accessible to everyone. Our apps are designed to support you daily in your quest for mobility, flexibility, and serenity.'}
            </p>

            <div className="grid sm:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  2
                </div>
                <p className="text-foreground/70">
                  {locale === 'fr' ? 'Applications' : 'Applications'}
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <p className="text-foreground/70">
                  {locale === 'fr' ? 'Exercices' : 'Exercises'}
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  🇫🇷
                </div>
                <p className="text-foreground/70">
                  {locale === 'fr' ? 'Made in France' : 'Made in France'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection locale={locale} />
    </>
  );
}

function AboutSection({ locale }: { locale: string }) {
  const shouldReduceMotion = useReducedMotion();
  const [ref, scrollState] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={false}
          animate={{
            opacity: scrollState.isVisible ? 1 : 0,
            y: scrollState.isVisible ? 0 : 30,
          }}
          transition={{
            duration: shouldReduceMotion ? 0.3 : 0.6,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 tracking-tight">
            {locale === 'fr' ? 'Notre mission' : 'Our mission'}
          </h2>
          <p className="text-lg text-foreground/60 leading-relaxed mb-16 max-w-2xl mx-auto">
            {locale === 'fr'
              ? "Chez Yuzu Labs, nous croyons que le bien-être devrait être accessible à tous. Nos applications sont conçues pour t'accompagner au quotidien dans ta quête de mobilité, flexibilité et sérénité."
              : 'At Yuzu Labs, we believe wellness should be accessible to everyone. Our apps are designed to support you daily in your quest for mobility, flexibility, and serenity.'}
          </p>

          <div className="grid sm:grid-cols-3 gap-12 mt-16">
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-primary to-green-light bg-clip-text text-transparent mb-3">
                2
              </div>
              <p className="text-foreground/60 text-sm font-medium">
                {locale === 'fr' ? 'Applications' : 'Applications'}
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-primary to-green-light bg-clip-text text-transparent mb-3">
                500+
              </div>
              <p className="text-foreground/60 text-sm font-medium">
                {locale === 'fr' ? 'Exercices' : 'Exercises'}
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-primary to-green-light bg-clip-text text-transparent mb-3">
                FR
              </div>
              <p className="text-foreground/60 text-sm font-medium">
                {locale === 'fr' ? 'Made in France' : 'Made in France'}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection({ locale }: { locale: string }) {
  const shouldReduceMotion = useReducedMotion();
  const [ref, scrollState] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-green-primary via-green-light to-green-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={false}
          animate={{
            opacity: scrollState.isVisible ? 1 : 0,
            y: scrollState.isVisible ? 0 : 30,
          }}
          transition={{
            duration: shouldReduceMotion ? 0.3 : 0.6,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            {locale === 'fr' ? 'Contacte-nous' : 'Contact us'}
          </h2>
          <p className="text-xl text-white/90 mb-12">
            {locale === 'fr'
              ? 'Une question ? Une suggestion ? On est là pour toi.'
              : 'A question? A suggestion? We\'re here for you.'}
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 max-w-md mx-auto border border-white/20 shadow-elevated">
            <p className="text-white font-semibold mb-3">Yuzu Labs SAS</p>
            <p className="text-white/80 text-sm mb-3">11 rue de Lorraine, 68490 PETIT-LANDAU, France</p>
            <p className="text-white/80 text-sm mb-6">SIREN : 994879013</p>
            <a
              href="mailto:yuzu.contactme@gmail.com"
              className="inline-flex items-center gap-2 bg-white text-green-primary px-6 py-3 rounded-full font-semibold hover:bg-green-pale transition-premium shadow-card"
            >
              yuzu.contactme@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
    </>
  );
}
