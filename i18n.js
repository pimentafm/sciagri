module.exports = {
  "locales": ["pt", "en"],
  "defaultLocale": "pt",
  "pages": {
    "*": ["common"],
  },
  "loadLocaleFrom": (lang, ns) =>
    import(`./src/locales/${lang}/${ns}.json`).then((m) => m.default),
}
