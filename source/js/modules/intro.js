export default () => {
  const intro = document.querySelector(`.intro`);

  setTimeout(() => {
    intro.classList.add(`intro--load`);
  }, 100);
};
