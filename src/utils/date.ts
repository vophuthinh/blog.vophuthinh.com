import { DATE_FORMATS, type Locale } from '../consts';

export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(DATE_FORMATS[locale], {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  }).format(date);
}
