import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

let poster_id = location.search.split("=").at(-1);

fetch(`https://api.themoviedb.org/3/movie/${poster_id}`, {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk2ZDg1MDhlNjEzODRlMjBhZTY1NzBkYzQ2N2U0YiIsInN1YiI6IjY0ZDhiNmU5MzcxMDk3MDBmZmI2M2Y3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mGHV5LcY2Igtl0uEXLehhKlma2EO4txUC9v4eJH2GhM",
  },
})
  .then((res) => res.json())
  .then((res) => reloadA(res));

function reloadA(arr) {
  let reytings = 0;
  let statistic = document.querySelector(".statistic h2");
  let name = document.querySelector(".name");
  let body = document.querySelector("body");
  let movie = document.querySelector(".movie");
  let h1 = document.querySelector(".info h1");
  let h2 = document.querySelector(".info h2");
  let p = document.querySelector(".info p");
  let button = document.querySelector(".display_flex button");

  button.onmouseenter = () => {
    button.style.opacity = "1";
  };
  button.onmouseleave = () => {
    button.style.opacity = "0.4";
  };
  statistic.innerHTML = arr.title;

  name.innerHTML = arr.title;
  h1.innerHTML = arr.title;
  h2.innerHTML = arr.title;
  p.innerHTML = arr.overview;
  movie.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${arr.poster_path})`;
  body.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${arr.backdrop_path})`;

  fetch(
    `https://api.themoviedb.org/3/movie/${poster_id}now_playing?language=en-US&page=1`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk2ZDg1MDhlNjEzODRlMjBhZTY1NzBkYzQ2N2U0YiIsInN1YiI6IjY0ZDhiNmU5MzcxMDk3MDBmZmI2M2Y3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mGHV5LcY2Igtl0uEXLehhKlma2EO4txUC9v4eJH2GhM",
      },
    }
  )
    .then((res) => res.json())
    .then((res) => {
      reytings = res.vote_average;

      let h1 = document.querySelector(".myChart_one h1");
      h1.innerHTML = res.vote_average;
      let myChart_first = document.querySelector("#myChart_first");
      new Chart(myChart_first, {
        type: "doughnut",
        data: {
          labels: [""],
          datasets: [
            {
              label: "# of Votes",
              data: [reytings, 10],
              borderWidth: 0,
              backgroundColor: ["#4BCB36", "rgba(255, 255, 255, 0)"],
            },
          ],
        },
        options: {
          cutout: 30,
          cutoutPercentage: 1,
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    });
}
fetch(
  `https://api.themoviedb.org/3/movie/${poster_id}movie_id/credits?language=en-US`,
  {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk2ZDg1MDhlNjEzODRlMjBhZTY1NzBkYzQ2N2U0YiIsInN1YiI6IjY0ZDhiNmU5MzcxMDk3MDBmZmI2M2Y3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mGHV5LcY2Igtl0uEXLehhKlma2EO4txUC9v4eJH2GhM",
    },
  }
)
  .then((res) => res.json())
  .then((res) => reload(res.cast));

function reload(arr) {
  let ifream = document.querySelector("iframe");
  let display_flex = document.querySelector(".display_flexs");
  for (let i of arr.slice(0, 10)) {
    let box = document.createElement("div");
    let image_box = document.createElement("div");
    let h4 = document.createElement("h4");
    let p = document.createElement("p");
    let h5 = document.createElement("h5");

    box.classList.add("boxs");
    image_box.classList.add("image_box");
    image_box.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${i.profile_path})`;
    h4.innerHTML = i.name;
    p.innerHTML = i.original_name;
    h5.innerHTML = i.character;

    display_flex.append(box);
    box.append(image_box, h4, p, h5);
    if (i.profile_path === null) {
      image_box.style.backgroundImage = `url(/public/notfound.png)`;
    }
    image_box.onclick = () => {
      location.assign("/pages/actiors/index.html?id=" + i.id);
    };

    fetch(`https://api.themoviedb.org/3/movie/${poster_id}/videos`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk2ZDg1MDhlNjEzODRlMjBhZTY1NzBkYzQ2N2U0YiIsInN1YiI6IjY0ZDhiNmU5MzcxMDk3MDBmZmI2M2Y3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mGHV5LcY2Igtl0uEXLehhKlma2EO4txUC9v4eJH2GhM",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        let rnd = Math.floor(Math.random() * res.results.length);
        let selectMovie = res.results[rnd];
        ifream.src = `https://www.youtube.com/embed/${selectMovie.key}`;
      });
  }
}

fetch(`https://api.themoviedb.org/3/movie/${poster_id}movie_id/images`, {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk2ZDg1MDhlNjEzODRlMjBhZTY1NzBkYzQ2N2U0YiIsInN1YiI6IjY0ZDhiNmU5MzcxMDk3MDBmZmI2M2Y3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mGHV5LcY2Igtl0uEXLehhKlma2EO4txUC9v4eJH2GhM",
  },
})
  .then((res) => res.json())
  .then((res) => reload_Poster(res.posters));

function reload_Poster(arr) {
  let reload_cont = document.querySelector(".movie_posters");
  for (let i of arr.slice(0, 4)) {
    let reload = document.createElement("div");
    reload.classList.add("reload");

    reload.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${i.file_path} )`;

    reload_cont.append(reload);
  }
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

fetch(`https://api.themoviedb.org/3/movie/${poster_id}/images`, {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk2ZDg1MDhlNjEzODRlMjBhZTY1NzBkYzQ2N2U0YiIsInN1YiI6IjY0ZDhiNmU5MzcxMDk3MDBmZmI2M2Y3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mGHV5LcY2Igtl0uEXLehhKlma2EO4txUC9v4eJH2GhM",
  },
})
    .then((res) => res.json())
    .then((res) => {
        gridReload(res)
    })

function gridReload(arr) {
    let grid = document.querySelector('.display_grid')
    grid.innerHTML = ''

    const minBackdropCount = 6

    for (let i = 0; i < minBackdropCount; i++) {
        let grids = document.createElement('display_grid')
        grids.classList.add('grid')

  console.log(`url(https://image.tmdb.org/t/p/original${arr.backdrops[i].file_path})`);

        if (i < arr.backdrops.length && arr.backdrops[i].file_path) {
            grids.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${arr.backdrops[i].file_path})`
        } else {
            grids.style.backgroundImage = `url(/public/notfound.png)`
        }

        grid.append(grids)
    }
}
