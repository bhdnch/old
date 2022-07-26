const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");
const navLink = document.querySelectorAll(".nav-link");
const changeLang = document.querySelectorAll("#change-lang");
const body = document.querySelector("body");
const html = document.querySelector("html");

burger.addEventListener("click", () => {
    navbar.classList.toggle("nav-open");
    burger.classList.toggle("burger-open");
    changeLang[0].classList.toggle("hidden");
    navLink.forEach((link) => {
        link.classList.toggle("nav-link-open");
    });
    html.classList.toggle("overflow--hidden");
    body.classList.toggle("overflow--hidden");
});
