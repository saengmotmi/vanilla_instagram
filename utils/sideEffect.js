export function sideEffect(callback) {
  setTimeout(() => {
    callback();
  }, 0);
}

let count = 0;
const eventListenerCache = {};
export function setEventListener({ element, eventType, callback }) {
  count++;
  const cacheKey = callback.name + count;
  if (eventListenerCache[cacheKey]) {
    element.removeEventListener(eventType, callback);
  }
  element.addEventListener(eventType, callback);
  eventListenerCache[cacheKey] = callback;
}
