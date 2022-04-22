/* eslint-disable no-unused-vars */
import 'react-i18next';

import { resources } from '@i18n/index';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof resources.en.translation;
    resources: typeof resources['en'];
  }
}
