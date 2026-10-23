# Face-Tracked NS-Shaft & Vision Engine

> A modular computer vision library built for university coursework, extended with a custom NS-Shaft clone that uses real-time face tracking for controls and live color-space processing for visual game state feedback.

![Language](https://img.shields.io/badge/Language-JavaScript-blue) ![Rendering](https://img.shields.io/badge/Rendering-p5.js-ed225d) ![Vision](https://img.shields.io/badge/Vision-ObjectDetect.js-brightgreen) ![Category](https://img.shields.io/badge/Project-Academic%20%2F%20Computer%20Vision-purple)

## 💡 Academic Context & Creative Extension

The core Image Processing Engine was developed to fulfill strict University of London (UoL) assignment requirements, focusing on manipulating pixel arrays and implementing custom filters from scratch. 

To satisfy the open-ended "creative" portion of the coursework, I built a playable clone of the classic NS-Shaft platformer designed specifically to consume the vision engine I had just built. This successfully demonstrated that the image-processing functions were decoupled, reusable, and optimized enough to handle real-time 60fps game loops.

## 🎮 Gameplay Integration & Engine Reuse

Instead of traditional keyboard controls, the game entirely relies on the webcam and the custom engine:

*   **Face-Tracked Controls:** The `faceDetection.js` module continuously calculates facial bounding boxes. The `InputController.js` translates the user's physical head movements (left/right) into character velocity.
*   **Dynamic Color-State Feedback:** To prove the reusability of the color space algorithms, the RGB processors (`HSVFilter.js`, `splitChannels.js`, etc.) are actively called during gameplay. When the player loses a life or takes damage, the engine dynamically applies filters (such as grayscale or specific channel isolation) to the live camera feed to visually represent the current health state.

## 🏗️ Modular Architecture

The codebase remains strictly separated by concern:
*   **`/Engine`:** The mathematical core, handling color transformations, blur convolutions, and facial feature extraction without knowing about the game UI.
*   **`/Components`:** Manages the webcam hardware bridge (`Webcam.js`) and canvas drawing operations (`Painter.js`).
*   **`/Controller`:** Acts as the bridge between the mathematical vision outputs and the NS-Shaft game state.

## 🚀 How to Run Locally

**Prerequisites:** Visual Studio Code with the "Live Server" extension installed. A working webcam is required.

1. Clone the repository:
   ```bash
   git clone [https://github.com/jeremyf2020/vision-engine-ns-shaft.git](https://github.com/jeremyf2020/vision-engine-ns-shaft.git)
