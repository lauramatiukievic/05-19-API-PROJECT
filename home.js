import header from "./nav.js";

function init() {
  const homeData = document.querySelector("#container");
  homeData.before(header());

  const homeTitle = document.createElement("h2");
  homeTitle.classList.add("homeTitle");
  homeTitle.textContent = `This Is Api Project`;

  homeData.append(homeTitle);
}
init();
