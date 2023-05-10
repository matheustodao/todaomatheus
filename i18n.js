module.exports = {
  locales: ['en-US', 'pt-BR'],
  defaultLocale: 'en-US',
  defaultNS: 'common',
  pages: {
    '/': ['home'],
    '/contact': ['contact'],
    '/blog/posts/*': ['aboutMe'],
    '/404': ['common', '404'],
    '*': ['common'],
  },

  loadLocaleFrom: (locale, namespace) => (
    import(`./public/locales/${locale}/${namespace}.json`).then((m) => m.default)
  ),
};
