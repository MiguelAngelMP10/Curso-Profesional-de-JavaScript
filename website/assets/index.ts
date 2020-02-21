import MediaPlayer from "@miguelangelmp/platzi_mediaplayer";
import AutoPlay from "@miguelangelmp/platzi_mediaplayer/lib/plugins/AutoPlay";
import AutoPause from "@miguelangelmp/platzi_mediaplayer/lib/plugins/AutoPause";

import Ads from "@miguelangelmp/platzi_mediaplayer/lib/plugins/Ads";

const video = document.querySelector("video");
const btnPlayPause: HTMLElement = document.querySelector("#btn-play-pause");
const btnMuteUnmute: HTMLElement = document.querySelector("#btn-mute-unmute");

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()]
});

btnPlayPause.onclick = () => player.togglePlay();
btnMuteUnmute.onclick = () => player.toggleMute();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch(error => {
    console.log(error.message);
  });
} else {
}
