import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.button`
  cursor: pointer;
  color: #E6E6E6;
  &[disabled] {
    color: #FFF;
    cursor: not-allowed;
  }
`;
