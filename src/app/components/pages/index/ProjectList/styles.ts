import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.8rem;
  border-radius: 1.6rem;
  background: ${({ theme }) => theme.colors.primary.light};
  max-width: 52em;
  min-height: 16.3rem;
  width: 100%;
  height: 100%;

  .information {
    margin-bottom: 2.9rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    min-height: 74px;

    h5 {
      a {
        font-family: ${({ theme }) => theme.fonts.outfit};
        font-weight: 600;
        font-size: 1.8rem;
        letter-spacing: 0.04em;
        color: ${({ theme }) => theme.colors.text.main};
        text-decoration: none;
      }

      + p {
        margin-top: 1.6rem;
      }
    }

    p {
      font-family: ${({ theme }) => theme.fonts.inter};
      font-weight: 400;
      font-size: 1.4rem;
      max-width: 28.5rem;
      color: ${({ theme }) => theme.colors.text[600]};
    }
  }

`;

export const WrapperTags = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  gap: .3rem;
`;

export const Tags = styled.span`
  padding: .6rem;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.main};
  background: ${({ theme }) => theme.colors.thirtiary.main};
  border-radius: .5rem;
`;
