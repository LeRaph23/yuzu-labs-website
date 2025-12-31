'use client';

import { useLocale } from 'next-intl';
import { ArrowRight, Sparkles, Activity, Users, Heart, Zap, Target, Clock } from 'lucide-react';
import Image from 'next/image';
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
            <div className="text-left animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 px-4 py-2 rounded-full mb-6">
                <Sparkles size={16} className="text-blue-600" />
                <span className="text-sm font-medium text-blue-600">
                  {locale === 'fr' ? 'Bientôt disponible' : 'Coming Soon'}
                </span>
              </div>

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
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-blue-600/25 hover:scale-105"
                >
                  {locale === 'fr' ? "Découvrir l'app" : 'Discover the app'}
                  <ArrowRight size={20} />
                </a>
                <Link
                  href={`/${locale}/motus/privacy`}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-600 px-8 py-4 rounded-full font-semibold transition-all border-2 border-blue-600 hover:scale-105"
                >
                  {locale === 'fr' ? 'Confidentialité' : 'Privacy'}
                </Link>
              </div>
            </div>

            {/* Logo Motus */}
            <div className="relative flex items-center justify-center animate-fade-in-delayed">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] animate-float">
                <Image
                  src="/images/motus/logo.png"
                  alt="Motus Logo"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center shadow-lg animate-float-delayed">
                <span className="text-2xl">💪</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center shadow-lg animate-float-slow">
                <span className="text-xl">🏃</span>
              </div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center shadow-lg animate-float-delayed-slow">
                <span className="text-lg">✨</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {locale === 'fr' ? 'Fonctionnalités' : 'Features'}
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              {locale === 'fr' 
                ? 'Tout ce dont tu as besoin pour améliorer ta mobilité'
                : 'Everything you need to improve your mobility'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold transition-all hover:bg-blue-50 hover:scale-105"
            >
              {locale === 'fr' ? "Conditions d'utilisation" : 'Terms of Service'}
            </Link>
            <Link
              href={`/${locale}/motus/privacy`}
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold transition-all hover:bg-white/10 hover:scale-105"
            >
              {locale === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy'}
            </Link>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(10px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 2s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 2.5s ease-in-out infinite 0.5s;
        }
        .animate-float-delayed-slow {
          animation: float-delayed 3s ease-in-out infinite 1s;
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-fade-in-delayed {
          animation: fade-in 0.6s ease-out 0.3s forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
}
