console.log("veikia");
// 7. Sukurti naują puslapį post.html ir jame atvaizduoti:
import { fetchData, firstLetterUpperCase, getUrlParams } from "./function.js";
import { API_URL } from "./config.js";
async function singlePost() {
  const id = getUrlParams("post_id");
  const postContainer = document.querySelector("#container");

  const postData = await fetchData(`${API_URL}/posts/${id}?_expand=user&_embed=comments`);

  const postTitleEl = document.createElement("h2");
  postTitleEl.classList.add("postTitleEl");
  postTitleEl.textContent = firstLetterUpperCase(postData.title);
  const nameEl = document.createElement("a");

  nameEl.textContent = postData.user.name;
  nameEl.href = `./user.html`;

  const nextPostsElements = document.createElement("a");
  nextPostsElements.textContent = `Next author pots's`;
  nextPostsElements.href = `./posts.html?user_id=` + postData.user.id;
  const backToPosts = document.createElement("a");
  backToPosts.textContent = `Back to pots's`;
  backToPosts.href = `./posts.html`;

  const postPEl = document.createElement("p");
  postPEl.textContent = postData.body;
  const postCommentDiv = document.createElement("div");
  postData.comments.forEach((data) => {
    const postCommentName = document.createElement("h3");
    postCommentName.textContent = `Title: ` + firstLetterUpperCase(data.name);

    const postCommentsBody = document.createElement("p");
    postCommentsBody.textContent = firstLetterUpperCase(data.body);

    const postsCommentsEmail = document.createElement("a");
    postsCommentsEmail.textContent = data.email;
    postsCommentsEmail.href = "mailto: " + data.email;
    postCommentDiv.append(postCommentName, postCommentsBody, postsCommentsEmail);
  });

  postContainer.append(backToPosts, postTitleEl, nameEl, postPEl, postCommentDiv, nextPostsElements);
}
singlePost();
