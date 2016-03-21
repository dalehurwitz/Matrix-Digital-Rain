"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Matrix = function () {
	var Matrix = function () {
		function Matrix(canvasId) {
			_classCallCheck(this, Matrix);

			this.BG_COLOUR = "#000";

			this.canvas = document.getElementById(canvasId);
			this.ctx = this.canvas.getContext("2d");
			this.setup();
			this.draw();
		}

		_createClass(Matrix, [{
			key: "setup",
			value: function setup() {
				this.canvas.width = this.CANVAS_WIDTH = window.innerWidth;
				this.canvas.height = this.CANVAS_HEIGHT = window.innerHeight;
				this.canvas.style.display = "block";
				this.canvas.style.backgroundColor = this.BG_COLOUR;
				this.loop();
			}
		}, {
			key: "draw",
			value: function draw() {}
		}, {
			key: "update",
			value: function update() {}
		}, {
			key: "loop",
			value: function loop() {
				this.update();
				this.draw();
				window.requestAnimationFrame(this.loop.bind(this));
			}
		}, {
			key: "drawRect",
			value: function drawRect(x, y, w, h, fill) {
				this.setFill(fill);
				this.ctx.fillRect(x, y, w, h);
			}
		}, {
			key: "setFill",
			value: function setFill(style) {
				this.ctx.fillStyle = style;
			}
		}]);

		return Matrix;
	}();

	return Matrix;
}();

var newMatrix = new Matrix("matrix-canvas");