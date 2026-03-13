import { animateText } from "../shared/animate-text/animate-text";

export default () => {
  const section = document.querySelector(`.screen--intro`);
  const title = section.querySelector(`.intro__title`);
  const date = section.querySelector(`.intro__date`);

  const initAnimation = () => {
    document.querySelector(`body`).classList.add(`load`);

    animateText(title, {
      isStart: true,
      delayAnimation: 850,
    });

    animateText(date, {
      isStart: true,
      delayAnimation: 1400,
    });
  };

  window.addEventListener(`load`, initAnimation);
  window.addEventListener(`hashchange`, initAnimation);
};
