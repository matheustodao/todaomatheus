/* eslint-disable no-unused-vars */
import 'react-i18next';

import { resources } from './src/i18n/locales';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof resources.en.translation;
    resources: typeof resources['en'];
  }
}
