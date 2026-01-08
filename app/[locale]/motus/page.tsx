'use client';

import { useLocale } from 'next-intl';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import { Activity, Users, Heart, Target, Clock, Zap } from 'lucide-react';

export const runtime = 'edge';



export default function MotusPage() {
  const locale = useLocale();

  // Mockup images - À remplacer par les screenshots réels fournis par l'utilisateur
  const mockupImages = [
    '/images/motus/Home.webp',
    '/images/motus/dashboard.webp',
    '/images/motus/kine.webp',
  ];

  // Fonctionnalités exclusives Motus
  const motusFeatures = [
    {
      icon: Activity,
      title: locale === 'fr' ? 'Exercices de mobilité' : 'Mobility Exercises',
      description:
        locale === 'fr'
          ? 'Des programmes adaptés pour améliorer ta mobilité au quotidien.'
          : 'Tailored programs to improve your daily mobility.',
      href: '#features',
    },
    {
      icon: Users,
      title: locale === 'fr' ? 'Suivi kiné' : 'Physio Follow-up',
      description:
        locale === 'fr'
          ? 'Connecte-toi avec ton kinésithérapeute pour un suivi personnalisé.'
          : 'Connect with your physiotherapist for personalized follow-up.',
      href: '#features',
    },
    {
      icon: Heart,
      title: locale === 'fr' ? 'Soulagement des douleurs' : 'Pain Relief',
      description:
        locale === 'fr'
          ? 'Des exercices ciblés pour soulager les tensions et douleurs.'
          : 'Targeted exercises to relieve tension and pain.',
      href: '#features',
    },
    {
      icon: Target,
      title: locale === 'fr' ? 'Programmes personnalisés' : 'Personalized Programs',
      description:
        locale === 'fr'
          ? 'Des recommandations adaptées à ton niveau et tes objectifs.'
          : 'Recommendations tailored to your level and goals.',
      href: '#features',
    },
    {
      icon: Clock,
      title: locale === 'fr' ? 'Séances flexibles' : 'Flexible Sessions',
      description:
        locale === 'fr'
          ? 'Des séances de 5 à 30 minutes selon ton emploi du temps.'
          : 'Sessions from 5 to 30 minutes according to your schedule.',
      href: '#features',
    },
    {
      icon: Zap,
      title: locale === 'fr' ? 'Suivi de progression' : 'Progress Tracking',
      description:
        locale === 'fr'
          ? 'Visualise tes progrès et reste motivé avec des statistiques.'
          : 'Track your progress and stay motivated with statistics.',
      href: '#features',
    },
  ];

  // Témoignages utilisateurs Motus
  const motusTestimonials = [
    {
      text:
        locale === 'fr'
          ? 'Motus a transformé ma récupération après ma blessure. Les exercices sont parfaitement adaptés et le suivi avec mon kiné est excellent.'
          : 'Motus transformed my recovery after my injury. The exercises are perfectly adapted and the follow-up with my physio is excellent.',
      author: 'Pierre M.',
      role: locale === 'fr' ? 'Utilisateur depuis 4 mois' : 'User for 4 months',
      rating: 5,
    },
    {
      text:
        locale === 'fr'
          ? 'Enfin une app qui me permet de travailler ma mobilité au quotidien. Les programmes sont variés et motivants.'
          : 'Finally an app that allows me to work on my mobility daily. The programs are varied and motivating.',
      author: 'Julie K.',
      role: locale === 'fr' ? 'Utilisatrice depuis 2 mois' : 'User for 2 months',
      rating: 5,
    },
    {
      text:
        locale === 'fr'
          ? 'Le suivi avec mon kiné via Motus est révolutionnaire. Je peux suivre mes progrès en temps réel.'
          : 'The follow-up with my physio via Motus is revolutionary. I can track my progress in real time.',
      author: 'Marc D.',
      role: locale === 'fr' ? 'Utilisateur depuis 6 mois' : 'User for 6 months',
      rating: 5,
    },
  ];

  return (
    <>
      {/* Hero Section - Exclusivement Motus */}
      <Hero
        title={locale === 'fr' ? 'MOTUS : TA MOBILITÉ AU QUOTIDIEN' : 'MOTUS: YOUR DAILY MOBILITY'}
        description={
          locale === 'fr'
            ? 'Exercices de mobilité personnalisés, suivi par ton kiné, et programmes adaptés à tes besoins. Retrouve une mobilité optimale avec Motus.'
            : 'Personalized mobility exercises, follow-up by your physio, and programs tailored to your needs. Regain optimal mobility with Motus.'
        }
        ctaText={locale === 'fr' ? 'Découvrir Motus' : 'Discover Motus'}
        ctaHref="#download"
        ctaSecondaryText={locale === 'fr' ? 'En savoir plus' : 'Learn more'}
        ctaSecondaryHref="#features"
        mockupImages={mockupImages}
        appName="Motus"
        badge={locale === 'fr' ? 'Application de mobilité' : 'Mobility Application'}
      />

      {/* Section Statistiques */}
      <section className="py-24 bg-[#f4f4f4] dark:bg-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold text-foreground mb-3">200+</div>
              <p className="text-foreground/60 dark:text-foreground/70 text-sm font-medium">
                {locale === 'fr' ? 'Exercices' : 'Exercises'}
              </p>
            </div>
            <div>
              <div className="text-5xl font-bold text-foreground mb-3">50+</div>
              <p className="text-foreground/60 dark:text-foreground/70 text-sm font-medium">
                {locale === 'fr' ? 'Kinés partenaires' : 'Partner Physios'}
              </p>
            </div>
            <div>
              <div className="text-5xl font-bold text-foreground mb-3">5K+</div>
              <p className="text-foreground/60 dark:text-foreground/70 text-sm font-medium">
                {locale === 'fr' ? 'Utilisateurs' : 'Users'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités */}
      <Features
        title={locale === 'fr' ? 'POURQUOI CHOISIR MOTUS' : 'WHY CHOOSE MOTUS'}
        subtitle={
          locale === 'fr'
            ? 'Tout ce dont tu as besoin pour améliorer ta mobilité'
            : 'Everything you need to improve your mobility'
        }
        features={motusFeatures}
      />

      {/* Section Témoignages */}
      <Testimonials
        title={locale === 'fr' ? 'REJOINS NOTRE COMMUNAUTÉ' : 'JOIN OUR COMMUNITY'}
        subtitle={
          locale === 'fr'
            ? 'Des utilisateurs satisfaits par Motus'
            : 'Users satisfied with Motus'
        }
        testimonials={motusTestimonials}
        userCount="5K+"
      />

      {/* Section Newsletter */}
      <Newsletter
        title={locale === 'fr' ? 'RESTE INFORMÉ' : 'STAY UPDATED'}
        subtitle={
          locale === 'fr'
            ? 'Reçois les dernières actualités et nouveautés de Motus'
            : 'Get the latest news and updates from Motus'
        }
        placeholder={locale === 'fr' ? 'Ton email' : 'Your email'}
        buttonText={locale === 'fr' ? "S'abonner" : 'Subscribe'}
        successMessage={locale === 'fr' ? 'Inscrit !' : 'Subscribed!'}
      />
    </>
  );
}
