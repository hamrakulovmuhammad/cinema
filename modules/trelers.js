let ifream = document.querySelector("iframe");
fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk2ZDg1MDhlNjEzODRlMjBhZTY1NzBkYzQ2N2U0YiIsInN1YiI6IjY0ZDhiNmU5MzcxMDk3MDBmZmI2M2Y3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mGHV5LcY2Igtl0uEXLehhKlma2EO4txUC9v4eJH2GhM",
  },
})
  .then((res) => res.json())
  //   .then((res) => console.log(res))
  .then((res) => trelerMovie(res.results));

function trelerMovie(arr) {
  let statistic_h2 = document.querySelector(".statistic h2");

  let trelers = document.querySelector(".trelers");
  for (let i of arr) {
    let treler = document.createElement("div");
    let trelers_video = document.createElement("div");
    let img = document.createElement("img");
    let h2 = document.createElement("h2");

    statistic_h2.innerHTML = i.title;

    console.log(statistic_h2);
    treler.classList.add("treler");
    trelers_video.classList.add("trelers_vide");
    trelers_video.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${i.backdrop_path})`;
    img.src = "public/playicon.png";
    img.alt = "";
    h2.textContent = i.title;

    trelers.append(treler);
    treler.append(trelers_video, h2);
    trelers_video.append(img);

    trelers_video.onmouseenter = () => {
      trelers_video.style.opacity = `0.2`;
    };

    setTimeout(() => {
      trelers_video.onmouseleave = () => {
        trelers_video.style.opacity = `1`;
      };
    }, 0.4);

    fetch(`https://api.themoviedb.org/3/movie/${i.id}/videos`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk2ZDg1MDhlNjEzODRlMjBhZTY1NzBkYzQ2N2U0YiIsInN1YiI6IjY0ZDhiNmU5MzcxMDk3MDBmZmI2M2Y3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mGHV5LcY2Igtl0uEXLehhKlma2EO4txUC9v4eJH2GhM",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        let rnd = Math.floor(Math.random() * res.results.length);
        let selectMovie = res.results[rnd];
        img.onclick = () => {
          ifream.src = `https://www.youtube.com/embed/${selectMovie.key}`;
          statistic_h2.innerHTML = i.title;
        };
        trelers_video.onclick = () => {
          ifream.src = `https://www.youtube.com/embed/${selectMovie.key}`;
          statistic_h2.innerHTML = i.title;
        };
      });
  }
}
trelerMovie();
