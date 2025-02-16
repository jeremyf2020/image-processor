let video, skeleton, painter, webcam;

function setup() {
    // create Canvas
    createCanvas(window.innerWidth, window.innerHeight);
    // init skeleton with grids
    skeleton = new Skeleton(3, 5);
    // create painter and init
    painter = new Painter();
    painter.init();
    // create webcam and init
    webcam = new Webcam();
    webcam.init();
}

function draw() {
    // grey background
    background(155);
    // starting drawing
    painter.draw();
}

