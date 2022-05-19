import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: ${({ theme }) => theme.colors.primary.light};
  color: #fff;
  font-size: 1.1rem;
  margin-top: 10rem;
  clip-path: polygon(51% 0, 89% 12%, 100% 0, 100% 100%, 0 97%, 0 0, 24% 15%);

  strong {
    font-size: 1.2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    a {
      color: #4ECDC4;
      text-decoration: none;
    }
    margin-top: .8rem;
  }

  @media (min-width: 1200px) and (max-width: 100vw) {
    font-size: 1.2rem;

    strong {
      font-size: 1.4rem;
    }
  }

`;
