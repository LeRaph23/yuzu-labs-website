import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { headers } from 'next/headers';
import { locales, type Locale } from '@/lib/i18n';
import { getCanonicalUrl, getAlternateUrls } from '@/lib/utils/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import { ThemeProvider } from 'next-themes';

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata' });
  
  // Obtenir le pathname depuis le header ajouté par le middleware
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || `/${locale}/`;
  
  // Extraire le chemin sans la locale (ex: '/fr/yuzu' -> '/yuzu', '/fr/' -> '/')
  const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
  
  // Construire les URLs canoniques
  const canonicalUrl = getCanonicalUrl(pathWithoutLocale, locale);
  const alternateUrls = getAlternateUrls(pathWithoutLocale, locales);

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: canonicalUrl,
      languages: alternateUrls,
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
      url: canonicalUrl,
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="font-poppins antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <NextIntlClientProvider messages={messages}>
            <ScrollProgress />
            <Header />
            <main>{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

