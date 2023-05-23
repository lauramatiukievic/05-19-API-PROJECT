console.log("veikia");

function navigation() {
  const pathName = window.location.href;

  const navContainer = document.querySelector("#pageNav");
  const menuLinks = [
    {
      name: `home`,
      url: `./nav.html`,
    },
    {
      name: `users`,
      url: `./index.html`,
    },
    {
      name: `albums`,
      url: `./albums.html`,
    },
    {
      name: `posts`,
      url: `./posts.html`,
    },
  ];
  const pagesUl = document.createElement(`ul`);
  pagesUl.classList.add("navigationUl");
  console.log(pagesUl);
  menuLinks.forEach((page) => {
    const pagesLi = document.createElement("li");
    const pageElement = document.createElement("a");
    pageElement.classList.add("linkName");
    pageElement.textContent = page.name;
    pageElement.href = page.url;
    pagesUl.append(pagesLi);
    pagesLi.append(pageElement);
    navContainer.append(pagesUl);

    if (pathName === pageElement.href) {
      pageElement.classList.add(`active`);
    }
  });
  return pagesUl;
}

navigation();
