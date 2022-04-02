import { useTranslation } from 'react-i18next';
import ReactHTMLParse from 'react-html-parser';

export default function useTranslate() {
  const { t, i18n } = useTranslation();

  return {
    translationHTLMParse: (getTranslation: string) => ReactHTMLParse(t(getTranslation)),
    translation: t,
    i18n,
  };
}
