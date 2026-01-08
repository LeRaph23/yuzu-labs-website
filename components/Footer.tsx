'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';

export default function Footer() {
  const locale = useLocale();

  const apps = [
    {
      name: 'Yuzu',
      href: `/${locale}/yuzu`,
      privacy: `/${locale}/yuzu/privacy`,
      terms: `/${locale}/yuzu/terms`,
    },
    {
      name: 'Motus',
      href: `/${locale}/motus`,
      privacy: `/${locale}/motus/privacy`,
      terms: `/${locale}/motus/terms`,
    },
  ];

  return (
    <footer className="bg-white dark:bg-[#231212] border-t border-[#231212]/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo_yuzu_labs.png"
                alt="YuzuLabs Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-foreground/60 dark:text-foreground/70 text-sm leading-relaxed">
              {locale === 'fr'
                ? 'Yuzu Labs développe des applications de bien-être innovantes pour améliorer ta qualité de vie au quotidien.'
                : 'Yuzu Labs develops innovative wellness applications to improve your quality of life every day.'}
            </p>
          </div>

          {/* Yuzu Links */}
          <div>
            <h3 className="font-semibold text-base mb-6 text-foreground">Yuzu</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/${locale}/yuzu`}
                  className="text-foreground/60 dark:text-foreground/70 hover:text-foreground transition-premium text-sm"
                >
                  {locale === 'fr' ? "Découvrir l'app" : 'Discover the app'}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/yuzu/privacy`}
                  className="text-foreground/60 dark:text-foreground/70 hover:text-foreground transition-premium text-sm"
                >
                  {locale === 'fr' ? 'Confidentialité' : 'Privacy'}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/yuzu/terms`}
                  className="text-foreground/60 dark:text-foreground/70 hover:text-foreground transition-premium text-sm"
                >
                  {locale === 'fr' ? "Conditions d'utilisation" : 'Terms of Service'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Motus Links */}
          <div>
            <h3 className="font-semibold text-base mb-6 text-foreground">Motus</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/${locale}/motus`}
                  className="text-foreground/60 dark:text-foreground/70 hover:text-foreground transition-premium text-sm"
                >
                  {locale === 'fr' ? "Découvrir l'app" : 'Discover the app'}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/motus/privacy`}
                  className="text-foreground/60 dark:text-foreground/70 hover:text-foreground transition-premium text-sm"
                >
                  {locale === 'fr' ? 'Confidentialité' : 'Privacy'}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/motus/terms`}
                  className="text-foreground/60 dark:text-foreground/70 hover:text-foreground transition-premium text-sm"
                >
                  {locale === 'fr' ? "Conditions d'utilisation" : 'Terms of Service'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-base mb-6 text-foreground">Contact</h3>
            <div className="space-y-2 text-sm text-foreground/60 dark:text-foreground/70">
              <p>Yuzu Labs SAS</p>
              <p>11 rue de Lorraine</p>
              <p>68490 PETIT-LANDAU, France</p>
              <p className="mb-4">SIREN : 994879013</p>
              <a
                href="mailto:yuzu.contactme@gmail.com"
                className="block hover:text-foreground transition-premium"
              >
                yuzu.contactme@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-12 pt-8 border-t border-[#231212]/10 dark:border-white/10">
          <div className="flex flex-wrap gap-6 justify-center text-sm text-foreground/50 dark:text-foreground/60 mb-6">
            <Link
              href={`/${locale}/legal`}
              className="hover:text-foreground transition-premium"
            >
              {locale === 'fr' ? 'Mentions légales' : 'Legal Notice'}
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center text-sm text-foreground/50 dark:text-foreground/60">
          <p>
            © {new Date().getFullYear()} Yuzu Labs SAS.{' '}
            {locale === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
