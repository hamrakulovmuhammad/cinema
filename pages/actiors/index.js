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
}

fetch(
  `  https://api.themoviedb.org/3/movie/${poster_id}movie_id/similar?language=en-US&page=1`,
  {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk2ZDg1MDhlNjEzODRlMjBhZTY1NzBkYzQ2N2U0YiIsInN1YiI6IjY0ZDhiNmU5MzcxMDk3MDBmZmI2M2Y3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mGHV5LcY2Igtl0uEXLehhKlma2EO4txUC9v4eJH2GhM",
    },
  }
)
  .then((res) => res.json())
  .then((res) => Slider(res.results));

function Slider(arr) {
  console.log(arr);
  let movie_sroll = document.querySelector(".similar_filfm_poster");
  for (let i of arr.slice(0, 4)) {
    let on_block = document.createElement("div");
    let block = document.createElement("div");
    let block_for_bals = document.createElement("div");
    let block_for_bals_p = document.createElement("p");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");

    on_block.classList.add("on_block");
    block.classList.add("block");
    block.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${i.poster_path})`;
    block_for_bals.classList.add("block_for_bals");
    block_for_bals_p.innerHTML = i.vote_average;
    h2.innerHTML = i.title;

    movie_sroll.append(on_block);
    on_block.append(block, h2, p);
    block.append(block_for_bals);
    block_for_bals.append(block_for_bals_p);

    fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk2ZDg1MDhlNjEzODRlMjBhZTY1NzBkYzQ2N2U0YiIsInN1YiI6IjY0ZDhiNmU5MzcxMDk3MDBmZmI2M2Y3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mGHV5LcY2Igtl0uEXLehhKlma2EO4txUC9v4eJH2GhM",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        let info_ganr_tx = ``;
        for (const el of i.genre_ids) {
          const genres = res.genres.filter((obj) => obj.id === el);
          info_ganr_tx = info_ganr_tx + genres[0].name + `, `;
        }
        p.innerHTML = info_ganr_tx.slice(0, -2);
      });
  }
}
