import styled from 'styled-components';

export const Container = styled.div<{ hasDescription?: 'true' | 'false' }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1.8rem;
  border-radius: 1.6rem;
  background: ${({ theme }) => theme.colors.primary.light};
  max-width: 52em;
  min-height: 16.3rem;
  width: 100%;
  height: 100%;

  position: relative;

  .information {
    height: 100%;

    :not(p) {
      justify-content: flex-end;
    }

    h5 {
      min-height: 3rem;
      font-family: ${({ theme }) => theme.fonts.outfit};
      font-weight: 600;
      font-size: 1.8rem;
      letter-spacing: 0.04em;
      color: ${({ theme }) => theme.colors.text.main};
      text-decoration: none;
      text-transform: capitalize;
      a {
        opacity: 0;
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    p {
      margin-top: 1rem;
      font-family: ${({ theme }) => theme.fonts.inter};
      font-weight: 400;
      font-size: 1.4rem;
      max-width: 168ch;
      max-height: 68px;
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
  margin-top: 2.9rem;
`;

export const Tags = styled.span`
  padding: .6rem;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.main};
  background: ${({ theme }) => theme.colors.tertiary.dark};
  border-radius: .5rem;
`;
