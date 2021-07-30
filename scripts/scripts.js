import { setNav } from "./nav.js";
import { sectionSearch } from "./sections.js";
import { fetchTrends } from "./fetchs.js";
import { createGif } from "./create-gif.js";

if (location.pathname == "/index.html") {
  window.addEventListener("load", () => {
    setNav();
    sectionSearch();
    createGif(fetchTrends(), "trends-grid");
  });
} else {
  window.addEventListener("load", () => {
    setNav();
  });
}
