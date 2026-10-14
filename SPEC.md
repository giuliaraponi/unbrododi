# SPEC — un brodo di...

Stato: in attesa di approvazione (`approve spec`).
Fonti approvate: architettura (conversazione), `design/theme.md`, `content/`.

## 1. Sintesi del prodotto

Sito statico in italiano che raccoglie poesie personali. Una homepage introduttiva con un foglio di carta strappata e due link; una pagina con la griglia delle poesie, ciascuna leggibile in un dialog accessibile; una pagina "about" con testo segnaposto. Estetica elegante, minimale, letteraria, tema «Foglio sciolto» (papiro + borgogna), chiaro e scuro.

## 2. Utenti target

- Lettori che arrivano tramite link condiviso dall'autore e vogliono leggere le poesie con calma, da mobile o desktop.
- L'autore, che aggiunge/sostituisce poesie modificando file Markdown locali e rifacendo il deploy.

## 3. Percorsi utente principali

1. **Entrare** — apre `/`, vede il foglio con «un brodo di...», sceglie un link.
2. **Sfogliare** — apre `/poesie`, scorre la griglia di card (titolo, intro, tag).
3. **Leggere** — attiva una card (click, tocco, Invio/Spazio) → si apre il dialog con poesia completa ed eventuali immagini → chiude con «Chiudi», Esc o click sul backdrop → il focus torna alla card.
4. **Scoprire il progetto** — apre `/about` e legge il testo.
5. **Cambiare tema** — attiva il pulsante sole/luna; la scelta persiste tra le pagine e le visite.
6. **Tornare** — da `/poesie` o `/about` usa il link «un brodo di...» per tornare a `/`.

## 4. Requisiti funzionali

| ID | Requisito |
|---|---|
| FR-1 | `/` mostra al centro della viewport un foglio con bordo strappato sopra e sotto, contenente «un brodo di...» come `<h1>`. |
| FR-2 | Subito sotto il foglio, `/` mostra due link: «I miei pensieri» → `/poesie`, «Come nasce questo progetto» → `/about`. |
| FR-3 | `/poesie` mostra `<h1>` «I miei pensieri» e una griglia con una card per ogni poesia della collezione. |
| FR-4 | Ogni card mostra titolo, intro (troncata a 4 righe) e tag separati da « · ». |
| FR-5 | Le card hanno bordo `--border-strong`, ombra `--shadow-card` e altezza uniforme per riga. |
| FR-6 | La griglia ha 1 colonna < 40rem, 2 ≥ 40rem, 3 ≥ 60rem, 4 ≥ 72rem; mai più di 4. |
| FR-7 | Attivare una card apre un `<dialog>` modale (`showModal()`) con titolo della poesia, testo completo con a capo e strofe preservati, e immagini opzionali con `alt` e didascalia. |
| FR-8 | Il dialog ha: `aria-labelledby` sul titolo (`<h2>`), pulsante visibile «Chiudi», chiusura con Esc, chiusura con click sul backdrop, focus iniziale sul dialog/pulsante chiudi, focus intrappolato (nativo), focus restituito alla card che lo ha aperto. |
| FR-9 | Il dialog ha sfondo `--surface`; da 48rem in su ha il bordo strappato ridotto, sotto 48rem è rettangolare. |
| FR-10 | Lo scroll della pagina sottostante è bloccato mentre il dialog è aperto; il contenuto lungo scorre dentro il dialog. |
| FR-11 | `/about` mostra `<h1>` «Come nasce questo progetto» e il corpo di `content/about.md`. |
| FR-12 | `/poesie` e `/about` mostrano un link «un brodo di...» verso `/`. |
| FR-13 | Ogni pagina ha un pulsante tema solo icona in alto a destra che alterna chiaro/scuro, aggiorna l'`aria-label`, salva la scelta in `localStorage` e la applica prima del primo paint. Senza scelta salvata vale `prefers-color-scheme`. Senza JS il pulsante è nascosto. |
| FR-14 | Ogni pagina ha `<title>`, meta description, canonical, Open Graph base (`og:title`, `og:description`, `og:url`, `og:type`, `og:locale=it_IT`) e `<html lang="it">`, con i valori di `content/site.md`. |
| FR-15 | Il build genera `sitemap-index.xml` (via `@astrojs/sitemap`) e `robots.txt` che la referenzia. |
| FR-16 | Le poesie sono una Content Collection validata con schema Zod; un frontmatter non valido fa fallire il build. |
| FR-17 | Le poesie sono ordinate per titolo (ordinamento `localeCompare` it). |
| FR-18 | Senza JavaScript, il testo completo di ogni poesia resta leggibile (dialog mostrato inline sotto la propria card tramite `<noscript>` style). |

## 5. Requisiti non funzionali

- **Prestazioni**: nessun framework client; JS totale inline/bundled ≤ ~3 KB minificato (script dialog + script tema). Font self-hosted, subset latin, `font-display: swap`. Immagini ottimizzate con `astro:assets` (`<Image>`, WebP, `width`/`height` espliciti, `loading="lazy"`). Obiettivo Lighthouse ≥ 95 in Performance, Accessibility, Best Practices, SEO su `/`, `/poesie`, `/about`.
- **Accessibilità**: WCAG 2.2 AA. HTML semantico, `:focus-visible` su ogni elemento interattivo, contrasti come da `design/theme.md` §5, `prefers-reduced-motion` rispettato, testo scalabile al 200%, target ≥ 44×44px per pulsanti chiudi e tema, nessuna informazione veicolata solo da colore o icona.
- **Responsive**: mobile-first, nessuno scroll orizzontale da 320px in su.
- **Manutenibilità**: tutti i valori visivi come token (primitivi → semantici → temi); componenti usano solo token semantici; TypeScript strict.
- **Compatibilità**: ultime 2 versioni di Chrome, Firefox, Safari, Edge; Safari iOS ≥ 16.

## 6. Fuori scope

- Ricerca, filtri, categorie, commenti, newsletter, account utente.
- Pagine separate per singola poesia; routing per poesia; deep link al dialog.
- Pagina 404 personalizzata (si usa quella di Netlify).
- Footer.
- Note di supporto nelle poesie (campo `notes`).
- CMS, database, backend, autenticazione, area admin, form di contatto.
- Multilingua.
- Animazioni complesse, parallax, texture, ornamenti, font calligrafici.
- Immagine Open Graph (non fornita).
- Analytics o servizi di terze parti.

## 7. Stack raccomandato

- Astro (ultima versione stabile), output `static`.
- TypeScript (`astro/tsconfigs/strict`).
- pnpm.
- Content Collections con `glob` loader.
- `astro:assets` per le immagini.
- `@astrojs/sitemap`.
- Font: `@fontsource/lora` e `@fontsource/work-sans` (self-hosted).
- Script client in TypeScript vanilla (nessun framework).
- Deploy: Netlify (`netlify.toml`: build `pnpm build`, publish `dist`).

## 8. Mappa pagine e route

| Route | File | Contenuto |
|---|---|---|
| `/` | `src/pages/index.astro` | foglio strappato + titolo sito + 2 link + pulsante tema |
| `/poesie` | `src/pages/poesie.astro` | link home + h1 + griglia card + un `<dialog>` per poesia + pulsante tema |
| `/about` | `src/pages/about.astro` | link home + h1 + testo about + pulsante tema |

Struttura prevista (indicativa):

```
src/
  content.config.ts
  layouts/BaseLayout.astro        # <head>, SEO, script tema inline, import base.css
  components/
    PaperSheet.astro
    PoemCard.astro
    PoemDialog.astro
    ThemeToggle.astro
    HomeLink.astro
  scripts/
    poem-dialog.ts
    theme-toggle.ts
  styles/
    base.css
    tokens/primitives.css
    tokens/semantic.css
    tokens/themes.css
  pages/index.astro, poesie.astro, about.astro
content/                          # fonte dei contenuti (già approvata)
  poesie/images/                  # immagini delle poesie
public/robots.txt
netlify.toml
```

## 9. Contratto API

Non applicabile: nessun backend né endpoint.

## 10. Modello dati

### Collezione `poesie`

Loader: `glob({ pattern: "**/*.md", base: "./content/poesie" })` — legge direttamente da `content/poesie/` (fonte unica, nessuna copia).

| Campo | Tipo | Obbligatorio | Note |
|---|---|---|---|
| `title` | string, non vuota | sì | titolo card e dialog |
| `slug` | string, kebab-case | sì | unico; usato come id della entry e per gli id del dialog |
| `intro` | string, non vuota | sì | testo della card |
| `tags` | string[] (min 1) | sì | mostrati con « · » |
| `images` | array di `{ src: image(), alt: string non vuota, caption?: string }` | no | percorsi relativi al file `.md`, risolti da `astro:assets` |
| corpo | Markdown | sì | testo completo; un a capo singolo = nuovo verso, riga vuota = nuova strofa |

Gli a capo dei versi vanno preservati (es. `white-space: pre-line` sul contenitore o plugin remark-breaks — scelta dell'implementazione, senza dipendenze se possibile).

### Contenuto `about`

`content/about.md` letto con una collezione `pagine` (glob su `content/about.md`) o import diretto del Markdown; schema: `title: string`, `placeholder?: boolean`.

### Contenuti globali

`content/site.md` è il riferimento umano; i valori (nome sito, titoli, description, URL, etichette) vanno riportati in un modulo TypeScript tipizzato (es. `src/site.config.ts`) identico al file, con i segnaposto `TODO` invariati. `site` in `astro.config` usa il dominio segnaposto.

### Stato client

| Chiave `localStorage` | Valori | Uso |
|---|---|---|
| `theme` | `"light"` \| `"dark"` | override manuale del tema; assente = sistema |

## 11. Fonti dei contenuti

- `content/site.md` — identità, SEO, testi interfaccia, navigazione.
- `content/about.md` — testo about (segnaposto Lorem Ipsum).
- `content/poesie/*.md` — 2 poesie segnaposto.
- `content/poesie/images/placeholder.png` — immagine della poesia segnaposto I, referenziata come `./images/placeholder.png`; il file non va modificato. Le immagini delle poesie vivono in `content/poesie/images/`.

Nessun contenuto oltre a questi va inventato.

## 12. Requisiti design-token

Definiti in `design/theme.md`. Vincoli di implementazione:

- File: `src/styles/tokens/primitives.css`, `semantic.css`, `themes.css`, importati da `src/styles/base.css`; `base.css` importato una sola volta in `BaseLayout.astro`.
- Primitivi: solo valori grezzi (colori, font, dimensioni, spaziature, raggi, offset ombre, durate, easing, forma `clip-path`).
- Semantici: solo `var()` ai primitivi; nomi come in `design/theme.md` §3, §5, §7–§12.
- Temi: tema scuro con `:root[data-theme="dark"]` e `@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) }`.
- Componenti e pagine: nessun valore grezzo (hex, rgb, font-family, px/rem, durate, ombre, raggi); solo `var(--semantico)`. Eccezioni ammesse: `0`, `100%`, `1fr`, unità di griglia strutturali, media query breakpoints (in rem, documentati come primitivi di riferimento).
- `:focus-visible` su ogni elemento interattivo; `prefers-reduced-motion` azzera le durate semantiche.

## 13. Criteri di accettazione

| ID | Criterio (testabile) | Copre |
|---|---|---|
| AC-1 | A 320, 768 e 1440px, su `/` il foglio è centrato orizzontalmente e verticalmente, mostra «un brodo di...» come unico `<h1>`, con profilo irregolare sopra e sotto e lati dritti. | FR-1 |
| AC-2 | Su `/` sotto il foglio ci sono esattamente due link con i testi e gli href di FR-2, navigabili con Tab nell'ordine indicato. | FR-2 |
| AC-3 | `/poesie` ha un `<h1>` «I miei pensieri» e tante card quanti file in `content/poesie/` (oggi 2). | FR-3 |
| AC-4 | Ogni card mostra titolo, intro e tag «lorem · ipsum» / «ipsum · dolor»; un'intro di 10 righe viene troncata a 4 con ellissi. | FR-4 |
| AC-5 | Nel DevTools le card hanno bordo calcolato pari a `--border-strong` e `box-shadow` da `--shadow-card`; con intro di lunghezze diverse, le card di una stessa riga hanno la stessa altezza. | FR-5 |
| AC-6 | Con 8 card di prova: 1 colonna a 320–639px, 2 a 640–959px, 3 a 960–1151px, 4 a ≥ 1152px; mai 5. Nessuno scroll orizzontale a 320px. | FR-6, NFR |
| AC-7 | Click, tocco, Invio o Spazio su una card aprono il dialog corretto; il dialog contiene titolo, tutti i versi con a capo e righe vuote tra strofe; per «Poesia segnaposto I» mostra l'immagine con `alt="Immagine segnaposto"` e didascalia; «Poesia segnaposto II» non mostra immagini. | FR-7 |
| AC-8 | Con tastiera: aprendo il dialog il focus è al suo interno; Tab non esce dal dialog; Esc lo chiude; «Chiudi» lo chiude; click sul backdrop lo chiude; dopo la chiusura il focus è sulla card di origine. Uno screen reader (VoiceOver) annuncia il dialog col titolo della poesia. | FR-8 |
| AC-9 | Lo sfondo del dialog è `--surface` in entrambi i temi; a ≥ 768px ha bordo strappato sopra/sotto, a < 768px è rettangolare con bordo `--border-strong`. | FR-9 |
| AC-10 | Con una poesia più alta della viewport, il dialog scorre internamente, il pulsante «Chiudi» resta raggiungibile, e la pagina sotto non scorre. | FR-10 |
| AC-11 | `/about` ha `<h1>` «Come nasce questo progetto» e i tre paragrafi Lorem Ipsum di `content/about.md`. | FR-11 |
| AC-12 | `/poesie` e `/about` hanno un link «un brodo di...» con `href="/"`; `/` non lo ha. | FR-12 |
| AC-13 | Il pulsante tema è presente su tutte e 3 le pagine; cliccandolo il tema cambia e l'`aria-label` passa da «Passa al tema scuro» a «Passa al tema chiaro» (o viceversa); ricaricando o cambiando pagina la scelta persiste senza lampo del tema opposto; con `localStorage` svuotato vale la preferenza di sistema; con JS disattivato il pulsante non è visibile. | FR-13 |
| AC-14 | Nell'HTML generato, ognuna delle 3 pagine ha `lang="it"`, `<title>` e meta description come in `content/site.md`, `<link rel="canonical">`, `og:title`, `og:description`, `og:url`, `og:type`, `og:locale`. | FR-14 |
| AC-15 | `dist/` contiene `sitemap-index.xml` con le 3 URL e `robots.txt` con la riga `Sitemap:`. | FR-15 |
| AC-16 | Rimuovendo `title` (o mettendo `alt` vuoto in un'immagine) da una poesia, `pnpm build` fallisce con errore di validazione; ripristinandolo passa. | FR-16 |
| AC-17 | Le card compaiono nell'ordine «Poesia segnaposto I», «Poesia segnaposto II». | FR-17 |
| AC-18 | Con JS disattivato su `/poesie`, il testo completo di ogni poesia è visibile sotto la propria card. | FR-18 |
| AC-19 | `grep` nei file `src/components/**` e `src/pages/**` non trova hex, `rgb(`, `hsl(`, nomi di font, valori `px`/`rem`/`ms` fuori dalle eccezioni di §12. | §12 |
| AC-20 | Ogni elemento interattivo mostra un outline `--focus-ring` visibile con navigazione da tastiera; con `prefers-reduced-motion: reduce` nessuna transizione è percepibile. | NFR a11y |
| AC-21 | axe DevTools: 0 violazioni serie/critiche su `/`, `/poesie` (anche col dialog aperto) e `/about`, in tema chiaro e scuro. | NFR a11y |
| AC-22 | Nessuna pagina `/poesie/<slug>` o `/404` è generata in `dist/`; nessuna dipendenza React/Vue/Svelte/Preact in `package.json`. | Fuori scope, NFR |
| AC-23 | `content/poesie/images/placeholder.png` è invariato (stesso hash prima e dopo) e la radice del progetto non contiene immagini. | §11 |

## 14. Comandi di verifica

```sh
pnpm install
pnpm astro check   # 0 errori, 0 warning
pnpm build         # build statico in dist/ senza errori
pnpm preview       # verifica manuale degli AC
```
