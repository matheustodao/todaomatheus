import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import useTranslate from '../../../hooks/useTranslate';
import {
  Container, LanguagesWrapper, Navigation, NavigationWrapper, Route,
} from './styled';

export default function Header() {
  const { translation, i18n } = useTranslate();
  const router = useRouter();
  const [isVisibleMenu, setIsVisibleMenu] = useState<boolean>(false);
  const routes = [
    {
      id: 1,
      name: translation('menuNavigation.home.name'),
      path: '/',
    },

    {
      id: 3,
      name: translation('menuNavigation.howIBuiltMyPortfolio.name'),
      path: '/blog/posts/how-i-built-my-portfolio',
    },

    {
      id: 2,
      name: translation('menuNavigation.contact.name'),
      path: '/contact',
    },

  ];

  function handleToggleModalVisibilityByClick() {
    setIsVisibleMenu((state) => !state);
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
        <Navigation isVisible={isVisibleMenu}>
          <ul>

            {routes.map((item) => (
              <Route key={item.id} active={item.path === router.asPath}>
                <Link href={item.path}>
                  <a>
                    {item.name}
                  </a>
                </Link>
              </Route>
            ))}
          </ul>
        </Navigation>
      </NavigationWrapper>
    </Container>
  );
}
