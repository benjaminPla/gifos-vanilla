function setCamera() {
  const btn = document.getElementById("btn-start");
  btn.addEventListener("click", async () => {
    let stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: true,
    });
    let recorder = new RecordRTCPromisesHandler(stream, { type: "video" });
    video.srcObject = stream;
    video.play();
    btn.textContent = "GRABAR";
    btn.setAttribute("id", "record");
    record(recorder);
  });
}

function record(recorder) {
  const btn = document.getElementById("record");
  btn.addEventListener("click", () => {
    recorder.startRecording();
    btn.textContent = "FINALIZAR";
    btn.setAttribute("id", "stop");
    stop(recorder);
  });
}
async function stop(recorder) {
  const btn = document.getElementById("stop");
  btn.addEventListener("click", async () => {
    recorder.stopRecording();
    let blob = await recorder.getBlob();
    btn.textContent = "SUBIR GIFO";
    btn.setAttribute("id", "upload");
  });
}

export { setCamera };
