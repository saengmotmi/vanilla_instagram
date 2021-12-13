export function $(selector) {
  return document.querySelector(selector);
}

export function joinComma() {
  return this.reduce((acc, cur) => acc + cur, "");
}
