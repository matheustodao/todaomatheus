import styled from 'styled-components';

export const Language = styled.span`
  border-radius: .8rem;
  width: 10rem;
  padding: .8rem;
  color: #625F5F;
  font-size: 1.2rem;
  min-width: 10rem;
  text-align: center;
  border: .21rem solid ${({ language }) => {
    switch (language.toLowerCase()) {
      case 'javascript':
        return '#F1E05A';
      case 'html':
        return '#E34C26';
      case 'css':
        return '#563D7C';
      default:
        return '#4ECDC4';
      }
  }};

`
