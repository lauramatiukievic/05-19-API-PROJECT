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
  const postAlbum = await userAlbum.json();

  postAlbum.forEach(async (albums) => {
    const userAlbumData = albums.title;
    const userAlbumAuthor = albums.user.name;
    const userAlbumPhotos = albums.photos;
    const titleData = document.createElement("h3");

    titleData.textContent = `ALBUMS TITLE: ${userAlbumData} `;
    const userAuthor = document.createElement("span");
    userAuthor.textContent = `By: ${userAlbumAuthor}`;
    const userAlbumInfo = document.createElement("p");
    userAlbumInfo.textContent = `Photos: (${userAlbumPhotos.length})`;

    const userPhoto = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=1l&_expand=thumbnailUrl`);
    const photoData = await userPhoto.json();
    albumsDiv.append(titleData, userAuthor, userAlbumInfo);
    photoData.forEach(async (photos) => {
      const userAlbumPhoto = photos.thumbnailUrl;
      const userAlbumImage = document.createElement("img");
      userAlbumImage.src = userAlbumPhoto;
      const userPhotoLink = document.createElement("a");
      userPhotoLink.href = `https://via.placeholder.com/150/f66b97`;

      userPhotoLink.append(userAlbumImage);
      albumsDiv.append(userPhotoLink);
    });
  });

  console.log(postAlbum);
}

albumsName();
