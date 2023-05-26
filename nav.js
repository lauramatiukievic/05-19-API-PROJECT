console.log("veikia");

import { MAIN_MENU_ITEMS } from "./config.js";
import { getCurrentUrl } from "./function.js";
export default function header() {
  const headerElement = document.createElement("header");
  headerElement.classList.add("page-header");

  const pageTitle = document.createElement("a");
  pageTitle.classList.add("header-title");
  pageTitle.textContent = "API Project";
  pageTitle.href = "./";

  const url = getCurrentUrl();
  console.log(url);

  const navigationElement = document.createElement("nav");
  navigationElement.classList.add("pageNav");

  headerElement.append(pageTitle, navigationElement);
  if (url !== "/search.html") {
    const searchForm = document.createElement("form");
    searchForm.action = "./search.html";
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.name = "search";
    searchInput.id = "search";

    const searchButton = document.createElement("button");
    searchButton.classList.add("search-button");
    searchButton.type = "submit";
    searchButton.textContent = "Submit";
    searchForm.append(searchInput, searchButton);
    headerElement.append(searchForm);
  }

  const menuList = document.createElement("ul");
  menuList.classList.add("menu", "main-menu");

  navigationElement.append(menuList);

  MAIN_MENU_ITEMS.forEach((item) => {
    let { title, path } = item;

    const menuItem = document.createElement("li");
    menuList.append(menuItem);

    const menuLink = document.createElement("a");
    menuLink.classList.add("linkName");

    if (location.pathname === "/" + path) {
      menuLink.classList.add("active");
    }

    menuItem.append(menuLink);

    menuLink.textContent = title;
    menuLink.href = "./" + path;
  });

  return headerElement;
}

// function navigation() {
//   const pathName = window.location.href;

//   const headerElement = document.createElement("header");

//   const menuLinks = [
//     {
//       name: `Home`,
//       url: `./home.html`,
//     },

//     {
//       name: `users`,
//       url: `./index.html`,
//     },
//     {
//       name: `album`,
//       url: `./album.html`,
//     },
//     {
//       name: `posts`,
//       url: `./posts.html`,
//     },
//   ];
//   const pagesUl = document.createElement(`ul`);
//   pagesUl.classList.add("navigationUl");
//   console.log(pagesUl);
//   menuLinks.forEach((page) => {
//     const pagesLi = document.createElement("li");
//     const pageElement = document.createElement("a");
//     pageElement.classList.add("linkName");
//     pageElement.textContent = page.name;
//     pageElement.href = page.url;
//     pagesUl.append(pagesLi);
//     pagesLi.append(pageElement);
//     navContainer.append(pagesUl);

//     if (pathName === pageElement.href) {
//       pageElement.classList.add(`active`);
//     }
//   });

//   return pagesUl;
// }

// navigation();
