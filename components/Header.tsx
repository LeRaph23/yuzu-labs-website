'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-premium ${
        scrolled
          ? 'bg-white dark:bg-[#231212] backdrop-blur-md border-b border-[#231212]/10 dark:border-white/10 shadow-subtle'
          : 'bg-white dark:bg-[#231212] backdrop-blur-sm border-b border-[#231212]/10 dark:border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo à gauche */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <Image
              src="/images/logo_yuzu_labs.png"
              alt="YuzuLabs Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Navigation centrée - Desktop */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <Link
              href={`/${locale}/yuzu`}
              className="text-foreground/70 hover:text-foreground transition-premium font-medium text-sm"
            >
              Yuzu
            </Link>
            <Link
              href={`/${locale}/motus`}
              className="text-foreground/70 hover:text-foreground transition-premium font-medium text-sm"
            >
              Motus
            </Link>
            <Link
              href={`/${locale}/legal`}
              className="text-foreground/70 hover:text-foreground transition-premium font-medium text-sm"
            >
              {locale === 'fr' ? 'Légal' : 'Legal'}
            </Link>
          </nav>

          {/* Actions à droite - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <Link
              href="#contact"
              className="px-6 py-2.5 bg-white dark:bg-[#231212] border-2 border-[#231212] dark:border-white text-[#231212] dark:text-white rounded-full font-semibold text-sm hover:opacity-80 transition-premium"
            >
              {locale === 'fr' ? 'Télécharger' : 'Download'}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-premium-slow ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-[#231212]/10 dark:border-white/10">
            <nav className="flex flex-col gap-2">
              <Link
                href={`/${locale}/yuzu`}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 text-foreground/70 hover:text-foreground transition-premium font-medium"
              >
                Yuzu
              </Link>
              <Link
                href={`/${locale}/motus`}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 text-foreground/70 hover:text-foreground transition-premium font-medium"
              >
                Motus
              </Link>
              <Link
                href={`/${locale}/legal`}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 text-foreground/70 hover:text-foreground transition-premium font-medium"
              >
                {locale === 'fr' ? 'Légal' : 'Legal'}
              </Link>
              
              <div className="border-t border-[#231212]/10 dark:border-white/10 my-2" />
              
              <div className="flex items-center justify-between px-4 py-2">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
              
              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mx-4 mt-2 px-6 py-2.5 bg-[#231212] dark:bg-white text-white dark:text-[#231212] rounded-full font-semibold text-sm text-center hover:opacity-90 transition-premium"
              >
                {locale === 'fr' ? 'Télécharger' : 'Download'}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
