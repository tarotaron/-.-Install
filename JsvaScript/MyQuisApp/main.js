'use strict'

{
	const question = document.getElementById('question');
	const choices = document.getElementById('choices');
	const btn = document.getElementById('btn');
	const result = document.getElementById('result');
	const scoreLabel = document.querySelector('#result > p');

	const quizSet = shuffle([
		{q: 'Whas is A?', c: ['A0', 'A1', 'A2']},
		{q: 'Whas is B?', c: ['B0', 'B1', 'B2']},
		{q: 'Whas is C?', c: ['C0', 'C1', 'C2']},
	]);
	let currentNum = 0;
	let isAnswerd;
	let score = 0;

							// (一つの配列)
	function shuffle(arr) {
		// for=条件指定ループ(初期値;条件値;増減値) forEach=配列ループ
		// i=arrの数 index番号は0からの為-1,0より大きい,i=i-1
		for(let i = arr.length - 1; i > 0; i--) {
			// j=入れ替えるランダムに選ぶ数 * (0~範囲) index番号に合わせ−1している為＋1する
			const j = Math.floor(Math.random() * (i +1));
			// 分割代入=i,jに入っている値を交換できる
			[arr[j], arr[i]] = [arr[i], arr[j]];
		}
		return arr;
	}

	function checkAnswer(li) {
		// if(isAnswerd === true) {↓と同様
		if(isAnswerd) {
			return;
		}
		isAnswerd = true;

		if (li.textContent === quizSet[currentNum].c[0]) {
			li.classList.add('correct');
			score++;
		} else {
			li.classList.add('wrong');
		}

		btn.classList.remove('disabled');
	}

	function setQuiz() {
		isAnswerd = false;
			// currentNumで０番目のqに書き換える
	question.textContent = quizSet[currentNum].q;
	// 条件つきループ処理 (choicesにある最初の子要素)がfalse,nillでない限りループ
	while(choices.firstChild) {
		choices.removeChild(choices.firstChild);
	}

	// ...=スプレッド構文 配列の複製 複製したものをシャッフルしないと答えが変わってしまう
	const shuffledChoices = shuffle([...quizSet[currentNum].c]);
	// currentNumで0番目のcを一つ一つchoiceに格納し処理
	shuffledChoices.forEach(choice => {
		// document.createElement=liタグ追加
		const li = document.createElement('li');
		li.textContent = choice;
		li.addEventListener('click', () => {
			checkAnswer(li);
		})
		// choices(親要素)の閉じタグ直前に入る
		choices.appendChild(li);
	});

		if (currentNum === quizSet.length - 1) {
			btn.textContent = 'Show Score'
		}
	}

	setQuiz();

	btn.addEventListener('click', () => {
		// .contains=文字列検索 boolean 無効クラスがついていたらNectをclickできないようにする
		if (btn.classList.contains('disabled')) {
			return;
		}
		btn.classList.add('disabled');

		if (currentNum === quizSet.length - 1) {
			result.classList.remove('hidden');
			scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`
		} else {
			currentNum++;
		setQuiz();
		}
	});
}