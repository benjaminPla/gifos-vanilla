import { events } from "./events.js";
import { sections } from "./sections.js";
import { setCamera } from "./camera.js";

if (location.href.endsWith("/index.html")) {
  sections.setSearch();
  sections.setTrendings();
} else {
  setCamera();
}
sections.setNav();

localStorage.setItem("favs", localStorage.getItem("favs") || []);
localStorage.setItem("myGifs", localStorage.getItem("myGifs") || []);
events.gif.addFavs();
events.gif.expand();
