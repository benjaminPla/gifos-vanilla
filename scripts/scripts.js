import { setNav } from "./nav.js";
import { sectionSearch } from "./dom.js";
import { fetchTrends } from "./fetchs.js";
import { createGif } from "./create-gif.js";
window.addEventListener("load", setNav(), sectionSearch(), trends());

function trends() {
  createGif(fetchTrends(), "trends-grid");
}
