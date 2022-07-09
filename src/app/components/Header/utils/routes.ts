interface IRoute {
  id: number,
  label: any,
  path: string,
}

export const routes: IRoute[] = [
  {
    id: 1,
    label: 'navigation.home.name',
    path: '/',
  },

  {
    id: 2,
    label: 'navigation.how_i_built_my_portfolio.name',
    path: '/blog/posts/how-i-built-my-portfolio',
  },

  {
    id: 3,
    label: 'navigation.contact.name',
    path: '/contact',
  },

];
