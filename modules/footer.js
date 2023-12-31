function footer() {
  let footer = document.querySelector(".footer");
  let logo = document.createElement("div");
  let container = document.createElement("div");
  let logoImg = document.createElement("img");
  let footerBlock = document.createElement("div");
  let footerInfo = document.createElement("div");
  let footerInfoHeading = document.createElement("h1");
  let footerInfoText = document.createElement("p");
  let footerForm = document.createElement("form");
  let emailInput = document.createElement("input");
  let subscribeButton = document.createElement("button");
  let agreeDiv = document.createElement("div");
  let agreeCheckbox = document.createElement("input");
  let agreeText = document.createElement("div");
  let agreeTextInner = document.createElement("div");
  let privacyPolicyLink = document.createElement("a");
  let social_media = document.createElement("div");
  let hrefs = document.createElement("div");
  let one_img = document.createElement("img");
  let two_img = document.createElement("img");
  let theree_img = document.createElement("img");
  let four_img = document.createElement("img");
  let five_img = document.createElement("img");
  let one_a = document.createElement("a");
  let two_a = document.createElement("a");
  let theree_a = document.createElement("a");
  let four_a = document.createElement("a");
  let five_a = document.createElement("a");
  let six_a = document.createElement("a");
  let p = document.createElement("p");
  let a = document.createElement("a");

  one_img.src = "/public/vkontakte.svg";
  two_img.src = "/public/instagram.svg";
  theree_img.src = "/public/facebook.svg";
  four_img.src = "/public/twitter.svg";
  five_img.src = "/public/youtube.svg";
  five_img.style.width = "30px"
  one_img.alt = "";
  two_img.alt = "";
  theree_img.alt = "";
  four_img.alt = "";
  five_img.alt = "";
  one_a.innerHTML = "Афиша";
  two_a.innerHTML = "Новости";
  theree_a.innerHTML = "Персоны";
  four_a.innerHTML = "Рейтинги";
  five_a.innerHTML = "Рецензии";
  six_a.innerHTML = "Каталог фильмов";
  one_a.href = "#";
  two_a.href = "#";
  theree_a.href = "#";
  four_a.href = "#";
  five_a.href = "#";
  six_a.href = "#";
  a.href = "#";
  p.innerHTML = "2020 © Kinoarea.  Все права защищены";
  a.innerHTML = "Политика конфиденциальности";
  p.classList.add("kinoarea");
  hrefs.classList.add("hrefs");
  a.classList.add("a");
  social_media.classList.add("social_media");
  container.classList.add("container");
  footerBlock.classList.add("footer_block");
  logo.classList.add("logo");
  footerInfo.classList.add("footer_info");
  agreeDiv.classList.add("agree");
  agreeCheckbox.classList.add("checked");
  agreeText.classList.add("eggry");
  agreeTextInner.classList.add("f");
  emailInput.classList.add("input");

  logoImg.src = "/public/logoKinoarea.png";
  logoImg.alt = "";
  footerInfoHeading.textContent = "Подпишитесь на E-mail рассылку";
  footerInfoText.textContent =
    "Если хотите быть в курсе последних новостей и новинок кино - заполните форму ниже и оформите бесплатную E-mail рассылку!";
  footerForm.name = "form";
  emailInput.type = "email";
  emailInput.placeholder = "Введите свой E-mail адрес";
  subscribeButton.textContent = "Подписаться";
  agreeTextInner.textContent = "Соглашаюсь на условия";
  privacyPolicyLink.textContent = "политики конфиденциальности";
  emailInput.required = true;
  agreeCheckbox.type = "checkbox";
  privacyPolicyLink.href = "";

  footerForm.appendChild(emailInput);
  footerForm.appendChild(subscribeButton);
  agreeText.appendChild(agreeTextInner);
  agreeText.appendChild(privacyPolicyLink);
  agreeDiv.appendChild(agreeCheckbox);
  agreeDiv.appendChild(agreeText);

  footerInfo.appendChild(footerInfoHeading);
  footerInfo.appendChild(footerInfoText);
  footerInfo.appendChild(footerForm);
  footerInfo.appendChild(agreeDiv);

  footerBlock.appendChild(logo);
  footerBlock.appendChild(footerInfo);
  footer.append(container);
  social_media.append(one_img, two_img, theree_img, four_img, five_img);
  hrefs.append(one_a, two_a, theree_a, four_a, five_a,six_a);
  container.append(footerBlock, social_media, hrefs, p, a);
}
footer();
