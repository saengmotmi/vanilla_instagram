import Feed from "../components/main/feed.js";
import Aside from "../components/main/aside.js";
import Stories from "../components/main/stories.js";
import { $ } from "../utils/dom.js";
import { sideEffect, setEventListener } from "../utils/sideEffect.js";

const cssMain = await import("./main.css", { assert: { type: "css" } });
document.adoptedStyleSheets = [...document.adoptedStyleSheets, cssMain.default];

const feedsData = [{ id: 1 }, { id: 2 }, { id: 3 }];

(function Main(feeds) {
  const main = $(".main");

  sideEffect(() => {
    const aside = $(".aside");
    const feeds = $(".feeds");

    setAsidePosition();

    // TODO: rAF 적용
    setEventListener({
      element: window,
      cacheKey: "setAsidePosition",
      eventType: "resize",
      callback: setAsidePosition,
    });

    function setAsidePosition() {
      const asideLeftPosition = feeds.getBoundingClientRect().left + 614 + 28;
      aside.style.left = asideLeftPosition + "px";
    }
  });

  main.innerHTML = `
    <section class="feeds">
      ${Stories()}
      ${feeds.map(Feed).joinComma()}
      ${Aside()}
    </section>
  `;
})(feedsData);
