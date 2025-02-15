/* To reduce the memory usage, i decided split channels in the same loop */

function splitChannels(imageData) {
    let redChannel = createImage(imageData.width, imageData.height);
    let greenChannel = createImage(imageData.width, imageData.height);
    let blueChannel = createImage(imageData.width, imageData.height);

    redChannel.loadPixels();
    greenChannel.loadPixels();
    blueChannel.loadPixels();
    imageData.loadPixels();

    for (let x = 0; x < imageData.width; x++) {
        for (let y = 0; y < imageData.height; y++) {
            let index = (x + y * imageData.width) * 4;

            let r = imageData.pixels[index + 0];
            let g = imageData.pixels[index + 1];
            let b = imageData.pixels[index + 2];
            let a = imageData.pixels[index + 3]; // Alpha channel

            // Assign only the respective color channel, set others to 0
            redChannel.pixels[index + 0] = r;
            redChannel.pixels[index + 1] = 0;
            redChannel.pixels[index + 2] = 0;
            redChannel.pixels[index + 3] = a;

            greenChannel.pixels[index + 0] = 0;
            greenChannel.pixels[index + 1] = g;
            greenChannel.pixels[index + 2] = 0;
            greenChannel.pixels[index + 3] = a;

            blueChannel.pixels[index + 0] = 0;
            blueChannel.pixels[index + 1] = 0;
            blueChannel.pixels[index + 2] = b;
            blueChannel.pixels[index + 3] = a;
        }
    }

    redChannel.updatePixels();
    greenChannel.updatePixels();
    blueChannel.updatePixels();

    return [redChannel, greenChannel, blueChannel];
}
