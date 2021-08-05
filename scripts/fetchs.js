import { Gif } from "./create-gif.js";

async function fetchEndPoint(endPoint) {
  let data = [];
  let json = await fetch(endPoint).then((res) => res.json());
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

export { fetchEndPoint };
