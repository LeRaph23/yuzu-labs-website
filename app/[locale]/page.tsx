'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Activity, Leaf } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const locale = useLocale();

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
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-100/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-blue-100 border border-green-200 px-4 py-2 rounded-full mb-6"
            >
              <Sparkles size={16} className="text-green-600" />
              <span className="text-sm font-medium bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                {locale === 'fr' ? 'Applications de bien-être' : 'Wellness Applications'}
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="bg-gradient-to-r from-green-600 via-green-500 to-blue-600 bg-clip-text text-transparent">
                Yuzu Labs
              </span>
            </h1>

            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              {locale === 'fr'
                ? 'Nous développons des applications de bien-être innovantes pour améliorer ta qualité de vie au quotidien.'
                : 'We develop innovative wellness applications to improve your quality of life every day.'}
            </p>
          </motion.div>

          {/* Apps Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {apps.map((app, index) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Link href={app.href} className="block group">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
                    {/* App Icon */}
                    <div className={`w-16 h-16 ${app.bgLight} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <app.icon className={app.textColor} size={32} />
                    </div>

                    {/* App Info */}
                    <h2 className="text-2xl font-bold text-foreground mb-2">{app.name}</h2>
                    <p className={`text-sm font-medium ${app.textColor} mb-4`}>{app.tagline}</p>
                    <p className="text-foreground/70 mb-6 leading-relaxed">{app.description}</p>

                    {/* CTA */}
                    <div className={`inline-flex items-center gap-2 ${app.textColor} font-semibold group-hover:gap-3 transition-all`}>
                      {locale === 'fr' ? 'Découvrir' : 'Discover'}
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
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
      <section className="py-24 bg-gradient-to-br from-green-600 via-green-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {locale === 'fr' ? 'Contacte-nous' : 'Contact us'}
            </h2>
            <p className="text-xl text-white/80 mb-8">
              {locale === 'fr'
                ? 'Une question ? Une suggestion ? On est là pour toi.'
                : 'A question? A suggestion? We\'re here for you.'}
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
              <p className="text-white font-semibold mb-2">Yuzu Labs SAS</p>
              <p className="text-white/80 text-sm mb-4">11 rue de Lorraine, 68490 PETIT-LANDAU, France</p>
              <p className="text-white/80 text-sm mb-4">SIREN : 994879013</p>
              <a
                href="mailto:yuzu.contactme@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors"
              >
                yuzu.contactme@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
