'use client';

import { useLocale } from 'next-intl';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import { Heart, Dumbbell, Target, Brain, TrendingUp, User } from 'lucide-react';

export const runtime = 'edge';



export default function YuzuPage() {
  const locale = useLocale();

  // Mockup images - Screenshots Yuzu
  const mockupImages = [
    '/images/yuzu-home.png',              // Écran d'accueil avec "Salut, Raph" et séances
    '/images/yuzu-exercise.png',          // Écran d'exercice en cours (Balasana avec timer)
    '/images/yuzu-pain-relief.png',       // Écran de sélection zone douleur (Nuque, Dos, etc.)
  ];

  // Fonctionnalités exclusives Yuzu
  const yuzuFeatures = [
    {
      icon: Heart,
      title: locale === 'fr' ? 'Soulagement des douleurs' : 'Pain Relief',
      description:
        locale === 'fr'
          ? 'Des exercices ciblés pour soulager les tensions du dos, de la nuque et des articulations.'
          : 'Targeted exercises to relieve tension in your back, neck and joints.',
      href: '#features',
    },
    {
      icon: Dumbbell,
      title: locale === 'fr' ? 'Programmes d\'étirements' : 'Stretching Programs',
      description:
        locale === 'fr'
          ? 'Des séances structurées pour améliorer ta souplesse au quotidien.'
          : 'Structured sessions to improve your flexibility every day.',
      href: '#features',
    },
    {
      icon: Target,
      title: locale === 'fr' ? 'Objectif Grand Écart' : 'Splits Training',
      description:
        locale === 'fr'
          ? 'Un programme progressif pour atteindre le grand écart en toute sécurité.'
          : 'A progressive program to safely achieve the splits.',
      href: '#features',
    },
    {
      icon: Brain,
      title: locale === 'fr' ? 'Exercices Anti-Stress' : 'Anti-Stress Exercises',
      description:
        locale === 'fr'
          ? 'Des techniques de respiration et de relaxation pour apaiser ton esprit.'
          : 'Breathing and relaxation techniques to calm your mind.',
      href: '#features',
    },
    {
      icon: TrendingUp,
      title: locale === 'fr' ? 'Suivi de Progression' : 'Progress Tracking',
      description:
        locale === 'fr'
          ? 'Visualise tes progrès et reste motivé grâce à des statistiques détaillées.'
          : 'Visualize your progress and stay motivated with detailed statistics.',
      href: '#features',
    },
    {
      icon: User,
      title: locale === 'fr' ? 'Programmes Personnalisés' : 'Personalized Programs',
      description:
        locale === 'fr'
          ? 'Des recommandations adaptées à ton niveau et tes objectifs.'
          : 'Recommendations tailored to your level and goals.',
      href: '#features',
    },
  ];

  // Témoignages utilisateurs Yuzu
  const yuzuTestimonials = [
    {
      text:
        locale === 'fr'
          ? 'Grâce à Yuzu, j\'ai enfin réussi à faire le grand écart ! Le programme est progressif et très bien expliqué.'
          : 'Thanks to Yuzu, I finally achieved the splits! The program is progressive and very well explained.',
      author: 'Marie L.',
      role: locale === 'fr' ? 'Utilisatrice depuis 6 mois' : 'User for 6 months',
      rating: 5,
    },
    {
      text:
        locale === 'fr'
          ? 'Mes douleurs de dos ont considérablement diminué. Les exercices sont parfaitement adaptés à mon rythme.'
          : 'My back pain has significantly decreased. The exercises are perfectly adapted to my pace.',
      author: 'Thomas D.',
      role: locale === 'fr' ? 'Utilisateur depuis 3 mois' : 'User for 3 months',
      rating: 5,
    },
    {
      text:
        locale === 'fr'
          ? 'La mascotte Yuzu me motive chaque jour ! Une app simple mais terriblement efficace.'
          : 'The Yuzu mascot motivates me every day! A simple but incredibly effective app.',
      author: 'Sophie M.',
      role: locale === 'fr' ? 'Utilisatrice depuis 1 an' : 'User for 1 year',
      rating: 5,
    },
  ];

  return (
    <>
      {/* Hero Section - Exclusivement Yuzu */}
      <Hero
        title={locale === 'fr' ? 'YUZU : TON COACH BIEN-ÊTRE' : 'YUZU: YOUR WELLNESS COACH'}
        description={
          locale === 'fr'
            ? 'Étirements guidés, soulagement des douleurs et exercices anti-stress. Atteins tes objectifs de flexibilité avec ton compagnon citron préféré.'
            : 'Guided stretching, pain relief and anti-stress exercises. Achieve your flexibility goals with your favorite lemon companion.'
        }
        ctaText={locale === 'fr' ? 'Télécharger Yuzu' : 'Download Yuzu'}
        ctaHref="#download"
        ctaSecondaryText={locale === 'fr' ? 'En savoir plus' : 'Learn more'}
        ctaSecondaryHref="#features"
        mockupImages={mockupImages}
        appName="Yuzu"
        badge={locale === 'fr' ? 'Application de bien-être' : 'Wellness Application'}
      />

      {/* Section Statistiques */}
      <section className="py-24 bg-[#f4f4f4] dark:bg-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold text-foreground mb-3">500+</div>
              <p className="text-foreground/60 dark:text-foreground/70 text-sm font-medium">
                {locale === 'fr' ? 'Exercices' : 'Exercises'}
              </p>
            </div>
            <div>
              <div className="text-5xl font-bold text-foreground mb-3">10K+</div>
              <p className="text-foreground/60 dark:text-foreground/70 text-sm font-medium">
                {locale === 'fr' ? 'Utilisateurs' : 'Users'}
              </p>
            </div>
            <div>
              <div className="text-5xl font-bold text-foreground mb-3">4.8</div>
              <p className="text-foreground/60 dark:text-foreground/70 text-sm font-medium">
                {locale === 'fr' ? 'Note App Store' : 'App Store Rating'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités */}
      <Features
        title={locale === 'fr' ? 'POURQUOI CHOISIR YUZU' : 'WHY CHOOSE YUZU'}
        subtitle={
          locale === 'fr'
            ? 'Tout ce dont tu as besoin pour améliorer ton bien-être'
            : 'Everything you need to improve your wellness'
        }
        features={yuzuFeatures}
      />

      {/* Section Témoignages */}
      <Testimonials
        title={locale === 'fr' ? 'REJOINS NOTRE COMMUNAUTÉ' : 'JOIN OUR COMMUNITY'}
        subtitle={
          locale === 'fr'
            ? 'Des utilisateurs conquis par Yuzu'
            : 'Users who love Yuzu'
        }
        testimonials={yuzuTestimonials}
        userCount="10K+"
      />

      {/* Section Newsletter */}
      <Newsletter
        title={locale === 'fr' ? 'RESTE INFORMÉ' : 'STAY UPDATED'}
        subtitle={
          locale === 'fr'
            ? 'Reçois les dernières actualités et nouveautés de Yuzu'
            : 'Get the latest news and updates from Yuzu'
        }
        placeholder={locale === 'fr' ? 'Ton email' : 'Your email'}
        buttonText={locale === 'fr' ? "S'abonner" : 'Subscribe'}
        successMessage={locale === 'fr' ? 'Inscrit !' : 'Subscribed!'}
      />
    </>
  );
}
