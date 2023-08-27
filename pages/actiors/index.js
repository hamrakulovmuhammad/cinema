let poster_id = location.search.split("=").at(-1);
console.log(poster_id);

fetch(`https://api.themoviedb.org/3/person/${poster_id}?language=en-US'`, {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk2ZDg1MDhlNjEzODRlMjBhZTY1NzBkYzQ2N2U0YiIsInN1YiI6IjY0ZDhiNmU5MzcxMDk3MDBmZmI2M2Y3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mGHV5LcY2Igtl0uEXLehhKlma2EO4txUC9v4eJH2GhM",
  },
})
  .then((res) => res.json())
  .then((res) => actiorInformation(res));

function actiorInformation(arr) {
  let actior_img = document.querySelector(".actior_img");
  console.log(arr);
  let h1 = document.querySelector(".actior_info h1");
  let h2 = document.querySelector(".actior_info h2");
  let coriera = document.querySelector(".coriera a");
  let height = document.querySelector(".height a");
  let birdhtdey = document.querySelector(".birdhtdey a");
  let place_birdhday = document.querySelector(".place_birdhday a");
  let ganr = document.querySelector(".ganr a");
  let all_film = document.querySelector(".all_film a");
  console.log(actior_img);

  h1.innerHTML = arr.name;
  h2.innerHTML = arr.name;
  actior_img.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${arr.profile_path})`;
  coriera.innerHTML = arr.popularity;
  height.innerHTML = "1.90";
  birdhtdey.innerHTML = arr.birthday;
  place_birdhday.innerHTML = arr.place_of_birth;
  ganr.innerHTML = arr.gender;
  all_film.innerHTML = arr.known_for_department;
  if (arr.profile_path === null) {
    actior_img.style.backgroundImage = `url(/public/posterss.png)`;
  }
}