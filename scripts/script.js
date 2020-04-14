const listOfLinks = document.querySelectorAll(".header__lang-link");
const parentOfLinks = document.querySelector(".header__links-list");
parentOfLinks.addEventListener("click", (e) => {
  if (e.target.classList.contains("header__lang-link")) {
    e.target.classList.add("header__lang-link_active");
  }
  for (let i = 0; i < listOfLinks.length; i++) {
    if (listOfLinks[i] === e.target) continue;
    listOfLinks[i].classList.remove("header__lang-link_active");
  }
});
document
  .querySelector(".header__lang-link")
  .classList.add("header__lang-link_active");
