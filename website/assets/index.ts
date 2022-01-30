import MediaPlayer from 'victorrm-platzimediaplayer';
import AutoPlay from 'victorrm-platzimediaplayer/lib/plugins/AutoPlay';
import AutoPause from   'victorrm-platzimediaplayer/lib/plugins/AutoPause';
import AdsPlugin from 'victorrm-platzimediaplayer/lib/plugins/Ads';

const video = document.querySelector('video');
const btnPlayPause: HTMLElement = document.querySelector('#play_pause');
const btnMute: HTMLElement = document.querySelector('#mute');
const player = new MediaPlayer({
    el: video, 
    plugins: [
        new AutoPlay(),
        new AutoPause(),
        new AdsPlugin()
    ]
});

btnPlayPause.onclick = () => player.togglePlay();
btnMute.onclick = () => player.toggleMuted();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    })
}