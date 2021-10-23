import styled from 'styled-components';

export const Container = styled.header`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: url(${'/images/bg-header.jpg'});
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.4rem 0;
  .bg-header {
    max-width: 39.4rem;
    width: 100%;
  }

  @media (min-width: 1200px) and (max-width: 100vw) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    z-index: 100;
  }

`;

export const Techs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 7rem;
    height: 7rem;
  }

`
