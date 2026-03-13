import { animateText } from "../shared/animate-text/animate-text";

export default () => {
  const section = document.getElementById(`game`);
  const game = section.querySelector(`.game`);
  const title = section.querySelector(`.game__title`);

  function checkAnchor() {
    const anchor = window.location.hash.slice(1);

    if (section.id === anchor) {
      animateText(title, {
        isStart: true,
        delayAnimation: 0,
      });
    } else {
      animateText(title, {
        isStart: false,
      });
    }

    if (section && section.id === anchor) {
      return game.classList.add(`game--active`);
    }
    return game.classList.remove(`game--active`);
  }

  window.addEventListener(`hashchange`, checkAnchor);

  window.addEventListener(`load`, checkAnchor);
};
