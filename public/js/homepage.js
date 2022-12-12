const title = document.querySelector('#post-title');

const viewPost = async (event) => {
  event.stopPropagation();
  const id = event.target.getAttribute('data-id');

  const response = await fetch(`/post/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/viewpost');
  } else {
    console.log('Unable to view post!');
  }
};

title.addEventListener('click', viewPost);
