let video, skeleton, webcam;

function setup() {
    // create Canvas
    createCanvas(window.innerWidth, window.innerHeight);
    // init skeleton with grids
    skeleton = new Skeleton(3, 5);

    painter = new Painter();
    painter.init();
    // // create video capture
    // video = createCapture(VIDEO);
    // video.size(skeleton.grid.width, skeleton.grid.height);
    // video.hide();

    // create webcam
    webcam = new Webcam();
    webcam.init();
}

function draw() {
    // grey background
    background(155);

    // starting drawing
    painter.draw();

}

