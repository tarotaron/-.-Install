'use strict'

{
	class Panel {
		constructor() {
			this.el = document.createElement('li');
			this.el.classList.add('pressed');
			this.el.addEventListener('click', () => {
				this.check();
			});
		}
		getEl() {
			return this.el;
		}

		activate(num) {
			this.el.classList.remove('pressed')
			this.el.textContent = num;
		}

		check() {
			// parseInt=文字列を整数(10進数)に変換する関数(文字列,　進数)
			if (currentNum === parseInt(this.el.textContent, 10)) {
				this.el.classList.add('pressed');
				currentNum++;

				if(currentNum === 4) {
					clearTimeout(timeoutId);
				}

			}
		}
	}
	class Board {
		constructor() {
			this.panels = [];
			for (let i = 0; i < 4; i++) {
				this.panels.push(new Panel());
			}
			this.setup();
		}
		setup() {
			const board = document.getElementById('board');
			this.panels.forEach(panel => {
				// board.appendChild(panel.el);
				board.appendChild(panel.getEl());
			});
		}
		activate() {
			const nums = [0, 1, 2, 3];
			this.panels.forEach(panel => {
				// splice=(スタート地点,取り除く個数指定)
				const num = nums.splice(Math.floor(Math.random() * nums.length), 1)[0];
				console.log(num)
				panel.activate(num);
			});
		}
	}

	function runTimer() {
		const timer = document.getElementById('timer');
		timer.textContent = ((Date.now() - startTime) / 1000).toFixed(2);

		timeoutId = setTimeout(() => {
			runTimer();
		}, 10);
	}

	const board = new Board();

	let currentNum =0;
	let startTime;
	let timeoutId;

	const btn = document.getElementById('btn');
	btn.addEventListener('click', () => {
		board.activate();
		startTime = Date.now();
		runTimer();
	});
}