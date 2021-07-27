function sectionSearch() {
  const dom = `
<div id="div-search">
    <h1>Inspírate, busca, guarda, y crea los mejores <span>GIFOS</span></h1>
    <img src="./assets/imgs/main-img.svg" alt="main-img">
    <input type="text">
    <img src="./assets/imgs/icon-search.svg" alt="icon-search">
    <div id="section-main-footer">
        <h2>Trendings:</h2>
        <p>Reactions, Entertainment, Sports, Stickers, Artists</p>
    </div>
</div>`;

  const sectionMain = document.getElementById("section-main");
  sectionMain.innerHTML = dom;
}

export { sectionSearch };
