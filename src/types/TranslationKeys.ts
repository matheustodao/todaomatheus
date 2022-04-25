import { Paths } from './Paths';

type ISection = { name: string, subtitle?: string }

type IRouteNavigation = { name: string }

type IPage = { title: string, subtitle?: string }

export interface IHome extends IPage {
  greeting: string,
  introduce: string,

  sections: {
    'my_skills': ISection,

    'skills_of_my_interest': ISection,

    hobbies: ISection & {
      hobby: Array<string>
    },

    'what_i_have_made_up': ISection,

    'that_is_it': ISection & {
      description: string,
      'link-text': string
    }
  }
}

export type IContact = IPage;

export interface IAbout extends IPage {
  description: string
}

export interface ICommon {
  'text_button': {
    'more-about-me': string,
    'let-is-talk': string,
    'see-all-projects': string,
  }

  navigation: {
    home: IRouteNavigation,
    contact: IRouteNavigation,
    'how_i_built_my_portfolio': IRouteNavigation
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
