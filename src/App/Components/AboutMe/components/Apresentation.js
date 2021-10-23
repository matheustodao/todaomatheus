import styled from 'styled-components';

export const Apresentation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 100%;

  .wrapper-photo {
    width: 13.6rem;
    height: 14rem;
    margin-top: -5rem;
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .me {
    display: flex;
    flex-direction: column;
    align-items: flex-start; //change
    margin-left: 2.4rem;

    h2 {
      font-size: 2.4rem; //change
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      color: #434343;
      margin-bottom: .6rem;

    }

    h3 {
      font-size: 1.4rem; //change
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      color: #6A6A6A;
    }
  }

`;
