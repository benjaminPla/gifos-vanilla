const globals = {
  apiKey: "oEUKZvjXohw9PtyLjZzaxHZUDiMkVYoz",
  clearNode: (node) => {
    document.getElementById(node)
      ? (document.getElementById(node).innerHTML = "")
      : (node.innerHTML = "");
  },
  fillNode: (node, content) => {
    document.getElementById(node)
      ? (document.getElementById(node).innerHTML = content)
      : (node.innerHTML = content);
  },
  navShadow: () => {
    window.scrollY === 0
      ? document.querySelector("nav").classList.remove("navShadow")
      : document.querySelector("nav").classList.add("navShadow");
  },
  fetch: async (endpoint) => {
    let data = await fetch(endpoint).then((res) => res.json());
    return data;
  },
  handleTrendsOffset: (numb) => {
    let offset = Number(sessionStorage.getItem("trends-offset")) + numb;
    sessionStorage.setItem("trends-offset", offset);
  },
  // handleSearchOffset: (numb) => {
  //   let offset = Number(sessionStorage.getItem("search-offset")) + numb;
  //   sessionStorage.setItem("search-offset", offset);
  // },
};

export { globals };
