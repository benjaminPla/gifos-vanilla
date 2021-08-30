import { globals } from "./globals.js";

const endpoints = {
  trends: () => {
    return `https://api.giphy.com/v1/gifs/trending?api_key=${
      globals.apiKey
    }&offset=${sessionStorage.getItem("trends-offset")}&limit=3`;
  },
  search: (value) => {
    return `https://api.giphy.com/v1/gifs/search?api_key=${globals.apiKey}&q=${value}&limit=12&offset=0`;
  },
  suggestions: (value) => {
    return `https://api.giphy.com/v1/gifs/search/tags?api_key=${globals.apiKey}&q=${value}`;
  },
};

export { endpoints };
