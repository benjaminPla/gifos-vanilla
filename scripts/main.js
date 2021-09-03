import { events } from "./events.js";
import { sections } from "./sections.js";
import { setCamera } from "./camera.js";

if (location.pathname === "/camera.html") {
  setCamera();
} else {
  sections.setSearch();
  sections.setTrendings();
}
sections.setNav();

localStorage.setItem("favs", localStorage.getItem("favs") || []);
localStorage.setItem("myGifs", localStorage.getItem("myGifs") || []);
events.gif.addFavs();
events.gif.expand();
