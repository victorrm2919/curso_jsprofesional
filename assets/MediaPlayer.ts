class MediaPlayer {
	media: HTMLMediaElement;
	plugins: Array<any>;

	constructor(config) {
		this.media = config.el;
		this.plugins = config.plugins || [];
		this.initPlugins();
	}

	private initPlugins() {
		this.plugins.forEach((plugin) => {
			plugin.run(this);
		});
	}

	play() {
		this.media.play();
	}

	pause() {
		this.media.pause();
	}

	togglePlay() {
		this.media.paused ? this.play() : this.pause();
	}

	muted() {
		this.media.muted = true;
	}

	unmuted() {
		this.media.muted = false;
	}

	toggleMuted() {
		!this.media.muted ? this.muted() : this.unmuted();
		//this.media.muted = !this.media.muted
	}
}

export default MediaPlayer;
