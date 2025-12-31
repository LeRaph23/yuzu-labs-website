'use client';

import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Activity, Users, Heart, Zap, Target, Clock } from 'lucide-react';
import Link from 'next/link';

export default function MotusPageContent() {
  const locale = useLocale();

  const features = [
    {
      icon: Activity,
      title: locale === 'fr' ? 'Exercices de mobilité' : 'Mobility Exercises',
      description: locale === 'fr' 
        ? 'Des programmes adaptés pour améliorer ta mobilité au quotidien.'
        : 'Tailored programs to improve your daily mobility.',
    },
    {
      icon: Users,
      title: locale === 'fr' ? 'Suivi kiné' : 'Physio Follow-up',
      description: locale === 'fr'
        ? 'Connecte-toi avec ton kinésithérapeute pour un suivi personnalisé.'
        : 'Connect with your physiotherapist for personalized follow-up.',
    },
    {
      icon: Heart,
      title: locale === 'fr' ? 'Soulagement des douleurs' : 'Pain Relief',
      description: locale === 'fr'
        ? 'Des exercices ciblés pour soulager les tensions et douleurs.'
        : 'Targeted exercises to relieve tension and pain.',
    },
    {
      icon: Target,
      title: locale === 'fr' ? 'Programmes personnalisés' : 'Personalized Programs',
      description: locale === 'fr'
        ? 'Des recommandations adaptées à ton niveau et tes objectifs.'
        : 'Recommendations tailored to your level and goals.',
    },
    {
      icon: Clock,
      title: locale === 'fr' ? 'Séances flexibles' : 'Flexible Sessions',
      description: locale === 'fr'
        ? 'Des séances de 5 à 30 minutes selon ton emploi du temps.'
        : 'Sessions from 5 to 30 minutes according to your schedule.',
    },
    {
      icon: Zap,
      title: locale === 'fr' ? 'Suivi de progression' : 'Progress Tracking',
      description: locale === 'fr'
        ? 'Visualise tes progrès et reste motivé avec des statistiques.'
        : 'Track your progress and stay motivated with statistics.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background decorations - Blue/Orange theme for Motus */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/50 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 px-4 py-2 rounded-full mb-6"
              >
                <Sparkles size={16} className="text-blue-600" />
                <span className="text-sm font-medium text-blue-600">
                  {locale === 'fr' ? 'Bientôt disponible' : 'Coming Soon'}
                </span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                {locale === 'fr' ? 'Motus, ta' : 'Motus, your'}{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  {locale === 'fr' ? 'mobilité' : 'mobility'}
                </span>
                {' '}{locale === 'fr' ? 'au quotidien' : 'companion'}
              </h1>

              <p className="text-lg text-foreground/70 mb-8 max-w-xl leading-relaxed">
                {locale === 'fr' 
                  ? 'Exercices de mobilité personnalisés, suivi par ton kiné, et programmes adaptés à tes besoins. Retrouve une mobilité optimale avec Motus.'
                  : 'Personalized mobility exercises, follow-up by your physio, and programs tailored to your needs. Regain optimal mobility with Motus.'}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#features"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-blue-600/25"
                >
                  {locale === 'fr' ? "Découvrir l'app" : 'Discover the app'}
                  <ArrowRight size={20} />
                </motion.a>
                <Link
                  href={`/${locale}/motus/privacy`}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-600 px-8 py-4 rounded-full font-semibold transition-all border-2 border-blue-600"
                >
                  {locale === 'fr' ? 'Confidentialité' : 'Privacy'}
                </Link>
              </div>
            </motion.div>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center"
                >
                  <Activity size={120} className="text-blue-600" />
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <span className="text-2xl">💪</span>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <span className="text-xl">🏃</span>
                </motion.div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-1/2 -right-8 w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <span className="text-lg">✨</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {locale === 'fr' ? 'Fonctionnalités' : 'Features'}
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              {locale === 'fr' 
                ? 'Tout ce dont tu as besoin pour améliorer ta mobilité'
                : 'Everything you need to improve your mobility'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {locale === 'fr' ? 'Prêt à bouger ?' : 'Ready to move?'}
            </h2>
            <p className="text-xl text-white/80 mb-8">
              {locale === 'fr'
                ? 'Motus arrive bientôt sur iOS et Android.'
                : 'Motus is coming soon to iOS and Android.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/motus/terms`}
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold transition-all hover:bg-blue-50"
              >
                {locale === 'fr' ? "Conditions d'utilisation" : 'Terms of Service'}
              </Link>
              <Link
                href={`/${locale}/motus/privacy`}
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold transition-all hover:bg-white/10"
              >
                {locale === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

