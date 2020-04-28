'use strict';

{
	const words = [
			'apple',
			'sky',
			'blue',
			'middle',
			'set',
		];
		// 小数点を切り捨てたランダムなindex番号*範囲はwordsの数
	let word;
	let loc;
	let score;
	let miss;
	// 制限時間設定=3秒 m秒の為*1000
	const timeLimit = 3 * 1000;
	let startTime;
	let isPlaing = false;

	const target = document.getElementById('target');
	const scoreLabel = document.getElementById('score');
	const missLabel = document.getElementById('miss');
	const timerLabel = document.getElementById('timer');


	function updateTarget() {
		let placeholder = '';
		// for=（変数宣言、反復の前に評価される式（true）なら繰り返し、繰り返しの最後の式（countが一般的）
		for (let i = 0; i < loc; i++) {
			placeholder += '_';
		}
		// .substring=先頭から文字数数える
		target.textContent = placeholder + word.substring(loc);
	}

	function updateTimer() {
		// 残り時間=スタート時間+制限時間-現在の時間
		const timeLeft = startTime + timeLimit - Date.now();
		// m秒なので*1000をしている為、表示の際は/1000する .toFixedで小数点以下表示設定
		timerLabel.textContent = (timeLeft / 1000).toFixed(2);

		const timeoutId = setTimeout(updateTimer, 10);

		// 残り時間が0になったら
		if (timeLeft < 0) {
			// 次のゲームが始められるようにしておく
			isPlaing = false;
			// setTimeoutの解除
			clearTimeout(timeoutId);
			timerLabel.textContent = '0.00';
			// setTimeoutでalertの処理を遅らせないと処理で画面が停止してしまいカウントダウンが止まってしまう
			setTimeout(showResult, 100);
			target.textContent = 'click to replay';
		}
	}

	function showResult() {
		// accuracy=正確さ 条件演算子=条件式(if)? trueの処理 : falseの処理
		const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;
		alert(`${score} letters, ${miss} misses, ${accuracy.toFixed(2)}% accuracy!`)
	}

	window.addEventListener('click', () => {
		// イベントが重複しないようにする
		if (isPlaing === true) {
			return;
		}
		isPlaing = true;
		loc = 0;
		score = 0;
		miss = 0;
		scoreLabel.textContent = score;
		missLabel.textContent = miss;
		word = words[Math.floor(Math.random() * words.length)];
		target.textContent = word;
		startTime = Date.now();
		updateTimer();
	});
	// windowのイベント設定 keydown=キーボード入力 (e)=アロー関数(引数)
	window.addEventListener('keydown', (e) => {
						// (戻り値)
		console.log(e.key);
		// プレイ中以外はキー入力の処理をさせない
		if (isPlaing == false) {
			return;
		}
		// もし入力キーがwordの[loc](位置/ロケーション)と同じだったら
		// 配列の[index]は配列番号、一つの文字列の[index]は文字数番号
		if(e.key === word[loc]) {
			// loc=loc+1
			loc++;
			// ロケーション=文字数が同じになったら
			if (loc === word.length) {
				word = words[Math.floor(Math.random() * words.length)];
				loc = 0;
			}
			updateTarget();
			score++;
			scoreLabel.textContent = score;
		} else {
			miss++;
			missLabel.textContent = miss;
		}
	});
}
