export default function render(element, text) {
  const input = document.createElement('textarea');
  input.className = 'edit-chart-text';
  input.setAttribute('aria-label', 'Text');
  input.value = text ?? '';
  Object.assign(input.style, {
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    font: 'inherit',
    resize: 'none',
    padding: '8px',
  });
  const style = document.createElement('style');
  style.textContent = `
    .edit-chart-text {
      border: 5px solid transparent;
      box-shadow: inset 0 0 0 1px #767676;
    }
    .edit-chart-text:focus {
      border-color: #005fcc;
      box-shadow: none;
    }
  `;
  element.replaceChildren(style, input);
  return input;
}