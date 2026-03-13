import { animateText } from "../shared/animate-text/animate-text";

export default () => {
  const section = document.querySelector(`.screen--rules`);
  const title = section.querySelector(`.rules__title`);

  const checkAnimate = () => {
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
  };

  window.addEventListener(`load`, checkAnimate);

  window.addEventListener(`hashchange`, checkAnimate);
};
