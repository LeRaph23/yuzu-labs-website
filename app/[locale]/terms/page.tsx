import { getTranslations, setRequestLocale } from 'next-intl/server';
import { locales } from '@/lib/i18n';

export const runtime = 'edge';

type Props = {
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function TermsPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);
  
  const t = await getTranslations('terms');

  const sections = [
    { key: 'object', title: t('object.title'), content: t('object.content') },
    { key: 'access', title: t('access.title'), content: t('access.content') },
    { key: 'intellectual', title: t('intellectual.title'), content: t('intellectual.content') },
    { key: 'responsibility', title: t('responsibility.title'), content: t('responsibility.content') },
    { key: 'modification', title: t('modification.title'), content: t('modification.content') },
    { key: 'law', title: t('law.title'), content: t('law.content') },
  ];

  return (
    <div className="min-h-screen bg-background py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-4">{t('title')}</h1>
        <p className="text-foreground/70 mb-8 leading-relaxed">{t('intro')}</p>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <section key={section.key} className="bg-white rounded-2xl p-8 card-shadow">
              <h2 className="text-xl font-semibold text-green-primary mb-3">
                {index + 1}. {section.title}
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        <p className="mt-8 text-sm text-foreground/60 text-center">
          Dernière mise à jour : Décembre 2024
        </p>
      </div>
    </div>
  );
}

