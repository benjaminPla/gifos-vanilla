import { events } from "./events.js";
import { sections } from "./sections.js";

if (location.pathname === "/index.html") {
  sections.setSearch();
  sections.setTrendings();
} else {
  sections.setCamera();
}
sections.setNav();

localStorage.setItem("favs", localStorage.getItem("favs") || []);
events.gif.addFavs();
events.gif.expand();
