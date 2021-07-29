import { sectionSearch, sectionFavs, sectionMyGifs } from "./dom.js";
function setNav() {
  homeBtn();
  hambMenu();
  themeBtn();
  favsBtn();
  myGifsBtn();
}

function homeBtn() {
  document.getElementById("home-btn").addEventListener("click", () => {
    closeHambMenu();
    sectionSearch();
  });
}

function hambMenu() {
  document.getElementById("icon-hamb").addEventListener("click", () => {
    document.querySelector(".container-hamb").classList.toggle("hamb-display");
  });
}

function themeBtn() {
  document.getElementById("theme-btn").addEventListener("click", () => {
    closeHambMenu();
    document.querySelector("body").classList.toggle("dark-mode");
  });
}

function favsBtn() {
  document.getElementById("favs-btn").addEventListener("click", () => {
    closeHambMenu();
    sectionFavs();
  });
}

function myGifsBtn() {
  document.getElementById("my-gifs-btn").addEventListener("click", () => {
    closeHambMenu();
    sectionMyGifs();
  });
}

function closeHambMenu() {
  document.querySelector(".container-hamb").classList.remove("hamb-display");
}

export { setNav };
