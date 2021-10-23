import styled, { css } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const FieldInput = styled.div`
  min-height: 4.5rem;
  height: 100%;
  width: 100%;
  border-radius: .2rem;
  border: .25rem solid #F5F5F5;
  border-bottom: .3rem solid #4ECDC4;
  background: #F5F5F5;
  position: relative;

  input, textarea {
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    padding: 1.6rem 1rem;
    color: #252525;
    font-weight: 300;
  }

  textarea {
    resize: none;
    height:15rem;
  }

  label {
    position: absolute;
    left: 1rem;
    top: 34%;
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    font-weight: 300;
    color: #848484;
  }

  &:focus-within {
    border: .25rem solid #4ECDC4;
    border-bottom: .3rem solid #4ECDC4;
  }

  input:focus + label,
  input:not(:placeholder-shown) + label,
  textarea:focus + label,
  textarea:not(:placeholder-shown) + label {
    top: -10px;
    background: #FDFDFD;
    padding: 0 .5rem;
    border-radius: .25rem;
    color: #21736D;
  }

  input:focus, textarea:focus  {
    background: #FDFDFD;
  }

  input:not(:placeholder-shown, :focus), textarea:not(:placeholder-shown, :focus) {
    background: #FDFDFD;
    color: #555;
  }

  input:not(:placeholder-shown, :focus) + label,
  textarea:not(:placeholder-shown, :focus) + label {
    color: #848484;
  }

  ${({ error }) => error && css`
    border: .25rem solid #FB8787 !important;

    input, textarea, label {
      color: #FB8787 !important;
    }

    margin-bottom: .6rem;

  `}

  transition: all .3s ease-in-out;
`;
