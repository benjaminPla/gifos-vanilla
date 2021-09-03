import { globals } from "./globals.js";

async function setCamera() {
  let stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true,
  });
  let recorder = null;
  let blob = null;

  const btn = document.querySelector("button");
  btn.addEventListener("click", async () => {
    if (btn.getAttribute("id") === "upload") {
      let form = new FormData();
      form.append("file", blob, "myGif");
      await fetch(
        `https://upload.giphy.com/v1/gifs?api_key=${globals.apiKey}`,
        { method: "POST", body: form }
      )
        .then((res) => res.json())
        .then((res) => {
          const myGifs = localStorage.getItem("myGifs").split(",");
          myGifs.push(res.data.id);
          localStorage.setItem("myGifs", myGifs);
        });
    } else if (btn.getAttribute("id") === "stop") {
      recorder.stopRecording();
      btn.textContent = "SUBIR GIFO";
      btn.setAttribute("id", "upload");
      blob = await recorder.getBlob();
    } else if (btn.getAttribute("id") === "record") {
      const btn = document.getElementById("record");
      recorder.startRecording();
      btn.textContent = "FINALIZAR";
      btn.setAttribute("id", "stop");
    } else if (btn.getAttribute("id") === "start") {
      recorder = new RecordRTCPromisesHandler(stream, { type: "gif" });
      video.srcObject = stream;
      video.play();
      btn.textContent = "GRABAR";
      btn.setAttribute("id", "record");
    }
  });
}

export { setCamera };
