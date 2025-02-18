let video, skeleton, painter, webcam;

const oc = HTMLCanvasElement.prototype.getContext;
HTMLCanvasElement.prototype.getContext = function (t, o = {}) {
    o.willReadFrequently = true;
    return oc.call(this, t, o);
};

function setup() {

    // create Canvas
    createCanvas(window.innerWidth, window.innerHeight);
    pixelDensity(1);

    // init skeleton with grids
    skeleton = new Skeleton(3, 5);
    // create webcam and init
    webcam = new Webcam();
    webcam.init();
    // create painter and init
    painter = new Painter();
    painter.init();

}

function draw() {
    frameRate(10);

    // grey background
    background(155);
    // starting drawing
    painter.draw();
}

