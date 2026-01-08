'use client';

import { useLocale } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles, Activity, Leaf, type LucideIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';
import AppMockup from '@/components/AppMockup';
import Newsletter from '@/components/Newsletter';

export const runtime = 'edge';

interface App {
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  href: string;
  image: string;
  mockupImages: string[];
}

export default function HomePage() {
  const locale = useLocale();
  const shouldReduceMotion = useReducedMotion();

  const apps: App[] = [
    {
      name: 'Yuzu',
      tagline: locale === 'fr' ? 'Ton coach bien-être' : 'Your wellness coach',
      description: locale === 'fr'
        ? 'Étirements guidés, soulagement des douleurs et exercices anti-stress. Atteins tes objectifs de flexibilité avec ton compagnon citron préféré.'
        : 'Guided stretching, pain relief, and anti-stress exercises. Reach your flexibility goals with your favorite lemon companion.',
      icon: Leaf,
      href: `/${locale}/yuzu`,
      image: '/images/yuzu-home.png',
      mockupImages: ['/images/yuzu-home.png', '/images/yuzu-exercise.png'],
    },
    {
      name: 'Motus',
      tagline: locale === 'fr' ? 'Ta mobilité au quotidien' : 'Your daily mobility',
      description: locale === 'fr'
        ? 'Exercices de mobilité personnalisés, suivi par ton kiné, et programmes adaptés à tes besoins. Retrouve une mobilité optimale.'
        : 'Personalized mobility exercises, physio follow-up, and programs tailored to your needs. Regain optimal mobility.',
      icon: Activity,
      href: `/${locale}/motus`,
      image: '/images/motus/Home.webp',
      mockupImages: ['/images/motus/Home.webp', '/images/motus/dashboard.webp'],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white dark:bg-[#231212]">
        {/* Formes organiques en arrière-plan */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#e3e2f7]/20 dark:bg-[#231212] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#f4f4f4]/30 dark:bg-[#231212] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.3 : 0.6,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="text-center mb-20"
          >
            {/* Badge */}
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
              <span className="text-sm font-medium text-foreground">
                {locale === 'fr' ? 'Applications de bien-être' : 'Wellness Applications'}
              </span>
            </motion.div>

            {/* Titre en majuscules */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-[1.1] tracking-tight uppercase">
              Yuzu Labs
            </h1>

            <p className="text-lg sm:text-xl text-foreground dark:text-white mb-12 max-w-2xl mx-auto leading-relaxed">
              {locale === 'fr'
                ? 'Nous développons des applications de bien-être innovantes pour améliorer ta qualité de vie au quotidien.'
                : 'We develop innovative wellness applications to improve your quality of life every day.'}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/yuzu`}
                className="inline-flex items-center justify-center gap-2 bg-[#231212] dark:bg-white text-white dark:text-[#231212] px-8 py-4 rounded-full font-semibold transition-premium hover:opacity-90 shadow-card"
              >
                {locale === 'fr' ? 'Découvrir Yuzu' : 'Discover Yuzu'}
                <ArrowRight size={20} />
              </Link>
              <Link
                href={`/${locale}/motus`}
                className="inline-flex items-center justify-center gap-2 bg-[#231212] dark:bg-white text-white dark:text-[#231212] px-8 py-4 rounded-full font-semibold transition-premium hover:opacity-90 shadow-card"
              >
                {locale === 'fr' ? 'Découvrir Motus' : 'Discover Motus'}
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>

          {/* Mockups des deux apps côte à côte */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {apps.map((app, index) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0.3 : 0.6,
                  delay: shouldReduceMotion ? 0 : 0.3 + index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="flex justify-center"
              >
                <AppMockup
                  images={app.mockupImages}
                  appName={app.name}
                  rotation={index % 2 === 0 ? -8 : 8}
                  shadow={true}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section "Nos Applications" - Style Dribbble "Recommended" */}
      <AppsSection locale={locale} apps={apps} />

      {/* Section Statistiques Globales */}
      <StatsSection locale={locale} />

      {/* Section Newsletter */}
      <Newsletter
        title={locale === 'fr' ? 'RESTE INFORMÉ' : 'STAY UPDATED'}
        subtitle={
          locale === 'fr'
            ? 'Reçois les dernières actualités de Yuzu Labs'
            : 'Get the latest news from Yuzu Labs'
        }
        placeholder={locale === 'fr' ? 'Ton email' : 'Your email'}
        buttonText={locale === 'fr' ? "S'abonner" : 'Subscribe'}
        successMessage={locale === 'fr' ? 'Inscrit !' : 'Subscribed!'}
      />
    </>
  );
}

function AppsSection({ locale, apps }: { locale: string; apps: App[] }) {
  const shouldReduceMotion = useReducedMotion();
  const [ref, scrollState] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-32 px-4 bg-[#f4f4f4] dark:bg-white">
      <div className="max-w-7xl mx-auto">
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
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight uppercase">
            {locale === 'fr' ? 'NOS APPLICATIONS' : 'OUR APPLICATIONS'}
          </h2>
          <p className="text-lg text-foreground dark:text-white max-w-2xl mx-auto">
            {locale === 'fr'
              ? 'Découvre nos applications de bien-être et mobilité'
              : 'Discover our wellness and mobility applications'}
          </p>
        </motion.div>

        {/* Cards style Dribbble "Recommended" */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {apps.map((app, index) => (
            <motion.div
              key={app.name}
              initial={false}
              animate={{
                opacity: scrollState.isVisible ? 1 : 0,
                y: scrollState.isVisible ? 0 : 30,
              }}
              transition={{
                duration: shouldReduceMotion ? 0.3 : 0.5,
                delay: shouldReduceMotion ? 0 : index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
            >
              <Link href={app.href} className="block group">
                <div className="bg-white dark:bg-[#231212] rounded-2xl overflow-hidden shadow-card card-hover border border-[#231212]/5 dark:border-white/10">
                  {/* Image */}
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={app.image}
                      alt={app.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-premium-slow"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-[#f4f4f4] dark:bg-white rounded-xl flex items-center justify-center">
                        <app.icon className="text-foreground" size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{app.name}</h3>
                        <p className="text-sm text-foreground dark:text-white">
                          {app.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-foreground dark:text-white mb-6 leading-relaxed text-sm">
                      {app.description}
                    </p>

                    {/* CTA */}
                    <div className="inline-flex items-center gap-2 bg-[#231212] dark:bg-white text-white dark:text-[#231212] px-6 py-2.5 rounded-full font-semibold text-sm transition-premium hover:opacity-90 group-hover:gap-3">
                      {locale === 'fr' ? 'Explorer' : 'Explore'}
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection({ locale }: { locale: string }) {
  const shouldReduceMotion = useReducedMotion();
  const [ref, scrollState] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-32 px-4 bg-white dark:bg-[#231212]">
      <div className="max-w-4xl mx-auto">
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
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 tracking-tight uppercase">
            {locale === 'fr' ? 'NOTRE MISSION' : 'OUR MISSION'}
          </h2>
          <p className="text-lg text-foreground dark:text-white leading-relaxed mb-16 max-w-2xl mx-auto">
            {locale === 'fr'
              ? "Chez Yuzu Labs, nous croyons que le bien-être devrait être accessible à tous. Nos applications sont conçues pour t'accompagner au quotidien dans ta quête de mobilité, flexibilité et sérénité."
              : 'At Yuzu Labs, we believe wellness should be accessible to everyone. Our apps are designed to support you daily in your quest for mobility, flexibility, and serenity.'}
          </p>

          <div className="grid sm:grid-cols-3 gap-12 mt-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-foreground mb-3">2</div>
              <p className="text-foreground dark:text-white text-sm font-medium">
                {locale === 'fr' ? 'Applications' : 'Applications'}
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-foreground mb-3">500+</div>
              <p className="text-foreground dark:text-white text-sm font-medium">
                {locale === 'fr' ? 'Exercices' : 'Exercises'}
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-foreground mb-3">FR</div>
              <p className="text-foreground dark:text-white text-sm font-medium">
                {locale === 'fr' ? 'Made in France' : 'Made in France'}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
