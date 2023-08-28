let headers = document.querySelector("header");

function Header() {
  let modal = document.querySelector(".modal_bg");
  let header = document.createElement("div");
  let company = document.createElement("div");
  let flex_block = document.createElement("div");
  let logo = document.createElement("div");
  let logo_img = document.createElement("img");
  let logo_kinoarea = document.createElement("img");
  let socials = document.createElement("div");
  let social_img_one = document.createElement("img");
  let social_img_two = document.createElement("img");
  let social_img_three = document.createElement("img");
  let social_img_four = document.createElement("img");
  let nav = document.createElement("div");
  let in_nav = document.createElement("nav");
  let a_one = document.createElement("a");
  let a_two = document.createElement("a");
  let a_three = document.createElement("a");
  let a_four = document.createElement("a");
  let a_five = document.createElement("a");
  let a_six = document.createElement("a");
  let a_seven = document.createElement("a");
  let login = document.createElement("div");
  let search_button = document.createElement("button");
  let search_img = document.createElement("img");
  let singing_button = document.createElement("button");
  let approve = document.createElement("button");
  let come = document.createElement("button");
  let exit = document.createElement("button");


  exit.classList.add("singing_button");
  approve.classList.add("singing_button");
  come.classList.add("singing_button");

  exit.innerHTML="exit"
  approve.innerHTML = "approve";
  come.innerHTML = "Войти";
  come.onclick = () => {
    window.location.assign(`/pages/me/index.html`);
  };
  header.classList.add("header");
  company.classList.add("company");
  flex_block.classList.add("flex_block");
  logo.classList.add("logo");
  socials.classList.add("socials");
  social_img_one.src = "/public/twitter.svg";
  social_img_two.src = "/public/instagram.svg";
  social_img_three.src = "/public/facebook.svg";
  social_img_four.src = "/public/vkontakte.svg";
  singing_button.innerHTML = "Login";
  logo_img.src = "/public/logo.png";
  logo_img.style.cursor = "pointer";
  logo_img.classList.add("logo_img");
  nav.classList.add("nav");
  in_nav.classList.add("in_nav");

  a_one.href = "#";
  a_two.href = "#";
  a_three.href = "#";
  a_four.href = "#";
  a_five.href = "#";
  a_six.href = "/pages/collections/index.html";
  a_seven.href = "#";

  a_one.innerHTML = "Афиша";
  a_two.innerHTML = "Медиа";
  a_three.innerHTML = "Фильмы";
  a_four.innerHTML = "Актёры";
  a_five.innerHTML = "Новости";
  a_six.innerHTML = "Подборки";
  a_seven.innerHTML = "Категории";
  login.classList.add("login");
  search_button.classList.add("search_button");
  search_img.src = "/public/searchicon.png";
  singing_button.classList.add("singing_button");
  logo_kinoarea.src = "/public/kinoarea.png";
  logo_kinoarea.style.cursor = "pointer";

  headers?.append(header);
  header.append(company, nav, login);
  company.append(flex_block, socials);
  flex_block.append(logo_img, logo_kinoarea);
  socials.append(
    social_img_one,
    social_img_two,
    social_img_three,
    social_img_four
  );
  logo_kinoarea.onclick = () => {
    window.location.href = "http://localhost:5173/";
  };
  login.append(search_button, singing_button, approve, come,exit);
  search_button.append(search_img);
  nav.append(in_nav, a_one, a_two, a_three, a_four, a_five, a_six, a_seven);
  logo_img.onclick = () => {
    window.location.href = "http://localhost:5173/";
  };

  search_img.onclick = () => {
    modal.style.display = "block";
  };

  const API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk2ZDg1MDhlNjEzODRlMjBhZTY1NzBkYzQ2N2U0YiIsInN1YiI6IjY0ZDhiNmU5MzcxMDk3MDBmZmI2M2Y3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mGHV5LcY2Igtl0uEXLehhKlma2EO4txUC9v4eJH2GhM";

  let userIMG = document.querySelector(".your_image");
  let userFullName = document.querySelector(".your_info h1");
  let reqToken = "";

  singing_button.onclick = () => {
    fetch("https://api.themoviedb.org/4/auth/request_token", {
      method: "POST",
      dataType: "json",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      start_time: new Date().getTime(),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          reqToken = res.request_token;
          window.open(
            `https://www.themoviedb.org/auth/access?request_token=${res.request_token}`
          );
        }
      });
  };
  approve.onclick = () => {
    fetch(`https://api.themoviedb.org/4/auth/access_token`, {
      method: "POST",
      dataType: "json",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        request_token: reqToken,
      }),
      start_time: new Date().getTime(),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          localStorage.setItem("user_auth", JSON.stringify(res));
          location.reload();
        }
      });
  };
  let user_auth = JSON.parse(localStorage.getItem("user_auth")) || null;

  if (user_auth) {
    fetch(`https://api.themoviedb.org/3/account/${user_auth?.account_id}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        userIMG.style.backgroundImage = `url(https://www.gravatar.com/avatar/${res.avatar.gravatar.hash})`;
        userFullName.innerHTML = res.username;
      });
  }
  exit.onclick = () => {
    localStorage.removeItem('user_auth')
    location.reload()
}
}
Header();
