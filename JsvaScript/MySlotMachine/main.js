'use strict';

{
	// panelという空のインスタンス作成
	class Panel {
		// インスタンスの定義
		constructor() {
			const section = document.createElement('secton');
			section.classList.add('panel');
			// それぞれのインスタンスで変わる値はthis.をつける
			this.img = document.createElement('img');
			this.img.src = this.getRandomImage();

			this.timeoutId = undefined;

			this.stop = document.createElement('div');
			this.stop.textContent = 'STOP';
			this.stop.classList.add('stop', 'inactive');
			this.stop.addEventListener('click', () => {
				if (this.stop.classList.contains('inactive')) {
					return
				}
				this.stop.classList.add('inactive');
				// setTimeoutの解除
				clearTimeout(this.timeoutId)

				panelsleft--;

				if(panelsleft === 0) {
					spin.classList.remove('inactive');
					panelsleft === 3;
					checkResult();
				}
			});


			section.appendChild(this.img);
			section.appendChild(this.stop);

			const main = document.querySelector('main');
			main.appendChild(section);
		}

		getRandomImage() {
			const images = [
			'img/seven.png',
			'img/bell.png',
			'img/cherry.png',
			];
			// imagesの配列の数だけリターンを返す
			return images[Math.floor(Math.random() * images.length)]
		};

		spin() {
			this.img.src = this.getRandomImage();
			this.timeoutId =setTimeout(() => {
				this.spin();
			}, 50);
		}
		isUnmatched(p1, p2) {
			// if (this.img.src !==p1.img.src && this.img.src) {
			// 	return true;
			// } else {
			// 	return false;
			// }
			return this.img.src !==p1.img.src && this.img.src !==p2.img.src;
		}

		unmatch() {
			this.img.classList.add('unmatchd');
		}

		activete() {
			this.stop.classList.remove('inactive');
			this.img.classList.remove('unmatchd');
		}
	}

	function checkResult() {
		if(panels[0].isUnmatched(panels[1], panels[2])) {
			panels[0].unmatch();
		}
		if(panels[1].isUnmatched(panels[0], panels[2])) {
			panels[1].unmatch();
		}
		if(panels[2].isUnmatched(panels[0], panels[1])) {
			panels[2].unmatch();
		}
	}
	const panels = [
		new Panel(),
		new Panel(),
		new Panel(),
	];
	// 止まっていないパネル
	let panelsleft = 3;

	const spin = document.getElementById('spin')
	spin.addEventListener('click', () => {
		if(spin.classList.contains('inactive')) {
			return
		}
		spin.classList.add('inactive');
		panels.forEach(panel => {
			panel.activete();
			panel.spin();
		})
	})
}
