async function getPosts() {
  const userListUl = document.querySelector("#user-list");
  const userPost = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=15&_expand=user&_embed=comments`);
  const postData = await userPost.json();

  postData.forEach(async (userPost) => {
    const userPostData = userPost.title;
    const userCommentsData = userPost.comments;
    const userAuthorData = userPost.user.name;

    const liTitle = document.createElement("li");
    const titleElement = document.createElement("a");

    titleElement.textContent = ` Title ${userPostData} (${userCommentsData.length} comments)`;
    titleElement.href = "post.html";

    const spanAuthor = document.createElement("span");
    const titleAuthor = document.createElement("a");

    titleAuthor.textContent = `Author:` + userAuthorData;
    titleAuthor.href = "user.html";

    spanAuthor.append(titleAuthor);
    liTitle.append(spanAuthor);

    liTitle.append(titleElement);
    userListUl.append(liTitle);
  });
}
getPosts();
