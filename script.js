// API nuoroda: https://jsonplaceholder.typicode.com
// 1. Sukurti vartotojų puslapį (users.html), kuriame būtų atvaizduotas vartotojų sąrašas.
//   1.1. Prie vartotojo turėtu būti jo vardas.
//   1.2. Paspaudus ant vartotojo - nukreipiama į jo user.html puslapį.
//   1.3. Prie vartotojo vardo turėtų būti parašytų post'ų skaičius.
// JSONPlaceholder - Free Fake REST API

console.log("veikia");

async function geListByName() {
  const userList = await fetch("https://jsonplaceholder.typicode.com/users?_embed=posts");
  const userData = await userList.json();

  const userListElement = createUserList(userData);
  const contanentEl = document.querySelector("#container");
  contanentEl.append(userListElement);
}

function createUserList(users) {
  const userListUl = document.createElement("ul");
  users.forEach(async (user) => {
    const userName = user.name;

    const liList = document.createElement("li");
    const linkElement = document.createElement("a");
    linkElement.textContent = `${userName} ${users.length}`;

    linkElement.href = "user.html";
    liList.append(linkElement);
    userListUl.append(liList);
  });

  return userListUl;
}

geListByName();
