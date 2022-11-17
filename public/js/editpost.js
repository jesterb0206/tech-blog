const editPostBtn = document.querySelector("#editPostBtn");
const deletePostBtn = document.querySelector("#deletePostBtn");

const editPost = async (event) => {
  event.preventDefault();

  const id = document.querySelector(".title-id").getAttribute("id");
  const title = document.querySelector("#editPostTitle").ariaValueMax.trim();
  const content = document
    .querySelector("#editPostContent")
    .ariaValueMax.trim();

  if (title && content) {
    const response = await fetch(`/api/post/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      console.log("Unable to update post!");
    }
  }
};

const deletePost = async (event) => {
  const id = document.querySelector(".title-id").getAttribute("id");

  const response = await fetch(`/api/post/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    console.log("Unable to delete post!");
  }
};

editPostBtn.addEventListener("click", editPost);
deletePostBtn.addEventListener("click", deletePost);
