import { setRequestLocale } from 'next-intl/server';
import { locales } from '@/lib/i18n';
import Hero from '@/components/Hero';
import AppShowcase from '@/components/AppShowcase';
import Reviews from '@/components/Reviews';
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
      <AppShowcase />
      <Reviews />
      <AppStoreCTA />
    </>
  );
}
