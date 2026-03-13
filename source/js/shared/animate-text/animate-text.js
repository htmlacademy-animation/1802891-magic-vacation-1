export const animateText = (
  dom,
  {
    isStart = false,
    charDuration = 750,
    maxCharDelay = 300,
    delayAnimation = 0,
  },
) => {
  if (!isStart) {
    return dom.classList.remove(`animationText_start`);
  }

  dom.classList.add(`animationText`);

  const words = dom.textContent.split(` `).map((text) => {
    const word = document.createElement(`span`);
    word.classList.add(`animationText__word`);

    text.split(``).forEach((char) => {
      const letterSpan = document.createElement(`span`);
      letterSpan.textContent = char;
      letterSpan.classList.add(`animationText__char`);
      letterSpan.style.setProperty(
        `--animation-char-delay`,
        Math.random() * maxCharDelay + `ms`,
      );

      word.appendChild(letterSpan);
      word.style.setProperty(`--animation-char-duration`, charDuration + `ms`);
    });
    return word;
  });

  dom.textContent = ``;
  words.forEach((word, index) => {
    dom.appendChild(word);

    if (index !== words.length - 1) {
      dom.appendChild(document.createTextNode(` `));
    }
  });

  setTimeout(() => dom.classList.add(`animationText_start`), delayAnimation);
};
