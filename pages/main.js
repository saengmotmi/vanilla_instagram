import Feed from "../components/main/feed.js";
import Aside from "../components/main/aside.js";
import Stories from "../components/main/stories.js";
import { $ } from "../utils/dom.js";

const cssMain = await import("./main.css", { assert: { type: "css" } });
document.adoptedStyleSheets = [...document.adoptedStyleSheets, cssMain.default];

const feedsData = [{ id: 1 }, { id: 2 }, { id: 3 }];

(function Main(feeds) {
  const main = $(".main");

  main.innerHTML = `
    <section class="feeds">
      ${Stories()}
      ${feeds.map(Feed).joinComma()}
      ${Aside()}
    </section>
  `;
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
