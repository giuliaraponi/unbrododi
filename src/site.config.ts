// Mirrors content/site.md. Values marked TODO are placeholders to replace before publishing.
export const site = {
  name: 'un brodo di...',
  lang: 'it',
  locale: 'it_IT',
  url: 'https://unbrododi.it',
  // TODO: replace with the author's name (not shown on the page).
  author: 'TODO',
  pages: {
    home: {
      title: 'un brodo di...',
      // TODO: replace with the real site description.
      description: 'TODO — descrizione del sito.',
    },
    poems: {
      title: 'I miei pensieri',
      // TODO: replace with the real page description.
      description: 'TODO — descrizione pagina poesie.',
    },
    about: {
      title: 'Come nasce questo progetto',
      // TODO: replace with the real page description.
      description: 'TODO — descrizione pagina about.',
    },
    privacy: {
      title: 'Cookie e privacy',
      // TODO: replace with the real page description.
      description: 'Pagina cookie e privacy.',
    },
  },
  analytics: {
    // Empty = Google Analytics is never loaded.
    gaMeasurementId: 'G-W0WPQ199ER',
  },
  ui: {
    homeLink: 'un brodo di...',
    close: 'Chiudi',
    themeToDark: 'Passa al tema scuro',
    themeToLight: 'Passa al tema chiaro',
    tagSeparator: ' · ',
    cookies: {
      bannerLabel: 'Consenso cookie',
      bannerText:
        'Questo sito usa Google Analytics 4 per capire come viene visitato. Google Analytics si attiva solo se accetti: se rifiuti, non viene caricato.',
      accept: 'Accetta',
      reject: 'Rifiuta',
      policyLink: 'Leggi l’informativa',
      manage: 'Gestisci le preferenze cookie',
    },
  },
} as const;
