import { setNav } from "./nav.js";
import { sectionSearch } from "./sections.js";
import { fetchEndPoint } from "./fetchs.js";
import { createGif } from "./create-gif.js";
import { camera } from "./camera.js";
import { setLocalStorageFavs } from "./local-storage.js";

const api_key = "oEUKZvjXohw9PtyLjZzaxHZUDiMkVYoz";
let trendsOffset = 0;

if (location.pathname == "/index.html") {
  window.addEventListener("load", () => {
    setNav();
    sectionSearch();
    createGif(
      fetchEndPoint(
        `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&offset=0&limit=3`
      ),
      "trends-grid"
    );
    setLocalStorageFavs();
  });
} else {
  window.addEventListener("load", () => {
    setNav();
    camera();
  });
}

const trendsBtns = document.querySelectorAll(".trends-btns");
trendsBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    i == 0 ? (trendsOffset -= 3) : (trendsOffset += 3);
    if (trendsOffset < 0) trendsOffset = 0;
    document.getElementById("trends-grid").innerHTML = "";
    createGif(
      fetchEndPoint(
        `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&offset=${trendsOffset}&limit=3`
      ),
      "trends-grid"
    );
  });
});

export { api_key };
