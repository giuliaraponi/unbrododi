// The URL hash is the source of truth: `/poesie/#<slug>` means that poem's dialog is open.
const openedHere = 'poemDialogOpenedHere';

function slugFromHash(): string {
  try {
    return decodeURIComponent(location.hash.slice(1));
  } catch {
    return '';
  }
}

export function initPoemDialogs(): void {
  const dialogs = new Map<string, HTMLDialogElement>();

  for (const opener of document.querySelectorAll<HTMLAnchorElement>('[data-dialog]')) {
    const dialog = document.getElementById(opener.dataset.dialog ?? '');
    const slug = opener.dataset.slug;
    if (!(dialog instanceof HTMLDialogElement) || !slug) continue;
    dialogs.set(slug, dialog);

    opener.addEventListener('click', (event) => {
      // Let the browser handle new-tab/new-window clicks.
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      if (slugFromHash() !== slug) history.pushState({ [openedHere]: true }, '', `#${slug}`);
      sync();
    });

    // Clicks on the dialog element itself (not its sheet) land on the backdrop.
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });

    dialog.addEventListener('close', () => {
      // Closed by the reader (button, Escape, backdrop): drop the poem from the URL.
      if (slugFromHash() === slug) {
        if (history.state?.[openedHere]) history.back();
        else history.replaceState(null, '', location.pathname + location.search);
      }
      // Return focus to the card that opened the dialog.
      opener.focus();
    });
  }

  function sync(): void {
    const target = dialogs.get(slugFromHash());
    for (const dialog of dialogs.values()) {
      if (dialog !== target && dialog.open) dialog.close();
    }
    if (target && !target.open) target.showModal();
  }

  // Back/forward and manual hash edits.
  window.addEventListener('hashchange', sync);
  sync();
}
