import { setNav } from "./nav.js";
import { sectionSearch } from "./sections.js";
import { fetchEndPoint } from "./fetchs.js";
import { createGif } from "./create-gif.js";
import { camera } from "./camera.js";
import { setLocalStorageFavs } from "./local-storage.js";

const api_key = "oEUKZvjXohw9PtyLjZzaxHZUDiMkVYoz";

if (location.pathname == "/index.html") {
  window.addEventListener("load", () => {
    setNav();
    sectionSearch();
    createGif(fetchEndPoint(`https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&offset=0&limit=3`), "trends-grid");
    setLocalStorageFavs();
  });
} else {
  window.addEventListener("load", () => {
    setNav();
    camera();
  });
}

export { api_key }