import Feed from "./feed.js";
import Aside from "./aside.js";
import { $ } from "../../utils/dom.js";

const cssModule = await import("./main.css", { assert: { type: "css" } });
document.adoptedStyleSheets = [cssModule.default];

const feedsData = [1, 2, 3];

(function Main(feeds) {
  const main = $(".main");
  main.innerHTML = render();

  function render() {
    return `
      <section class="feeds">
        ${feeds.map(Feed).joinComma()}
        ${Aside()}
      </section>
    `;
  }
})(feedsData);

(function () {
  setAsidePosition();
  // TODO: rAF 적용
  window.addEventListener("resize", setAsidePosition);

  function setAsidePosition() {
    const aside = $(".aside");
    const feeds = $(".feeds");
    const asideLeftPosition = feeds.getBoundingClientRect().left + 614 + 28;
    aside.style.left = asideLeftPosition + "px";
  }
})();
