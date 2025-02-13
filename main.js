let video, skeleton;

function setup() {
    // create Canvas
    createCanvas(window.innerWidth, window.innerHeight);
    // init skeleton with grids
    skeleton = new Skeleton(3, 5);
    webcam = new Webcam();

    // create video capture
    video = createCapture(VIDEO);
    video.size(skeleton.grid.width, skeleton.grid.height);
    video.hide();
}

function draw() {
    //grey background
    background(155);

    skeleton.draw();

}

