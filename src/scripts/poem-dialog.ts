export function initPoemDialogs(): void {
  for (const opener of document.querySelectorAll<HTMLButtonElement>('[data-dialog]')) {
    const dialog = document.getElementById(opener.dataset.dialog ?? '');
    if (!(dialog instanceof HTMLDialogElement)) continue;

    opener.addEventListener('click', () => dialog.showModal());

    // Clicks on the dialog element itself (not its sheet) land on the backdrop.
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });

    // Return focus to the card that opened the dialog.
    dialog.addEventListener('close', () => opener.focus());
  }
}
