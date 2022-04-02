import { useTranslation } from 'react-i18next';
import { Main } from '../styles';
import translateToHTML from '../utils/translateToHTML';

export default function Home() {
  const { t } = useTranslation();
  return (
    <Main>
      {translateToHTML(t('pages.aboutMe.description'), true)}
    </Main>
  );
}
