import { Gif } from "./create-gif.js";
const api_key = "oEUKZvjXohw9PtyLjZzaxHZUDiMkVYoz";

async function fetchTrends() {
  let data = [];
  const url = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&offset=0&limit=3`;
  let json = await fetch(url).then((res) => res.json());
  json.data.forEach(async (element) => {
    // let blob = await fetch(element.images.fixed_height.url)
    //   .then((res) => res.blob())
    //   .then((res) => URL.createObjectURL(res));
    let gif = new Gif(
      element.images.fixed_height.url,
      element.title,
      element.username,
      element.embed_url
    );
    data.push(gif);
  });
  return data;
}

export { fetchTrends };
