// 5. Sukurti naują puslapį user.html, kuriame bus atvaizduojama vartotojo informacija:
//   5.1. Pilnas vardas.
//   5.2. Vartotojo vardas / nick'as.
//   5.3. El. paštas.
//   5.4. Adresas, kuris turės gatvę, namo numerį, miestą, pašto kodą. Paspaudus ant adreso, pagal koordinates, turėtų atidaryti šios vietos Google Maps.
//   5.5. Telefono numeris.
//   5.6. Internetinio puslapio adresas.
//   5.7. Įmonės, kurioje dirba, pavadinimas.

console.log("veikia");

async function userData() {
  const userInfo = document.querySelector("#container");
  const userPost = await fetch(`https://jsonplaceholder.typicode.com/users/1/?_embed=posts&_embed=albums`);
  const postData = await userPost.json();

  const aboutUser = document.createElement("h2");
  aboutUser.textContent = `User Information:`;
  console.log(postData);
  const userName = document.createElement("h3");
  const linkName = postData.name;
  const linkUsername = postData.username;
  console.log(linkName);
  userName.textContent = `Name: ${linkName} (${linkUsername})`;

  const emailAdress = document.createElement("a");
  const email = postData.email;
  emailAdress.textContent = email;
  emailAdress.href = "mailto:" + email;

  const userAdressInfo = document.createElement("h3");
  userAdressInfo.textContent = `Adress:`;
  const userAdressLink = document.createElement("a");
  const userAdressParagraph = document.createElement("p");
  const userAdressStreet = postData.address.street;
  const userAdressSuite = postData.address.suite;
  const userAdressCity = postData.address.city;
  const userAdressZipCode = postData.address.zipcode;
  const userLocationLat = postData.address.geo.lat;
  const userLocationLng = postData.address.geo.lng;
  userAdressLink.textContent = `Street: ${userAdressStreet} ${userAdressSuite} 
    ${userAdressCity} ${userAdressZipCode}`;
  userAdressLink.href = `https://www.google.com/maps?q=${userLocationLat},${userLocationLng}`;

  const webDiv = document.createElement("div");
  const phoneNumberEl = document.createElement("a");
  phoneNumberEl.textContent = postData.phone;
  phoneNumberEl.href = "tel:" + postData.phone;
  const spanPhone = document.createElement("span");
  spanPhone.textContent = `Phone nr: `;

  const webAddressEl = document.createElement("a");
  const spanWebsite = document.createElement("span");
  spanWebsite.textContent = `Website: `;
  const webAddress = postData.website;
  webAddressEl.textContent = webAddress;
  webAddressEl.href = webAddress;
  const workPlaceEl = document.createElement("h4");
  const workPlaceName = postData.company.name;
  workPlaceEl.textContent = `Work place: ${workPlaceName}`;
  const aboutPost = document.createElement("h4");
  aboutPost.textContent = "Post's";

  webDiv.append(spanPhone, phoneNumberEl, spanWebsite, webAddressEl);
  userAdressParagraph.append(userAdressLink);
  userInfo.append(aboutUser, userName, emailAdress, userAdressInfo, userAdressParagraph, webDiv, workPlaceEl, aboutPost);

  postData.posts.forEach((data) => {
    const userPostData = data.title;

    const ulTitle = document.createElement("ul");
    const liTitle = document.createElement("li");
    const titleElement = document.createElement("a");

    titleElement.textContent = `Post Title: ${userPostData}`;
    titleElement.href = "posts.html";
    liTitle.append(titleElement);
    ulTitle.append(liTitle);
    userInfo.append(ulTitle);
  });
  const aboutAlbum = document.createElement("h4");
  aboutAlbum.textContent = "Albums";
  userInfo.append(aboutAlbum);
  postData.albums.forEach((data) => {
    const userPostData = data.title;
    const ulTitle = document.createElement("ul");
    const liTitle = document.createElement("li");
    const titleElement = document.createElement("a");

    titleElement.textContent = `Album Title: ${userPostData}`;
    titleElement.href = "albums.html";
    liTitle.append(titleElement);
    ulTitle.append(liTitle);
    userInfo.append(ulTitle);
  });
}
userData();

// 6. Šiame puslapyje (user.html) turi būti atvaizduojama:
//   6.1. Visi vartotojo parašyti įrašai (posts). Kiekvienas post'as turi turėti nuorodą.
//   6.2. Visi vartotojo sukurti foto albumai. Kiekvienas albumas turės pavadinimą, kuris turi būti nuoroda.
