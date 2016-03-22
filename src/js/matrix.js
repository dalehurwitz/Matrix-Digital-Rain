class Matrix {
    constructor(canvasId) {
        this.x = 300;
        this.BG_COLOUR = "#000";

        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");  
        this.setup();
        this.draw();
        
        this.x = -300;
    }

    setup() {
        this.canvas.width = this.CANVAS_WIDTH = window.innerWidth;
        this.canvas.height = this.CANVAS_HEIGHT = window.innerHeight;
        this.canvas.style.display = "block";
        this.canvas.style.backgroundColor = this.BG_COLOUR;
        this.loop();
    }

    draw() {
        this.clearCanvas();
        
        this.ctx.globalCompositeOperation = "source-over";
        
        //Draw blur
        var blur = 20;
        this.ctx.font="40px sans-serif";
        var text = "fosfoediorgoadnxasanwdoiewfwrnogoeomwd";
        var width = this.ctx.measureText(text).width + blur * 2;
        this.ctx.textBaseline = "top";
        this.ctx.shadowColor = "#00ff00";
        this.ctx.shadowOffsetX = 0;
        this.ctx.shadowOffsetY = 0;
        this.ctx.shadowBlur = blur;
        this.setFill("#fff");
        this.ctx.fillText(text, 300, 300);
        
        this.ctx.globalCompositeOperation = "source-in";
        //Draw mask
        this.ctx.shadowBlur = 0;
        var grad = this.ctx.createLinearGradient(this.x, 300, this.x+700 ,300);
        grad.addColorStop(0, 'rgba(0, 255, 0, 0)');
        grad.addColorStop(0.8, 'rgba(0, 255, 0, 1)');
        grad.addColorStop(1, 'rgba(255, 255, 255, 1)');
        this.setFill(grad);
        this.drawRect(this.x, 300, 800, 50);
        this.x+=2;
        
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
    
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
    }

    setFill(style) {
        this.ctx.fillStyle = style;
    }
}

var newMatrix = new Matrix("matrix-canvas");