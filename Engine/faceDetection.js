function faceDetection() {
    this.classifier = objectdetect.frontalface;
    this.scaleFactor = 1.2;
    this.detector = new objectdetect.detector(skeleton.grid.width, skeleton.grid.height, scaleFactor, this.classifier)

}