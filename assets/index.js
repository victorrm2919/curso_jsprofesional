import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from   './plugins/AutoPause.js';

const video = document.querySelector('video');
const btnPlayPause = document.querySelector('#play_pause');
const btnMute = document.querySelector('#mute');
const player = new MediaPlayer({
    el: video, 
    plugins: [
        new AutoPlay(),
        new AutoPause()
    ]
});

btnPlayPause.onclick = () => player.togglePlay();
btnMute.onclick = () => player.toggleMuted();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    })
}