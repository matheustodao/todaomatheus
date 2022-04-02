import { Main } from '../styles';
import useTranslate from '../hooks/useTranslate';

export default function Home() {
  const { translationHTLMParse, i18n } = useTranslate();
  function handleChangeLanguage() {
    const currentLanguage = i18n.language;
    return currentLanguage === 'en' ? i18n.changeLanguage('pt') : i18n.changeLanguage('en');
  }
  return (
    <Main>
      {translationHTLMParse('pages.aboutMe.description')}
      <button type="button" onClick={handleChangeLanguage}>
        Mudar para
        {' '}
        {i18n.language === 'en' ? 'pt' : 'en'}
      </button>
    </Main>
  );
}
