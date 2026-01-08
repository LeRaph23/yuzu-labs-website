'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

interface NewsletterProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  successMessage?: string;
  className?: string;
}

export default function Newsletter({
  title,
  subtitle,
  placeholder,
  buttonText,
  successMessage,
  className = '',
}: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const [ref, scrollState] = useScrollAnimation({ threshold: 0.2 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsLoading(true);
    // Simuler l'envoi (à remplacer par un vrai appel API)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);
    setEmail('');

    // Réinitialiser après 3 secondes
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section
      ref={ref}
      className={`py-32 px-4 bg-[#e3e2f7] dark:bg-white/5 ${className}`}
    >
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
          {title && (
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 tracking-tight uppercase">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-foreground/70 dark:text-foreground/80 mb-12 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}

          {/* Formulaire */}
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder || 'Votre email'}
                required
                className="flex-1 px-6 py-4 bg-white dark:bg-[#231212] border-2 border-[#231212]/10 dark:border-white/10 rounded-full text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-[#231212] dark:focus:border-white transition-premium"
                disabled={isLoading || isSubmitted}
              />
              <button
                type="submit"
                disabled={isLoading || isSubmitted || !email}
                className="px-8 py-4 bg-[#231212] dark:bg-white text-white dark:text-[#231212] rounded-full font-semibold transition-premium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {isSubmitted ? (
                  <>
                    <Check size={20} />
                    {successMessage || 'Inscrit !'}
                  </>
                ) : isLoading ? (
                  'Envoi...'
                ) : (
                  <>
                    {buttonText || "S'abonner"}
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
