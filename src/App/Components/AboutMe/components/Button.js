import styled from 'styled-components';

export const Button = styled.button`
  font-size: 1.6rem;
  width: 100%;
  height: 5.5rem;
  border: none;
  border-radius: .4rem;
  background: #4ECDC4;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;

  span {
    margin-left: .8rem;
    font-weight: 400;

  }
  &:active {
    filter: brightness(.95);
  }
`
