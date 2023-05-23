// 3. Tokiu pačiu principu, kaip ir vartotojų bei įrašų puslapiams, sukurti puslapį albumams (albums.html). Prie kiekvieno albumo turi būti:
//   3.1. Parašytas jo pavadinimas.
//   3.2. Parašytas vartotojo, sukūrusio šį albumą, vardas.
//   3.3. Albume esančių nuotraukų skaičius.
//   3.4. Viena nuotrauka.
//   3.5. Šis elementas turi būti nuoroda

console.log("veikia");

async function albumsName() {
  const albumsDiv = document.querySelector("#albums");

  const userAlbum = await fetch(`https://jsonplaceholder.typicode.com/albums?_limit=15&_embed=photos&_expand=user`);
  const dataAlbum = await userAlbum.json();
  console.log(dataAlbum);

  dataAlbum.forEach(async (albums) => {
    const userAlbumData = albums.title;
    const userAlbumAuthor = albums.user.name;
    const userAlbumPhotos = albums.photos;
    const titleData = document.createElement("h3");
    titleData.textContent = `ALBUMS TITLE: ${userAlbumData} `;
    const userAuthor = document.createElement("span");
    userAuthor.textContent = `By: ${userAlbumAuthor}`;
    const userAlbumInfo = document.createElement("p");
    userAlbumInfo.textContent = `Photos: (${userAlbumPhotos.length})`;

    const userAlbumPhoto = albums.photos[0].thumbnailUrl;
    console.log(userAlbumPhoto);
    const userAlbumImage = document.createElement("img");
    userAlbumImage.src = userAlbumPhoto;
    const userPhotoLink = document.createElement("a");
    userPhotoLink.href = userAlbumImage.src;
    userPhotoLink.append(userAlbumImage);

    albumsDiv.append(titleData, userAuthor, userAlbumInfo, userPhotoLink);
  });
}

albumsName();
