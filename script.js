// API nuoroda: https://jsonplaceholder.typicode.com
// 1. Sukurti vartotojų puslapį (users.html), kuriame būtų atvaizduotas vartotojų sąrašas.
//   1.1. Prie vartotojo turėtu būti jo vardas.
//   1.2. Paspaudus ant vartotojo - nukreipiama į jo user.html puslapį.
//   1.3. Prie vartotojo vardo turėtų būti parašytų post'ų skaičius.
// JSONPlaceholder - Free Fake REST API

console.log("veikia");

async function geListByName() {
  const userListUl = document.querySelector("#user-list");

  const userList = await fetch("https://jsonplaceholder.typicode.com/users");
  const userData = await userList.json();

  userData.forEach(async (user) => {
    const userName = user.name;
    const userId = user.id;

    const userPost = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const postData = await userPost.json();

    const liList = document.createElement("li");
    const linkElement = document.createElement("a");
    linkElement.textContent = `${userName} ${postData.length}`;

    linkElement.href = "user.html";
    liList.append(linkElement);
    userListUl.append(liList);
  });
}

geListByName();

// 2. Sukurti puslapį, kuriame bus atvaizduojami įrašai (posts). Kiekvienas įrašas turi:
//   2.1. Pavadinimą. Tai turi būti nuoroda. Ji turi vesti į post.html puslapį.
//   2.2. Autorių. Tai turi būti nuoroda. Ji turi vesti į user.html puslapį.
//   2.3. Prie pavadinimo pridėti įrašo komentarų skaičių.

// userData.forEach(async (user) => {
//     const userName = user.name;
//     const userId = user.id;

//     const userPost = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
//     const postData = await userPost.json();

//     const liList = document.createElement("li");
//     const linkElement = document.createElement("a");
//     linkElement.textContent = `${userName} ${postData.length}`;

//     linkElement.href = "user.html";
//     liList.append(linkElement);
//     userListUl.append(liList);
//   });
