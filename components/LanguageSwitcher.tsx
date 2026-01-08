'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-2">
      <Globe size={18} className="text-foreground/60 dark:text-foreground/70" />
      <div className="flex items-center gap-1 bg-gray-light dark:bg-gray-light/20 rounded-full p-1">
        <button
          onClick={() => switchLocale('fr')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-premium ${
            locale === 'fr'
              ? 'bg-dark dark:bg-white text-white dark:text-dark'
              : 'text-foreground/70 dark:text-foreground/70 hover:text-foreground'
          }`}
        >
          FR
        </button>
        <button
          onClick={() => switchLocale('en')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-premium ${
            locale === 'en'
              ? 'bg-dark dark:bg-white text-white dark:text-dark'
              : 'text-foreground/70 dark:text-foreground/70 hover:text-foreground'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
}
