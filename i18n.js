const NextI18Next = require('next-i18next').default
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig

const localeSubpathVariations = {
  none: {},
  foreign: {
    tr: 'tr',
  },
  all: {
    en: 'en',
    tr: 'tr',
  },
}
module.exports = new NextI18Next({
  otherLanguages: ['tr'],
  localeSubpaths: {
    en: 'en',
    tr: 'tr',
  }
})