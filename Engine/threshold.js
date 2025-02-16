function convertToThreshold(imageData, threshold) {
    let convertedImg = createImage(imageData.width, imageData.height);
    convertedImg.loadPixels();
    imageData.loadPixels();

    for (let x = 0; x < convertedImg.width; x++) {
        for (let y = 0; y < convertedImg.height; y++) {

            const index = (x + y * convertedImg.width) * 4;

            const r = imageData.pixels[index + 0];
            const g = imageData.pixels[index + 1];
            const b = imageData.pixels[index + 2];

            // const bright = (r + g + b) / 3; 
            const bright = 0.3 * r + 0.59 * g + 0.11 * b; // LUMA ratios

            if (bright > threshold) {
                convertedImg.pixels[index + 0] = 255;
                convertedImg.pixels[index + 1] = 255;
                convertedImg.pixels[index + 2] = 255;
                convertedImg.pixels[index + 3] = 255;
            } else {
                convertedImg.pixels[index + 0] = 0;
                convertedImg.pixels[index + 1] = 0;
                convertedImg.pixels[index + 2] = 0;
                convertedImg.pixels[index + 3] = 255;
            }
        }
    }
    convertedImg.updatePixels();
    return convertedImg;

}

