class Webcam {
    constructor() {
        this.image = null;
        this.on = true;
        this.video = null;
    }
    init() {
        // create video capture
        this.video = createCapture(VIDEO);
        this.video.size(skeleton.grid.width, skeleton.grid.height);
        this.video.hide();

    }
    capture() {
        this.image = this.video.get();
        this.on = false;
    }
}