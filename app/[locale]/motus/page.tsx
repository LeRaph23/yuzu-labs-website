import { setRequestLocale } from 'next-intl/server';
import { locales } from '@/lib/i18n';
import MotusPageContent from './MotusPageContent';

export const runtime = 'edge';

type Props = {
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function MotusPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  
  return <MotusPageContent />;
}
