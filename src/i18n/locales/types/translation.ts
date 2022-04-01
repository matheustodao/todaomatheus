type TSection = { name: string };

type TPage = { title: string, subtitle?: string };

type THome = TPage & {
  greeting: string,
  introduce: string,

  sections: {
    mySkills: TSection,

    SkillsOfMyInteresting: TSection,

    hobbies: TSection & {
      first: string,
      second: string,
      third: string,
      fourth: string,
      fiveth: string,
    },

    thatIsIt: TSection & {
      description: string,
      CTAClick: string,
      linkText: string
    }
  }
}

type TTextButton = {
  MoreAboutMe: string,
  LetIsTalk: string,
  SeeAllprojects: string,
}

type TPages = {
  pages: {
    textButton: TTextButton,

    home: THome,

    aboutMe: TPage & {
      description: string
    },

    contact: TPage
  }
}

type TMenuNavigation = [
  {
    id: number,
    name: string,
    link: string,
  },
];

export interface ITranslation {
  title: string,
  description: string,
  pages: TPages,
  menuNavigation: TMenuNavigation,
  languages: Array<string>,
}
