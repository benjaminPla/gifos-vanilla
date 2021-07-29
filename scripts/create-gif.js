async function createGif(data, parent) {
  let gifs = await data;
  gifs.data.forEach((gif) => {
    const dom = `
    <div class="gif">
        <img src="${gif.images.fixed_height.url}" alt="${gif.title}">
        <div class="gif-hover">
            <div class="btns">
                <button>DOWNLOAD</button>
                <button>EXPAND</button>
                <button>SAVE</button>
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
