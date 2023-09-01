let API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk2ZDg1MDhlNjEzODRlMjBhZTY1NzBkYzQ2N2U0YiIsInN1YiI6IjY0ZDhiNmU5MzcxMDk3MDBmZmI2M2Y3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mGHV5LcY2Igtl0uEXLehhKlma2EO4txUC9v4eJH2GhM";
let img = document.querySelector(".your_image");
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

let pages = document.querySelectorAll(".pages");
let pages_btn = document.querySelectorAll("[data-pages]");
console.log(pages_btn);
pages_btn.forEach((btn) => {
  btn.onclick = () => {
    let id = btn.getAttribute("data-pages");
    pages.forEach((page) => {
      if (id === page.id) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });
  };
});

let cinema = JSON.parse(localStorage.getItem("cinema")) || [];
console.log(cinema);

fetch(`https://api.themoviedb.org/3/person/${cinema}?language=en-US'`, {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk2ZDg1MDhlNjEzODRlMjBhZTY1NzBkYzQ2N2U0YiIsInN1YiI6IjY0ZDhiNmU5MzcxMDk3MDBmZmI2M2Y3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mGHV5LcY2Igtl0uEXLehhKlma2EO4txUC9v4eJH2GhM",
  },
})
  .then((res) => res.json())
  .then((res) => console.log(res));

cinemas(cinema);

function cinemas(arr2) {
  console.log(arr2);
  for (let item of arr2) {
    let left_img = document.querySelector(".img");
    let h2 = document.querySelector(".text h2");
    let h3 = document.querySelector(".text h3");
    let p = document.querySelector(".text p");

    left_img.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`;
    h2.innerHTML = item.title;
    h3.innerHTML = item.original_title;
    p.innerHTML = item.title;
  }
}

