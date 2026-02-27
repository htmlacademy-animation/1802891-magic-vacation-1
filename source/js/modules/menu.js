export default () => {
  let header = document.querySelector(`.js-header`);
  let menuToggler = header.querySelector(`.js-menu-toggler`);
  let menuLinks = header.querySelectorAll(`.js-menu-link`);

  document.addEventListener(`DOMContentLoaded`, () => {
    header.classList.add(`page-header--loaded`);
  });

  if (menuToggler) {
    menuToggler.addEventListener(`click`, function () {
      if (header.classList.contains(`page-header--menu-opened`)) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      } else {
        header.classList.add(`page-header--menu-opened`);
        document.body.classList.add(`menu-opened`);
      }
    });
  }

  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener(`click`, function () {
      if (window.innerWidth < 1025) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      }
    });
  }
};
