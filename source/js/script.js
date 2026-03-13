// modules
import mobileHeight from "./modules/mobile-height-adjust.js";
import slider from "./modules/slider.js";
import menu from "./modules/menu.js";
import footer from "./modules/footer.js";
import chat from "./modules/chat.js";
import result from "./modules/result.js";
import form from "./modules/form.js";
import social from "./modules/social.js";
import game from "./modules/game.js";
import FullPageScroll from "./modules/full-page-scroll";
import intro from "./modules/intro.js";
import prize from "./modules/prize.js";
import rules from "./modules/rules.js";

// init modules

intro();
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
game();
prize();
rules();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();
