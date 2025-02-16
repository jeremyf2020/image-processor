class Webcam {
    constructor() {
        this.image = null;
        this.on = true;
    }
    init() {
        // create video capture
        video = createCapture(VIDEO);
        video.size(skeleton.grid.width, skeleton.grid.height);
        video.hide();
        this.image = video.get();

    }
    capture() {
        this.image = video.get();
        this.on = false;
    }
}