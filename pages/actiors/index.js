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
  let name = document.querySelector(".name")
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

name.innerHTML=arr.name
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
fetch(`https://api.themoviedb.org/3/person/${poster_id}/images`,  {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk2ZDg1MDhlNjEzODRlMjBhZTY1NzBkYzQ2N2U0YiIsInN1YiI6IjY0ZDhiNmU5MzcxMDk3MDBmZmI2M2Y3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mGHV5LcY2Igtl0uEXLehhKlma2EO4txUC9v4eJH2GhM",
  },

})
  .then((res) => res.json())
  .then((res) => {
    gridReload(res);
  });

function gridReload(arr) {
  let grid = document.querySelector(".display_grid");
  grid.innerHTML = "";

  const minBackdropCount = 6;

  for (let i = 0; i < minBackdropCount; i++) {
    let grids = document.createElement("div");
    grids.classList.add("grid");


    if (i < arr.profiles.length && arr.profiles[i].file_path) {
      grids.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${arr.profiles[i].file_path})`;
    } else {
      grids.style.backgroundImage = `url(/public/notfound.png)`;
    }

    if (i.file_path === null) {
      grids.style.backgroundImage = `url(/public/notfound.png)`;
    }

    grid.append(grids);
  }
}


fetch(`https://api.themoviedb.org/3/person/${poster_id}/movie_credits?language=en-US`,{
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk2ZDg1MDhlNjEzODRlMjBhZTY1NzBkYzQ2N2U0YiIsInN1YiI6IjY0ZDhiNmU5MzcxMDk3MDBmZmI2M2Y3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mGHV5LcY2Igtl0uEXLehhKlma2EO4txUC9v4eJH2GhM",
  },
})
  .then((res) => res.json())
  .then((res) => Slider(res.cast));

function Slider(arr) {
  console.log(arr);
  let movie_sroll = document.querySelector(".movie_sroll");
  for (let i of arr) {
    let on_block = document.createElement("div");
    let block = document.createElement("div");
    let block_for_bals = document.createElement("div");
    let block_for_bals_p = document.createElement("p");
    let button = document.createElement("button");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");

    button.style.cursor = "pointer";
    button.innerHTML = "Карточка фильма";
    on_block.classList.add("on_block");
    block.classList.add("block");
    block.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${i.poster_path})`;
    block_for_bals.classList.add("block_for_bals");
    block_for_bals_p.innerHTML = i.vote_average;
    h2.innerHTML = i.title;
    p.innerHTML = i.title;

    movie_sroll.append(on_block);
    on_block.append(block, h2, p);
    block.append(block_for_bals, button);
    block_for_bals.append(block_for_bals_p);

    if (block_for_bals_p.innerHTML <= 5) {
      block_for_bals.style.background = "red"
    }

    block.onmouseenter = () => {
      button.style.display = "block";
    };
    button.onclick = () => {
      window.location.href = `/pages/information/index.html?id=` + i.id;
    };
    block.onmouseleave = () => {
      button.style.display = "none";
    };
    if (i.poster_path === null) {
      block.style.backgroundImage = `url(/public/posterss.png)`;
    }
  }
}