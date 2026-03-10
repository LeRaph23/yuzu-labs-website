import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

const BASE_URL = 'https://yuzulabs.app';

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata' });
  const altLocale = locale === 'fr' ? 'en' : 'fr';

  return {
    title: t('title'),
    description: t('description'),
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'fr': '/fr',
        'en': '/en',
        'x-default': '/fr',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${BASE_URL}/${locale}`,
      siteName: 'Yuzu Labs',
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      alternateLocale: altLocale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/images/og-yuzu.png',
          width: 1200,
          height: 630,
          alt: locale === 'fr'
            ? 'Yuzu - App d\'étirements pour soulager les douleurs de bureau'
            : 'Yuzu - Stretching app to relieve desk pain',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/images/og-yuzu.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'apple-itunes-app': 'app-id=6756885861',
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

function StructuredData({ locale }: { locale: string }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Yuzu',
        description: locale === 'fr'
          ? 'Application d\'étirements personnalisés pour soulager les douleurs liées au travail assis et au télétravail. Routines de 5 minutes, sans matériel.'
          : 'Personalized stretching app to relieve pain from desk work and remote work. 5-minute routines, no equipment needed.',
        operatingSystem: 'iOS',
        applicationCategory: 'HealthApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'EUR',
        },
        installUrl: 'https://apps.apple.com/app/yuzu-move-pain-free/id6756885861',
        author: {
          '@type': 'Organization',
          name: 'Yuzu Labs',
        },
      },
      {
        '@type': 'Organization',
        name: 'Yuzu Labs',
        legalName: 'Yuzu Labs SAS',
        url: 'https://yuzulabs.app',
        logo: 'https://yuzulabs.app/images/logo_yuzu_labs.png',
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'yuzu.contactme@gmail.com',
          contactType: 'customer service',
          availableLanguage: ['French', 'English'],
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: '11 rue de Lorraine',
          postalCode: '68490',
          addressLocality: 'PETIT-LANDAU',
          addressCountry: 'FR',
        },
      },
      {
        '@type': 'WebSite',
        name: 'Yuzu Labs',
        url: 'https://yuzulabs.app',
        inLanguage: [locale === 'fr' ? 'fr-FR' : 'en-US'],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#406C55" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <StructuredData locale={locale} />
      </head>
      <body className="font-poppins antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
