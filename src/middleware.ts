import { NextResponse, NextRequest } from 'next/server';
import { i18n } from '@/app/i18n.config';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const getLocale = (request: NextRequest): string | undefined  => {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales: ReadonlyArray<string> = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages([...locales]);
  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

export const config = {
  matcher: '/((?!.*\\.).*)',
};

export const middleware = (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;

  // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  if (pathname.includes('/manifest.json') || pathname.includes('/assets') || pathname.includes('/api')) {
    return NextResponse.next();
  }

  console.log('\x1b[36m%s\x1b[0m', '➤ Pathname:', pathname);

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url));
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-forwarded-pathname', `${pathname}`);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
