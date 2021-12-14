export function sideEffect(callback) {
  setTimeout(() => {
    callback();
  }, 0);
}

const eventListenerCache = {};
export function setEventListener({ element, cacheKey, eventType, callback }) {
  if (eventListenerCache[cacheKey]) {
    element.removeEventListener(eventType, callback);
  }
  element.addEventListener(eventType, callback);
  eventListenerCache[cacheKey] = callback;
}
