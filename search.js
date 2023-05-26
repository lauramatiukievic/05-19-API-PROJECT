// 9. Sukurti paieškos funkcionalumą navigacijos elemente:
// 9.1. Navigacijos elemente sukurti formą, kuri turi text tipo input elementą (nepamiršti pridėti name atributą).
// 9.2. Formos submit metu, naudojant action atributą, nukreipti į naują puslapį (search.html).
// 9.3. Šiame puslapyje atvaizduoti paieškos rezultatą.
// 9.3.1. Jeigu nėra tinkamų rezultatų, tai parašyti jog rezultatų pagal užklausą nerasta.
import { fetchData, getUrlParams } from "./function.js";
import { API_URL } from "./config.js";
import header from "./nav.js";
async function searchPost() {
  const search = getUrlParams("search");
  const searchArea = document.querySelector("#container");
  const searchInput = document.querySelector("#name-form");
  searchInput.before(header());

  if (search) {
    const searchDataUsers = await fetchData(`${API_URL}/users?q=${search}`);
    const searchDataPost = await fetchData(`${API_URL}/posts?q=${search}`);
    const searchDataAlbums = await fetchData(`${API_URL}/albums?q=${search}`);

    console.log(searchDataUsers);

    if (searchDataUsers.length === 0 && searchDataPost.length === 0 && searchDataAlbums.length === 0) {
      const searchDataNotFound = document.createElement("p");
      searchDataNotFound.textContent = "Not found :(";
      searchArea.append(searchDataNotFound);
      console.log(searchDataNotFound);
      return;
    }

    searchArea.append(createUsers(searchDataUsers));
    searchArea.append(createPosts(searchDataPost));
    searchArea.append(createAlbum(searchDataAlbums));
  }
}

function createUsers(searchDataUsers) {
  const searchDataUl = document.createElement("ul");
  searchDataUl.classList.add("searchDataul");

  searchDataUsers.map((item) => {
    const searchDataLi = document.createElement("li");
    searchDataLi.classList.add("searchDataLi");
    searchDataUl.append(searchDataLi);
    const searchDataOut = document.createElement("a");
    searchDataOut.classList.add("searchDataOut");
    searchDataOut.textContent = "User: " + item.name;
    searchDataOut.href = "./user.html?user_id=" + item.id;
    searchDataLi.append(searchDataOut);
  });
  return searchDataUl;
}

function createPosts(searchDataPost) {
  const searchDataUl = document.createElement("ul");
  searchDataUl.classList.add("searchDataul");
  searchDataPost.map((item) => {
    const searchDataLi = document.createElement("li");
    searchDataLi.classList.add("searchDataLi");
    searchDataUl.append(searchDataLi);
    const searchDataOut = document.createElement("a");
    searchDataOut.classList.add("searchDataOut");
    searchDataOut.textContent = "Post by title: " + item.title;
    searchDataOut.href = "./post.html?post_id=" + item.id;
    searchDataLi.append(searchDataOut);
  });
  return searchDataUl;
}
function createAlbum(searchDataAlbums) {
  const searchDataUl = document.createElement("ul");
  searchDataUl.classList.add("searchDataul");
  searchDataAlbums.map((item) => {
    const searchDataLi = document.createElement("li");
    searchDataLi.classList.add("searchDataLi");
    searchDataUl.append(searchDataLi);
    const searchDataOut = document.createElement("a");
    searchDataOut.classList.add("searchDataOut");
    searchDataOut.textContent = "Album by title: " + item.title;
    searchDataOut.href = `./albums.html?album_id=` + item.id;
    searchDataLi.append(searchDataOut);
  });
  return searchDataUl;
}

searchPost();

console.log("ar tikrai veikia");
