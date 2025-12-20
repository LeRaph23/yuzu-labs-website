import { getTranslations, setRequestLocale } from 'next-intl/server';
import { locales } from '@/lib/i18n';

type Props = {
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function PrivacyPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);
  
  const t = await getTranslations('privacy');

  const sections = [
    { key: 'collection', title: t('collection.title'), content: t('collection.content') },
    { key: 'usage', title: t('usage.title'), content: t('usage.content') },
    { key: 'cookies', title: t('cookies.title'), content: t('cookies.content') },
    { key: 'rights', title: t('rights.title'), content: t('rights.content') },
    { key: 'retention', title: t('retention.title'), content: t('retention.content') },
    { key: 'contact', title: t('contact.title'), content: t('contact.content') },
  ];

  return (
    <div className="min-h-screen bg-background py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-4">{t('title')}</h1>
        <p className="text-foreground/70 mb-8 leading-relaxed">{t('intro')}</p>

        <div className="space-y-6">
          {sections.map((section) => (
            <section key={section.key} className="bg-white rounded-2xl p-8 card-shadow">
              <h2 className="text-xl font-semibold text-green-primary mb-3">
                {section.title}
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

