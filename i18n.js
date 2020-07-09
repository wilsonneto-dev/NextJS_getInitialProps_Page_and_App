module.exports = {
  allLanguages: ['en', 'pt'],

  defaultLanguage: () => {
    // podemos fazer alguma regra baseada no domínio aqui por exemplo (ou cookies)
    return 'pt'
  },

  // para não forçar redirecionamento
  defaultLangRedirect: 'root',

  // de onde vão vir os arquivoes de idiomas
  loadLocaleFrom: (lang, ns) =>
    import(`./locales/${lang}/${ns}.json`).then((m) => m.default),

  // quais namespaces cada página precisa
  pages: {
    '*': ['common'],
    '/contact': ['contact'],
    '/channels': ['channels'],
    '/checkout': ['checkout'],
    '/checkout/concluded': ['checkout'],
    '/my-looke': ['myLooke'],
    '/settings': ['settings'],
    '/my-account': ['myAccount'],

    // exemplos (podem ser dinamicos):
    // '/': ['home'],
    // '/more-examples': ['more-examples'],
  },
}
