let API_KEY ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk2ZDg1MDhlNjEzODRlMjBhZTY1NzBkYzQ2N2U0YiIsInN1YiI6IjY0ZDhiNmU5MzcxMDk3MDBmZmI2M2Y3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mGHV5LcY2Igtl0uEXLehhKlma2EO4txUC9v4eJH2GhM";
let img =document.querySelector(".your_image")
let user_auth = JSON.parse(localStorage.getItem("user_auth")) || null;
if (user_auth) {
  fetch(`https://api.themoviedb.org/3/account/${user_auth?.account_id}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      img.src = `https://www.gravatar.com/avatar/${res.avatar.gravatar.hash}`;
      name.innerHTML = res.username;
    });
}
