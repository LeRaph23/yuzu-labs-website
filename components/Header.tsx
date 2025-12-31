'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X, ChevronDown } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAppsOpen, setIsAppsOpen] = useState(false);

  const apps = [
    { name: 'Yuzu', href: `/${locale}/yuzu`, color: 'text-green-600' },
    { name: 'Motus', href: `/${locale}/motus`, color: 'text-blue-600' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-green-lighter/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <Image
              src="/images/logo_yuzu_labs.png"
              alt="YuzuLabs Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Apps Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsAppsOpen(!isAppsOpen)}
                onBlur={() => setTimeout(() => setIsAppsOpen(false), 150)}
                className="flex items-center gap-1 text-foreground/70 hover:text-green-primary transition-colors font-medium"
              >
                {locale === 'fr' ? 'Nos Apps' : 'Our Apps'}
                <ChevronDown size={16} className={`transition-transform ${isAppsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isAppsOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[150px]">
                  {apps.map((app) => (
                    <Link
                      key={app.name}
                      href={app.href}
                      className={`block px-4 py-2 hover:bg-gray-50 ${app.color} font-medium`}
                    >
                      {app.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href={`/${locale}/legal`}
              className="text-foreground/70 hover:text-green-primary transition-colors font-medium"
            >
              {locale === 'fr' ? 'Mentions légales' : 'Legal'}
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
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
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-lighter/50">
            <nav className="flex flex-col gap-2">
              <p className="px-2 py-1 text-sm text-foreground/50 font-medium">
                {locale === 'fr' ? 'Nos Applications' : 'Our Applications'}
              </p>
              {apps.map((app) => (
                <Link
                  key={app.name}
                  href={app.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-2 ${app.color} font-medium hover:bg-gray-50 rounded-lg`}
                >
                  {app.name}
                </Link>
              ))}
              
              <div className="border-t border-green-lighter/50 my-2" />
              
              <Link
                href={`/${locale}/legal`}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 text-foreground/70 hover:text-green-primary transition-colors font-medium"
              >
                {locale === 'fr' ? 'Mentions légales' : 'Legal'}
              </Link>

              <div className="flex items-center justify-between pt-4 border-t border-green-lighter/50 mt-2">
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
