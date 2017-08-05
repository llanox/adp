function init() {

  const toolbarHtml = buildToolbarHtml();

  const appContainer = document.querySelector('#appContainer');
  appContainer.insertAdjacentHTML('afterbegin', toolbarHtml);

  const toolbar = appContainer.querySelector('.adp-next');

  const fill = toolbar.querySelector('.adp-next__fill');
  fill.addEventListener('click', cloneAll);

  whenElementReady('#TcGrid', appContainer, () => {
    fill.removeAttribute('disabled');
  });
}

function cloneAll() {
  obtainRows().forEach(cloneLastFilledRow);
}

function cloneLastFilledRow() {

  const lastFilledRow = obtainRows()
    .reverse()
    .find(checkIfRowIsFilled);

  if (!lastFilledRow) {
    console.warn('No filled row present.');
    return;
  }

  cloneRow(lastFilledRow);
}

function checkIfRowIsFilled(row: HTMLElement) {
  const fields = obtainEditableFields(row);
  for (const field of fields) {
    if (!field.id.endsWith('_InDate')
      && !field.id.endsWith('_Value')
      && field.textContent.trim()) {
      return true;
    }
  }
}

function cloneRow(row: HTMLElement) {

  const menuIcon = row.querySelector('.menuIcon') as HTMLElement;
  menuIcon.click();

  const menu = Array.from(document.querySelectorAll('.dijitPopup') as NodeListOf<HTMLElement>)
    .find(it => it.style.display !== 'none');

  const copy = menu.querySelectorAll('tr')[2];
  copy.click();
}

function whenElementReady(cssSelector: string, context: Element, callback: Function, timer = 200) {
  setTimeout(() => {

    const el = context.querySelector(cssSelector);

    if (el) {
      callback(el);
      return;
    }

    whenElementReady(cssSelector, context, callback, timer);

  }, timer);
}

function obtainEditableFields(row: HTMLElement) {
  return Array.from(row.querySelectorAll('.Editable'));
}

function obtainRows() {
  return Array.from(document.querySelectorAll('#TcGrid .dR') as NodeListOf<HTMLElement>);
}

function buildToolbarHtml() {
  return `
    <div class="adp-next">
      <button disabled class="adp-next__fill adp-next__btn">Fill</button>
    </div>
  `;
}


init();