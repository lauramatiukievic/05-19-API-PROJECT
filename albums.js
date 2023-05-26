// 8. Sukurti naują puslapį album.html ir jame atvaizduoti:

import { fetchData, firstLetterUpperCase, getUrlParams } from "./function.js";
import { API_URL } from "./config.js";
import header from "./nav.js";
async function albumName() {
  const id = getUrlParams("album_id");
  const contentDiv = document.querySelector("#container");
  const albumsDiv = document.querySelector("#albums");

  contentDiv.before(header());

  const dataAlbum = await fetchData(`${API_URL}/albums/${id}?_expand=user&_embed=photos`);
  const userAlbumData = dataAlbum.title;
  const userAlbumAuthor = dataAlbum.user.name;
  const titleData = document.createElement("h3");
  titleData.textContent = `Album title: ${firstLetterUpperCase(userAlbumData)} `;

  const userAuthor = document.createElement("a");
  userAuthor.textContent = `By: ${userAlbumAuthor}`;
  userAuthor.href = "./user.html?user_id=" + dataAlbum.user.id;

  const backToEl = document.createElement("a");
  backToEl.textContent = ` Back To Albums...`;
  backToEl.href = `./album.html`;

  dataAlbum.photos.forEach(async (photo) => {
    const userAlbumPhoto = photo.thumbnailUrl;
    const userAlbumImage = document.createElement("img");
    userAlbumImage.src = userAlbumPhoto;
    const userPhotoLink = document.createElement("a");
    userPhotoLink.href = photo.url;
    userPhotoLink.dataset.pswpHeight = "600";
    userPhotoLink.dataset.pswpWidth = "600";

    userPhotoLink.append(userAlbumImage);

    albumsDiv.append(userPhotoLink);
  });

  contentDiv.append(backToEl, titleData, userAuthor);
}

albumName();
