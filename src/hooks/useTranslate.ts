import useTranslation from 'next-translate/useTranslation';
import { TranslationQuery } from 'next-translate';

import { ITranslationKeys, INamespaces } from '@type/TranslationKeys';

export default function useTranslat<T extends INamespaces>(ns: INamespaces = 'common') {
  const { t, lang } = useTranslation(ns);

  return {
    translation: (
      s: ITranslationKeys[T],
      q?: TranslationQuery,
      o?: {
        returnObjects?: boolean;
        fallback?: string | string[];
        default?: string;
      },
    ) => t(s, q, o),
    lang,
  };
}
