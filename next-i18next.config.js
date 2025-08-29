module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    localeDetection: false,
  },
  defaultNS: 'common',
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : './public/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  
  react: {
    useSuspense: false,
  },
};
