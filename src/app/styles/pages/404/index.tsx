import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 10.3rem 4rem;

  h1 {
    font-family: ${({ theme }) => theme.fonts.outfit};
    font-weight: 600;
    font-size: 3.2rem;
    max-width: 60rem;
    line-height: 53px;
    text-align: center;
  }

  @media screen and (max-width: 292px) {
    h1 {
      font-size: 2.4rem;
    }
  }
`;

export const WrapperImage = styled.div`
  width: 462.01px;
  height: 431px;
`;

export const StyledLink = styled.a`
  border-radius: 1rem;
  padding: 1rem 3.2rem;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: 600;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text.main};
  background: ${({ theme }) => theme.colors.secondary.main};
  text-decoration: none;
  cursor: pointer;
`;
