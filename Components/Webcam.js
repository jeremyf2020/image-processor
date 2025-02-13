class Webcam {
    constructor() {
        this.image = null;
        this.on = true;
    }
    capture() {
        this.image = video.get();
    }
}