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


