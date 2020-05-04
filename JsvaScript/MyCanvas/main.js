'use strict';

{
	function draw() {
		const canvas = document.querySelector('canvas');
		if (typeof canvas.getContext === 'undefined') {
			return;
		}
		const ctx = canvas.getContext('2d');
		// ctx.fillRect(x, y, width, heigth);
		// 塗り潰し
		// ctx.fillStyle ='pink';
		// ctx.fillRect(50, 50, 50, 50);
		// // 枠だけ
		// ctx.strokeStyle = 'red';
		// ctx.linewidth = 8;
		// ctx.lineWidth = 8;
		// ctx.lineJoin = 'round';
		// // ctx.lineJoin = 'bevel';
		// ctx.strokeRect(50, 50, 50, 50);

		// ctx.createLinearGradient(x0, y0, x1, y1);
		// const g = ctx.createLinearGradient(0, 0, canvas.width, 0);
		// const g = ctx.createRadialGradient(
		// 	canvas.width / 2, canvas.height / 2, 50,
		// 	canvas.width / 2 + 100, canvas.height / 2 + 200, 500
		// 	);

		// g.addColorStop(0, '#f00');
		// g.addColorStop(1, '#00f');

		// ctx.fillStyle = g;

		// ctx.fillRect(0, 0, canvas.width, canvas.height);

		// ctx.shadowOffsetX = 4,
		// ctx.shadowOffsetY = 4,
		// ctx.shadowwBlur = 4,
		// ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
		// ctx.fillRect(50, 50, 50, 50);

		// ctx.beginPath();
		// ctx.moveTo(50, 50);
		// ctx.lineTo(100, 50);
		// ctx.lineTo(100, 100);
		// ctx.closePath();
		// // ctx.stroke();
		// ctx.fill();

		// ctx.beginPath();
		// ctx.moveTo(100, 50);
		// ctx.lineTo(200, 50);
		// ctx.setLineDash([5, 10]);
		// ctx.stroke();

		// ctx.beginPath();
		// ctx.moveTo(100, 100);
		// ctx.lineTo(200, 100);
		// ctx.setLineDash([]);
		// ctx.stroke();

		// ctx.beginPath();
		// ctx.moveTo(100, 150);
		// ctx.lineTo(200, 150);
		// ctx.lineWidth = 16;
		// ctx.lineCap = 'round'
		// ctx.stroke();

		ctx.beginPath();
		ctx.arc(100, 100, 0, 300 / 180 * Math.PI);
		ctx.stroke();
	}
	draw();
}