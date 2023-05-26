// 3. Tokiu pačiu principu, kaip ir vartotojų bei įrašų puslapiams, sukurti puslapį albumams (albums.html). Prie kiekvieno albumo turi būti:
//   3.1. Parašytas jo pavadinimas.
//   3.2. Parašytas vartotojo, sukūrusio šį albumą, vardas.
//   3.3. Albume esančių nuotraukų skaičius.
//   3.4. Viena nuotrauka.
//   3.5. Šis elementas turi būti nuoroda

console.log("veikia");
import { fetchData } from "./function.js";
import { API_URL, ALBUMS_PER_PAGE } from "./config.js";
import header from "./nav.js";
async function albumsName() {
  const albumsDiv = document.querySelector("#albums");

  albumsDiv.before(header());

  // const albumId= getUrlParams('album_id')
  const dataAlbum = await fetchData(`${API_URL}/albums?_limit=${ALBUMS_PER_PAGE}&_expand=user&_embed=photos`);

  dataAlbum.forEach(async (albums) => {
    const albumContent = document.createElement("div");
    albumContent.classList.add("albumsDiv");
    const userAlbumData = albums.title;
    const userAlbumAuthor = albums.user.name;
    const userAlbumPhotos = albums.photos;
    const titleData = document.createElement("h3");
    titleData.textContent = `ALBUMS TITLE: ${userAlbumData} `;
    const userAuthor = document.createElement("span");
    userAuthor.textContent = `By: ${userAlbumAuthor}`;

    // userAuthor.href = `/user.html?user_id=` + albums.user.id;
    console.log(albums.user.id);
    const userAlbumInfo = document.createElement("p");
    userAlbumInfo.textContent = `Photos: (${userAlbumPhotos.length})`;

    const userAlbumPhoto = albums.photos[0].thumbnailUrl;
    console.log(userAlbumPhoto);
    const userAlbumImage = document.createElement("img");
    userAlbumImage.classList.add("albums");
    userAlbumImage.src = userAlbumPhoto;
    const userPhotoLink = document.createElement("a");
    userPhotoLink.classList.add("photo-link");
    userPhotoLink.href = `./albums.html?album_id=` + albums.id;
    userPhotoLink.append(userAlbumImage);

    albumContent.append(titleData, userAuthor, userAlbumInfo, userPhotoLink);
    albumsDiv.append(albumContent);
  });
}

albumsName();
