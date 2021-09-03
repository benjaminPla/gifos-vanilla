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
      const inputSearch = document.getElementById("input-search");
      inputSearch.addEventListener("input", async () => {
        if (inputSearch.textContent == "") {
          if (inputSearch) {
            document.getElementById("input-search-icon-container").innerHTML =
              dom.inputSearchIconClear;
            let suggestions = await globals.fetch(
              endpoints.suggestions(inputSearch.value)
            );
            gifs.suggestions(suggestions);
            chainsEvents.search.suggestionSearchOnClick();
            chainsEvents.search.inputSearchClear();
          } else {
            document.getElementById("input-search-icon-container").innerHTML =
              dom.inputSearchIconSearch;
          }
        }
      });
    },
    searchOnEnter: () => {
      const inputSearch = document.getElementById("input-search");
      inputSearch.addEventListener("keypress", (key) => {
        if (key.key === "Enter") {
          const searchOffset = sessionStorage.getItem("search-offset") || '';
          let offset = 0;
          if (searchOffset.split(",")[0] == inputSearch.value) {
            offset = Number(searchOffset.split(",")[1]) + 12;
          }
          sessionStorage.setItem("search-offset", [inputSearch.value, offset]);

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
  gif: {
    addFavs: () => {
      addEventListener("click", (element) => {
        if (element.target.alt == "btn-gif-fav") {
          const favs = localStorage.getItem("favs").split(",");
          const id = element.target.id;
          let i = favs.indexOf(id);
          i > 0 ? favs.splice(i, 1) : favs.push(id);
          localStorage.setItem("favs", favs);
        }
      });
    },
    expand: () => {
      addEventListener("click", (element) => {
        if (element.target.alt == "btn-gif-expand") {
          let parent = element.target.offsetParent;
          if (parent.classList[0] == "btns") {
            let expandDiv = document.createElement("div");
            expandDiv.setAttribute("id", "expand");
            expandDiv.classList.add("expand");
            expandDiv.appendChild(parent.offsetParent.offsetParent); //hacer createGif en ves de appendChild
            // gifs.createExpand(gif);  // ver tema de sessionStorage(expand)
            document.querySelector("body").appendChild(expandDiv);
          } else {
            document.querySelector(".expand").remove();
          }
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
          globals.clearNode("suggestions-container");
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
        const inputSearch = document.getElementById("input-search");
        const searchOffset = sessionStorage.getItem("search-offset") || '';
        let offset = 0;
        if (searchOffset.split(",")[0] == inputSearch.value) {
          offset = Number(searchOffset.split(",")[1]) + 12;
        }
        sessionStorage.setItem("search-offset", [inputSearch.value, offset]);
        globals.clearNode("search-grid");
        gifs.createSearchGif(document.getElementById("input-search").value);
      });
    },
  },
};

export { events };
