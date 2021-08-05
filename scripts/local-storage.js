const localStorageFavs = [localStorage.getItem("local-storage-favs")] || [];
function setLocalStorageFavs() {
  localStorage.setItem("local-storage-favs", localStorageFavs);
}

export { localStorageFavs, setLocalStorageFavs };
