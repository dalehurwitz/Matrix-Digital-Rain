const Matrix = (() => {
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
	
	return Matrix;
})();

var newMatrix = new Matrix("matrix-canvas");