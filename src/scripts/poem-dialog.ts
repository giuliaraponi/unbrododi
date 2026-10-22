// The URL path is the source of truth: `/poesie/<slug>/` means that poem's dialog is open.
// Each poem page holds only its own poem; other poems are fetched from their pages on demand.
const listPath = '/poesie/';
const openedHere = 'poemDialogOpenedHere';

interface Poem {
  html: string;
  title: string;
}

function slugFromPath(): string {
  return location.pathname.match(/^\/poesie\/([^/]+)\/?$/)?.[1] ?? '';
}

export function initPoemDialogs(): void {
  const element = document.getElementById('poem-dialog');
  const grid = document.querySelector<HTMLElement>('[data-list-title]');
  if (!(element instanceof HTMLDialogElement) || !grid) return;
  const dialog = element;
  const listTitle = grid.dataset.listTitle ?? document.title;

  const poems = new Map<string, Poem>();
  if (dialog.dataset.slug) poems.set(dialog.dataset.slug, { html: dialog.innerHTML, title: document.title });

  async function fetchPoem(slug: string): Promise<Poem | undefined> {
    const cached = poems.get(slug);
    if (cached) return cached;
    const response = await fetch(`${listPath}${slug}/`);
    if (!response.ok) return undefined;
    const page = new DOMParser().parseFromString(await response.text(), 'text/html');
    const source = page.getElementById('poem-dialog');
    if (!source) return undefined;
    const poem = { html: source.innerHTML, title: page.title };
    poems.set(slug, poem);
    return poem;
  }

  // Ignores results of an earlier sync that finished after a newer one started.
  let latest = 0;

  async function sync(): Promise<void> {
    const slug = slugFromPath();
    const current = ++latest;
    if (!slug) {
      if (dialog.open) dialog.close();
      return;
    }
    const poem = await fetchPoem(slug).catch(() => undefined);
    if (current !== latest) return;
    // Fall back to loading the poem's page normally.
    if (!poem) return location.reload();
    if (dialog.dataset.slug !== slug) {
      dialog.innerHTML = poem.html;
      dialog.dataset.slug = slug;
    }
    document.title = poem.title;
    if (!dialog.open) dialog.showModal();
  }

  for (const opener of document.querySelectorAll<HTMLAnchorElement>('[data-poem]')) {
    opener.addEventListener('click', (event) => {
      // Let the browser handle new-tab/new-window clicks.
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      if (slugFromPath() !== opener.dataset.poem) history.pushState({ [openedHere]: true }, '', opener.href);
      void sync();
    });
  }

  // Clicks on the dialog element itself (not its sheet) land on the backdrop.
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener('close', () => {
    // Closed by the reader (button, Escape, backdrop): go back to the list URL.
    if (slugFromPath()) {
      if (history.state?.[openedHere]) history.back();
      else history.replaceState(null, '', listPath);
    }
    document.title = listTitle;
    // Return focus to the card that opened the dialog.
    document.querySelector<HTMLAnchorElement>(`[data-poem="${dialog.dataset.slug}"]`)?.focus();
  });

  window.addEventListener('popstate', () => void sync());
  void sync();
}
