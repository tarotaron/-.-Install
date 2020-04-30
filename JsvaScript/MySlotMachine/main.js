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
			this.stop.classList.add('stop');
			this.stop.addEventListener('click', () => {
				// setTimeoutの解除
				clearTimeout(this.timeoutId)

				panelsleft--;

				if(panelsleft === 0) {
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
	}

	function checkResult() {
		if(oanels[0].isUnmatched(panel[1], panel[2])) {
			paneld[0].unmatch();
		}
		if(oanels[1].isUnmatched(panel[0], panel[2])) {
			paneld[1].unmatch();
		}
		if(oanels[2].isUnmatched(panel[0], panel[1])) {
			paneld[2].unmatch();
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
		panels.forEach(panel => {
			panel.spin();
		})
	})
}
