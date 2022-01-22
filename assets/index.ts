import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from   './plugins/AutoPause';

const video = document.querySelector('video');
const btnPlayPause: HTMLElement = document.querySelector('#play_pause');
const btnMute: HTMLElement = document.querySelector('#mute');
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