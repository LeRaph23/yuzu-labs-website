import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { locales } from '@/lib/i18n';

export const runtime = 'edge';

type Props = {
  params: { locale: string };
};

export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function TermsPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);
  
  const t = await getTranslations('terms');

  const sections = [
    { key: 'section1', title: t('section1.title'), content: t('section1.content') },
    { key: 'section2', title: t('section2.title'), content: t('section2.content') },
    { key: 'section3', title: t('section3.title'), content: t('section3.content') },
    { key: 'section4', title: t('section4.title'), content: t('section4.content') },
    { key: 'section5', title: t('section5.title'), content: t('section5.content') },
    { key: 'section6', title: t('section6.title'), content: t('section6.content') },
    { key: 'section7', title: t('section7.title'), content: t('section7.content') },
    { key: 'section8', title: t('section8.title'), content: t('section8.content') },
    { key: 'section9', title: t('section9.title'), content: t('section9.content') },
    { key: 'section10', title: t('section10.title'), content: t('section10.content') },
  ];

  return (
    <div className="min-h-screen bg-background py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-4">{t('title')}</h1>
        <p className="text-foreground/70 mb-8 leading-relaxed whitespace-pre-line">{t('intro')}</p>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <section key={section.key} className="bg-white rounded-2xl p-8 card-shadow">
              <h2 className="text-xl font-semibold text-green-primary mb-3">
                {section.title}
              </h2>
              <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        <p className="mt-8 text-sm text-foreground/60 text-center">
          {t('lastUpdated')}
        </p>
      </div>
    </div>
  );
}

