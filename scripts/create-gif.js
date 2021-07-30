async function createGif(data, parent) {
  let gifs = await data;
  gifs.forEach((gif) => {
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
                <span class="user-name">${gif.username}</span>
                <span class="title">${gif.title}</span>
            </div>
        </div>
    </div>`;
    document.getElementById(parent).innerHTML += dom;
  });
}

class Gif {
  constructor(image, title, userName, download) {
    this.image = image;
    this.title = title;
    this.userName = userName;
    this.download = download;
  }
}

export { createGif, Gif };
