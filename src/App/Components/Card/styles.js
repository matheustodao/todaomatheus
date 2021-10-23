import styled from 'styled-components';
import { Language as language } from './components/Language';
import { Techs as techs } from './components/Techs';
import { Description as description } from './components/Description';
import { Project as project } from './components/Project';
import { Container as container } from './components/Container';

export const Container = styled(container)`
  @media (min-width: 1200px) and (max-width: 100vw) {
    width: 62.3rem;
    margin-right: -1rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: #3C3C3C;
  margin-top: 2.2rem;
  margin-bottom: 2.8rem;

  @media (min-width: 1200px) and (max-width: 100vw) {
    font-size: 3rem;
  }
`;

export const Project = styled(project)`
  @media (min-width: 1200px) and (max-width: 100vw) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${({ reverse }) => (reverse === 1 ? 'flex-end' : 'flex-start')};

    .container-informations {
      flex-direction: ${({ reverse }) => (reverse === 1 ? 'row-reverse' : 'row')};
      justify-content: space-between;
      width: 100%;
    }

    .wrapper-informations {
      align-items: ${({ reverse }) => (reverse === 1 ? 'flex-end' : 'flex-start')};

    }
  }
`;

export const Description = styled(description)`
  @media (min-width: 1200px) and (max-width: 100vw) {
    width: 39.2rem;
  }
`;

export const Techs = styled(techs)`
  @media (min-width: 1200px) and (max-width: 100vw)  {
    flex-direction: column;
    margin-top: 3rem;
  }

`;

export const Language = styled(language)``;
