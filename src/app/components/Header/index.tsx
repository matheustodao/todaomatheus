import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useDimensions from '@hooks/useDimensions';

import useTranslate from '@hooks/useTranslate';

import {
  Container, LanguagesWrapper, Navigation, NavigationWrapper, Route, Routes,
} from './styled';
import { routes } from './utils/routes';

export default function Header() {
  const { translation, i18n } = useTranslate();
  const router = useRouter();
  const { doSizeIsBiggerThan } = useDimensions();
  const { isWidthBigger } = doSizeIsBiggerThan(999);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean | null>(isWidthBigger ?? true);

  useEffect(() => {
    window.addEventListener('resize', () => setIsOpenMenu(isWidthBigger));
    return () => window.removeEventListener('resize', () => setIsOpenMenu(isWidthBigger));
  }, [isWidthBigger]);

  function handleToggleModalVisibilityByClick() {
    setIsOpenMenu((state) => !state);
  }

  function handleChangeLanguage(language: string) {
    i18n.changeLanguage(language);
  }

  return (
    <Container>
      <LanguagesWrapper>
        <button type="button" onClick={() => handleChangeLanguage('en')}>
          <img
            src="/assets/icons/usa-flag.svg"
            alt={`${translation('languages.english')}`}
          />
        </button>
        <button type="button" onClick={() => handleChangeLanguage('pt')}>
          <img
            src="/assets/icons/brazil-flag.svg"
            alt={`${translation('languages.portuguese')}`}
          />
        </button>
      </LanguagesWrapper>

      <NavigationWrapper>
        <button
          type="button"
          className="isVisibleIconMenu"
          onClick={handleToggleModalVisibilityByClick}
        >
          <img
            src="/assets/icons/menu.svg"
            alt={`${translation('languages.english')}`}
          />
        </button>
        <AnimatePresence>
          <Navigation animate={isOpenMenu ? 'open' : 'closed'}>
            <Routes>
              {routes.map((item) => (
                <Route key={item.id} active={item.path === router.asPath}>
                  <Link href={item.path}>
                    <a>
                      {translation(item.label)}
                    </a>
                  </Link>
                </Route>
              ))}
            </Routes>
          </Navigation>
        </AnimatePresence>
      </NavigationWrapper>
    </Container>
  );
}
