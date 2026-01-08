import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './lib/i18n';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
});

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);
  
  // Ajouter le pathname dans un header pour utilisation dans generateMetadata
  const pathname = request.nextUrl.pathname;
  response.headers.set('x-pathname', pathname);
  
  return response;
}

export const config = {
  matcher: ['/', '/(fr|en)/:path*'],
};

