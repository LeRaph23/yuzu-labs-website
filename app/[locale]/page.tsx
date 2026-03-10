import { setRequestLocale } from 'next-intl/server';
import { locales } from '@/lib/i18n';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Mascot from '@/components/Mascot';
import AppStoreCTA from '@/components/AppStoreCTA';

export const runtime = 'edge';

type Props = {
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function HomePage({ params: { locale } }: Props) {
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <PainPoints />
      <HowItWorks />
      <Features />
      <Mascot />
      <AppStoreCTA />
    </>
  );
}

