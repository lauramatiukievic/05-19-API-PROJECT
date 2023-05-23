console.log("veikia");
// 7. Sukurti naują puslapį post.html ir jame atvaizduoti:
//   7.1. Įrašo (post) pavadinimą.
//   7.2. Autoriaus vardą. Paspaudus ant autoriaus vardo, turėtų atidaryti autoriaus puslapį.
//   7.3. Įrašo turinį.
//   7.4. Įrašo komentarus. Kiekvienas komentaras turi:
//     7.4.1. Komentaro pavadinimą.
//     7.4.2. Komentaro turinį - pastraipą.
//     7.4.3. Komentarą parašiusio asmens el. pašto adresą.
//   7.5. Nuoroda „Kiti autoriaus įrašai", kurią paspaudus bus nukreipiama į puslapį posts.html. Jame vėliau bus atvaizduojami visi šio vartotojo įrašai.

async function singlePost() {
  const postContainer = document.querySelector("#container");

  const postInfo = await fetch(`https://jsonplaceholder.typicode.com/posts/1/?_expand=user&_embed=comments`);
  const postData = await postInfo.json();
  console.log(postData);

  const postTitleEl = document.createElement("h2");
  postTitleEl.classList.add("postTitleEl");
  postTitleEl.textContent = postData.title;
  const nameEl = document.createElement("a");

  nameEl.textContent = postData.user.name;
  nameEl.href = `user.html`;

  const nextPostsElements = document.createElement("a");
  nextPostsElements.textContent = `Next author pots's`;
  nextPostsElements.href = `posts.html`;

  const postPEl = document.createElement("p");
  postPEl.textContent = postData.body;
  const postCommentDiv = document.createElement("div");
  postData.comments.forEach(async (data) => {
    const postCommentName = document.createElement("h3");
    postCommentName.textContent = `Title: ` + data.name;

    const postCommentsBody = document.createElement("p");
    postCommentsBody.textContent = data.body;

    const postsCommentsEmail = document.createElement("a");
    postsCommentsEmail.textContent = data.email;
    postsCommentsEmail.href = "mailto: " + data.email;
    postCommentDiv.append(postCommentName, postCommentsBody, postsCommentsEmail);
  });

  postContainer.append(postTitleEl, nameEl, postPEl, postCommentDiv, nextPostsElements);
}
singlePost();
