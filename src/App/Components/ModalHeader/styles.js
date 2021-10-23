import styled from 'styled-components';

export const Container = styled.header`
  height: 6rem;
  width: 100%;
  padding: 1.8rem 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #4ECDC4;
  border-radius: .8rem .8rem 0 0;
  box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.2);
  button {
    border: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    color: #FDFDFD;
  }
`;
