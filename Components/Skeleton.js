class Skeleton {
    constructor(cols, rows) {
        this.columns = cols;
        this.rows = rows;
        this.gap = 10;
        this.grid = {
            width: 160,
            height: 120
        };
        this.width = this.grid.width * this.columns + this.gap * (this.columns - 1);
        this.height = this.grid.height * this.rows + this.gap * (this.rows - 1);
        this.nextStartX = (window.innerWidth - this.width) / 2;
        this.nextStartY = 0;
        this.additionMargin = 0;
    }

    getPosition(row, col) {
        return {
            x: this.nextStartX + this.grid.width * col + this.gap * col,
            y: this.nextStartY + this.grid.height * row + this.gap * (row + 1) + this.additionMargin
        }
    }

    addBottomMargin(margin) {
        this.additionMargin += margin;
    }

    // displayWebcamCapture() {
    //     if (webcam.on) {
    //         // show the live webcam
    //         let webcamImage = video.get();
    //         image(webcamImage, this.getPosition(0, 0).x, this.getPosition(0, 0).y, this.grid.width, this.grid.height);
    //         // create a button to capture the webcam image
    //         let captureButton = createButton('Capture');
    //         let btnPos = skeleton.getPosition(0, 0); // Get position for button
    //         captureButton.position(btnPos.x, btnPos.y + this.grid.height);
    //         captureButton.mousePressed(() => {
    //             webcam.capture(); // Capture image when clicked
    //         });
    //     }
    //     else {
    //         image(webcam.image, this.getPosition(0, 0).x, this.getPosition(0, 0).y, this.grid.width, this.grid.height);
    //     }
    // }

    // displayGrayScaleBrightness() {
    //     // check if webcam image is captured
    //     if (!webcam.image) return;
    //     // convert to grayscale and increase brightness by 20%
    //     let grayScaleImage = convertToGrayScale(webcam.image);
    //     // display the grayscale & inceased brightness image
    //     image(grayScaleImage, this.getPosition(0, 1).x, this.getPosition(0, 1).y, this.grid.width, this.grid.height);
    // }

    // displayRGBChannels() {
    //     const spliedImages = splitChannels(webcam.image);
    //     image(spliedImages[0], this.getPosition(1, 0).x, this.getPosition(1, 0).y, this.grid.width, this.grid.height);
    //     image(spliedImages[1], this.getPosition(1, 1).x, this.getPosition(1, 1).y, this.grid.width, this.grid.height);
    //     image(spliedImages[2], this.getPosition(1, 2).x, this.getPosition(1, 2).y, this.grid.width, this.grid.height);
    //     return spliedImages;
    // }

    // displayThresholding(splittedImages) {
    //     // Create sliders dynamically if they don’t exist
    //     if (!this.redSlider) {
    //         this.redSlider = createSlider(0, 255, 128);
    //         this.redSlider.position(10, height + 10);
    //     }
    //     if (!this.greenSlider) {
    //         this.greenSlider = createSlider(0, 255, 128);
    //         this.greenSlider.position(10, height + 40);
    //     }
    //     if (!this.blueSlider) {
    //         this.blueSlider = createSlider(0, 255, 128);
    //         this.blueSlider.position(10, height + 70);
    //     }

    //     // Get slider values
    //     let redThreshold = this.redSlider.value();
    //     let greenThreshold = this.greenSlider.value();
    //     let blueThreshold = this.blueSlider.value();

    //     // Apply thresholding to each channel
    //     let redThresholded = convertToThreshold(splittedImages[0], redThreshold);
    //     let greenThresholded = convertToThreshold(splittedImages[1], greenThreshold);
    //     let blueThresholded = convertToThreshold(splittedImages[2], blueThreshold);

    //     // Display thresholded images in the grid
    //     image(redThresholded, this.getPosition(2, 0).x, this.getPosition(2, 0).y, this.grid.width, this.grid.height);
    //     image(greenThresholded, this.getPosition(2, 1).x, this.getPosition(2, 1).y, this.grid.width, this.grid.height);
    //     image(blueThresholded, this.getPosition(2, 2).x, this.getPosition(2, 2).y, this.grid.width, this.grid.height);
    // }

    // draw() {
    //     // Row 0, Col 0: webcam image
    //     this.displayWebcamCapture();

    //     if (!webcam.image) return;

    //     // Row 0, Col 1: grayscale image & brightness +20%
    //     this.displayGrayScaleBrightness();
    //     // Row 1, Col 0-2: RGB channels
    //     const spliedImages = this.displayRGBChannels();
    //     // Row 2, Col 0-2: thresholding for RGB channels
    //     this.displayThresholding(spliedImages);
    // }
};