import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
  h3 {
    /* Title */
    font-family: ${({ theme }) => theme.fonts.outfit};
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: capitalize;
    font-size: 2.8rem;
    color: ${({ theme }) => theme.colors.text.main};
    margin-bottom: 4.2rem;
  }

  & + & {
    margin-top: 7.6rem;
  }
`;

export const Main = styled(motion.main).attrs(() => ({
  exit: 'pageExit',
  initial: 'pageInitial',
  animate: 'pageAnimate',
  transition: { type: 'just', duration: 0.6, bounce: 0.3 },
  variants: {
    pageInitial: {
      position: 'absolute',
      opacity: 0,
      y: 0,
      x: '-500px',
    },
    pageAnimate: {
      position: 'relative',
      opacity: 1,
      y: 0,
      x: 0,
    },
    pageExit: {
      position: 'absolute',
      x: '100px',
      y: 0,
      opacity: 0,
    },
  },
}))`
  width: 100%;
  padding: 0 1.9rem;

  padding-top: ${({ theme }) => theme.spacing.heightHeader};
  padding-bottom: 2.4rem;
  @media screen and (min-width: 999px) {
    min-height: 53.5rem;
    max-height: 100%;
    max-width: 1138px;
    align-self: center;
    /* padding-top: 0; */
    margin-top: ${({ theme }) => `calc(${theme.spacing.heightHeader} + 2rem)`};
    border-radius: 2.2rem;
    background: ${({ theme }) => theme.colors.mainBackground};
  };
`;
