const nextTranslate = require('next-translate');
const i18n = require('./i18n');

module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  ...nextTranslate(),
  i18n,
};
