import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="border-t border-foreground/10 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo_yuzu_labs.png"
              alt="Yuzu Labs"
              width={110}
              height={30}
              className="h-8 w-auto"
            />
          </div>

          <nav className="flex flex-wrap gap-6 text-sm text-foreground/50">
            <Link href={`/${locale}/legal`} className="hover:text-foreground transition-colors">
              {t('legal')}
            </Link>
            <Link href={`/${locale}/privacy`} className="hover:text-foreground transition-colors">
              {t('privacy')}
            </Link>
            <Link href={`/${locale}/terms`} className="hover:text-foreground transition-colors">
              {t('terms')}
            </Link>
            <a href="mailto:yuzu.contactme@gmail.com" className="hover:text-foreground transition-colors">
              yuzu.contactme@gmail.com
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-foreground/5 text-sm text-foreground/40">
          <p>&copy; {new Date().getFullYear()} {t('company')}. {t('rights')}</p>
        </div>
      </div>
    </footer>
  );
}
