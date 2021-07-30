function sectionSearch() {
  const dom = `
<div id="div-search">
  <h1>Inspírate, busca, guarda, y crea los mejores <span>GIFOS</span></h1>
  <img src="./assets/imgs/main-img.svg" alt="main-img">
  <div class="input-container">
    <input type="text" placeholder="Busca GIFOS y más">
    <img id="icon-search" class="hover" src="./assets/imgs/icon-search.svg" alt="icon-search">
  </div>
  <div id="section-main-footer">
    <h2>Trendings:</h2>
    <p>Reactions, Entertainment, Sports, Stickers, Artists</p>
  </div>
</div>`;
  document.getElementById("section-main").innerHTML = dom;
}

function sectionFavs() {
  const dom = `
<div id="div-favs">
  <img src="./assets/imgs/icon-favs.svg" alt="icon-favs">
  <h1>Favoritos</h1>
  <div id="section-favs-grid"></div>
</div>`;
  document.getElementById("section-main").innerHTML = dom;
}

function sectionMyGifs() {
  const dom = `
<div id="div-my-gifs">
  <img src="./assets/imgs/icon-my-gifs.svg" alt="icon-favs">
  <h1>Mis GIFOS</h1>
  <div id="section-my-gifs-grid">
  
  <div class="gif"></div>
  <div class="gif"></div>
  <div class="gif"></div>
  <div class="gif"></div>
  <div class="gif"></div>
  <div class="gif"></div>
  <div class="gif"></div>
  <div class="gif"></div>
  <div class="gif"></div>
  
  </div>
</div>`;
  document.getElementById("section-main").innerHTML = dom;
}

export { sectionSearch, sectionFavs, sectionMyGifs };
