import Feed from "../components/main/feed.js";
import Aside from "../components/main/aside.js";
import Stories from "../components/main/stories.js";
import { $ } from "../utils/dom.js";
import { sideEffect, setEventListener } from "../utils/sideEffect.js";

const cssMain = await import("./main.css", { assert: { type: "css" } });
document.adoptedStyleSheets = [...document.adoptedStyleSheets, cssMain.default];

const feedsData = [{ id: 1 }, { id: 2 }, { id: 3 }];

(async function Main(feedsData) {
  const main = $(".main");

  const stories = await Stories();
  const feeds = (await Promise.all(feedsData.map(Feed))).joinComma();
  const aside = await Aside();

  main.innerHTML = `
    <section class="feeds">
      ${stories}
      ${feeds}
      ${aside}
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
