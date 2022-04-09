import styled, { DefaultTheme } from 'styled-components';
import { motion } from 'framer-motion';

interface IRoute {
  theme: DefaultTheme,
  active: boolean,
}

interface INavigation {
  isVisible: boolean,
}

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 1.6rem;
  background: ${({ theme }) => theme.colors.primary.main};

  button {
    background: none;
    border: none;
  }
`;

export const LanguagesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button + button {
    margin-left: .8rem;
  }
`;

export const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 1000px) {
    .isVisibleIconMenu {
      display: none;
    }
  }
`;

export const Navigation = styled(motion.nav)`
  position: absolute;
  bottom: -12rem;
  left: 0;
  width: 100%;
  display: ${({ isVisible }: INavigation) => (isVisible && 'block')};
  background: ${({ theme }) => theme.colors.primary.main};
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  z-index: 100;

  @media screen and (min-width: 1000px) {
    position: static;
    display: flex;
    flex: 1;
    ul {
      display: flex;
      flex-direction: row;

      li {
        border-radius: 8px;
        min-width: 8.4rem;
        width: max-content;
        display: flex;
        align-items: center;
        justify-content: center;
        + li {
          margin-left: 16px;
        }
      }
    }
  }
`;

export const Route = styled.li`
  list-style: none;
  height: 2.7rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme, active }: IRoute) => active && theme.colors.primary.light};
  padding: 2rem 1rem;

  a {
    text-decoration: none;
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
    font-weight: ${({ active }) => (active ? 600 : 400)};
    color: #fff;
  }
`;
