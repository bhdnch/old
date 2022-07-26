let change = document.querySelector("#change-lang");
let select = document.querySelector("#select-lang");
let title = document.querySelector("#select-lang-title");

change.addEventListener("click", () => {
   title.classList.toggle("select-lang-title--margin");
   select.classList.toggle("hidden");
});
