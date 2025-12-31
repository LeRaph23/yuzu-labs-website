import { setRequestLocale } from 'next-intl/server';
import { locales } from '@/lib/i18n';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Mascot from '@/components/Mascot';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export const runtime = 'edge';

type Props = {
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function YuzuPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Features />
      <Mascot />
      <Testimonials />
      <Contact />
    </>
  );
}

