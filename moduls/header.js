let headers = document.querySelector("header");

function Header() {
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

  header.classList.add("header");
  company.classList.add("company");
  flex_block.classList.add("flex_block");
  logo.classList.add("logo");
  socials.classList.add("socials");
  social_img_one.src = "public/twitter.png";
  social_img_two.src = "public/instagram.png";
  social_img_three.src = "public/facebook.png";
  social_img_four.src = "public/vk.png";
  singing_button.innerHTML = "Войти";
  logo_img.src = "public/logo.png";
  logo_img.classList.add("logo_img");
  nav.classList.add("nav");
  in_nav.classList.add("in_nav");

  a_one.href = "#";
  a_two.href = "#";
  a_three.href = "#";
  a_four.href = "#";
  a_five.href = "#";
  a_six.href = "#";
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
  search_img.src = "public/searchicon.png";
  singing_button.classList.add("singing_button");
  logo_kinoarea.src = "public/kinoarea.png";

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
  login.append(search_button, singing_button);
  search_button.append(search_img);
  nav.append(in_nav, a_one, a_two, a_three, a_four, a_five, a_six, a_seven);
}
Header();
