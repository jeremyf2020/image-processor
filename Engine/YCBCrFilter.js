function convertToYCbCr(img) {
    let newImg = createImage(img.width, img.height);
    newImg.loadPixels();
    img.loadPixels();

    for (let i = 0; i < img.pixels.length; i += 4) {
        let r = img.pixels[i] / 255.0;
        let g = img.pixels[i + 1] / 255.0;
        let b = img.pixels[i + 2] / 255.0;

        // Step 1: Apply gamma correction (as per Kodak PhotoYCC)
        let R1 = r > 0.018 ? 1.099 * Math.pow(r, 0.45) - 0.099 : 4.5 * r;
        let G1 = g > 0.018 ? 1.099 * Math.pow(g, 0.45) - 0.099 : 4.5 * g;
        let B1 = b > 0.018 ? 1.099 * Math.pow(b, 0.45) - 0.099 : 4.5 * b;

        // Step 2: Compute YCC components
        let Luma = 0.299 * R1 + 0.587 * G1 + 0.114 * B1;
        let Chroma1 = -0.299 * R1 - 0.587 * G1 + 0.886 * B1;
        let Chroma2 = 0.701 * R1 - 0.587 * G1 - 0.114 * B1;

        // Step 3: Convert to 8-bit integers
        let Luma8bit = (255 / 1.402) * Luma;
        let Chroma1_8bit = 111.40 * Chroma1 + 156;
        let Chroma2_8bit = 135.64 * Chroma2 + 137;

        // Store results in pixels
        newImg.pixels[i] = constrain(Luma8bit, 0, 255);
        newImg.pixels[i + 1] = constrain(Chroma1_8bit, 0, 255);
        newImg.pixels[i + 2] = constrain(Chroma2_8bit, 0, 255);
        newImg.pixels[i + 3] = 255; // Alpha
    }

    newImg.updatePixels();
    return newImg;

}
