function convertToPixel(img) {
    let w = img.width;
    let h = img.height;
    let blockSize = 5; // Define block size

    // Create a new image to store the output
    let outImage = createImage(w, h);
    outImage.loadPixels();
    img.loadPixels();

    // Loop through the image in 5x5 pixel blocks
    for (let y = 0; y < h; y += blockSize) {
        for (let x = 0; x < w; x += blockSize) {
            let totalIntensity = 0;
            let count = 0;

            // Compute average pixel intensity in the block
            for (let j = 0; j < blockSize; j++) {
                for (let i = 0; i < blockSize; i++) {
                    let px = x + i;
                    let py = y + j;
                    if (px < w && py < h) {
                        let index = (py * w + px) * 4;
                        let r = img.pixels[index];
                        let g = img.pixels[index + 1];
                        let b = img.pixels[index + 2];
                        let intensity = (r + g + b) / 3; // Convert to greyscale intensity
                        totalIntensity += intensity;
                        count++;
                    }
                }
            }

            let avePixInt = totalIntensity / count; // Calculate average intensity

            // Paint the entire block using the average intensity
            for (let j = 0; j < blockSize; j++) {
                for (let i = 0; i < blockSize; i++) {
                    let px = x + i;
                    let py = y + j;
                    if (px < w && py < h) {
                        let index = (py * w + px) * 4;
                        outImage.pixels[index] = avePixInt;
                        outImage.pixels[index + 1] = avePixInt;
                        outImage.pixels[index + 2] = avePixInt;
                        outImage.pixels[index + 3] = 255; // Set alpha to fully opaque
                    }
                }
            }
        }
    }

    outImage.updatePixels();
    return outImage;
}
