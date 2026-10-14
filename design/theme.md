# Tema — «Foglio sciolto»

## 1. Nome

**Foglio sciolto** — tema visivo di *un brodo di...*

## 2. Atmosfera e direzione visiva

Calma, letteraria, minimale, con un tocco tattile moderato: fogli di carta chiara appoggiati su un piano color papiro, accenti borgogna vivaci ma sobri.

- La materialità nasce **solo** da forma (bordo strappato), ombra leggera e colore. Nessuna texture.
- Il motivo del bordo strappato (in alto e in basso) compare in homepage e, in forma più contenuta, sul dialog della poesia.
- Il testo poetico è sempre protagonista: molto spazio bianco, colonne di lettura strette.

## 3. Tipografia

### Famiglie (self-hosted, open source)

| Ruolo | Famiglia | Pesi | Fallback |
|---|---|---|---|
| Titoli e testo poetico | Lora | 400, 400 italic, 500, 600 | Georgia, "Times New Roman", serif |
| Interfaccia, tag, meta | Work Sans | 400, 500 | system-ui, -apple-system, "Segoe UI", sans-serif |

`font-display: swap`. Solo sottoinsieme latin / latin-ext.

### Scala tipografica (base 1rem = 16px, rapporto ~1.25)

| Primitivo | Valore |
|---|---|
| `--font-size-100` | 0.8125rem (13px) |
| `--font-size-200` | 0.875rem (14px) |
| `--font-size-300` | 1rem (16px) |
| `--font-size-400` | 1.125rem (18px) |
| `--font-size-500` | 1.375rem (22px) |
| `--font-size-600` | 1.75rem (28px) |
| `--font-size-700` | clamp(2rem, 1.5rem + 2.5vw, 3rem) |
| `--font-size-800` | clamp(2.5rem, 1.75rem + 4vw, 4rem) |

### Interlinee

| Primitivo | Valore |
|---|---|
| `--line-height-tight` | 1.2 |
| `--line-height-snug` | 1.4 |
| `--line-height-normal` | 1.6 |
| `--line-height-verse` | 1.75 |

### Tracking

| Primitivo | Valore |
|---|---|
| `--letter-spacing-normal` | 0 |
| `--letter-spacing-wide` | 0.04em |

### Ruoli semantici tipografici

| Semantico | Riferimento | Uso |
|---|---|---|
| `--font-heading` | Lora | titoli pagina, titolo sito, titolo card/dialog |
| `--font-poem` | Lora | testo poetico, intro card, testo about |
| `--font-ui` | Work Sans | link di navigazione, tag, pulsante chiudi, meta |
| `--text-size-site-title` | `--font-size-800` | "un brodo di..." in homepage |
| `--text-size-page-title` | `--font-size-700` | h1 di /poesie e /about |
| `--text-size-dialog-title` | `--font-size-600` | titolo poesia nel dialog |
| `--text-size-card-title` | `--font-size-500` | titolo poesia nella card |
| `--text-size-poem` | `--font-size-400` | versi |
| `--text-size-body` | `--font-size-300` | intro card, about |
| `--text-size-ui` | `--font-size-200` | link, pulsanti |
| `--text-size-meta` | `--font-size-100` | tag, didascalie |
| `--line-height-heading` | `--line-height-tight` | |
| `--line-height-body` | `--line-height-normal` | |
| `--line-height-poem` | `--line-height-verse` | |

Pesi: titoli 500, titolo sito 400 italic, corpo 400, interfaccia 500.

## 4. Palette — colori primitivi

| Primitivo | Valore | Descrizione |
|---|---|---|
| `--color-papyrus-100` | `#FCF8EE` | carta chiarissima |
| `--color-papyrus-200` | `#F6EFDF` | papiro chiaro |
| `--color-papyrus-300` | `#EFE5CF` | papiro tenue |
| `--color-papyrus-400` | `#DCCDB0` | papiro filetto |
| `--color-ink-900` | `#2E241D` | inchiostro |
| `--color-ink-700` | `#57483C` | inchiostro secondario |
| `--color-ink-500` | `#6E5E50` | inchiostro tenue |
| `--color-burgundy-600` | `#9E1B34` | borgogna acceso |
| `--color-burgundy-700` | `#7E1529` | borgogna scuro |
| `--color-burgundy-300` | `#F2899B` | borgogna chiaro (tema scuro) |
| `--color-burgundy-200` | `#F7AAB7` | borgogna chiarissimo (tema scuro) |
| `--color-night-900` | `#1F1A16` | fondo notte |
| `--color-night-800` | `#2A231E` | superficie notte |
| `--color-night-700` | `#352C26` | superficie notte tenue |
| `--color-night-600` | `#4A3F36` | filetto notte |
| `--color-cream-100` | `#F1E7D3` | testo notte |
| `--color-cream-300` | `#D2C4AC` | testo notte secondario |
| `--color-cream-500` | `#AD9F8A` | testo notte tenue |
| `--color-green-700` | `#2F6B3A` | successo (chiaro) |
| `--color-green-300` | `#8CCB98` | successo (scuro) |
| `--color-red-700` | `#A3262A` | errore (chiaro) |
| `--color-red-300` | `#F49A8E` | errore (scuro) |
| `--color-shadow-light` | `rgb(46 36 29 / 0.08)` | ombra chiara |
| `--color-shadow-light-strong` | `rgb(46 36 29 / 0.14)` | ombra chiara dialog |
| `--color-shadow-dark` | `rgb(0 0 0 / 0.35)` | ombra scura |
| `--color-shadow-dark-strong` | `rgb(0 0 0 / 0.5)` | ombra scura dialog |
| `--color-backdrop-light` | `rgb(46 36 29 / 0.45)` | backdrop dialog chiaro |
| `--color-backdrop-dark` | `rgb(0 0 0 / 0.65)` | backdrop dialog scuro |

## 5. Ruoli semantici di colore

| Semantico | Tema chiaro | Tema scuro | Uso |
|---|---|---|---|
| `--background` | papyrus-200 | night-900 | sfondo pagina |
| `--surface` | papyrus-100 | night-800 | foglio homepage, card, dialog |
| `--surface-muted` | papyrus-300 | night-700 | hover card, riquadro immagine |
| `--surface-image` | papyrus-100 | papyrus-100 | sfondo dietro immagini con trasparenza (sempre chiaro) |
| `--text-primary` | ink-900 | cream-100 | testo, titoli |
| `--text-secondary` | ink-700 | cream-300 | intro card, didascalie |
| `--text-muted` | ink-500 | cream-500 | tag, meta |
| `--text-on-action` | papyrus-100 | night-900 | testo su sfondo borgogna |
| `--action-primary` | burgundy-600 | burgundy-300 | link, accenti, pulsante chiudi |
| `--action-primary-hover` | burgundy-700 | burgundy-200 | hover link/pulsanti |
| `--border-subtle` | papyrus-400 | night-600 | divisori decorativi |
| `--border-strong` | burgundy-600 | burgundy-300 | bordo card, bordo dialog |
| `--focus-ring` | burgundy-700 | burgundy-200 | anello di focus |
| `--success` | green-700 | green-300 | riservato (non usato ora) |
| `--danger` | red-700 | red-300 | riservato (non usato ora) |
| `--shadow-card` | shadow-light | shadow-dark | ombra card |
| `--shadow-paper` | shadow-light-strong | shadow-dark-strong | ombra foglio home e dialog |
| `--backdrop` | backdrop-light | backdrop-dark | `::backdrop` del dialog |

### Contrasti verificati (WCAG 2.x)

| Coppia | Chiaro | Scuro |
|---|---|---|
| text-primary / background | 13.22 | 14.05 |
| text-primary / surface | 14.28 | 12.60 |
| text-secondary / surface | 8.26 | 9.01 |
| text-muted / surface | 5.86 | 5.97 |
| text-muted / surface-muted | 4.96 | 5.26 |
| action-primary / background | 6.89 | 7.25 |
| action-primary / surface | 7.44 | 6.50 |
| action-primary-hover / surface | 9.77 | 8.39 |
| text-on-action / action-primary | 7.44 | 7.25 |
| border-strong / surface (non testo, ≥ 3:1) | 7.44 | 6.50 |

Tutte le coppie di testo superano AA (4.5:1). `--border-subtle` è solo decorativo e non deve mai essere l'unico indicatore di stato.

## 6. Comportamento tema chiaro/scuro

- Default: segue la preferenza di sistema (`prefers-color-scheme`); se assente, tema chiaro.
- Override manuale tramite pulsante tema (vedi §13): imposta `data-theme="light"` o `data-theme="dark"` su `<html>`.
- Precedenza: `data-theme` esplicito > preferenza di sistema > chiaro.
- In `themes.css` il tema scuro si applica con `:root[data-theme="dark"]` e con `@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) }`.
- La scelta manuale è salvata in `localStorage` (lettura/scrittura protette da try/catch); un piccolo script inline nell'`<head>` la applica prima del primo paint per evitare il lampo del tema sbagliato.
- Il cambio avviene **solo** rimappando i token semantici in `themes.css`; i componenti non cambiano.
- `color-scheme` segue il tema attivo (`light dark` di default, `light` o `dark` se forzato).
- Le immagini con trasparenza sono sempre poste su `--surface-image` (chiaro in entrambi i temi) per restare leggibili.

## 7. Spaziatura

| Primitivo | Valore |
|---|---|
| `--space-1` | 0.25rem |
| `--space-2` | 0.5rem |
| `--space-3` | 0.75rem |
| `--space-4` | 1rem |
| `--space-5` | 1.5rem |
| `--space-6` | 2rem |
| `--space-7` | 3rem |
| `--space-8` | 4rem |
| `--space-9` | 6rem |

Semantici: `--space-inline-gutter` (space-4 mobile → space-6 ≥ 48rem), `--space-card-padding` (space-5), `--space-dialog-padding` (space-5 mobile → space-7 ≥ 48rem), `--space-section` (space-8 mobile → space-9 ≥ 48rem), `--space-grid-gap` (space-5 mobile → space-6 ≥ 48rem), `--space-stanza` (space-5), `--space-stack` (space-4), `--space-tag-gap` (space-2).

## 8. Raggi

| Primitivo | Valore |
|---|---|
| `--radius-none` | 0 |
| `--radius-sm` | 2px |
| `--radius-full` | 999px |

Semantici: `--radius-card` (radius-sm), `--radius-control` (radius-sm), `--radius-paper` (radius-none — il foglio strappato non ha angoli arrotondati).

## 9. Ombre

| Primitivo | Valore |
|---|---|
| `--shadow-offset-sm` | `0 1px 2px` |
| `--shadow-offset-md` | `0 4px 12px` |
| `--shadow-offset-lg` | `0 12px 32px` |

Composizione semantica (in `semantic.css`): card = offset-sm + offset-md con `--shadow-card` (leggera, come da brief); foglio/dialog = offset-lg con `--shadow-paper`.

## 10. Forma «carta strappata»

| Primitivo | Valore |
|---|---|
| `--shape-torn-edges` | `clip-path` `polygon()` con profilo irregolare **solo sul bordo superiore e inferiore**, lati verticali dritti; ampiezza max dello strappo ≈ 6–10px |

Semantici: `--paper-edge-home` (profilo pieno), `--paper-edge-dialog` (stesso profilo, ampiezza ridotta; applicato **solo da 48rem in su** — sotto i 48rem il dialog è un rettangolo semplice). Fallback senza `clip-path`: rettangolo semplice con ombra. Lo strappo non deve mai tagliare testo: padding verticale ≥ ampiezza dello strappo + `--space-4`.

## 11. Movimento

| Primitivo | Valore |
|---|---|
| `--duration-100` | 120ms |
| `--duration-200` | 200ms |
| `--ease-out` | cubic-bezier(0.2, 0, 0, 1) |

Semantici: `--motion-hover` (duration-100 + ease-out) per colore/ombra card e link; `--motion-dialog` (duration-200 + ease-out) per una dissolvenza dell'apertura del dialog.

Sotto `prefers-reduced-motion: reduce` tutte le durate semantiche diventano `0ms`. Nessuna animazione complessa, nessun movimento di posizione oltre ±4px.

## 12. Layout

| Semantico | Valore |
|---|---|
| `--container-max` | 72rem |
| `--reading-max` | 38rem (about, testo poesia nel dialog) |
| `--paper-max` | 32rem (foglio homepage) |
| `--dialog-max` | 42rem |

- Mobile-first, funzionante da 320px.
- Griglia card: 1 colonna < 40rem; 2 colonne ≥ 40rem; 3 colonne ≥ 60rem; 4 colonne ≥ 72rem (massimo).
- Card ad altezza uniforme per riga (grid `align-items: stretch`), intro troncata con `line-clamp` (4 righe).
- Homepage: foglio centrato verticalmente e orizzontalmente nella viewport; link sotto il foglio, centrati, in riga ≥ 30rem, in colonna sotto.

## 13. Componenti

**Foglio homepage** — `--surface`, bordo strappato sopra/sotto, `--shadow-paper`, titolo sito in Lora italic `--text-size-site-title`, centrato.

**Link** — `--action-primary`, sottolineatura sottile (1px, offset 0.2em), hover `--action-primary-hover` con sottolineatura più spessa. Link homepage in `--font-ui`.

**Card poesia** — elemento cliccabile unico (`<button>` o equivalente accessibile); `--surface`, bordo 1px `--border-strong`, `--radius-card`, `--shadow-card`; hover: `--surface-muted` e ombra appena più presente. Contenuto: titolo (`--font-heading`), intro (`--font-poem`, `--text-secondary`), tag (`--font-ui`, `--text-muted`, `--text-size-meta`) separati da punto mediano « · ».

**Dialog poesia** — `<dialog>` nativo; `--surface`, `--shadow-paper`, `::backdrop` = `--backdrop`; max `--dialog-max`, contenuto scorrevole internamente. Da 48rem in su: bordo strappato sopra/sotto in versione ridotta. Sotto 48rem: rettangolo semplice con bordo 1px `--border-strong` e `--radius-card`, quasi a tutto schermo con margine `--space-2`. Titolo `<h2>`; versi in `--font-poem` con `white-space: pre-line` o equivalente, strofe separate da `--space-stanza`. Immagini su `--surface-image`, didascalie `--text-secondary`.

**Pulsante chiudi** — visibile in alto a destra, testo «Chiudi» + icona ×, `--font-ui`, colore `--action-primary`, area cliccabile ≥ 44×44px.

**Pulsante tema** — non invasivo: piccolo pulsante solo icona (sole/luna, SVG inline con `currentColor`), posizionato in alto a destra della pagina (non fisso, scorre con il contenuto), presente su tutte le pagine. Colore `--text-muted`, hover `--action-primary`; nessun bordo né sfondo a riposo. Area cliccabile ≥ 44×44px. `aria-label` descrittivo che indica l'azione («Passa al tema scuro» / «Passa al tema chiaro») e `aria-pressed` non usato (è un'azione, non uno stato). Al click alterna chiaro ↔ scuro rispetto al tema attualmente visibile. Progressive enhancement: senza JavaScript il pulsante è nascosto e il sito segue la preferenza di sistema.

**Titoli pagina** — Lora 500, `--text-size-page-title`, centrati, con ampio spazio sopra/sotto.

**Navigazione** — nessuna barra di navigazione complessa; in /poesie e /about un link discreto «un brodo di...» per tornare alla home, in `--font-ui`.

**Form** — non previsti.

## 14. Accessibilità

- Contrasto testo ≥ 4.5:1 in entrambi i temi (vedi tabella §5); elementi grafici essenziali ≥ 3:1.
- `:focus-visible` su ogni elemento interattivo: outline 2px `--focus-ring`, offset 3px; mai rimosso.
- Pulsante tema: icona non unica fonte di significato (`aria-label` aggiornato a ogni cambio), focus visibile, icona ≥ 3:1 sullo sfondo (`--text-muted` su `--background`: 5.42 chiaro / 6.65 scuro).
- Stato hover mai unico indicatore: le card hanno anche focus visibile.
- `prefers-reduced-motion` azzera le durate.
- Testo ridimensionabile al 200% senza perdita di contenuto; nessuna dimensione in px per il testo.
- Immagini con `alt` obbligatorio nello schema dei contenuti.
- `lang="it"`.

## 15. Esclusioni

- Nessun font calligrafico o script.
- Nessuna texture, grana, immagine di sfondo o carta fotografica.
- Nessun ornamento, fregio, capolettera decorato o divisore ornamentale.
- Nessuna animazione complessa, parallax o effetto di scroll.
- Nessun valore grezzo (colore, font, dimensione, spaziatura, raggio, ombra, durata) nei componenti.
- Nessun nome di token basato sull'aspetto nei semantici (es. `--burgundy-border`).
