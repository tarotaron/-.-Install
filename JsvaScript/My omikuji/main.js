'use strict'

{
	const btn = document.getElementById('btn');
	// イベントを呼び出す 同一のイベントに対して複数の処理が可能
	btn.addEventListener('click', () => {
		// switchで条件分岐していたものを配列に
		// const results = ['大吉', '中吉', '凶', '末吉'];
		// 大吉の確率を高くする
		// const results = ['大吉', '大吉', '大吉', '凶'];

		const n = Math.random();
		if (n < 0.05) {
			btn.textContent = '大吉';//5％
		} else if (n < 0.2) {
			btn.textContent = '中吉';//15%
		}else {
			btn.textContent = '凶'//80%
		}
		// btn.textContent = n;

		// const n = Math.floor(Math.random() * results.length);
		// btn.textContent = results[n];
		// 上2行を1行に短縮 Math.random(0以上１未満が生成）は数字指定していた所を配列の個数に指定
		// btn.textContent = results[Math.floor(Math.random() * results.length)];
		// switch (n) {
		// 	case 0:
		// 		btn.textContent = '大吉';
		// 		break;
		// 	case 1:
		// 		btn.textContent = '中吉';
		// 		break;
		// 	case 2:
		// 		btn.textContent = '凶';
		// 		break;
		// }
	});
}