import et from './et.json';
import en from './en.json';
import ru from './ru.json';

export type Locale = 'et' | 'en' | 'ru';
type Dictionary = Record<string, string>;

const dictionaries: Record<Locale, Dictionary> = {
  et,
  en,
  ru
};

export function useTranslations(locale: Locale) {
  const current = dictionaries[locale] ?? dictionaries.et;

  return function t(key: string): string {
    return current[key] ?? dictionaries.et[key] ?? key;
  };
}
