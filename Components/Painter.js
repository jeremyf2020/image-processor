class Painter {
    init() {
        let captureButton = createButton('Capture');
        let btnPos = skeleton.getPosition(0, 0);
        captureButton.position(btnPos.x, btnPos.y + skeleton.grid.height);
        captureButton.mousePressed(() => {
            webcam.capture(); // Capture image when clicked
        });
    }

    displayWebcamCapture() {
        const position = skeleton.getPosition(0, 0);
        if (webcam.on) {
            // show the live webcam
            let webcamCapture = video.get();
            image(webcamCapture, position.x, position.y, skeleton.grid.width, skeleton.grid.height);
        }
        else {
            image(webcam.image, position.x, position.y, skeleton.grid.width, skeleton.grid.height);
        }
    }

    // displayGrayScaleBrightness() {
    //     // check if webcam image is captured
    //     if (!webcam.image) return;
    //     // convert to grayscale and increase brightness by 20%
    //     let grayScaleImage = convertToGrayScale(webcam.image);
    //     // display the grayscale & inceased brightness image
    //     image(grayScaleImage, this.getPosition(0, 1).x, this.getPosition(0, 1).y, this.grid.width, this.grid.height);
    // }


    draw() {
        // Row 0, Col 0: webcam image
        this.displayWebcamCapture();

        // if (!webcam.image) return;

        // // Row 0, Col 1: grayscale image & brightness +20%
        // this.displayGrayScaleBrightness();
        // // Row 1, Col 0-2: RGB channels
        // const spliedImages = this.displayRGBChannels();
        // // Row 2, Col 0-2: thresholding for RGB channels
        // this.displayThresholding(spliedImages);
    }
}