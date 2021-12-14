import Feed from "../components/main/feed.js";
import Aside from "../components/main/aside.js";
import Stories from "../components/main/stories.js";
import { $ } from "../utils/dom.js";
import { sideEffect, setEventListener } from "../utils/sideEffect.js";

const cssMain = await import("./main.css", { assert: { type: "css" } });
document.adoptedStyleSheets = [...document.adoptedStyleSheets, cssMain.default];

const feedsData = [{ id: 1 }, { id: 2 }, { id: 3 }];

(async function Main(feeds) {
  const main = $(".main");

  main.innerHTML = `
    <section class="feeds">
      ${await Stories()}
      ${(await Promise.all(feeds.map(Feed))).joinComma()}
      ${await Aside()}
    </section>
  `;

  sideEffect(() => {
    // TODO: rAF 적용
    setEventListener({
      element: window,
      eventType: "resize",
      callback: setAsidePosition,
    });

    setAsidePosition();

    function setAsidePosition() {
      const aside = $(".aside");
      const feeds = $(".feeds");
      const asideLeftPosition = feeds.getBoundingClientRect().left + 614 + 28;
      aside.style.left = asideLeftPosition + "px";
    }
  });
})(feedsData);
