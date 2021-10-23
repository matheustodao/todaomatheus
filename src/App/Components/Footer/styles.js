import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #303840;
  color: #fff;
  font-size: 1.1rem;

  h4 {
    font-size: 1.2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    a {
      color: #4ECDC4;
      text-decoration: none;
    }
    margin-top: .8rem;
  }

  @media (min-width: 1200px) and (max-width: 100vw) {
    font-size: 1.2rem;

    h4 {
      font-size: 1.4rem;
    }
  }

`
