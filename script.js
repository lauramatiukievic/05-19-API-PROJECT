// API nuoroda: https://jsonplaceholder.typicode.com
// 1. Sukurti vartotojų puslapį (users.html), kuriame būtų atvaizduotas vartotojų sąrašas.
//   1.1. Prie vartotojo turėtu būti jo vardas.
//   1.2. Paspaudus ant vartotojo - nukreipiama į jo user.html puslapį.
//   1.3. Prie vartotojo vardo turėtų būti parašytų post'ų skaičius.
// JSONPlaceholder - Free Fake REST API

console.log("veikia");
import { fetchData } from "./function.js";
import { API_URL } from "./config.js";
import header from "./nav.js";
async function geListByName() {
  const userData = await fetchData(`${API_URL}/users?_embed=posts`);

  const userListElement = createUserList(userData);
  const contanentEl = document.querySelector("#container-user");
  contanentEl.before(header());
  contanentEl.append(userListElement);
}

function createUserList(users) {
  const userListUl = document.createElement("ul");
  userListUl.classList.add("user-list");
  users.forEach(async (user) => {
    const userId = user.id;
    const userName = user.name;

    const liList = document.createElement("li");
    liList.classList.add("user-name-li");
    const linkElement = document.createElement("a");
    linkElement.classList.add("user-name-link");
    linkElement.textContent = `${userName} (Post total: ${users.length})`;

    linkElement.href = "./user.html?user_id=" + userId;
    liList.append(linkElement);
    userListUl.append(liList);
  });

  return userListUl;
}

geListByName();
