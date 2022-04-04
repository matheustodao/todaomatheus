import styled from 'styled-components';

export const Main = styled.main`
  width: 100vw;
  height: 100%;
  margin-top: ${({ theme }) => theme.spacing.heightHeader};

  @media screen and (min-width: 1000px) {
    margin-top: ${({ theme }) => `calc(${theme.spacing.heightHeader} + 2rem)`};
  }
`;
