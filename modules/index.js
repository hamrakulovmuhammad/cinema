let poster_id = location.search.split("=").at(-1);
let body = document.querySelector("body");

fetch(`https://api.themoviedb.org/3/movie/${poster_id}`, {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk2ZDg1MDhlNjEzODRlMjBhZTY1NzBkYzQ2N2U0YiIsInN1YiI6IjY0ZDhiNmU5MzcxMDk3MDBmZmI2M2Y3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mGHV5LcY2Igtl0uEXLehhKlma2EO4txUC9v4eJH2GhM",
  },
})
  .then((res) => res.json())
  .then((res) => reloadA(res));

function reloadA(arr) {
  console.log(arr);
  let body = document.querySelector("body");
  console.log(
    (body.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${arr.backdrop_path})`)
  );
}
