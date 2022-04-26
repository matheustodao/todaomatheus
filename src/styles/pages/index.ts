import styled from 'styled-components';

export const MainHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: 5.8rem;

  .wrapper__image {
    width: 15.4rem;
    height: 15.4rem;
    border: 2px solid ${({ theme }) => theme.colors.thirtiary.main};
    border-radius: 46px;
    background: url('/assets/images/profile.jpg') no-repeat;
    background-size: cover;
  }

  @media screen and (min-width: 999px) {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    .wrapper__image {
      width: 40.5rem;
      height: 40.5rem;
      border-radius: 50%;
    }
  }
`;

export const Content = styled.div`
  max-width: 47.6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .main__title {
    text-align: center;
    margin-top: 2.4rem;
    margin-bottom: 2.8rem;

    strong {
      font-family: ${({ theme }) => theme.fonts.outfit};
      color: ${({ theme }) => theme.colors.text[500]};
      font-size: 1.2rem;
      font-weight: 500;
    }

    h1 {
      margin-top: .8rem;
      font-family: ${({ theme }) => theme.fonts.outfit};
      color: ${({ theme }) => theme.colors.text.main};
      line-height: 24px;
      font-size: 2.4rem;
      font-weight: 700;
    }

    h2 {
      font-family: ${({ theme }) => theme.fonts.outfit};
      color: ${({ theme }) => theme.colors.text[500]};
      line-height: 24px;
      font-size: 1.8rem;
      font-weight: 500;
    }
  }

  p {
    align-self: flex-start;
    text-align: left;
    font-size: 1.2rem;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.text[600]};
    letter-spacing: 0.04em;
    word-break: break-word;
    overflow-wrap: break-word;

    + p {
      margin-top: .6rem;
    }
  }

  .actions {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: 4.1rem;
    height: 100%;
    max-width: 30rem;
    width: 100%;
    margin-top: 6.3rem;

    a:first-child {
      margin-right: 1.8rem;
    }
  }

  @media screen and (min-width: 999px) {
    align-items: flex-start;
    .main__title {
      text-align: left;
      margin-top: 0;
      margin-bottom: 5.8rem;

      strong {
        font-size: 1.4rem;
      }

      h1 {
        margin-top: 0;
        font-size: 2.8rem;
      }

      h2 {
        font-size: 2.4rem;
      }
    }

    p {
      line-height: 24px;
      font-size: 14px;
    }

    .actions {
      a:first-child {
        padding-left: 0;
      }
    }
  }

  @media screen and (max-width: 308px) {
    .actions {
      flex-direction: column;
      align-items: center;
      justify-content: center;

      a:first-child {
        margin-bottom: 1.8rem;
        margin-right: 0;
      }
    }
  }
`;

export const Skill = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 1.8rem;
  background: ${({ theme }) => theme.colors.thirtiary.light};
  border-radius: 10px;
  list-style: none;

  .image__container {
    width: 52px;
    height: 52px;
    margin-right: 2rem;
  }

  strong {
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-weight: 600;
    letter-spacing: 9.5%;
    text-transform: capitalize;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text.main};
  }

  & + & {
    margin-top: .6rem;
  }
`;

export const DesireSkillContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  align-self: flex-start;
  width: 100%;
  margin-right: 0;

  ul.swiper-wrapper {
    width: 100cm;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    min-width: 11.6rem;
    min-height: 15.2rem;
    max-width: 11.6rem;
    max-height: 15.2rem;
    width: 100%;
    height: 100%;
    padding: .8rem 1.8rem;
    background: ${({ theme }) => theme.colors.primary.light};
    border-radius: 5px;
    list-style: none;
    pointer-events: none;
    user-select: none;

    & + & {
      margin-left: 1.6rem;
    }

    .image__container {
      width: 7.2rem;
      height: 6.8rem;
    }

    strong {
      font-weight: 600;
      font-size: 1.4rem;
      text-align: center;
      color: ${({ theme }) => theme.colors.text[800]};
    }
  }
`;

export const Hobby = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  strong {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text[800]};

  }

  .bullet {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.thirtiary.main};
    list-style: georgian;
    margin-right: 25px;
    font-family: 'Times New Roman', Times, serif;
    font-size: 1.6rem;
    letter-spacing: 0.04rem;
    line-height: 38px;
    color: ${({ theme }) => theme.colors.thirtiary.main};
    font-weight: 500;
    background: ${({ theme }) => theme.colors.primary.main};

    @media screen and (min-width: 999px) {
      background: ${({ theme }) => theme.colors.mainBackground};
    };
  }

  & + & {
    max-height: 30px;
    margin-top: 180px;
    margin-left: -7.9px;
    &::before {
    content: '';
    margin-left: 0;
    width: 7px;
    min-height: 180px;
    height: 100%;
    position: relative;
    left: 19px;
    right: 0;
    top: -106px;
    background: ${({ theme }) => theme.colors.thirtiary.dark};
    border-radius: 2px;
  }
  }

`;
