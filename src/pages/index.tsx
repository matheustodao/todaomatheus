import useTranslate from '../hooks/useTranslate';

export default function Home() {
  const { translationHTMLMParse } = useTranslate();
  return (
    <>
      {translationHTMLMParse('pages.aboutMe.description')}
    </>
  );
}
