import styled, { DefaultTheme, css } from 'styled-components';

interface IProps {
  theme: DefaultTheme,
  filled?: boolean,
}
export const AnchorButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.colors.text.main};
  font-size: 1.2rem;
  line-height: 20px;
  letter-spacing: 4%;
  font-weight: 500;
  text-decoration: underline;
  padding: 1.1rem 2rem;
  border-radius: 5px;
  min-width: 11.1rem;
  min-height: 4.1rem;
  cursor: pointer;

  ${({ theme, filled }: IProps) => filled && css`
    background: ${theme.colors.secondary.main};
    font-weight: 600;
    font-size: 1.4rem;
    text-decoration: none;
  `}
`;
