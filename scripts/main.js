import { events } from "./events.js";
import { sections } from "./sections.js";

sections.setNav();
sections.setSearch();
sections.setTrendings();
sections.setOthers();

let setLocalStorageFavs = localStorage.getItem("favs") || [];
localStorage.setItem("favs", setLocalStorageFavs);
events.gif.addFavs();
events.gif.expand();
