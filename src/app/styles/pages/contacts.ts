import styled from 'styled-components';

interface IWayOfContact {
  bg: string,
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: 2.8rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    margin-bottom: 4.1rem;
  }

  .container__way__of__contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const WayOfContact = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 40.5rem;
  width: 100%;
  min-height: 5.8rem;
  height: 100%;
  padding: 1.3rem auto;
  background: ${({ bg }: IWayOfContact) => bg};
  color: ${({ theme }) => theme.colors.text.main};
  border-radius: 1rem;
  
  img {
    padding-right: 1.6rem !important;
  }

  text-transform: lowercase;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 1.2em;
  font-weight: 600;
  line-height: 2.1rem;
  letter-spacing: 0.11em;

  text-decoration: none;

  & + & {
    margin-top: 1.5rem;
  }

  @media screen and (min-width: 325px) {
    padding: 1.3rem 1.2rem;
    font-size: 1.3em;

  }
`;
