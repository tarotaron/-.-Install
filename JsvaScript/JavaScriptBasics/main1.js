'use strict';

{
	function update() {
		// document.querySelector('#target').textContent = 'Chaged!';
		document.getElementById('target').textContent = 'Chaged!';
	}

	setTimeout(update, 1000);
}

{
	function update() {
		// querySelector=見つかった最初の要素のみ
		// document.querySelector('p').textContent = 'Chaged!';
		// querySelectorAll=全ての対象
		// document.querySelectorAll('p').textContent = 'Chaged!';
		// 配列指定
		// document.querySelectorAll('p')[2].textContent = 'Chaged!';
		document.querySelectorAll('p').forEach((p, index) => {
			p.textContent = `${index}番目のpです`;
		});
	}

	setTimeout(update, 1000);
}