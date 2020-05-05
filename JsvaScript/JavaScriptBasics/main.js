'use strict';

{
	// const score1 = 80;
	// const score2 = 90;
	// const score3 = 40;

	const scores = [80, 90, 40];
	function sum(a, b, c) {
		console.log(a + b + c);
	}
	sum(scores);

}

{
	const numbers = [1, 4, 7, 8, 10];
	// .filter=true の配列返す
	const evenNumbers = numbers.filter(number => {
		// もし2で割り切れる数だったら
		if (number % 2 === 0) {
			return true;
		} else {
			return false;
		}
	});

	// 短くできる
	const evenNumber = numbers.filter(number => number % 2 === 0);
	console.log(evenNumbers)
}

{
	// const point = [100, 180];
	// 配列でなくオブジェクトにしてわかりやすく {}で囲む この場合は値を代入している為{}だが;をつける
	const point = {x: 100, y: 180};
	console.log(point);
}

{
		const point = {x: 100, y: 180};
		console.log(point.x)
		point.x = 120;
		console.log(point['x']);

		point.z = 90;
		delete point.y;
		console.log(point);
}

{
	const otherProps = {
		r: 4,
		color: 'red',
	};
	const point = {
		x: 100,
		y: 180,
		// スプレット構文 =の右側 配列の操作に用いる
		...otherProps,
	};
	console.log(point);
	// レスト構文 =の左側 要素を集約して一つのオブジェクトにまとめる
	const {x, r, ...others} = point;
	console.log(x);
	console.log(r);
	console.log(others);
}

{
		const point = {
		x: 100,
		y: 180,
	};
	// Object.keys()=(オブジェクト)の文字列を格納した配列で返す
	const keys = Object.keys(point);
	keys.forEach(key => {
		console.log(`key: ${key} Value: ${point[key]}`);
	});

	const points = [
		{x: 30, y: 20},
		{x: 10, y: 50},
		{x: 40, y: 40},
	];
	console.log(points[1].y);
}

{
	// let x = 1;
	// let y = x;
	// x = 5;
	// console.log(x);
	// console.log(y);

	// let x = [1, 2];
	// let y = x;
	// x[0] = 5;
	// console.log(x);
	// console.log(y);

	let x = [1, 2];
	// スプレット構文で複製
	let y = [...x];
	x[0] = 5;
	console.log(x);
	console.log(y);
}

{
	const str = 'hello!';
	console.log(str.length);
	// 文字列の部分取得
	// str.substring(開始位置、終了位置);
	console.log(str.substring(2, 4));

	console.log(str[1]);
}

{
	const d = [2019, 11, 14];
	// .join()=結合させて出力させるもの ()が間に入る
	console.log(d.join('/'));
	const t = '17:08:24';
	// .split()=文字列を分割する
	console.log(t.split(':'));
	// const [hour, minute, second] = t.split(':');
	// console.log(hour);
	// console.log(minute);
	// console.log(second);
}

{
	let sum = 0;

	const scores = [10, 3, 9];
	// scoresの合計の求め方
	scores.forEach(score => {
		sum += score;
	});

	const avg = sum / scores.length;
	console.log(sum);
	console.log(avg);
	// 小数点以下切り捨て
	console.log(Math.floor(avg));
	// 切り上げ
	console.log(Math.ceil(avg));
	// 四捨五入
	console.log(Math.round(avg));
	// 小数点３まで表示
	console.log(avg.toFixed(3));
}

{
	console.log(Math.random() * 3);
// console.log(Math.random());

	// 0, 1, 2
	// Math.floor(Math.random() * 3)
	// 0, ..., n
	// Math.floor(Math.random() * (n + 1))
	// min, ..., max
	// +1しないと未満になってしまう為
	// Math.floor(Math.random() * (max + 1 - min)) + min

	console.log(Math.floor(Math.random() * 6) + 1);
}

{
	const d = new Date();
	console.log(d);
}

{
	let i = 0;

	function showTime() {
		console.log(new Date());
		i++;
		if (i > 1) {
			clearInterval(intervalId);
		}
	}
	// 指定した間隔で定期的に関数を実行 setTimeout指定時間経過後一度実行
	const intervalId = setInterval(showTime, 1000);
}

{
	const posts = [
		{
			text: 'JavaScriptの勉強中・・・',
			likeCount: 0,
			show() {
		console.log(`${this.text} - ${this.likeCount}いいね`);
	}
		},
		{
			text: 'プリグラミング楽しい！',
			likeCount: 0,
		},
	];

	show(posts[0]);
}

















