const viewPost = async (event) => {
  event.stopPropagation();

  const title = document.querySelector("#post-title");

  const response = await fetch(`/${title}`, {
    method: "GET",
    body: JSON.stringify({ title }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/viewpost");
  } else {
    console.log("Unable to log in!");
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
