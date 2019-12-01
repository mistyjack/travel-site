import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/stickyHeader'

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);

let mobileMenu = new MobileMenu();
let stickyHeader = new StickyHeader();

if (module.hot) {
    module.hot.accept()
}
