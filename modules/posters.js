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
  let background_image = document.querySelector(".backgound_image");
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

    button.style.cursor = "pointer";
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
    movie_block.onmouseenter = () => {
      button.style.display = "block";
      background_image.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`;
    };

    if (movie_bal_p.innerHTML <= 5) {
      movie_bal.style.background = "red";
    }
    button.onclick = () => {
      window.location.href = `../pages/information/index.html?id=` + item.id;
    };
    setTimeout(() => {
      movie_block.onmouseleave = () => {
        button.style.display = "none";
      };
    }, 0.4);
    const showPosters = document.querySelector(".show_more button");
    showPosters.innerHTML = showingAllPosters ? "Скрыть" : "Показать все";
    showPosters.onclick = () => {
      showPosters.style.scale = "0.8";
      showingAllPosters = !showingAllPosters;
      reload(arr);
    };
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
      block_for_bals.style.background = "red";
    }

    block.onmouseenter = () => {
      button.style.display = "block";
    };
    button.onclick = () => {
      window.location.href = `../pages/information/index.html?id=` + i.id;
    };
    block.onmouseleave = () => {
      button.style.display = "none";
    };
    if (i.poster_path === null) {
      block.style.backgroundImage = `url(/public/posterss.png)`;
    }
  }
}
fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", conf)
  .then((res) => res.json())
  .then((res) => reloadUpcoming(res.results));

function reloadUpcoming(arr) {
  console.log(arr);
  let expected_novelties = document.querySelector(".expected_novelties");
  for (let i of arr) {
    let expected_movies = document.createElement("div");
    let expected_block = document.createElement("div");
    let expected_texts = document.createElement("div");
    let expected_texts_h2 = document.createElement("h2");
    let expected_texts_p = document.createElement("p");

    expected_movies.classList.add("expected_movies");
    expected_block.classList.add("expected_block");
    expected_texts.classList.add("expected_texts");
    expected_texts_h2.innerHTML = i.original_title;
    expected_texts_p.innerHTML = i.release_date;
    expected_block.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${i.backdrop_path})`;

    expected_novelties.append(expected_movies);
    expected_movies.append(expected_block, expected_texts);
    expected_texts.append(expected_texts_h2, expected_texts_p);
  }
}

fetch("https://api.themoviedb.org/3/person/popular?language=en-US&page=1", conf)
  .then((res) => res.json())
  .then((res) => persons(res.results));

function persons(arr) {
  let place_flex_conetner = document.querySelector(".place_flex_conetner");
  for (let i of arr.slice(0, 2)) {
    let img_place = document.createElement("div");
    let place_title = document.createElement("div");
    let place_cont_avtor = document.createElement("div");
    let h4 = document.createElement("h4");
    let pig = document.createElement("p");
    let p = document.createElement("p");

    img_place.classList.add("img_place");
    place_title.classList.add("place_title");
    place_cont_avtor.classList.add("place_cont_avtor");
    h4.classList.add("h4");
    pig.classList.add("pig");
    p.classList.add("p");

    img_place.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${i.profile_path})`;
    h4.innerHTML = i.name;
    pig.innerHTML = "Популярность  " + i.popularity;

    p.innerHTML = "57 лет";

    place_flex_conetner.prepend(img_place);
    img_place.prepend(place_title, place_cont_avtor);
    place_cont_avtor.prepend(h4, pig, p);
    img_place.onclick = () => {
      location.assign("/pages/actiors/index.html?id=" + i.id);
    };
  }
}

fetch("https://api.themoviedb.org/3/person/popular?language=en-US&page=1", conf)
  .then((res) => res.json())
  .then((res) => table_persons(res.results));

function table_persons(arr) {
  let place_table_box = document.querySelector(".place_table_box");

  for (let i of arr) {
    let three_place = document.createElement("div");
    let titles = document.createElement("div");
    let h2_table = document.createElement("h2");
    let p_doc = document.createElement("p");
    let p_years = document.createElement("p");
    let place_index = document.createElement("div");
    let hr = document.createElement("hr");

    three_place.classList.add("three_place");
    titles.classList.add("titles");
    h2_table.classList.add("h2");
    p_doc.classList.add("doc");
    p_years.classList.add("p_names");
    place_index.classList.add("place_index");
    hr.classList.add("hr");

    h2_table.innerHTML = i.name;
    p_doc.innerHTML = i.name;
    p_years.innerHTML = "Популярность - " + i.popularity;

    three_place.style.cursor = "pointer";
    three_place.onclick = () => {
      location.assign("/pages/actiors/index.html?id=" + i.id);
    };
    place_table_box.append(three_place, hr);
    three_place.append(titles, place_index);
    titles.append(h2_table, p_doc, p_years);

    for (let it = 0; it < arr.length; it++) {
      place_index.innerHTML = it;
    }
  }
}

fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', conf)
    .then((res) => res.json())
    .then((res) => news_reload(res.results))



function news_reload(arr) {
    let rigt_img_new = document.querySelector('.rigt_img_new')
    let background_images = document.querySelector('.background_images')

    for (let i of arr) {
        background_images.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${i.backdrop_path})`
        let bac_img = document.createElement('div')
        let date = document.createElement('div')
        let title_p = document.createElement('div')
        let hovered_new = document.createElement('div')
        let ho = document.createElement('div')

        bac_img.classList.add('bac_img')
        date.classList.add("date")
        title_p.classList.add('title_p')
        hovered_new.classList.add('hovered_new')
        bac_img.style.backgroundImage = ` url(https://image.tmdb.org/t/p/original${i.backdrop_path})`
        date.innerHTML = "15 Апр 2020"
        title_p.innerHTML = "Как изменили Соника с последнего анонса"
        rigt_img_new.append(ho)
        ho.append(bac_img, hovered_new)
        bac_img.append(date, title_p)
        bac_img.onmouseenter = () => {
            hovered_new.classList.add('hovered_new')
            console.log('move');
        }
        setTimeout(() => {
            bac_img.onmouseleave = () => {
                hovered_new.classList.remove('hovered_new')
            }
        }, 0);

    }
}

news_reload()