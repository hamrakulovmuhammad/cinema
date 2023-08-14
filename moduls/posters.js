  let movies = document.querySelector(".movies");
function posters() {

  let block_for_flex = document.createElement("div");
  for (let i = 0; i < 8; i++) {
    let movie_block = document.createElement("div");
    let movie_bal = document.createElement("div");
    let movie_bal_p = document.createElement("p");
    let movies_h2 = document.createElement("h2");
    let movies_p = document.createElement("p");

    block_for_flex.classList.add("block_for_flex");
    movie_block.classList.add("movie_block");
    movie_bal.classList.add("movie_bal");
    movie_bal_p.innerHTML = "6.6";
    movies_h2.innerHTML = "Movie Title";
    movies_p.innerHTML = "Movie Description";

    movies.append(block_for_flex/* ,movies_h2,movies_p */);
    block_for_flex.append(movie_block);
    movie_block.append(movie_bal);
    movie_bal.append(movie_bal_p);
  }
}

posters();