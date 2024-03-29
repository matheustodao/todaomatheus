import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import useDimensions from '@hooks/useDimensions';
import useTranslate from '@hooks/useTranslate';

import {
  Container, LanguagesWrapper, Navigation, NavigationWrapper, Route, Routes,
} from './styled';

import { routes } from './utils/routes';

export default function Header() {
  const { translation } = useTranslate('common');
  const router = useRouter();
  const { dimensionsOverlimit } = useDimensions();
  const { widthOverlimit } = dimensionsOverlimit(999);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(true);
  useEffect(() => {
    if (router.pathname) {
      setIsOpenMenu(false);
    }

    if (widthOverlimit) {
      setIsOpenMenu(true);
    }

    if (!widthOverlimit) {
      setIsOpenMenu(false);
    }
  }, [widthOverlimit, router.pathname]);

  function handleToggleModalVisibilityByClick() {
    setIsOpenMenu((state) => !state);
  }

  return (
    <Container>
      <LanguagesWrapper>
        <Link href={router.asPath} locale="en-US">
          <a>
            <img
              src="/assets/icons/usa-flag.svg"
              alt={`${translation('languages.en-US')}`}
            />
          </a>
        </Link>

        <Link href={router.asPath} locale="pt-BR">
          <a>
            <img
              src="/assets/icons/brazil-flag.svg"
              alt={`${translation('languages.pt-BR')}`}
            />
          </a>
        </Link>
      </LanguagesWrapper>

      <NavigationWrapper>
        <button
          type="button"
          className="isVisibleIconMenu"
          onClick={handleToggleModalVisibilityByClick}
        >
          <img
            width={32}
            height={32}
            src="/assets/icons/menu.svg"
            alt={isOpenMenu ? 'Close Menu' : 'Open Menu'}
          />
        </button>
        <AnimatePresence>
          <Navigation animate={isOpenMenu ? 'open' : 'closed'}>
            <Routes>
              {routes.map((item) => (
                <Route key={item.id} active={item.path === router.asPath}>
                  <Link href={item.path} locale={router.locale}>
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
