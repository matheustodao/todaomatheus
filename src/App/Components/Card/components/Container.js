import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  flex-direction: ${({ reverse }) => reverse === 1 ? 'row-reverse' : 'row'};
  margin: 4.8rem 2.4rem;
  border-radius: .8rem;
  background: ${({ reverse }) => (
    reverse !== 1
      ? 'linear-gradient(1800deg, rgba(255, 255, 255, 0.21) 0%, #FFF 100%)'
      : 'linear-gradient(360deg, #FFF -2.73%, rgba(255, 255, 255, .21) 100%)'
  )};

  .border {
    div {
      width: .6rem;
      height: 20%;
      background: #FFFFFF;
      border-top-left-radius: .2rem;
      border-top-right-radius: .2rem;
      :last-child {
        width: .6rem;
        height: 80%;
        background: #4ECDC4;

      border-bottom-left-radius: .2rem;
      border-bottom-right-radius: .2rem;
      }
    }
  }
`;
