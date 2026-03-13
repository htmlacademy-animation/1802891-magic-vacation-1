import Swiper from "swiper";
import { animateText } from "../shared/animate-text/animate-text";

export default () => {
  let storySlider;
  let sliderContainer = document.getElementById(`story`);
  sliderContainer.style.backgroundImage = `url("img/slide1.jpg"), linear-gradient(180deg, rgba(83, 65, 118, 0) 0%, #523E75 16.85%)`;
  const section = document.querySelector(`.screen--story`);
  const title = section.querySelector(`.slider__item-title`);

  const setSlider = function () {
    if (window.innerWidth / window.innerHeight < 1 || window.innerWidth < 769) {
      storySlider = new Swiper(`.js-slider`, {
        pagination: {
          el: `.swiper-pagination`,
          type: `bullets`,
        },
        keyboard: {
          enabled: true,
        },
        allowTouchMove: false,
        on: {
          slideChange: () => {
            animateText(title, { isStart: false });
            if (
              storySlider.activeIndex === 0 ||
              storySlider.activeIndex === 1
            ) {
              sliderContainer.style.backgroundImage = `url("img/slide1.jpg"), linear-gradient(180deg, rgba(83, 65, 118, 0) 0%, #523E75 16.85%)`;
              animateText(title, { isStart: true });
            } else if (
              storySlider.activeIndex === 2 ||
              storySlider.activeIndex === 3
            ) {
              sliderContainer.style.backgroundImage = `url("img/slide2.jpg"), linear-gradient(180deg, rgba(45, 54, 179, 0) 0%, #2A34B0 16.85%)`;
            } else if (
              storySlider.activeIndex === 4 ||
              storySlider.activeIndex === 5
            ) {
              sliderContainer.style.backgroundImage = `url("img/slide3.jpg"), linear-gradient(180deg, rgba(92, 138, 198, 0) 0%, #5183C4 16.85%)`;
            } else if (
              storySlider.activeIndex === 6 ||
              storySlider.activeIndex === 7
            ) {
              sliderContainer.style.backgroundImage = `url("img/slide4.jpg"), linear-gradient(180deg, rgba(45, 39, 63, 0) 0%, #2F2A42 16.85%)`;
            }
          },
          resize: () => {
            storySlider.update();
          },
        },
        observer: true,
        observeParents: true,
      });
    } else {
      storySlider = new Swiper(`.js-slider`, {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          el: `.swiper-pagination`,
          type: `fraction`,
        },
        navigation: {
          nextEl: `.js-control-next`,
          prevEl: `.js-control-prev`,
        },
        allowTouchMove: false,
        keyboard: {
          enabled: true,
        },
        on: {
          slideChange: () => {
            animateText(title, { isStart: false });
            if (storySlider.activeIndex === 0) {
              sliderContainer.style.backgroundImage = `url("img/slide1.jpg")`;
              animateText(title, { isStart: true });
            } else if (storySlider.activeIndex === 2) {
              sliderContainer.style.backgroundImage = `url("img/slide2.jpg")`;
            } else if (storySlider.activeIndex === 4) {
              sliderContainer.style.backgroundImage = `url("img/slide3.jpg")`;
            } else if (storySlider.activeIndex === 6) {
              sliderContainer.style.backgroundImage = `url("img/slide4.jpg")`;
            }
          },
          resize: () => {
            storySlider.update();
          },
        },
        observer: true,
        observeParents: true,
      });
    }
  };

  window.addEventListener(`resize`, function () {
    if (storySlider) {
      storySlider.destroy();
    }
    setSlider();
  });

  setSlider();

  window.addEventListener(`hashchange`, () => {
    const anchor = window.location.hash.slice(1);

    if (section.id === anchor) {
      animateText(title, { isStart: true });
    } else {
      animateText(title, { isStart: false });
      storySlider.slideTo(0);
    }
  });
};
