async function createGif(data, parent) {
    let gifs = await data;
  gifs.data.forEach((gif) => {
    const dom = `
    <div class="gif">
        <img src="${gif.images.fixed_height.url}" alt="${gif.title}">
        <div class="gif-hover">
            <div class="btns">
                <img class="gif-btn" src="./assets/imgs/btn-gif-favs.svg" atl="btn-gif-fav">
                <img class="gif-btn" src="./assets/imgs/btn-gif-download.svg" atl="btn-gif-download">
                <img class="gif-btn" src="./assets/imgs/btn-gif-expand.svg" atl="btn-gif-expand">
            </div>
            <div class="info">
                <span class="user-name">${gif.username}</span>
                <span class="title">${gif.title}</span>
            </div>
        </div>
    </div>`;
    document.getElementById(parent).innerHTML += dom;
  });
}

export { createGif };
