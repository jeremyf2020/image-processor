function convertToHSV(img) {
    let newImg = createImage(img.width, img.height);
    newImg.loadPixels();
    img.loadPixels();

    for (let i = 0; i < img.pixels.length; i += 4) {
        let r = img.pixels[i] / 255.0;
        let g = img.pixels[i + 1] / 255.0;
        let b = img.pixels[i + 2] / 255.0;

        // Step 1: Compute Cmax, Cmin, and Delta
        let Cmax = Math.max(r, g, b);
        let Cmin = Math.min(r, g, b);
        let delta = Cmax - Cmin;

        let H, S, V;

        // Step 2: Compute Hue (H) using PDF formula
        if (delta == 0) {
            H = 0; // Undefined, set to 0 for grayscale
        } else if (Cmax == r && g == Cmin) {
            H = 60 * (b + 5);
        } else if (Cmax == r && g != Cmin) {
            H = 60 * (1 - g);
        } else if (Cmax == g && b == Cmin) {
            H = 60 * (r + 1);
        } else if (Cmax == g && b != Cmin) {
            H = 60 * (3 - b);
        } else if (Cmax == b && r == Cmin) {
            H = 60 * (3 + g);
        } else {
            H = 60 * (5 - r);
        }

        // Step 3: Compute Saturation (S)
        S = Cmax == 0 ? 0 : delta / Cmax;

        // Step 4: Compute Value (V)
        V = Cmax;

        // Convert to 8-bit format
        let H_8bit = (H / 360) * 255;
        let S_8bit = S * 255;
        let V_8bit = V * 255;

        // Store values in new image
        newImg.pixels[i] = H_8bit;
        newImg.pixels[i + 1] = S_8bit;
        newImg.pixels[i + 2] = V_8bit;
        newImg.pixels[i + 3] = 255; // Alpha
    }

    newImg.updatePixels();
    return newImg;

}
