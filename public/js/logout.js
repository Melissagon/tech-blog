const logoutHandler = async function() {
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Uh Oh! Something went wrong. Try again!');
  }
};

document
.querySelector('#logout-link')
.addEventListener('click', logoutHandler);
