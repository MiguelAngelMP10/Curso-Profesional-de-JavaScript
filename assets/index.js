import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector("video");
const btnPlayPause = document.querySelector("#btn-play-pause");
const btnMuteUnmute = document.querySelector("#btn-mute-unmute");


const player = new MediaPlayer({
    el: video,
    plugins: [new AutoPlay(), new AutoPause()]
});

btnPlayPause.onclick = () => player.togglePlay();
btnMuteUnmute.onclick = () => player.toggleMute();