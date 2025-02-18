class Webcam {
    constructor() {
        this.image = null;
        this.on = true;
        this.video = null;
        this.classifier = objectdetect.frontalface;
        this.scaleFactor = 1.5;
        this.detector = new objectdetect.detector(skeleton.grid.width, skeleton.grid.height, this.scaleFactor, this.classifier);
        this.option = 3;
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

    drawfaceBoundingBox(x, y, w, h) {

        // Draw single face bounding box
        push();
        strokeWeight(2);
        stroke(255);
        noFill();

        rect(x, y, w, h);

        pop();
    }
}




