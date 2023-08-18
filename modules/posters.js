let conf = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk2ZDg1MDhlNjEzODRlMjBhZTY1NzBkYzQ2N2U0YiIsInN1YiI6IjY0ZDhiNmU5MzcxMDk3MDBmZmI2M2Y3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mGHV5LcY2Igtl0uEXLehhKlma2EO4txUC9v4eJH2GhM",
  },
};
let showingAllPosters = false;

fetch(
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
  conf
)
  .then((res) => res.json())
  .then((res) => reload(res.results));

function reload(arr) {
  const toShow = showingAllPosters ? arr.length : 8;
  let movies = document.querySelector(".movies");
  movies.innerHTML = "";
  for (let item of arr.slice(0, toShow)) {
    let button = document.createElement("button");
    let block_for_flex = document.createElement("div");
    let movie_block = document.createElement("div");
    let movie_bal = document.createElement("div");
    let movie_bal_p = document.createElement("p");
    let movies_h2 = document.createElement("h2");
    let movies_p = document.createElement("p");

    button.style.cursor='pointer'
    button.innerHTML = "Карточка фильма";
    button.classList.add("hover_button");
    block_for_flex.classList.add("block_for_flex");
    movie_block.classList.add("movie_block");
    movie_bal.classList.add("movie_bal");
    movie_block.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${item.poster_path})`;
    movie_bal_p.innerHTML = item.vote_average;
    movies_h2.innerHTML = item.title;
    movies_p.innerHTML = item.title;
    movies.append(block_for_flex);
    block_for_flex.append(movie_block, movies_h2, movies_p);
    movie_block.append(movie_bal, button);
    movie_bal.append(movie_bal_p);


    button.onclick = () => {
      window.location.href = `https://www.themoviedb.org/movie/${item.id}?language=en-US`;
    }
    movie_block.onmouseenter = () => {
      movie_block.style.opacity = `0.7`;
      button.style.display = "block";
    };

    setTimeout(() => {
      movie_block.onmouseleave = () => {
        movie_block.style.opacity = `1`;

        button.style.display = "none";
      };
    }, 0.4);
    const showPosters = document.querySelector(".show_more button");
    showPosters.innerHTML = showingAllPosters ? "Скрыть" : "Показать все";
    showPosters.onclick = () => {
      // showPosters.style.scale = '0.8'
      showingAllPosters = !showingAllPosters;
      reload(arr);
    }
  }
}

fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", conf)
  .then((res) => res.json())
  .then((res) => Slider(res.results));

function Slider(arr) {
  let movie_sroll = document.querySelector(".movie_sroll");
  for (let i of arr) {
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
    p.innerHTML = i.title;

    movie_sroll.append(on_block);
    on_block.append(block, h2, p);
    block.append(block_for_bals);
    block_for_bals.append(block_for_bals_p);
  }
}
Slider();

