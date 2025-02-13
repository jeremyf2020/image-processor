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
    }

    getPosition(row, col) {
        return {
            x: this.nextStartX + this.grid.width * col + this.gap * col,
            y: this.nextStartY + this.grid.height * row + this.gap * (row + 1)
        }
    }

    draw() {
        // Row 0, Col 0: webcam image
        let webcamImage = video.get();
        image(webcamImage, this.getPosition(0, 0).x, this.getPosition(0, 0).y, this.grid.width, this.grid.height);
    }
};