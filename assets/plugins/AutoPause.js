class AutoPause {
    constructor() {
        this.threshold = 0.25;
        this.hadlerIntersection = this.hadlerIntersection.bind(this);
    }
    run(player) {
        this.player = player;

        const observer = new IntersectionObserver(this.hadlerIntersection, {
            threshold: this.threshold
        });
        observer.observe(this.player.media);
    }
    hadlerIntersection(entries) {
        const entry = entries[0];

        const isVisible = entry.intersectionRatio >= this.threshold
        if (isVisible) {
            this.player.play();
        } else {
            this.player.pause();
        }
    }
}
export default AutoPause;