/**
 * Utilitaires pour le SEO et les métadonnées
 */

const BASE_URL = 'https://yuzulabs.app';

/**
 * Construit l'URL canonique pour une page donnée
 * @param path - Le chemin de la page (ex: '/', '/yuzu', '/motus/privacy')
 * @param locale - La locale (ex: 'fr', 'en')
 * @returns L'URL canonique complète
 */
export function getCanonicalUrl(path: string, locale: string): string {
  // Normaliser le chemin : s'assurer qu'il commence par / et ne se termine pas par /
  const normalizedPath = path === '/' ? '' : path.replace(/\/$/, '');
  const localePath = `/${locale}${normalizedPath}`;
  return `${BASE_URL}${localePath}`;
}

/**
 * Construit les URLs alternatives pour toutes les locales
 * @param path - Le chemin de la page (ex: '/', '/yuzu', '/motus/privacy')
 * @param locales - Les locales disponibles (ex: ['fr', 'en'])
 * @returns Un objet avec les URLs pour chaque locale
 */
export function getAlternateUrls(
  path: string,
  locales: readonly string[]
): Record<string, string> {
  const alternates: Record<string, string> = {};
  for (const locale of locales) {
    alternates[locale] = getCanonicalUrl(path, locale);
  }
  return alternates;
}
