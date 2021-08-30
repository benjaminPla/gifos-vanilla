import { globals } from "./globals.js";

const dom = {
  gif: (gif, parent) => {
    console.log(gif.download)
    const dom = `
      <div class="gif">
      <img src="${gif.image}" alt="${gif.title}">
      <div class="gif-hover">
      <div class="btns">
      <img class="gif-btn btn-favs" src="./assets/imgs/btn-gif-favs.svg" alt="btn-gif-fav">
      <a href="${gif.download}" download="${gif.title}">
      <img class="gif-btn" src="./assets/imgs/btn-gif-download.svg" alt="btn-gif-download">
      <a/>
      <img class="gif-btn" src="./assets/imgs/btn-gif-expand.svg" alt="btn-gif-expand">
      </div>
      <div class="info">
      <span class="user-name">${gif.userName}</span>
      <span class="title">${gif.title}</span>
      </div>
      </div>
      </div>`;
    document.getElementById(parent).innerHTML += dom;
  },
  search: `
  <div id="div-search">
    <h1>Inspírate, busca, guarda, y crea los mejores <span>GIFOS</span></h1>
    <img src="./assets/imgs/main-img.svg" alt="main-img">
    <div class="input-container">
      <input id="input-search" type="text" placeholder="Busca GIFOS y más" autocomplete="off">
      <div id="input-search-icon-container">
        <img id="icon-search" src="./assets/imgs/icon-search.svg" alt="icon-search">
      </div>
      <div id="suggestions-container"></div> 
    </div>
    <h2 id="search-title"></h2>
    <div id="search-grid"></div>
    <button id="search-view-more" class="hover"></button>
  </div>`,
  inputSearchIconSearch: `<img id="icon-search" src="./assets/imgs/icon-search.svg" alt="icon-search">`,
  inputSearchIconClear: `<img id="icon-search-clear" class="hover" src="./assets/imgs/icon-close.svg" alt="icon-close">`,
  favs: `
  <div id="div-favs">
    <img src="./assets/imgs/icon-favs.svg" alt="icon-favs">
    <h1>Favoritos</h1>
    <div id="section-favs-grid"></div>
  </div>`,
  myGifs: `
  <div id="div-my-gifs">
    <img src="./assets/imgs/icon-my-gifs.svg" alt="icon-favs">
    <h1>Mis GIFOS</h1>
    <div id="section-my-gifs-grid">
    </div>
  </div>`,
};

export { dom };
