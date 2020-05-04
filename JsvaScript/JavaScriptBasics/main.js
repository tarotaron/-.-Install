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
}