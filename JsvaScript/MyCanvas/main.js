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
		ctx.fillStyle ='pink';
		ctx.fillRect(50, 50, 50, 50);
		// 枠だけ
		ctx.strokeStyle = 'red';
		ctx.linewidth = 8;
		ctx.lineWidth = 8;
		ctx.strokeRect(50, 50, 50, 50);
	}
	draw();
}