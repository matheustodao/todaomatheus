import { ITranslation } from './types/translation';
import enLanguage from './en.json';
import ptBRLanguage from './pt-br.json';

interface IResources {
  [key: string]: {
    translation: ITranslation
  },
}

export const resources: IResources = {
  en: {
    translation: enLanguage,
  },

  ptBR: {
    translation: ptBRLanguage,
  },
};
