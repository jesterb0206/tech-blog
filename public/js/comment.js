const commentForm = document.querySelector("#submit-comment");

const commentOnPost = async (event) => {
  event.preventDefault();

  const post_id = document.querySelector("#post-title").getAttribute("data-id");
  const comment = document.querySelector("#comment").value.trim();
  console.log(comment);
  if (comment) {
    const response = await fetch(`/api/comment`, {
      method: "POST",
      body: JSON.stringify({
        post_id,
        comment,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    document.location.reload();
    console.log(response);
    if (response.ok) {
      // document.location.reload();
    } else {
      // document.location.replace('/login');
    }
  }
};

commentForm.addEventListener("submit", commentOnPost);
