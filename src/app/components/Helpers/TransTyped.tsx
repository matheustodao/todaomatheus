import UnsafeTrans from 'next-translate/Trans';
import type { TransProps as UnsafeTransProps } from 'next-translate';

import { ITranslationKeys, INamespaces } from '@type/TranslationKeys';

export interface TransProps<Namespace extends INamespaces>
  extends Omit<UnsafeTransProps, 'i18nKey'> {
  i18nKey: `${Namespace}:${ITranslationKeys[Namespace]}`;
}

export function TransTyped(props: TransProps<INamespaces>) {
  return <UnsafeTrans {...props} />;
}
