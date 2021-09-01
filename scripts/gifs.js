import { globals } from "./globals.js";
import { endpoints } from "./endpoints.js";
import { dom } from "./dom.js";

const gifs = {
  createTrendGif: async () => {
    let data = await globals.fetch(endpoints.trends());
    data.data.forEach(async (gif) => {
      let blob = await fetch(gif.images.original.url).then((res) => res.blob());
      const newGif = {
        id: gif.id,
        image: gif.images.original.url,
        title: gif.title,
        userName: gif.username,
        download: URL.createObjectURL(blob),
      };
      dom.gif(newGif, "trends-grid");
    });
  },
  createSearchGif: async (value) => {
    let data = await globals.fetch(endpoints.search(value));
    data.data.forEach(async (gif) => {
      let blob = await fetch(gif.images.original.url).then((res) => res.blob());
      const newGif = {
        id: gif.id,
        image: gif.images.original.url,
        title: gif.title,
        userName: gif.username,
        download: URL.createObjectURL(blob),
      };
      dom.gif(newGif, "search-grid");
    });
  },
  createFavGif: async (id) => {
    if (id === "") return;
    let data = await fetch(endpoints.id(id)).then((res) => res.json());
    // let blob = await fetch(data.data.url).then((res) => res.blob()); //cors
    const newGif = {
      id: data.data.id,
      image: data.data.images.original.url,
      title: data.data.title,
      userName: data.data.username,
      // download: URL.createObjectURL(blob),
    };
    dom.gif(newGif, "section-favs-grid");
  },
  createMyGifsGif: async (id) => {
    if (id === "") return;
    let data = await fetch(endpoints.id(id)).then((res) => res.json());
    const newGif = {
      id: data.data.id,
      image: data.data.images.original.url,
      title: data.data.title,
      userName: data.data.username,
    };
    dom.gif(newGif, "section-my-gifs-grid");
  },
  createExpand: async (gif) => {
    const newGif = {
      id: gif.id,
      image: gif.images.original.url,
      title: gif.title,
      userName: gif.username,
      download: URL.createObjectURL(blob),
    };
    dom.gif(newGif, "expand");
  },
  suggestions: (data) => {
    data.data.forEach((suggestion) => {
      document.getElementById(
        "suggestions-container"
      ).innerHTML += `<li class="suggestion">${suggestion.name}</li>`;
    });
  },
};

export { gifs };
