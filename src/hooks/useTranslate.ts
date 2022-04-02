import { useTranslation, Normalize } from 'react-i18next';
import ReactHTMLParse from 'react-html-parser';
import { ITranslation } from '../i18n/locales/types/translation';

export default function useTranslate() {
  const { t, i18n } = useTranslation();

  return {
    translationHTMLMParse: (getTranslation: Normalize<ITranslation>) => (
      ReactHTMLParse(t(getTranslation))
    ),
    translation: t,
    i18n,
  };
}
