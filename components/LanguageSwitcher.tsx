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
      <div className="flex items-center gap-1 bg-[#f4f4f4] dark:bg-white rounded-full p-1">
        <button
          onClick={() => switchLocale('fr')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-premium ${
            locale === 'fr'
              ? 'bg-[#231212] dark:bg-white text-white dark:text-[#231212]'
              : 'text-foreground/70 dark:text-foreground/70 hover:text-foreground'
          }`}
        >
          FR
        </button>
        <button
          onClick={() => switchLocale('en')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-premium ${
            locale === 'en'
              ? 'bg-[#231212] dark:bg-white text-white dark:text-[#231212]'
              : 'text-foreground/70 dark:text-foreground/70 hover:text-foreground'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
}
