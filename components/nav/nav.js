import { $ } from "../../utils/dom.js";

const cssModule = await import("./nav.css", { assert: { type: "css" } });
document.adoptedStyleSheets = [cssModule.default];

(function Nav() {
  const nav = $(".navigator");
  nav.innerHTML = render();

  function render() {
    return `
      <div class="navigator-inner">
        <div class="instagram-logo">
          <img
            width="103"
            height="29"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          />
        </div>
        <div class="search-input-box">
          <i class="far fa-xs fa-search"></i>
          <input type="text" />
        </div>
        <div class="menu-icons">
          <i class="fas fa-lg fa-home"></i>
          <i class="fas fa-lg fa-paper-plane"></i>
          <i class="far fa-lg fa-plus-square"></i>
          <i class="far fa-lg fa-compass"></i>
          <i class="far fa-lg fa-heart"></i>
        </div>
      </div>
    `;
  }
})();
