async function fetchTrends() {
  const api_key = "oEUKZvjXohw9PtyLjZzaxHZUDiMkVYoz";
  const url = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&offset=0&limit=3`;
  try {
    let response = await fetch(url);
    let json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export { fetchTrends };
