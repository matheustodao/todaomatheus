interface Contacts {
  id: number,
  name: string,
  icon: string,
  link: string,
  bg: string,
}

const usernameDefault = 'matheustodao';
export const contacts: Contacts[] = [
  {
    id: 0,
    name: usernameDefault,
    icon: '/assets/icons/github-white.svg',
    link: `https://github.com/${usernameDefault}`,
    bg: 'linear-gradient(90.78deg, rgba(61, 70, 82, 0.78) 22.81%, rgba(76, 90, 108, 0.85) 83.89%)',
  },

  {
    id: 1,
    name: `in/${usernameDefault}`,
    icon: '/assets/icons/linkedin.svg',
    link: `https://linkedin.com/in/${usernameDefault}`,
    bg: 'linear-gradient(90.66deg, rgba(0, 119, 181, 0.84) 9.21%, #0077B5 96.78%)',
  },

  {
    id: 2,
    name: `@${usernameDefault}`,
    icon: '/assets/icons/instagram.svg',
    link: `https://instagram.com/${usernameDefault}`,
    bg: 'linear-gradient(0deg, #E09B3D 0.29%, #C74C4D 29.97%, #C21975 59.65%, #7024C4 99.22%), #2D333B',
  },

  {
    id: 3,
    name: `@${usernameDefault}`,
    icon: '/assets/icons/twitter.svg',
    link: `https://twitter.com/${usernameDefault}`,
    bg: '#16A1CD',
  },

  {
    id: 4,
    name: 'todaomatheus@hotmail.com',
    icon: '/assets/icons/outlook.svg',
    link: 'mailto:todaomatheus@hotmail.com',
    bg: '#2F80ED',
  },

  {
    id: 5,
    name: '+55 (19) 99640-2926',
    icon: '/assets/icons/whatsapp.svg',
    link: 'https://wa.me/+5519996402926',
    bg: 'linear-gradient(90.65deg, #20E56A 9.24%, rgba(60, 246, 129, 0.99) 105.66%)',
  },
];
