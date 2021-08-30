import { globals } from "./globals.js";
import { endpoints } from "./endpoints.js";
import { dom } from "./dom.js";

const gifs = {
  createTrendGif: async () => {
    let data = await globals.fetch(endpoints.trends());
    data.data.forEach(async (gif) => {
      const newGif = {
        image: gif.images.original.url,
        title: gif.title,
        userName: gif.usernam,
        // download: blob,
      };
      dom.gif(newGif, "trends-grid");
    });
  },
  createSearchGif: async (value) => {
    let data = await globals.fetch(endpoints.search(value));
    data.data.forEach((gif) => {
      const newGif = {
        image: gif.images.original.url,
        title: gif.title,
        userName: gif.usernam,
        url: gif.url,
      };
      dom.gif(newGif, "search-grid");
    });
  },
  suggestions: (data) => {
    data.data.forEach((suggestion) => {
      document.getElementById(
        "input-search-icon-container"
      ).innerHTML += `<li>${suggestion.name}</li>`;
    });
  },
};

export { gifs };
