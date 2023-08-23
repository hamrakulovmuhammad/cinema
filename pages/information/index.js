import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

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
  let reytings = 0;
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
  console.log(movie);
  h1.innerHTML = arr.title;
  h2.innerHTML = arr.title;
  p.innerHTML = arr.overview;
  movie.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${arr.poster_path})`;
  body.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${arr.backdrop_path})`;

  fetch(`https://api.themoviedb.org/3/movie/${poster_id}now_playing?language=en-US&page=1`,{
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk2ZDg1MDhlNjEzODRlMjBhZTY1NzBkYzQ2N2U0YiIsInN1YiI6IjY0ZDhiNmU5MzcxMDk3MDBmZmI2M2Y3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mGHV5LcY2Igtl0uEXLehhKlma2EO4txUC9v4eJH2GhM",
      },
    }
  )
    .then((res) => res.json())
    .then(res =>  {
      reytings = res.vote_average;

      let h1 =document.querySelector(".myChart_one h1")
      h1.innerHTML = res.vote_average
      let myChart_first = document.querySelector("#myChart_first");
      console.log(myChart_first);
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
