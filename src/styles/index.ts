import styled from 'styled-components';
import { motion } from 'framer-motion';

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
      position: 'absolute',
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
  position: static;
  width: 100%;
  height: 100%;
  margin-top: ${({ theme }) => theme.spacing.heightHeader};

  @media screen and (min-width: 1000px) {
    margin-top: ${({ theme }) => `calc(${theme.spacing.heightHeader} + 2rem)`};
  }
`;
