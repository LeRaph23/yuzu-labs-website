'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const t = useTranslations('contact');
  const shouldReduceMotion = useReducedMotion();
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [sectionRef, sectionState] = useScrollAnimation({ threshold: 0.1 });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Form data:', data);
      setStatus('success');
      reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="py-32 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={false}
          animate={{
            opacity: sectionState.isVisible ? 1 : 0,
            y: sectionState.isVisible ? 0 : 30,
          }}
          transition={{
            duration: shouldReduceMotion ? 0.3 : 0.6,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={false}
          animate={{
            opacity: sectionState.isVisible ? 1 : 0,
            y: sectionState.isVisible ? 0 : 30,
          }}
          transition={{
            duration: shouldReduceMotion ? 0.3 : 0.6,
            delay: shouldReduceMotion ? 0 : 0.15,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-card border border-gray-100/50"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-2"
              >
                {t('name')}
              </label>
              <input
                type="text"
                id="name"
                {...register('name')}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-premium outline-none ${
                  errors.name
                    ? 'border-red-primary focus:border-red-primary'
                    : 'border-green-lighter focus:border-green-primary'
                } bg-background`}
                placeholder="Jean Dupont"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-primary">{errors.name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                {t('email')}
              </label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-colors outline-none ${
                  errors.email
                    ? 'border-red-primary focus:border-red-primary'
                    : 'border-green-lighter focus:border-green-primary'
                } bg-background`}
                placeholder="jean@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-primary">{errors.email.message}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                {t('message')}
              </label>
              <textarea
                id="message"
                rows={5}
                {...register('message')}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-colors outline-none resize-none ${
                  errors.message
                    ? 'border-red-primary focus:border-red-primary'
                    : 'border-green-lighter focus:border-green-primary'
                } bg-background`}
                placeholder="Votre message..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-primary">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-primary hover:bg-green-light disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold transition-premium flex items-center justify-center gap-2 shadow-card"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Send size={20} />
                  {t('send')}
                </>
              )}
            </button>

            {/* Status Messages */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-green-primary bg-green-pale p-4 rounded-xl"
              >
                <CheckCircle size={20} />
                <span>{t('success')}</span>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-red-primary bg-red-light p-4 rounded-xl"
              >
                <AlertCircle size={20} />
                <span>{t('error')}</span>
              </motion.div>
            )}
          </form>

          {/* Direct Email */}
          <div className="mt-10 pt-8 border-t border-green-lighter/50 text-center">
            <p className="text-foreground/50 mb-3 text-sm">{t('emailDirect')}</p>
            <a
              href="mailto:yuzu.contactme@gmail.com"
              className="inline-flex items-center gap-2 text-green-primary hover:text-green-light font-semibold transition-premium"
            >
              <Mail size={18} />
              yuzu.contactme@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

