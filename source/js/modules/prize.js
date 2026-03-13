import { animateText } from "../shared/animate-text/animate-text";

export default () => {
  const section = document.querySelector(`.screen--prizes`);
  const title = section.querySelector(`.prizes__title`);

  window.addEventListener(`hashchange`, () => {
    const anchor = window.location.hash.slice(1);

    if (section.id === anchor) {
      animateText(title, {
        isStart: true,
        delayAnimation: 700,
      });
    } else {
      animateText(title, {
        isStart: false,
      });
    }
  });
};
