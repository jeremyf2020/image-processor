class Painter {
    constructor() {
        this.captureButton = null;
        this.redSlider = null;
        this.greenSlider = null;
        this.blueSlider = null;
    }
    init() {
        this.captureButton = createButton('Capture');
        const btnPos = skeleton.getPosition(0, 0);
        this.captureButton.position(btnPos.x, btnPos.y + skeleton.grid.height);
        this.captureButton.mousePressed(() => {
            webcam.capture();
        });
        this.redSlider = createSlider(0, 255, 128);
        this.redSlider.position(skeleton.getPosition(2, 0).x, skeleton.getPosition(2, 0).y + skeleton.grid.height);
        this.greenSlider = createSlider(0, 255, 128);
        this.greenSlider.position(skeleton.getPosition(2, 1).x, skeleton.getPosition(2, 1).y + skeleton.grid.height);
        this.blueSlider = createSlider(0, 255, 128);
        this.blueSlider.position(skeleton.getPosition(2, 2).x, skeleton.getPosition(2, 2).y + skeleton.grid.height);

    }

    displayWebcamCapture() {
        const position = skeleton.getPosition(0, 0);
        if (webcam.on) {
            this.displayLiveWebcam(skeleton.getPosition(0, 0));
        }
        else {
            image(webcam.image, position.x, position.y, skeleton.grid.width, skeleton.grid.height);
        }
    }

    displayGrayScaleBrightness() {
        // convert to grayscale and increase brightness by 20%
        let grayScaleImage = convertToGrayScale(webcam.image);
        // display the grayscale & inceased brightness image
        image(grayScaleImage, skeleton.getPosition(0, 1).x, skeleton.getPosition(0, 1).y, skeleton.grid.width, skeleton.grid.height);
    }

    displayRGBChannels() {
        const spliedImages = splitChannels(webcam.image);
        image(spliedImages[0], skeleton.getPosition(1, 0).x, skeleton.getPosition(1, 0).y, skeleton.grid.width, skeleton.grid.height);
        image(spliedImages[1], skeleton.getPosition(1, 1).x, skeleton.getPosition(1, 1).y, skeleton.grid.width, skeleton.grid.height);
        image(spliedImages[2], skeleton.getPosition(1, 2).x, skeleton.getPosition(1, 2).y, skeleton.grid.width, skeleton.grid.height);
        return spliedImages;
    }

    displayThresholding(splittedImages) {
        // Get slider values
        let redThreshold = this.redSlider.value();
        let greenThreshold = this.greenSlider.value();
        let blueThreshold = this.blueSlider.value();

        // Apply thresholding to each channel
        let redThresholded = convertToThreshold(splittedImages[0], redThreshold);
        let greenThresholded = convertToThreshold(splittedImages[1], greenThreshold);
        let blueThresholded = convertToThreshold(splittedImages[2], blueThreshold);

        // Display thresholded images in the grid
        image(redThresholded, skeleton.getPosition(2, 0).x, skeleton.getPosition(2, 0).y, skeleton.grid.width, skeleton.grid.height);
        image(greenThresholded, skeleton.getPosition(2, 1).x, skeleton.getPosition(2, 1).y, skeleton.grid.width, skeleton.grid.height);
        image(blueThresholded, skeleton.getPosition(2, 2).x, skeleton.getPosition(2, 2).y, skeleton.grid.width, skeleton.grid.height);
    }

    displayLiveWebcam(position) {
        let webcamCapture = webcam.video.get();
        image(webcamCapture, position.x, position.y, skeleton.grid.width, skeleton.grid.height);
    }

    draw() {
        // Row 0, Col 0: webcam image
        this.displayWebcamCapture();
        if (webcam.image) {
            // Row 0, Col 1: grayscale image & brightness +20%
            this.displayGrayScaleBrightness();

            // Row 1, Col 0-2: RGB channels
            const spliedImages = this.displayRGBChannels();

            // Row 2, Col 0-2: thresholding for RGB channels
            this.displayThresholding(spliedImages);

        }
        // Row 3, Co1 0: live webcam
        this.displayLiveWebcam(skeleton.getPosition(3, 0));
    }
}