import { endpoints } from "./endpoints.js";
import { globals } from "./globals.js";
import { gifs } from "./gifs.js";
import { dom } from "./dom.js";

const events = {
  nav: {
    toggleHambMenu: () => {
      document
        .querySelector(".container-hamb")
        .classList.toggle("hamb-display");
    },
    toggleViewMode: () => {
      document.querySelector("body").classList.toggle("dark-mode");
    },
  },
  search: {
    searchIcon: () => {
      document.getElementById("input-search").addEventListener("input", () => {
        if (document.getElementById("icon-search")) {
          document.getElementById("input-search-icon-container").innerHTML =
            dom.inputSearchIconClear;
          chainsEvents.search.inputSearchClear();
        } else {
          document.getElementById("input-search-icon-container").innerHTML =
            dom.inputSearchIconSearch;
        }
      });
    },
    suggestions: () => {
      const inputSearch = document.getElementById("input-search");
      inputSearch.addEventListener("input", async () => {
        let suggestions = await globals.fetch(
          endpoints.suggestions(inputSearch.value)
        );
        gifs.suggestions(suggestions);
        chainsEvents.search.suggestionSearchOnClick();
      });
    },
    searchOnEnter: () => {
      const inputSearch = document.getElementById("input-search");
      inputSearch.addEventListener("keypress", (key) => {
        if (key.key === "Enter") {
          globals.clearNode("search-grid");
          globals.clearNode("suggestions-container");
          gifs.createSearchGif(inputSearch.value);
          document.getElementById("search-title").textContent =
            inputSearch.value;
          chainsEvents.search.viewMoreBtn();
        }
      });
    },
  },
};

const chainsEvents = {
  search: {
    inputSearchClear: () => {
      document
        .getElementById("icon-search-clear")
        .addEventListener("click", () => {
          document.getElementById("input-search").value = "";
          document.getElementById("input-search-icon-container").innerHTML =
            dom.inputSearchIconSearch;
        });
    },
    suggestionSearchOnClick: () => {
      document.querySelectorAll(".suggestion").forEach((suggestion) => {
        suggestion.addEventListener("click", () => {
          globals.clearNode("search-grid");
          gifs.createSearchGif(suggestion.textContent);
          document.getElementById("search-title").textContent =
            suggestion.textContent;
          globals.clearNode("suggestions-container");
          document.getElementById("input-search").value =
            suggestion.textContent;
        });
      });
    },
    viewMoreBtn: () => {
      const btn = document.getElementById("search-view-more");
      btn.classList.add("search-view-more");
      btn.textContent = "VIEW MORE";
      btn.addEventListener("click", () => {
        globals.clearNode("search-grid");
        gifs.createSearchGif(document.getElementById("input-search").value);
      });
    },
  },
};

export { events };
