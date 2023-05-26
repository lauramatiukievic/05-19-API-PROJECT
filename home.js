import header from "./nav.js";

function init() {
  const homeData = document.querySelector("#container");
  homeData.before(header());
}
init();
