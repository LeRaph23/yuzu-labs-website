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
      <Globe size={18} className="text-foreground/60" />
      <div className="flex items-center gap-1 bg-green-pale rounded-full p-1">
        <button
          onClick={() => switchLocale('fr')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
            locale === 'fr'
              ? 'bg-green-primary text-white'
              : 'text-foreground/70 hover:text-green-primary'
          }`}
        >
          FR
        </button>
        <button
          onClick={() => switchLocale('en')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
            locale === 'en'
              ? 'bg-green-primary text-white'
              : 'text-foreground/70 hover:text-green-primary'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
}

