import { fetchData, firstLetterUpperCase, getUrlParams } from "./function.js";
import { API_URL, POSTS_PER_PAGE } from "./config.js";
import header from "./nav.js";
async function getPosts() {
  const id = getUrlParams("user_id");

  let fetchUrl;

  if (id) {
    fetchUrl = `${API_URL}/posts?_limit=${POSTS_PER_PAGE}&_expand=user&_embed=comments&userId=${id}`;
  } else {
    fetchUrl = `${API_URL}/posts?_limit=${POSTS_PER_PAGE}&_expand=user&_embed=comments`;
  }
  const userListUl = document.querySelector("#user-list");

  userListUl.before(header());
  const postData = await fetchData(fetchUrl);

  postData.forEach(async (userPost) => {
    const userPostData = userPost.title;
    const userCommentsData = userPost.comments;
    const userAuthorData = userPost.user.name;
    const userAuthorID = userPost.userId;

    const liTitle = document.createElement("li");
    const titleElement = document.createElement("a");
    titleElement.classList.add("posts-element-title");

    titleElement.textContent = ` Title: ${firstLetterUpperCase(userPostData)} (${userCommentsData.length} comments)`;
    titleElement.href = "./post.html?post_id=" + userPost.id;

    const spanAuthor = document.createElement("span");

    const titleAuthor = document.createElement("a");
    titleAuthor.classList.add("posts-author-title");

    titleAuthor.textContent = `Author:` + userAuthorData;
    titleAuthor.href = "./user.html?user_id=" + userAuthorID;

    spanAuthor.append(titleAuthor);
    liTitle.append(spanAuthor);

    liTitle.append(titleElement);
    userListUl.append(liTitle);
  });
}
getPosts();
