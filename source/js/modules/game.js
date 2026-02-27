export default () => {
  const section = document.getElementById(`game`);
  const game = section.querySelector(`.game`);

  function checkAnchor() {
    const anchor = window.location.hash.slice(1);

    if (section && section.id === anchor) {
      return game.classList.add(`game--active`);
    }

    return game.classList.remove(`game--active`);
  }

  window.addEventListener(`hashchange`, checkAnchor);

  window.addEventListener(`load`, checkAnchor);
};
