# Contenuti globali del sito

> Fonte unica di verità per testi di interfaccia e SEO.
> I valori marcati `TODO` sono segnaposto da sostituire prima della pubblicazione.

## Identità

- Nome del sito: un brodo di...
- Lingua: italiano (`it`)
- Autore: TODO — nome autore (segnaposto, non mostrato in pagina)
- Dominio di produzione: `https://unbrododi.it` (principale su Netlify; `https://www.unbrododi.it` reindirizza qui)

## SEO

| Pagina | `<title>` | Meta description |
|---|---|---|
| `/` | un brodo di... | TODO — descrizione del sito (segnaposto) |
| `/poesie` | I miei pensieri · un brodo di... | TODO — descrizione pagina poesie (segnaposto) |
| `/about` | Come nasce questo progetto · un brodo di... | TODO — descrizione pagina about (segnaposto) |
| `/privacy` | Cookie e privacy · un brodo di... | TODO — descrizione pagina cookie e privacy (segnaposto) |

Immagine Open Graph: nessuna (non fornita).

## Homepage (`/`)

- Testo nel foglio strappato: «un brodo di...»
- Link sotto il foglio:
  1. «I miei pensieri» → `/poesie`
  2. «Come nasce questo progetto» → `/about`

## Pagina poesie (`/poesie`)

- Titolo (h1): «I miei pensieri»
- Contenuti: vedi `content/poesie/`

## Pagina about (`/about`)

- Titolo (h1): «Come nasce questo progetto»
- Contenuti: vedi `content/about.md`

## Navigazione

- Link di ritorno alla home su `/poesie` e `/about`: «un brodo di...»
- Footer: nessuno

## Interfaccia

- Pulsante chiudi dialog: «Chiudi»
- Pulsante tema (aria-label): «Passa al tema scuro» / «Passa al tema chiaro»
- Separatore tag: « · »
- Banner cookie: testo, «Accetta», «Rifiuta», «Leggi l’informativa» e «Gestisci le preferenze cookie» sono in `src/site.config.ts` (`ui.cookies`)
- ID Google Analytics 4: `src/site.config.ts` (`analytics.gaMeasurementId`), vuoto = Google Analytics non caricato

## Cookie e privacy (`/privacy`)

- Titolo (h1): «Cookie e privacy»
- Contenuti: vedi `content/privacy.md` (segnaposto «DA COMPILARE» da completare prima della pubblicazione)
