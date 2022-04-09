import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Main = styled(motion.main)`
  width: 100%;
  height: 100%;
  margin-top: ${({ theme }) => theme.spacing.heightHeader};

  @media screen and (min-width: 1000px) {
    margin-top: ${({ theme }) => `calc(${theme.spacing.heightHeader} + 2rem)`};
  }
`;
