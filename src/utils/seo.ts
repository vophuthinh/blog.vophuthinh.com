import { SITE, type Locale } from '../consts';
import { switchLocalePath } from './i18n';

export type AlternateLink = {
  hrefLang: string;
  href: string;
};

export function buildAbsoluteUrl(pathname: string): string {
  return new URL(pathname, SITE.url).toString();
}

export function canonicalFromPath(pathname: string): string {
  const normalized = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  return buildAbsoluteUrl(normalized);
}

export function defaultAlternates(pathname: string): AlternateLink[] {
  return [
    { hrefLang: 'vi', href: buildAbsoluteUrl(switchLocalePath(pathname, 'vi' as Locale)) },
    { hrefLang: 'en', href: buildAbsoluteUrl(switchLocalePath(pathname, 'en' as Locale)) },
    {
      hrefLang: 'x-default',
      href: buildAbsoluteUrl(switchLocalePath(pathname, SITE.defaultLocale as Locale))
    }
  ];
}
