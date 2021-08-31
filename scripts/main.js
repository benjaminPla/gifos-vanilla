import { events } from "./events.js";
import { sections } from "./sections.js";

sections.setNav();
sections.setSearch();
sections.setTrendings();
sections.setOthers();

sessionStorage.setItem("favs", "");
events.gif.addFavs();
events.gif.expand();
