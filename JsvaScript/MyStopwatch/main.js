'use script'

{
	const timer = document.getElementById('timer');
	const start = document.getElementById('start');
	const stop = document.getElementById('stop');
	const reset = document.getElementById('reset');

	let startTime;
	let timeoutId;
	let elapsedTime = 0;

	function countUp() {
		// 現在の時間-スタートボタンを押した時間=経過時間
		const d = new Date(Date.now() - startTime + elapsedTime);
		// .padStartで文字数設定 数字が一桁の時に'0'をいれる 文字列にしか使えない為stringで囲む
		const m = String(d.getMinutes()).padStart(2, '0');
		const s = String(d.getSeconds()).padStart(2, '0');
		const ms = String(d.getMilliseconds()).padStart(3, '0');
		timer.textContent = `${m}:${s}:${ms}`;
		// 一定時間で繰り返し(setTimeoutメソッドの効果)
		// setTimeout(() => {
		// 	countUp();
		// 	// 10ミリ秒ごとcountUp呼び出し
		// }, 10);
		timeoutId = setTimeout(countUp, 10);
	}
// buttoタグの際は.disabledでボタンの無効化設定
// 	function setButtonStateInitial() {
// 		start.disabled = false;
// 		stop.disabled = true;
// 		reset.disabled = true;
// 	}
// 	function setButtonStateRunning() {
// 		start.disabled = true;
// 		stop.disabled = false;
// 		reset.disabled = true;
// 	}
// 	function setButtonStateStopped() {
// 		start.disabled = false;
// 		stop.disabled = true;
// 		reset.disabled = false;
// 	}

// 	setButtonStateInitial()

// 	start.addEventListener('click', () => {
// 		// 基準となる現在の時間を取得
// 		setButtonStateRunning()
// 		startTime = Date.now();
// 		countUp();
// 	});

// 	stop.addEventListener('click', () => {
// 		// setTimeoutの解除メソッド timeoutId=setTimeoutになっている
// 		setButtonStateStopped()
// 		clearTimeout(timeoutId);
// 		elapsedTime += Date.now() - startTime;
// 	});

// 	reset.addEventListener('click', () => {
// 		setButtonStateInitial()
// 		timer.textContent = '00:00:000'
// 		elapsedTime = 0;
// 	});

// divタグは無効化メソッド.disabledが使えない
	function setButtonStateInitial() {
		// classList=クラスの読み取り 追加、削除をする
		start.classList.remove('inactive');
		stop.classList.add('inactive');
		reset.classList.add('inactive');
	}
	function setButtonStateRunning() {
		start.classList.add('inactive');
		stop.classList.remove('inactive');
		reset.classList.add('inactive');
	}
	function setButtonStateStopped() {
		start.classList.remove('inactive');
		stop.classList.add('inactive');
		reset.classList.remove('inactive');
	}
	start.addEventListener('click', () => {
		if (start.classList.contains('inactive') === true) {
			return;
		}
		setButtonStateRunning()
		// 基準となる現在の時間を取得
		startTime = Date.now();
		countUp();
	});

	stop.addEventListener('click', () => {
		if (stop.classList.contains('inactive') === true) {
			return;
		}
		// setTimeoutの解除メソッド timeoutId=setTimeoutになっている
		setButtonStateStopped()
		clearTimeout(timeoutId);
		elapsedTime += Date.now() - startTime;
	});

	reset.addEventListener('click', () => {
		if (reset.classList.contains('inactive') === true) {
			return;
		}
		setButtonStateInitial()
		timer.textContent = '00:00:000'
		elapsedTime = 0;
	});
}