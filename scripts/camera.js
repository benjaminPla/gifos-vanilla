function camera() {
  document.getElementById("btn-start").addEventListener("click", () => {
    const video = document.getElementById("video");
    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {},
      })
      .then((stream) => {
        video.srcObject = stream;
        video.play();
      });
  });
}

export { camera };
