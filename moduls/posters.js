fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk2ZDg1MDhlNjEzODRlMjBhZTY1NzBkYzQ2N2U0YiIsInN1YiI6IjY0ZDhiNmU5MzcxMDk3MDBmZmI2M2Y3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mGHV5LcY2Igtl0uEXLehhKlma2EO4txUC9v4eJH2GhM",
  },
})
  .then((res) => res.json())
  .then((res) => reload(res.results));
// .then((res)=> console.log(res))
function reload(arr) {
  let movies = document.querySelector(".movies");
  movies.innerHTML = "";
  for (let item of arr) {
    let button = document.createElement("button");
    let block_for_flex = document.createElement("div");
    let movie_block = document.createElement("div");
    let movie_bal = document.createElement("div");
    let movie_bal_p = document.createElement("p");
    let movies_h2 = document.createElement("h2");
    let movies_p = document.createElement("p");

    button.innerHTML = "Карточка фильма";
    button.classList.add("hover_button");
    block_for_flex.classList.add("block_for_flex");
    movie_block.classList.add("movie_block");
    movie_bal.classList.add("movie_bal");
    movie_block.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${item.poster_path})`;
    movie_bal_p.innerHTML = item.vote_average;
    movies_h2.innerHTML = item.title;
    movies_p.innerHTML = "Movie Description";
    movies.append(block_for_flex);
    block_for_flex.append(movie_block, movies_h2, movies_p);
    movie_block.append(movie_bal, button);
    movie_bal.append(movie_bal_p);
  }

  movie_block.onmouseenter = () => {
    button.style.display = "block";
  };

  setTimeout(() => {
    movie_block.onmouseleave = () => {
      button.style.display = "none";
    };
  }, 0.4);
}

function trelerMovie() {
  let trelers = document.querySelector(".trelers");
  for (let i = 0; i < 10; i++) {
    let treler = document.createElement("div");
    let trelers_video = document.createElement("div");
    let img = document.createElement("img");
    let h2 = document.createElement("h2");

    treler.classList.add("treler");
    trelers_video.classList.add("trelers_vide");
    img.src = "public/playicon.png";
    img.alt = "";
    h2.textContent = "good job";

    trelers.append(treler);
    treler.append(trelers_video, h2);
    trelers_video.append(img);
  }
}
trelerMovie();

// function Slider() {
//   let movie_sroll = document.querySelector(".movie_sroll");
//   for (let i = 0; i < 10; i++) {
//     let display_flex = document.createElement("div");
//     let block = document.createElement("div");
//     console.log(block);
//     let block_of_balls = document.createElement("div");
//     let block_of_balls_p = document.createElement("p");
//     let h2 = document.createElement("h2");
//     let p = document.createElement("p");

//     display_flex.classList.add("display_flex");
//     block.classList.add("block");
//     block_of_balls.classList.add("block_of_balls");
//     block_of_balls_p.classList.add("block_of_balls_p");

//     movie_sroll.append(display_flex);
//     display_flex.append(block);
//     block.append(block_of_balls, h2, p);
//     block_of_balls.append(block_of_balls_p);
//   }
// }
// Slider();
