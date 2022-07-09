import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  padding: 1.6rem 2.4rem;
  border: none;
  border: .12rem solid #4ECDC4;
  border-radius: .4rem;
  background: #4ECDC4;
  color: #FFF;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  transition: all .25s ease-in;

  &[disabled] {
    color: #E6E6E6;
    cursor: not-allowed;
  }
`;

export const ButtonA = styled.a`
  cursor: pointer;
  border: none;
  border: .12rem solid #4ECDC4;
  border-radius: .4rem;
  background: #E6E6E6;
  color: #888;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  transition: all .25s ease-in;
  text-decoration: none;

  &.see-all {
    padding: 1.2rem 5.4rem;
    text-transform: capitalize;

    :hover {
      background: #4ECDC4;
      color: #FFFFFF;
    }

    :active {
      filter: brightness(.9);
    }

    margin-bottom: 2.4rem;
  }

`;
