async function setCamera() {
  let stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true,
  });
  let recorder = new RecordRTCPromisesHandler(stream, { type: "gif" });
  let blob = null;

  const btn = document.querySelector("button");
  btn.addEventListener("click", async () => {
    if (btn.getAttribute("id") === "upload") {
      invokeSaveAsDialog(blob);
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
      video.srcObject = stream;
      video.play();
      btn.textContent = "GRABAR";
      btn.setAttribute("id", "record");
    }
  });
}

export { setCamera };
