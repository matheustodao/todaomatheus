interface IRoute {
  id: number,
  label: string,
  path: string,
}

export const routes: IRoute[] = [
  {
    id: 1,
    label: 'menuNavigation.home.name',
    path: '/',
  },

  {
    id: 2,
    label: 'menuNavigation.howIBuiltMyPortfolio.name',
    path: '/blog/posts/how-i-built-my-portfolio',
  },

  {
    id: 3,
    label: 'menuNavigation.contact.name',
    path: '/contact',
  },

];
