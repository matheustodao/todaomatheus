import { Paths } from './Paths';

type TSection = { name: string, subtitle?: string }

type TRouteNavigation = { name: string }

type TPage = { title: string, subtitle?: string }

export interface IHome extends TPage {
  greeting: string,
  introduce: string,

  sections: {
    'my_skills': TSection,

    'skills_of_my_interest': TSection,

    hobbies: TSection & {
      hobby: {
        '0': string,
        '1': string,
        '2': string,
        '3': string,
        '4': string,
      }
    },

    'what_i_have_made_up': TSection,

    'that_is_it': TSection & {
      description: string,
      'link-text': string
    }
  }
}

export type IContact = TPage;

export interface IAbout extends TPage {
  description: string
}

export interface ICommon {
  'text_button': {
    'more-about-me': string,
    'let-is-talk': string,
    'see-all-projects': string,
  }

  navigation: {
    home: TRouteNavigation,
    contact: TRouteNavigation,
    'how_i_built_my_portfolio': TRouteNavigation
  },

  languages: {
    'pt-BR': string,
    'en-US': string,
  }
}

export interface ITranslationKeys {
  common: Paths<ICommon>,
  home: Paths<IHome>,
  aboutMe: Paths<IAbout>,
  contact: Paths<IContact>,
}

export type INamespaces = keyof ITranslationKeys
