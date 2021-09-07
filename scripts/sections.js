import { globals } from "./globals.js";
import { events } from "./events.js";
import { dom } from "./dom.js";
import { gifs } from "./gifs.js";

const sections = {
  setNav: () => {
    window.addEventListener("scroll", globals.navShadow);
    document.getElementById("home-btn").addEventListener("click", () => {
      events.nav.toggleHambMenu();
      globals.clearNode("section-main");
      globals.fillNode("section-main", dom.search);
      events.search.searchOnEnter();
    });
    document
      .getElementById("icon-hamb")
      .addEventListener("click", events.nav.toggleHambMenu);
    document.getElementById("theme-btn").addEventListener("click", () => {
      events.nav.toggleHambMenu();
      events.nav.toggleViewMode();
    });
    document.getElementById("favs-btn").addEventListener("click", () => {
      events.nav.toggleHambMenu();
      globals.clearNode("section-main");
      globals.fillNode("section-main", dom.favs);
      chainsSections.setFavs();
    });
    document.getElementById("my-gifs-btn").addEventListener("click", () => {
      events.nav.toggleHambMenu();
      globals.fillNode("section-main", dom.myGifs);
      chainsSections.setMyGifs();
    });
  },
  setSearch: () => {
    globals.fillNode("section-main", dom.search);
    events.search.searchIcon();
    events.search.searchOnEnter();
    events.trendsChanger();
  },
  setTrendings: () => {
    sessionStorage.setItem("trends-offset", 0);
    gifs.createTrendGif();
    document.querySelectorAll(".trends-carousel-btn").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        if (i === 0 && sessionStorage.getItem("trends-offset") == 0) return;
        i === 0
          ? globals.handleTrendsOffset(-3)
          : globals.handleTrendsOffset(3);
        globals.clearNode("trends-grid");
        gifs.createTrendGif();
      });
    });
  },
};

const chainsSections = {
  setFavs: () => {
    localStorage
      .getItem("favs")
      .split(",")
      .forEach((gif) => {
        gifs.createFavGif(gif);
      });
  },
  setMyGifs: () => {
    localStorage
      .getItem("myGifs")
      .split(",")
      .forEach((gif) => {
        gifs.createMyGifsGif(gif);
      });
  },
};

export { sections };
