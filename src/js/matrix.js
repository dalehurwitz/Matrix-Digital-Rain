global.ndarray = require("ndarray");

global.arr = ndarray(new Int8Array([1, 2, 3, 4, 5, 6]), [3,2]);

var nx = arr.shape[0];
var ny = arr.shape[1];

for(var i = 0; i < ny; ++i) {
    var output = "";
    for(var j = 0; j < nx; ++j) {
        var val = arr.get(i,j);
        output = output + (val + " ");
    }
    console.log(output);
}

class Matrix {
    constructor(canvasId) {

        this.BG_COLOUR = "#000";

        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        this.setup();
        this.draw();
    }

    setup() {
        this.canvas.width = this.CANVAS_WIDTH = window.innerWidth;
        this.canvas.height = this.CANVAS_HEIGHT = window.innerHeight;
        this.canvas.style.display = "block";
        this.canvas.style.backgroundColor = this.BG_COLOUR;
        this.loop();
    }

    draw() {

    }

    update() {

    }

    loop() {
        this.update();
        this.draw();
        window.requestAnimationFrame(this.loop.bind(this));
    }

    drawRect(x, y, w, h, fill) {
        this.setFill(fill);
        this.ctx.fillRect(x, y, w, h);
    }

    setFill(style) {
        this.ctx.fillStyle = style;
    }
}

var newMatrix = new Matrix("matrix-canvas");