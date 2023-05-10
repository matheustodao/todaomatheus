interface ISkill {
  name: string,
  path: string,
  width?: number,
  height?: number,
}

export const mySkills: ISkill[] = [
  {
    name: 'React JS',
    path: '/assets/images/logos/logo_react.png',
  },

  {
    name: 'Styled-Components',
    path: '/assets/images/logos/logo_styled.png',
  },

  {
    name: 'Typescript',
    path: '/assets/images/logos/logo_typescript.png',
  },

  {
    name: 'Node JS',
    path: '/assets/images/logos/logo_node.png',
  },

  {
    name: 'Next JS',
    path: '/assets/images/logos/logo_nextjs.png',
  },
];

export const desireSkills: ISkill[] = [
  {
    name: 'Jest',
    path: '/assets/images/logos/logo_jest.png',
  },

  {
    name: 'Testing Library',
    path: '/assets/images/logos/logo_testing_library.png',
  },

  {
    name: 'Storybook',
    path: '/assets/images/logos/logo_storybook.png',
  },

  {
    name: 'Graphql',
    path: '/assets/images/logos/logo_graphql.png',
    width: 68,
    height: 72,
  },

  {
    name: 'Redux',
    path: '/assets/images/logos/logo_redux.png',
  },

  {
    name: 'MongoDB',
    path: '/assets/images/logos/logo_mongo.png',
  },

];
