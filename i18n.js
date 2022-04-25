module.exports = {
  locales: ['en-US', 'pt-BR'],
  defaultLocale: 'en-US',
  defaultNS: 'common',
  pages: {
    '*': ['common'],
    '/404': ['common'],
    '/': ['home'],
    '/contact': ['contact'],
    '/blog/posts/who-is-matheus-todao': ['aboutMe'],
  },

  loadLocaleFrom: (locale, namespace) => (
    import(`./public/locales/${locale}/${namespace}.json`).then((m) => m.default)
  ),
};
