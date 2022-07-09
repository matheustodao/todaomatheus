import styled from 'styled-components';
// import bgFooter from '@public/assets/images/bg_footer.png';

export const Container = styled.footer`
  background: url('/assets/images/footer.svg');
  width: 100%;
  padding: 8.5rem 4.6rem;
  height: 113px;
  margin-top: 6.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 1.2rem;

  p {
    color: ${({ theme }) => theme.colors.text[700]};
    line-height: 1.4rem;
    text-align: center;

    a {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.secondary.light};
    }
  }

  strong {
    color: ${({ theme }) => theme.colors.text[800]};
    margin-top: 1.2rem;
    font-weight: 500;
  }

  @media screen and (min-width: 1380px) {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`;
