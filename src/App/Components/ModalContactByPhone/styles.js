import styled from 'styled-components';

export const Container = styled.div`
  max-width: 47.5rem;
  width: 85%;
  background: #FDFDFD;
  border-radius: .8rem;
  height: 34.2rem;

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 4.2rem 0;
    small {
      margin: .6rem 0;
      font-family: 'Poppins', sans-serif;
      font-weight: 300;
      font-size: 1.2rem;

    }
  }
`;

export const Button = styled.a`
  max-width: 26.6rem;
  height: 5rem;
  width: 100%;
  padding-bottom: 1.6rem;
  padding-top: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;

  background: ${({ bg }) => {
    switch (bg) {
      case 'telegram':
        return '#31ADDE'
      case 'whatsapp':
        return '#5FC1A5'
      default:
        return '#EDEDED'
    }
  }};

  border-radius: .4rem;
  color: ${({ bg }) => bg ? '#FFFFFF' : '#848484' };

  & + & {
    margin-top: .8rem;
  }

  span {
    margin-left: .8rem;
  }

  transition: all .25s ease-in;

  &:hover {
    filter: brightness(.9);
  }

  &:active {
    filter: brightness(1);
  }

`;
