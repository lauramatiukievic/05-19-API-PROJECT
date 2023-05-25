// 9. Sukurti paieškos funkcionalumą navigacijos elemente:
// 9.1. Navigacijos elemente sukurti formą, kuri turi text tipo input elementą (nepamiršti pridėti name atributą).
// 9.2. Formos submit metu, naudojant action atributą, nukreipti į naują puslapį (search.html).
// 9.3. Šiame puslapyje atvaizduoti paieškos rezultatą.
// 9.3.1. Jeigu nėra tinkamų rezultatų, tai parašyti jog rezultatų pagal užklausą nerasta.
import { fetchData, getUrlParams } from "./function.js";
import { API_URL } from "./config.js";

async function searchPost() {
  const search = getUrlParams("search");
  const category = getUrlParams("category");
  const searchData = await fetchData(`${API_URL}/${category}?q=${search}`);
  console.log(searchData);
  const searchArea = document.querySelector("#container");

  if (searchData.length === 0) {
    const searchDataNotFound = document.createElement("p");
    searchDataNotFound.textContent = "No found :(";
    searchArea.append(searchDataNotFound);
    return;
  }

  const searchResults = createSearchResults(category, searchData);
  searchArea.append(searchResults);
}

function createSearchResults(category, searchData) {
  if (category === "users") {
    return createUsers(searchData);
  } else if (category === "albums") {
    return createAlbums(searchData);
  } else if (category === "posts") {
    return createPosts(searchData);
  }
}

function createUsers(searchData) {
  const searchResultsDiv = document.createElement("div");
  searchData.forEach((item) => {
    const searchDataOut = document.createElement("p");
    searchDataOut.textContent = "User name: " + item.name;
    searchResultsDiv.append(searchDataOut);
  });
  return searchResultsDiv;
}

function createAlbums(searchData) {
  const searchResultsDiv = document.createElement("div");
  searchData.forEach((item) => {
    const searchDataOut = document.createElement("p");
    searchDataOut.textContent = "Albums title: " + item.title;
    searchResultsDiv.append(searchDataOut);
  });
  return searchResultsDiv;
}

function createPosts(searchData) {
  const searchResultsDiv = document.createElement("div");
  searchData.forEach((item) => {
    const searchDataOut = document.createElement("p");
    searchDataOut.textContent = "Posts title: " + item.title;
    searchResultsDiv.append(searchDataOut);
  });

  return searchResultsDiv;
}

searchPost();

console.log("ar tikrai veikia");
