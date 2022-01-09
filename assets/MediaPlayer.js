function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this.__initPlugins();
};


MediaPlayer.prototype.__initPlugins = function () {
    const player = {
        play: () => this.play(),
        pause: () => this.pause(),
        media: this.media,
        get muted() {
            return this.media.muted;
        },
        set muted(value) {
            this.media.muted = value;
        }
    };
    
    this.plugins.forEach(plugin => {
        plugin.run(player);
    });
};

MediaPlayer.prototype.play = function () {
    this.media.play();
};

MediaPlayer.prototype.pause = function () {
    this.media.pause();
};

MediaPlayer.prototype.togglePlay = function () {
    this.media.paused ? this.play() : this.pause();
};

MediaPlayer.prototype.muted = function () {
    this.media.muted = true;
};

MediaPlayer.prototype.unmuted = function () {
    this.media.muted = false;
};

MediaPlayer.prototype.toggleMuted = function () {
    !this.media.muted ? this.muted() : this.unmuted();
    //this.media.muted = !this.media.muted
};

export default MediaPlayer;