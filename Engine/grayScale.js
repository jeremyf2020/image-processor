function convertToGrayScale(imageData) {
    let convertedImg = createImage(imageData.width, imageData.height);
    convertedImg.loadPixels();
    imageData.loadPixels();

    for (let x = 0; x < convertedImg.width; x++) {
        for (let y = 0; y < convertedImg.height; y++) {

            const index = (x + y * convertedImg.width) * 4;

            const r = imageData.pixels[index + 0];
            const g = imageData.pixels[index + 1];
            const b = imageData.pixels[index + 2];

            const gray = r * 0.299 + g * 0.587 + b * 0.114; // LUMA ratios 
            const brightGrey = increaseBrightness(gray);

            convertedImg.pixels[index + 0] = convertedImg.pixels[index + 1] = convertedImg.pixels[index + 2] = brightGrey;
            convertedImg.pixels[index + 3] = 255;
        }
    }
    convertedImg.updatePixels();
    return convertedImg;
}

function increaseBrightness(grayValue) {
    let brightGrey = grayValue * 1.2; // Increase brightness by 20%
    return Math.min(255, brightGrey); // Clamp value to a max of 255
}