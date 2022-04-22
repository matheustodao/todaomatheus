type TSection = { name: string };

type TPage = { title: string, subtitle?: string };

type THome = TPage & {
  greeting: string,
  introduce: string,

  sections: {
    mySkills: TSection,

    skillsOfMyInteresting: TSection,

    hobbies: TSection & {
      first: string,
      second: string,
      third: string,
      fourth: string,
      fiveth: string,
    },

    whatIveMadeUp: TSection,

    thatIsIt: TSection & {
      description: string,
      CTAClick: string,
      linkText: string
    }
  }
}

type TTextButton = {
  moreAboutMe: string,
  letIsTalk: string,
  seeAllprojects: string,
}

type TPages = {
  textButton: TTextButton,

  home: THome,

  aboutMe: TPage & {
    description: string
  },

  contact: TPage
}

type TMenuOptionNavigation = {
  name: string,
}
type TMenuNavigation = {
  home: TMenuOptionNavigation,
  contact: TMenuOptionNavigation,
  howIBuiltMyPortfolio: TMenuOptionNavigation,
}

type TLanguages = {
  portuguese: string,
  english: string,
}

export interface ITranslation {
  title: string,
  description: string,
  pages: TPages,
  menuNavigation: TMenuNavigation,
  languages: TLanguages,
}
