import styled from 'styled-components';
import { Container as container} from './components/Container';
import { Apresentation as apresentation } from './components/Apresentation';
import { Contact as contact } from './components/Contact';
import { SocialMedias as socialMedias } from './components/SocialMedias';
import { Button as button } from './components/Button';

export const Container = styled(container)`
  @media (min-width: 1200px) and (max-width: 100vw) {
    width: 25rem;
    margin-left: 3.6rem;
    margin-bottom: 5rem;
    margin-top: -3rem;

    position: fixed;
    top: 17rem;
    left: 0;
    right: 0;
    z-index: 100;
    background: none;
    height: 34rem;
    background: #FFFFFF;

    border-top-right-radius: .2rem;
    border-top-left-radius: .2rem;
  }
`;

export const Apresentation = styled(apresentation)`
  @media (max-width: 425px) {
    .wrapper-photo {
      width: 119rem;
      height: 11rem;

    }

    .me {
      margin-top: 5%;
      h2 {
        font-size: 1.85rem;
        text-align: center;
      }
      h3 {
        text-align: center;
      }
    }
  }

  @media (max-width: 360px) {
    .wrapper-photo {
      box-shadow: none;
      margin-top: 0;
    }

    .me {
      margin-top: 5%;
    }
  }

  @media (min-width: 1200px) and (max-width: 100vw) {
    flex-direction: column;
    align-items: center;

    .me {
      align-items: center;
      margin-top: .8rem;
      margin-left: 0;
      h2 {
        font-size: 1.8rem;
        margin-bottom: .8rem;
      }

      h3 {
        font-size: 1.2rem;
      }
    }

  }
`;

export const Contact = styled(contact)`
  @media (max-width: 360px) {
    margin-top: 1.8rem;
  }

  @media (min-width: 1200px) and (max-width: 100vw) {
    margin-top: 3.2rem;
  }
`;

export const SocialMedias = styled(socialMedias)`
  @media (min-width: 1200px) and (max-width: 100vw) {
    /* margin-bottom: 1.6rem; */
  }
`;

export const Button = styled(button)`
  @media (max-width: 360px) {
    width: 90%;
    height: 5rem;
    font-size: 1.4rem;
  }

  @media (min-width: 1200px) and (max-width: 100vw) {
    width: 90%;
    height: 4.5rem;
    font-size: 1.2rem;
  }
`;
