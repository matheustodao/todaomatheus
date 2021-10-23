import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  & + & {
    margin-top: 1.6rem;
  }

  small {
    color: #FB8787;
    margin-left: 1rem;
  }
`;
